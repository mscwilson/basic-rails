Rails.application.routes.draw do
  root "colours#index"
  get "colours/index"
  get "colours/light"
  get "colours/dark"
  get "colours/about"

  get "home/index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
