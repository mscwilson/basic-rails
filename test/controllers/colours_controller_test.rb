require "test_helper"

class ColoursControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get colours_index_url
    assert_response :success
  end

  test "should get light" do
    get colours_light_url
    assert_response :success
  end

  test "should get dark" do
    get colours_dark_url
    assert_response :success
  end
end
