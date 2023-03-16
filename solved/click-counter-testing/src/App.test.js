import App from './App'
import { shallow } from 'enzyme'

const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
  const wrapper = setup()
})

// Test 2: Write a test that checks if the button within the `App` component renders properly.
it("App Component Renders a Button", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")


  expect(button.length).toBe(1)
})

// Test 3: Write a test which checks if the counter starts at 0.
it("Counter Starts At 0", () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, "count").text()

  expect(count).toBe("0")
})

// Test 4: Write a test which checks if the increment button increase the count.
it("Clicking Increment Button Increases Counter Display", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")

  button.simulate('click')

  const count = findByTestAttr(wrapper, "count").text()

  expect(count).toBe('1')
})

// Test 5: Write a test which checks to see if the counter display renders properly.
it("App Component Renders the Counter Display", () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, "counter-display")

  expect(counterDisplay.length).toBe(1)
})

// Test 6: Write a test for a decrement button
it('App Component Renders a Decrement Button', () => {
  const wrapper = setup()

  const button = findByTestAttr(wrapper, "decrement-button")

  button.simulate('click')

  const count = findByTestAttr(wrapper, "count").text()

  expect(count).toBe('0')
})

// Test 7: Write a test which will not allow the counter to go below 0 and display an error message
it('Count is Unable to go Below Zero and Throws Error', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "decrement-button")
  button.simulate('click')
  const errorMessage = findByTestAttr(wrapper, "error-message").text()



  expect(errorMessage).toEqual('The counter can not go below zero')
})

// Test 8: Clear the error message on Increment
it("Decrement Error Message Clears When Count Increment Higher than 0", () => {
  const wrapper = setup()
  const errorMessage = findByTestAttr(wrapper, "error-message").text()
  const button = findByTestAttr(wrapper, "increment-button")

  button.simulate('click')
  expect(errorMessage).toEqual('')
})