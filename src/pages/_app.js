import Script from 'next/script';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Layout>
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
