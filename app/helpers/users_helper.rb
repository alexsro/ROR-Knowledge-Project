module UsersHelper

  def user_params(params)
    params.require(:user).permit(:name, :email, :password) 
  end

end
