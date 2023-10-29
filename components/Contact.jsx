import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
<<<<<<< HEAD
        <h1 className='text-2xl font-bold text-center p-4'>Lets work together</h1>
=======
        <h1 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h1>
>>>>>>> f4ca0224826918d33150ae4018a91e5329bebb8f
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  );
}

export default Contact;
