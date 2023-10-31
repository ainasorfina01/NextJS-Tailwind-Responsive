import React from 'react';
import IgImg1 from '../public/IMG_7084.PNG';
import IgImg2 from '../public/IMG_2511.jpg';
import IgImg3 from '../public/IMG_5237.jpg';
import IgImg4 from '../public/IMG_5240.jpg';
import IgImg5 from '../public/4A57EE18-636A-4E34-A333-C527846A079D.jpg';
import IgImg6 from '../public/IMG_7071.PNG';
import IgImg7 from '../public/IMG_4604.jpg';
import IgImg8 from '../public/IMG_2764.jpg';
import IgImg9 from '../public/IMG_7067.PNG';
import IgImg10 from '../public/IMG_4697.jpg';
import IgImg11 from '../public/IMG_7077.PNG';
import IgImg12 from '../public/IMG_4284.jpg';
import IgImg13 from '../public/IMG_5588.jpg';
import IgImg14 from '../public/IMG_5114.jpg';
import IgImg15 from '../public/IMG_6498.PNG';
import IgImg16 from '../public/IMG_4394.jpg';
import IgImg17 from '../public/IMG_7078.PNG';
import IgImg18 from '../public/IMG_7074.PNG';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@aina_sorfina</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
            <InstagramImg socialImg={IgImg7} />
            <InstagramImg socialImg={IgImg8} />
            <InstagramImg socialImg={IgImg9} />
            <InstagramImg socialImg={IgImg10} />
            <InstagramImg socialImg={IgImg11} />
            <InstagramImg socialImg={IgImg12} />
            <InstagramImg socialImg={IgImg13} />
            <InstagramImg socialImg={IgImg14} />
            <InstagramImg socialImg={IgImg15} />
            <InstagramImg socialImg={IgImg16} />
            <InstagramImg socialImg={IgImg17} />
            <InstagramImg socialImg={IgImg18} />
   
        </div>
    </div>
  )
}

export default Instagram
