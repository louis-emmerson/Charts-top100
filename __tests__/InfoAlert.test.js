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

  return screen.findByRole("button").then((button) => {
    expect(button).toHaveTextContent("Show all albums")

    return screen.findByText("No Results Found").then((text) => {
      expect(text).toBeInTheDocument()
    })
  })
})

test("loads and displays custom greeting", () => {
  render(
    <SearchContext.Provider value={SearchContext}>
      <InfoAlert infoMsg="This is the custom message" />
    </SearchContext.Provider>
  )

  return screen.findByText("This is the custom message").then((text) => {
    expect(text).toBeInTheDocument()
  })
})

test("button has appropriate aria attributes", () => {
  render(
    <SearchContext.Provider value={{}}>
      <InfoAlert />
    </SearchContext.Provider>
  )

  return screen.findByRole("button").then((button) => {
    expect(button).toHaveAttribute("aria-label", "Show all albums")
  })
})
