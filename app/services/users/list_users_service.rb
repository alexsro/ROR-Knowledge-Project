class ListUsersService < ApplicationService

  def execute
    return User.all
  end

  private

end