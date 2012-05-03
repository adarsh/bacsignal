Bacsignal::Application.routes.draw do
  get "main/index"
  root :to => 'main#index'

  resources :dishes, only: [:index]
end
