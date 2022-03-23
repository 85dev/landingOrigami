Rails.application.routes.draw do

  require "sidekiq/web"
  mount Sidekiq::Web => "/sidekiq"

  post '/subscribe_newsletter', to: 'users#create', as: :subscribe
  post '/subscribe_helper', to: 'users#create_helper', as: :subscribe_helper

  root to: 'pages#home'
end
