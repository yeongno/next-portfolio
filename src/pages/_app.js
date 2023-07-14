import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import wrapper from '../../store/configureStore'

const App=({ Component, pageProps }) => {
    return (
  <ThemeProvider attribute='class'>
  <Component {...pageProps} />

  </ThemeProvider>
  )
}

export default wrapper.withRedux(App);
