require 'rails_helper'

RSpec.feature "displaying colours", type: :feature do

  scenario "on index page" do
    visit "/colours/index"
    expect(page).to have_text "What's your favourite colour right now?"
  end

  scenario "moving between pages" do
    visit "/colours/index"
    click_link "lighter"
    expect(current_path).to eq "/colours/light"

    click_link "darker"
    expect(current_path).to eq "/colours/index"

    click_link "darker"
    expect(current_path).to eq "/colours/dark"
  end

  scenario "choosing a bright colour", js: true do
    visit "/colours/index"
    find(".yellow").click
    expect(page).to have_content "Yellow"
  end

  scenario "choosing a pale colour", js: true do
    visit "/colours/light"
    find(".yellow").click
    expect(page).to have_content "Pale yellow"
  end
end
