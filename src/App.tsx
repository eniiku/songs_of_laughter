import Navbar from './container/Navbar';

const App = () => {
  return (
    <div className='bg-bgWhite px-4 md:px-8 lg:px-16 text-textBlack'>
      <Navbar />

      {/* Home Section */}

      <div
        id='home'
        className='w-full min-h-[90vh] md:min-h-[70vh] lg:min-h-[90vh] lg:my-2 relative grid items-center lg:justify-start z-0'
      >
        <div className='absolute inset-0 lg:inset-auto lg:-right-16 lg:top-0 lg:w-[70vw] lg:h-[90vh] -z-10
          bg-[url(/src/assets/packaging.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white bg-opacity-10'>
        </div>

        <div className='my-auto text-center lg:text-left lg:pt-[100px]'>
          <h1 className='font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl mb-3'>
            Rebuilding Lives:
          </h1>

          <p className='text-base md:text-lg lg:text-xl w-[85%] lg:w-2/3 mb-3 lg:mb-4 leading-[1.5] lg:leading-[165%] mx-auto lg:mx-0'>
            Supporting Widows, Divorcees, and Homeless Women on the Road to
            Self-Sufficiency
          </p>

          <div className='flex gap-4 justify-center items-center lg:justify-start'>
            <button
              className='px-6 lg:px-8 py-3 lg:py-4 rounded-full font-space font-bold lg:bg-[#125A71] text-[#125A71] 
            lg:text-textWhite bg-textWhite'
            >
              <a href='#donate' className='text-lg lg:text-xl'>
                Donate Now
              </a>
            </button>

            <button>
              <a
                href='#about'
                className='underline underline-offset-4 text-base lg:text-lg font-medium opacity-60 hover:opacity-100 text-textBlack'
              >
                See more >
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Section */}

      <div
        className='text-center my-16 md:my-24 lg:my-32 bg-indigo-500 -mx-4 md:-mx-8 lg:-mx-16 p-4 pt-8 md:p-8 md:pt-12 lg:p-16 lg:pt-24 radial-gradient
        text-textWhite'
      >
        <q className='font-zilla font-bold text-2xl md:text-4xl leading-[1.1] md:leading-[1.2] lg:leading-[1.3] lg:text-[52px]'>
          It’s our duty to love the unloved, help the helpless and bring hope to
          the hopeless
        </q>

        <p className='font-montserrat font-medium text-sm md:text-base lg:text-2xl text-right mt-2 md:mt-4 lg:mt-6'>
          - Anthony Douglas Williams
        </p>
      </div>

      {/* About Section */}

      <div
        id='about'
        className='grid md:grid-cols-2 min-h-[80vh] lg:min-h-screen my-16 md:my-24 lg:my-32'
      >
        <div className='my-auto text-center md:text-left'>
          <h1 className='font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.25]'>
            About Our Company
          </h1>

          <p className='text-base md:text-lg lg:text-xl leading-[1.9] lg:leading-[1.8] w-[85%] mx-auto md:mx-0 lg:mx-0 sm:text-left'>
          We're a team of passionate individuals dedicated to empowering orphans, street children, widows, single mothers, and the disabled through support and education. 
          Our goal is to break the cycle of poverty and create brighter futures.<br/> 
          We believe in the power of education and are committed to making a difference, one person at a time, whether it's through our school programs or vocational training initiatives.<br/>
          We're always on the lookout for ways to expand our reach and make an even bigger impact. That's why we're so grateful for your support - whether you're donating your time, money, or simply spreading the word about our mission.
          Every little bit makes a difference, and we couldn't do what we do without you. <br/>
          Let's work together and make a real difference.
          </p>
        </div>

        <div className='w-full h-full hidden md:block bg-[url(/src/assets/pack.jpg)] bg-cover bg-no-repeat bg-center bg-blend-overlay bg-white bg-opacity-10'></div>
      </div>

      {/* What We Do Section */}

      <div id='what-we-do' className='min-h-screen md:min-h-[80vh] lg:min-h-screen text-center my-16 md:my-28 lg:my-32'>
        <h1 className='font-montserrat font-bold text-4xl md:text-5xl lg:text-[64px]'>
          What We Do
        </h1>

        <div className='w-full grid md:grid-cols-3 gap-8 lg:gap-6 mt-8 md:mt-16 lg:mt-8'>
          {[
            {
              title: 'Providing Support to Members of Society',
              text: "Our primary focus is to reach out to and support orphans, street children, widows, single mothers, and the disabled. We believe that everyone deserves the chance to live a safe, happy, and fulfilling life, and it's our mission to help make that a reality for as many people as possible.",
            },
            {
              title: 'Education for a Brighter Future',
              text: "We believe that education is the key to breaking the cycle of poverty and building a better future. That's why we're dedicated to providing educational resources and opportunities to those in need. Whether it's through our school programs or vocational training initiatives, we're committed to empowering people to achieve their full potential.",
            },
            {
              title: 'Making a Difference',
              text: "We couldn't do what we do without the support of people like you. Whether you're donating your time, money, or simply spreading the word about our mission, your support makes a real difference in the lives of those who need it most. So, take a look around our website and see how you can get involved. Together, we can make a real impact and build a brighter future for all.",
            },
          ].map((cardItem, index) => (
            <div key={cardItem.title} className='w-full'>
              <div className='font-libre text-lg md:text-xl lg:text-2xl text-center rounded-full py-3 md:py-4 lg:py-5 px-5 md:px-6 lg:px-7 bg-slate-400 w-fit mx-auto'>
                {index + 1}
              </div>

              <h1 className='font-space font-bold text-xl md:text-2xl lg:text-[32px] mb-2 md:mb-3 lg:mb-4 mt-3 lg:mt-6 lg:leading-[1.3]'>
                {cardItem.title}
              </h1>

              <p className='text-base md:text-lg lg:text-xl leading-[1.8] lg:leading-[1.7] w-[95%] lg:w-auto mx-auto lg:mx-0'>
                {cardItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TODO: center donation cards */}
      {/* Donate Section */}
      <div id="donate" className='min-h-screen md:min-h-[80vh] mb-16 md:mb-20 lg:mb-24 grid place-content-center'>
        <div className='text-center mb-8 md:mb-12 lg:mb-16'>
          <h1 className='font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-3'>
            Select your donation
          </h1>

          <p className='text-lg md:text-xl lg:text-lg mx-auto w-[90%] lg:w-[85%]'>
          "A small act of kindness can change a life forever." Join us in making a positive impact in the lives of those who need it the most.
            Your donation can help provide them with the resources and education they need to build a brighter future. 
            Make a difference today and donate to our cause. Thank you for your support.
          </p>
        </div>

        <div className='w-full grid md:grid-cols-3 justify-evenly gap-8'>
          {[
            { price: 10, priceText: 'Worth feed for 2 people in Africa' },
            { price: 50, priceText: 'Worth feed for 10 people in Africa' },
          ].map((cardItem) => (
            <div
              key={cardItem.price}
              className='relative md:w-[80%] w-[70%] bg-white shadow-xl'
            >
              <div className='w-full h-1 md:h-2 absolute top-0 bg-[#125A71]'></div>

              <div className='px-4 py-3'>
                <div className='mt-4'>
                  <h1 className='font-libre font-bold text-3xl md:text-4xl'>{`$${cardItem.price}`}</h1>
                  <p className='text-sm md:text-base lg:text-lg my-2 md:my-3'>
                    {cardItem.priceText}
                  </p>
                </div>

                <button
                  className='font-space font-bold text-textWhite bg-[#125A71] py-2 md:px-5 px-4 rounded-full md:text-xl
                  text-sm'
                >
                  Donate
                </button>
              </div>
            </div>
          ))}

          <div className='relative lg:w-[80%] w-[70%] bg-white shadow-xl'>
            <div className='w-full h-1 md:h-2 absolute top-0 bg-[#125A71]'></div>

            <div className='px-4 py-3 my-4'>
              <h1 className='font-libre font-bold text-3xl md:text-4xl'>
                Custom
              </h1>

              <form
                className='mt-4 overflow-hidden flex gap-2 border-b border-b-textBlack text-xl
                my-3'
              >
                <label
                  htmlFor='customPrice'
                  className='py-1 font-libre font-bold opacity-50'
                >
                  $
                </label>
                <input
                  type='text'
                  name='custom'
                  placeholder='100'
                  className='font-libre bg-transparent py-1 w-fit active:border-none'
                />
              </form>

              <button
                className='font-space font-bold text-textWhite bg-[#125A71] py-2 md:px-5 px-4 rounded-full md:text-xl
                  text-sm'
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}

      <div id="contact" className='min-h-screen grid lg:grid-cols-2 gap-8 mb-8 mb:mb-16 lg:mb-24'>
        <div className='my-auto text-center lg:text-left'>
          <h1 className='font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.2]'>
            Want to get involved? Contact us today.
          </h1>
          <div className='text-lg md:text-xl lg:leading-[2] leading-[1.6]'>
            <p className='w-[90%] lg:w-[80%] mx-auto lg:mx-0'>
            "The greatest good you can do for another is not just share your riches, but reveal to them their own." 
            <br/>Join us in making a difference in the lives of those in need.
            By volunteering or reaching out to us, you have the power to change someone's life for the better.
            Whether it's through your time, skills, or resources, every little bit counts. 
            <br/>So, why not make a difference today and become a part of our mission to empower in need with education and support.
            The world needs more people like you.
            </p>

            <div className='mt-4 hidden lg:block'>
              <p><span className="font-medium text-xl md:text-[22px]">Phone:</span>{' '}+(234)8011223344</p>
              <p><span className="font-medium text-xl text-[22px]">Email:</span>{' '} sourceoflaughter21@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* FIXME: change padding on form, style text in form */}
        {/* TODO: add placeholder text for form */}

        <form className='border border-textBlack p-8 flex flex-col justify-between'>
          {[
            { label: 'name', type: 'text' },
            { label: 'email', type: 'email' },
            { label: 'subject', type: 'text' },
          ].map((formDetails) => (
            <div key={formDetails.label}>
              <label
                htmlFor={formDetails.label}
                className='w-full capitalize text-lg lg:text-xl'
              >
                {formDetails.label}
              </label>

              <input
                type={formDetails.type}
                id={formDetails.label}
                className='w-full my-4 bg-transparent border border-textBlack py-2 lg:py-3 px-2 lg:px-3'
              />
            </div>
          ))}

          <div>
            <label htmlFor='message' className='w-full capitalize text-lg lg:text-xl'>
              Message
            </label>
            <textarea
              id='message'
              className='w-full min-h-[150px] my-4 md:my-6 bg-transparent border border-textBlack py-2 lg:py-3 px-2 lg:px-3'
            ></textarea>
          </div>

          <button
            type='submit'
            className='px-6 lg:px-8 py-3 lg:py-4 font-space font-bold bg-[#125A71] text-textWhite text-lg lg:text-xl w-fit'
          >
            Donate Now
          </button>
        </form>

        <div className='mt-4 text-lg leading-[1.6] md:hidden'>
          <p>Phone: +(234) 8011223344</p>
          <p>Email: johndoe@gmail.com</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className='grid lg:grid-cols-2 gap-4 py-6 md:py-12 lg:py-16'>
        <div className="md:grid grid-cols-2 lg:block">
          <div className='mb-2 lg:mb-6 font-poppins hidden md:block'>
            <h1 className='mb-2 font-bold text-3xl lg:text-4xl'>LOGO</h1>

            <p className='font-medium text-sm lg:text-base opacity-60'>
              &copy; 2022. All Rights Resevered
            </p>
          </div>

          <div>
            <h1 className='font-montserrat font-bold text-lg lg:text-xl'>Follow Us</h1>
            <ul className='flex gap-2 font-space text-base opacity-70'>
              <li>FB</li>
              <li>IG</li>
              <li>TW</li>
            </ul>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 grid-cols-2 gap-6 lg:gap-4'>
          {/* Footer Nav Links */}

          {[
            {
              title: 'Navigation',
              links: [{text:'home', link: 'home'}, {text:'about',link:"about"}, {text:'what we do', link: "what-we-do"},{text: 'donate', link: "donate"}, {text:'get involved', link: "contact"}],
            },
          ].map((navItem) => (
            <div key={navItem.title}>
              <h1 className='font-bold font-space text-base md:text-lg lg:text-xl mb-2 lg:mb-4'>
                {navItem.title}
              </h1>

              <ul className='flex flex-col gap-2 lg:gap-4 font-poppins font-medium text-base md:text-lg lg:text-xl'>
                {navItem.links.map((footerLinks) => (
                  <li key={footerLinks.text}>
                    <button>
                      <a
                        href={`#${footerLinks.link}`}
                        className='capitalize opacity-70 hover:opacity-100 hover:font-bold'
                      >
                        {footerLinks.text}
                      </a>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Other Footer Links */}

          {[
            {
              title: 'Help',
              links: ['FAQ', 'Terms of Use', 'Privacy Policy'],
            },
            {
              title: 'Contact',
              links: ['+(234)8011223344', 'johndoe@gmail.com'],
            },
          ].map((footerItem) => (
            <div key={footerItem.title}>
              <h1 className='font-bold font-space text-base md:text-lg lg:text-xl mb-2 lg:mb-4'>
                {footerItem.title}
              </h1>

              <ul className='flex flex-col gap-2 lg:gap-4 font-poppins font-medium text-base md:text-lg lg:text-xl opacity-70'>
                {footerItem.links.map((footerLinks) => (
                  <li key={footerLinks}>{footerLinks}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='font-medium text-sm md:text-base mt-2 opacity-70 text-center lg:hidden'>
          &copy; 2022. All Rights Resevered
        </p>
      </footer>
    </div>
  );
};

export default App;
