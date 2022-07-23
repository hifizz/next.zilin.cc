import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {Fragment} from 'react';
import {MDXLayout} from '../components/MDXLayout';

function MyApp({Component, pageProps}: AppProps) {
  const {pathname} = useRouter();
  const Wrapper = pathname.includes('/posts')
    ? MDXLayout
    : Fragment;
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
