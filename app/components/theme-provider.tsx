"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: any;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}

