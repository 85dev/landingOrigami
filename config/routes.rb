Rails.application.routes.draw do

  require "sidekiq/web"
  mount Sidekiq::Web => "/sidekiq"

  resources :users, only: [:create]

  root to: 'pages#home'
  get '/tester', to: 'pages#tester'
end
