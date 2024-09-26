import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function DefaultLayout() {
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#FFFFFF',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <header className="sticky top-0 z-[999]">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
