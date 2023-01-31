class UsersRepository < ApplicationRepository
  def find_all()
    User.all
  end

  def find_by_id(user_id)
    User.find (id: user_id)
  end

  def find_by_email(user_email)
    User.find (email: user_email)
  end

  def create(user_params)
    return User.new(users_params)
  end

  def update
    
  end

  def delete(user)
    user.destroy
  end
end