import React from "react"
import { LightThemeProvider } from "../src/common/style/ThemeProvider"

const ThemeDecorator = storyFn => (
  <LightThemeProvider>
    {storyFn()}
  </LightThemeProvider>
)

export default ThemeDecorator