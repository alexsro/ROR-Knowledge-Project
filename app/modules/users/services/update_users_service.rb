class UpdateUsersService < ApplicationService
  require 'users_helper'


  def execute(params)
    user = users_repository.find_by_id(params[:id])
  end

  private

  def users_repository
    @users_repository ||= UsersRepository.new
  end

end