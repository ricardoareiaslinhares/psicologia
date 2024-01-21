"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ThemeToggle() {
  const {theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === "light") setTheme("dark")
    if (theme === "dark") setTheme("light")
    console.log(theme, "tema")
  }


  return (

        <Button variant="outline" size="icon" onClick={handleTheme}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Mudar Tema</span>
        </Button>

  )
}
