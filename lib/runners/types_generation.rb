Rails.application.eager_load!
models = ActiveRecord::Base.descendants.reject { |i| i.abstract_class? || i.name.include?('::')  }

belongs_to = true
has_many = true
base_path = "app/javascript/types/"

conversions = {
  "string" => "string",
  "inet" => "string",
  "text" => "string",
  "json" => "Record<string, any>",
  "jsonb" => "Record<string, any>",
  "binary" => "string",
  "integer" => "number",
  "bigint" => "number",
  "float" => "number",
  "decimal" => "number",
  "boolean" => "boolean",
  "date" => "string",
  "datetime" => "string",
  "timestamp" => "string",
  "datetime_with_timezone" => "string",
}
models.each { |model|
  type_template = ""
  name = model.model_name.singular.camelcase

  columns = model.columns.map { |i|
    type = conversions[i.type.to_s]
    if (enum = model.defined_enums[i.name])
      type = enum.keys.map { |k| "'#{k}'" }.join(" | ")
    end

    {
      name: i.name,
      ts_type: i.null ? "#{type} | null" : type
    }
  }

  model.reflect_on_all_associations.select(&:collection?).each { |collection|
    target = collection.compute_class(collection.class_name).model_name.singular.camelcase

    columns << {
      name: "#{collection.name}?",
      ts_type: "#{target}[]"
    }
  } if has_many
  model.reflect_on_all_associations.select(&:has_one?).each { |collection|
    target = collection.compute_class(collection.class_name).model_name.singular.camelcase

    columns << {
      name: "#{collection.name}?",
      ts_type: target
    }
  } if has_many

  model.reflect_on_all_associations.select(&:belongs_to?).reject(&:polymorphic?).each { |collection|
    target = collection.compute_class(collection.class_name).model_name.singular.camelcase

    columns << {
      name: "#{collection.name}?",
      ts_type: target } } if belongs_to

  type_template = <<~TYPESCRIPT
    export default interface #{name} {
    #{columns.map { |column| "  #{column[:name]}: #{column[:ts_type]}; " }.join("\n")}
    }
  TYPESCRIPT
  Dir.mkdir("#{base_path}#{name}") if !File.directory?("#{base_path}#{name}")
  File.open("#{base_path}#{name}/I#{name}.ts", "w").puts(type_template)
}