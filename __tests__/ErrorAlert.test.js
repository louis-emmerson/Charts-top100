/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import ErrorAlert from "../src/components/ErrorAlert"
import React from "react"
import "@testing-library/jest-dom"

describe("Error Alert Tests", () => {
  test("should load and return the default error message", () => {
    render(<ErrorAlert />)

    const error = screen.getByText("There has been an error")

    expect(error).toBeInTheDocument()
  })

  test("loads and returns the custom error message", () => {
    render(<ErrorAlert errorMsg="This is an error message" />)

    const error = screen.getByTestId("error-alert")

    expect(error).toHaveTextContent("This is an error message");
    expect(error).toBeInTheDocument()
  })
  
})
