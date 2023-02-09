class FindUsersService < ApplicationService

  def execute(user_id)
    return users_repository.find_by_id(user_id)
  end

  private

  def users_repository
    @users_repository ||= UsersRepository.new
  end

end