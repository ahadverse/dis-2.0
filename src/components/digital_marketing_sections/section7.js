import React from "react";

const Section7 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Email Marketing Services
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Email marketing is a famous and influential way to promote a business
          by sending commercial messages to the targeted audience. Every
          business owner needs email marketing. Because email marketing has many
          advantages, such as being cost-effective, you can promote your
          business to the targeted audience through email marketing, achieving
          high DIS, increasing brand awareness, etc.
          <br />
          <br />
          &quot;Content is King&quot; - This is a prevalent saying. If you want
          to reach your goal, you must input quality content; otherwise, it is
          impossible to reach the goal. You should always provide informative
          content, so the audience gets the correct answer to their desired
          question. You should always provide fresh and authentic content that
          meets the user&apos;s query; the content has some variety, such as
          blog content, service content, product content, video content, social
          media content, etc. The main goal of content marketing is to increase
          traffic, and conversion, build brand awareness, etc.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img className='w-full' src='/digital7.webp' alt='Email Marketing' />
      </div>
    </div>
  );
};

export default Section7;
