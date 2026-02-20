import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Deals_cards = () => {
  const plans = [
    {
      title: "Local",
      title2: " Business",
      subtitle: "Suitable For Local & Small Business",
      price: "$99/m",
      originalPrice: "$199/m",
      discount: "Save -$100",
      features: [
        "Up to 8-10 Pages",
        "Theme-Based Design",
        "Shared Hosting",
        "Website Maintenance",
        "SSL Certificate for Enhanced Website Security",
        "Built With WordPress",
        "Increased Performance & Site Security",
        "Unlimited Bug Fixes",
        "Technical Support",
        "Easy Task Management Tool Access",
        "Essential Premium Plugins for Added Functionality",
        "30 Days of Unlimited Revisions",
      ],
    },
    {
      title: "Startups",
      subtitle: "Suitable for New Businesses with Visions",
      price: "$299/m",
      originalPrice: "$499/m",
      discount: "Save -$200",
      features: [
        "Up to 20-25 Pages",
        "UX/UI Designed",
        "Built with WordPress, Webflow, and Wix",
        "Fast and Secure Web Hosting",
        "Content Planning for Clear Messaging",
        "Interactive Lottie Animations",
        "On-Page SEO",
        "Google Search Console & Analytics Setup",
        "Sitemap Submission for Indexing",
        "Website Speed Optimization",
        "Security & Maintenance",
        "Technical Support",
        "Business Development Consultation",
        "2-3 Months of Delivery Time",
      ],
    },
    {
      title: "Shop ",
      title2: "Launcher",
      subtitle: "Suitable for Businesses that Seek Online Store",
      price: "$499/m",
      originalPrice: "$699/m",
      discount: "Save -$200",
      features: [
        "Built with Shopify/WooCommerce",
        "Theme-Based Design",
        "Upload Up To 100 Products",
        "Image Resizing and Content Updates",
        "Integration of One Payment Gateway Plugin",
        "Loading Speed Optimization",
        "Free Task Manager Access For Easy Communication",
        "Seamless Maintenance",
        "1.5-2.5 Months of Delivery Time",
      ],
    },
  ];
  return (
    <div
      className='my-10 py-6 '
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <p
        className='text-[#DB355B] text-5xl mt-16 font-bold capitalize text-center'
        data-aos='fade-up'
      >
        Our Value Deals
      </p>
      <p
        className='text-red-600 font-bold text-center w-full sm:w-6/12 m-auto mt-3 px-4'
        data-aos='fade-up'
      >
        Each plan gives great value, ensuring you get the quality and service
        you deserve at a price that&apos;s easy on your wallet.
      </p>
      <div className='xl:w-[1200px] w-11/12 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-4'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='relative group w-full xl:w-[380px] h-auto sm:h-[680px] p-6 bg-white rounded-lg transform transition duration-300 ease-in-out    bg-auto bg-repeat bg-right'
            data-aos='fade-up'
          >
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='text-3xl font-bold text-gray-800'>
                  {plan.title}
                </h3>
                <h3 className='text-3xl font-bold text-gray-800'>
                  {plan.title2}
                </h3>
              </div>
              <p className='text-green-600 font-semibold mb-4'>
                {plan.discount}
              </p>
            </div>

            <p className='text-sm text-gray-500 mb-4'>{plan.subtitle}</p>
            <div className='mb-3'>
              <span className='text-3xl font-extrabold text-indigo-600'>
                {plan.price}
              </span>
              <span className='line-through text-gray-400 text-sm ml-2'>
                {plan.originalPrice}
              </span>
            </div>
            <button className='text-2xl hover:bg-white hover:text-[#0997e9] border border-white hover:border-[#0997e9] flex items-center w-full gap-5 rounded-r-[50px] duration-500 mb-5 bg-[#0997e9] text-white sm:px-12 px-5 py-2'>
              Subscribe{" "}
              <FaArrowRight className='group-hover:ml-20  ease-in duration-300' />
            </button>

            <ul className='text-gray-700 space-y-1  mb-6'>
              {plan.features.map((feature, idx) => (
                <li key={idx} className='flex items-center'>
                  <svg
                    className='h-5 w-5 text-green-500 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals_cards;
