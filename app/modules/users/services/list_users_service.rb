class ListUsersService < ApplicationService

  def execute
    return users_repository.find_all
  end

  private

  def users_repository
    @users_repository ||= UsersRepository.new
  end

end