class CreateUsersService < ApplicationService

  def execute(users_params = nil)
    return users_repository.create(users_params)
  end

  private

  def users_repository
    @users_repository ||= UsersRepository.new
  end

end