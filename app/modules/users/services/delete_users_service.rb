class DeleteUsersService < ApplicationService

  def execute(user_id)
    user = users_repository.find_by_id(user_id)
    users_repository.delete(user)
  end

  private

  def users_repository
    @users_repository ||= UsersRepository.new
  end

end