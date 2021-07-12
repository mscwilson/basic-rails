require 'rails_helper'

RSpec.feature "displaying colours", type: :feature do

  scenario "on index page" do
    visit "/colours/index"
    expect(page).to have_text "What's your favourite colour right now?"
  end

  scenario "clicking on a colour"
end
