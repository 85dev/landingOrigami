class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    UserMailer.with(user: @user).welcome_email.deliver_later  if @user.save
    respond_to do |format|
      format.js
    end
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end
end
