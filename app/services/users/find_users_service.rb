class FindUsersService < ApplicationService

  def execute(user_id)
    return User.find_by_id user_id
  end

end