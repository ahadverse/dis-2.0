import React from "react";

const Section1 = () => {
  return (
    <div
      className='flex flex-col-reverse sm:flex-row w-full max-w-[1200px] m-auto justify-between items-center gap-6 px-4'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Social Media Marketing Strategies
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          DMS is the best social media marketing service agency for small,
          medium, and large businesses. We got reputations all around the Globe
          because we are working in this field for around 12 years. We are
          committed to our customers to provide a high return on Investment (
          ROI ). That is why you should rely on us without any hesitation.
          <br />
          <br />
          Social media marketing is one of the best and quickest ways to drive
          traffic to a website. Nowadays, People use social networks to keep in
          touch with each other. The research found that 4.8 billion people
          worldwide are actively using social media, including Facebook,
          Twitter, Pinterest, LinkedIn, etc. Social media marketing is an
          authentic way to drive traffic to your website through social media.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/smm1.webp' className='w-full' />
      </div>
    </div>
  );
};

export default Section1;
