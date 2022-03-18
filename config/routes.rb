Rails.application.routes.draw do

  require "sidekiq/web"
  mount Sidekiq::Web => "/sidekiq"

  resources :users, only: [:create]

  root to: 'pages#home'
  get to: 'pages#tester'
end
