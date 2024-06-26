import { globalStyles } from "@/styles/global";
import Image from 'next/image'
import type { AppProps } from "next/app";

import logoImg from '@/assets/logo.svg'
import { Header, Container } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
      <Image src={logoImg} alt=""/>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
