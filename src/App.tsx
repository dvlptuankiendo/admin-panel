import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Button } from "@mui/material"

function App() {
  const the = useAppStore()
  return (
    <Button
      color="primary"
      variant="contained"
      className="bg-red-500"
    >
      Check
    </Button>
  )
}

export default App
