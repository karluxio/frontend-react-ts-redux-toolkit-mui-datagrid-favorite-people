import { Grid } from '@mui/material'
import { FC, ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      width="100%"
      display="flex"
      margin="auto"
      sx={{ width: { xs: "100%", sm: "80%" }, m: { xs: "100px 0", sm: "100px auto 0" } }}
    >
      {children}
    </Grid>
  )
}