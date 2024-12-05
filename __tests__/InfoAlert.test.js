/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import InfoAlert from "../src/components/InfoAlert"
import React from "react"
import { SearchContext } from "../src/context"

test("loads and displays default greeting and button", () => {
  // ARRANGE
  render(
    <SearchContext.Provider value={SearchContext}>
      <InfoAlert />
    </SearchContext.Provider>
  )

  const button = screen.getByRole("button")
  expect(button).toHaveTextContent("Show all albums")

  const message = screen.getByText("No Results Found")
  expect(message).toBeInTheDocument()
})

test("loads and displays custom greeting", () => {
  render(
    <SearchContext.Provider value={SearchContext}>
      <InfoAlert infoMsg="This is the custom message" />
    </SearchContext.Provider>
  )

  const customMessage = screen.getByText("This is the custom message")
  expect(customMessage).toBeInTheDocument()
})

test("button has appropriate aria attributes", () => {
  render(
    <SearchContext.Provider value={{}}>
      <InfoAlert />
    </SearchContext.Provider>
  )

  const button = screen.getByRole("button")

  expect(button).toHaveAttribute("aria-label", "Show all albums")
})
