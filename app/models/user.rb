class User < ApplicationRecord
  default_scope { select(User.column_names - ["password"]) }
end
