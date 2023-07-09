import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import scrollBar from "../styles/scrollBar.css"

export default function App({ Component, pageProps }) {

  return (
  <ThemeProvider attribute='class'>
  <Component {...pageProps} />

  </ThemeProvider>
  )
}
