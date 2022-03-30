class User < ApplicationRecord

  # validates :email, uniqueness: true, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
