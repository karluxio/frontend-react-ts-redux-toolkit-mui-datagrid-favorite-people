import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { blackTheme } from './blackTheme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}