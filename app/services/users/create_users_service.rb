class CreateUsersService < ApplicationService

  def execute(users_params = nil)
    return User.new(users_params)
  end

end