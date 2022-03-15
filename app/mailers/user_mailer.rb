class UserMailer < ApplicationMailer
  default from: 'contact@origami-app.fr'

  def welcome_email
    @user = params[:user]
    mail(to: @user.email, subject: "Bienvenue dans l'aventure Origami")
  end
end
