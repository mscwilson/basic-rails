require "rails_helper"

RSpec.describe "Colours", type: :request do
  describe "GET colours" do
    it "index page" do
      get colours_index_path
      expect(response).to have_http_status(200)
    end

    it "light page" do
      get colours_light_path
      expect(response).to have_http_status(200)
    end

    it "dark page" do
      get colours_dark_path
      expect(response).to have_http_status(200)
    end

    it "about page" do
      get colours_about_path
      expect(response).to have_http_status(200)
    end
  end
end
