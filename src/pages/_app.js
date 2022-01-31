import Script from 'next/script';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
      /> */}
      <Script
        type="text/javascript"
        src="https://unpkg.com/swiper@7/swiper-bundle.min.js"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
