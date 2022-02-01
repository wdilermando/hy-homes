import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
      /> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
