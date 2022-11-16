import React from "react";
import { render } from "@testing-library/react"
import Header from "./Header"

describe("<Header />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<Header />, div)
    })
})