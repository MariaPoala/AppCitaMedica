import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import AxLayout from '../components/layout/ax_layout';
import Panel from '../components/form/panel';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Panel></Panel>
      <Component {...pageProps} />
    </>
  )
}