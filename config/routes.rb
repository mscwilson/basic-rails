Rails.application.routes.draw do
  get 'colours/index'
  get 'colours/light'
  get 'colours/dark'
  root "home#index"

  get 'home/index'
  get 'home/colours'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
