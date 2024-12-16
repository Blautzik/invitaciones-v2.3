import "../styles/globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import '../styles/accordion.css'
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
