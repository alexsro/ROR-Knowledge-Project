class DeleteUsersService < ApplicationService

  def execute(user_id)
    user = find_users_service.execute(user_id)
    user.destroy
  end

  private

  def find_users_service
    @find_users_service ||= FindUsersService.new
  end

end