Given /^I have enabled location on my browser$/ do
  visit '/'
  within("header") { page.should have_content("BacSignal") }
end
