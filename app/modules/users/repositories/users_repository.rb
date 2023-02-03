class UsersRepository < ApplicationRepository
  def find_all()
    User.all
  end

  def find_by_id(user_id)
    User.find_by_id(user_id)
  end

  def find_by_email(user_email)
    User.find_by(email: user_email)
  end

  def create(user_params)
    User.new(users_params)
  end

  def update(user)
    User.save!
  end

  def delete(user)
    user.destroy
  end
end