import Head from 'next/head';

import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AS Captur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='favicon.ico' />

      </Head>
      <Hero heading='Aina Sorfina' message='Adventures, Appetite, and Academics.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
