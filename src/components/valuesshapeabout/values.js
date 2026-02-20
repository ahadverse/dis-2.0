import React from "react";
import Calender_Modal from "../calendermodal/calendermodal";

const Values = () => {
  return (
    <div className='my-12 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-2xl md:text-4xl text-center font-bold'>
          What Values Shape Our Path Forward?
        </h1>
        <h2 className='text-center text-sm md:text-lg font-semibold mt-4 max-w-3xl mx-auto'>
          We push the limits of creativity to be the best web developers,
          setting up norms that aim to impact everything we do positively.
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-lg overflow-hidden'>
            <img src='/value/1.jpg' className='w-full h-64 object-cover' />
          </div>

          <div className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-[#E0F2FE] border shadow-lg'>
            <img
              src='/value1.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4'>Integrity</h1>
            <p className='text-base'>
              It’s about being transparent, honest, and fair, whether we’re
              interacting with clients, partners, or our team.
            </p>
          </div>

          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-lg overflow-hidden'>
            <img src='/value/2.jpg' className='w-full h-64 object-cover' />
          </div>

          <div className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-[#E0F2FE] border shadow-lg'>
            <img
              src='/value2.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4'>Innovation</h1>
            <p className='text-base'>
              Our passion for innovation drives us to constantly challenge the
              status quo and push technological boundaries.
            </p>
          </div>

          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-lg overflow-hidden'>
            <img src='/value/3.png' className='w-full h-64 object-cover' />
          </div>

          <div className='w-full max-w-sm mx-auto rounded-3xl p-6 bg-[#E0F2FE] border shadow-lg'>
            <img
              src='/value3.png'
              className='rounded-3xl mx-auto w-24 h-24 object-contain'
            />
            <h1 className='text-xl font-bold my-4'>Impact</h1>
            <p className='text-base'>
              From boosting our clients online presence to driving business
              growth, our focus is on achieving tangible results that make a
              real difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
