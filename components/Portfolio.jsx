import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[900px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Random Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='/public/Background_home.jpg'
            alt='/'
            layout='responsive'
            width='900'
            height='1300'
          /> @ National Art Museum
        </div>
        <div className='w-full h-full'>
          <Image
            src='/public/IMG_7082.PNG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
          @ Monster. A Garden Cat Cafe
        </div>
        <div className='w-full h-full'>
          <Image
            src='/public/IMG_7065.PNG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
          Threshing paddy - separate rice grains from the stalks
        </div>
        <div className='w-full h-full'>
          <Image
            src='/public/IMG_6490.PNG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
          Harvesting Kelulut Honey
        </div>
        <div className='w-full h-full'>
          <Image
            src='/public/IMG_7051.PNG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
          Bioimage & Analysis class
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
