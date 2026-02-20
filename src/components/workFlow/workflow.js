import React from "react";

const Workflow = () => {
  return (
    <div className='py-12 md:py-16 bg-[#E0F2FE] px-4 sm:px-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
        Digital IT Solutions WorkFlow
      </h1>
      <p className='text-base md:text-lg text-center mt-4 max-w-2xl mx-auto'>
        Trying to make the process as simple as ordering a takeout, we've put
        together the game plan that'll get the ball rolling, and design a
        website in no time.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mt-8 md:mt-10'>
        <div className='p-4 md:p-6 text-center'>
          <img
            src='/web6.png'
            className='mx-auto w-32 md:w-40 h-auto object-contain'
          />
          <h1 className='text-lg md:text-xl font-semibold my-3'>
            Consultation & Planning
          </h1>
          <p className='text-sm md:text-base'>
            The brainstorming session with clients that helps our WebDevs
            pinpoint the roles and goals the websites fulfills for their
            business.
          </p>
        </div>
        <div className='p-4 md:p-6 text-center'>
          <img
            src='/web7.png'
            className='mx-auto w-32 md:w-40 h-auto object-contain'
          />
          <h1 className='text-lg md:text-xl font-semibold my-3'>
            Design & Prototype
          </h1>
          <p className='text-sm md:text-base'>
            Creating wireframes and designs of the entire website, and checking
            with clients to determine the right design, method, and function.
          </p>
        </div>
        <div className='p-4 md:p-6 text-center'>
          <img
            src='/web8.png'
            className='mx-auto w-32 md:w-40 h-auto object-contain'
          />
          <h1 className='text-lg md:text-xl font-semibold my-3'>Development</h1>
          <p className='text-sm md:text-base'>
            Putting the pieces together, and creating the website design, and
            filling in with texts and images that brings the whole project
            together.
          </p>
        </div>
        <div className='p-4 md:p-6 text-center'>
          <img
            src='/web9.png'
            className='mx-auto w-32 md:w-40 h-auto object-contain'
          />
          <h1 className='text-lg md:text-xl font-semibold my-3'>
            Testing & Launch
          </h1>
          <p className='text-sm md:text-base'>
            A little online test drive that we do right before the final launch
            which allows us to measure the overall functionality the website
            fulfills.
          </p>
        </div>
        <div className='p-4 md:p-6 text-center'>
          <img
            src='/web10.png'
            className='mx-auto w-32 md:w-40 h-auto object-contain'
          />
          <h1 className='text-lg md:text-xl font-semibold my-3'>
            Post-Launch Support
          </h1>
          <p className='text-sm md:text-base'>
            Updating Content & Metrics to ensure the website is updated with all
            the spices it needs to make an impact online for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
