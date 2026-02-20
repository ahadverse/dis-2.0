import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black py-10 mt-20 bg-[url('/footer.gif')] bg-center bg-cover bg-no-repeat">
      <div className='xl:w-[1200px] w-11/12 mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 gap-8 px-6'>
        {/* Contact Us Section */}
        <div>
          <h4 className='text-lg  text-black mb-4 font-bold'>Contact Us</h4>
          <p className='mb-2 text-md'>
            <strong>AUS Address:</strong>
            <br />
            59 Marshall St, Cobar NSW 2835
            <br />
            <span className='block mt-1 text-sm'>AU: +61 483 955 567</span>
          </p>
          <p className='mb-4 text-sm'>
            <strong>US Address:</strong>
            <br />
            8000 BAYMEADOWS cir E, Apt# 22, Jacksonville, FL 32256 , USA
            <br />
            <span className='block mt-1 text-sm'>US: +1 (347) 656-3882</span>
          </p>
        </div>
        <div>
          <p>
            <strong className='mb-1 text-lg'>Drop us a line:</strong>
            <br />

            <a
              href='mailto:ziaulhaquecpa@gmail.com'
              className='text-black hover:underline'
            >
              ziaulhaquecpa@gmail.com
            </a>
            <br />

            <a
              href='mailto:disprivateltd@gmail.com'
              className='text-black hover:underline'
            >
              disprivateltd@gmail.com
            </a>
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className='text-lg font-bold text-black mb-1'>Services</h4>
          <ul className='space-y-1'>
            <li>E-commerce Web Development</li>
            <li>Business Web Development</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

        {/* Important Links and Company */}
        <div>
          <h4 className='text-lg font-bold text-black mb-1'>Important Links</h4>
          <ul className='space-y-2'>
            <li>
              <a href='/terms' className='text-black hover:underline'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='/privacy-policy' className='text-black hover:underline'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-bold text-black  mb-1'>Company</h4>
          <ul className='space-y-1'>
            <li>
              <a href='/about' className='text-black hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='/portfolios' className='text-black hover:underline'>
                Portfolios
              </a>
            </li>

            <li>
              <a href='#' className='text-black hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='border-t mt-6  border-gray-700' />
      {/* Bottom Footer */}
      <div className='mt-3 xl:w-[1200px] w-11/12 text-md m-auto  pt-3 flex justify-between text-center '>
        <p>
          &copy; {new Date().getFullYear()} DIS Private LTD. All rights
          reserved.
        </p>
        <p>
          Design and Develop By{" "}
          <Link
            href={"https://ahad-hossain.netlify.app/"}
            className='text-blue-600'
          >
            Ahad Hossain
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
