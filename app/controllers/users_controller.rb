class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    UserMailer.with(user: @user).welcome_email.deliver_later if @user.save
    redirect_to root_path
  end

  def create_helper
    @user = User.new(user_params)
    # User
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end
end
