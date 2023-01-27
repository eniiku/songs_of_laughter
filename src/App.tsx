import Navbar from './container/Navbar';

const App = () => {
  return (
    <div className='bg-bgWhite px-4 md:px-8 lg:px-16 text-textBlack'>
      <Navbar />

      {/* Home Section */}

      <div
        id='home'
        className='w-full min-h-[90vh] md:min-h-[70vh] relative grid items-center lg:justify-start z-0'
      >
        <div className='absolute inset-0 lg:-right-16 lg:top-0 lg:w-[70vw] lg:h-[90vh] bg-[#125A71] -z-10'></div>

        <div className='my-auto text-center'>
          <h1 className='font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl mb-3'>
            Rebuilding Lives:
          </h1>

          <p className='text-base md:text-lg lg:text-xl w-[85%] lg:w-2/3 mb-3 lg:mb-4 leading-[1.5] lg:leading-[165%] mx-auto'>
            Supporting Widows, Divorcees, and Homeless Women on the Road to
            Self-Sufficiency
          </p>

          <div className='flex gap-4 justify-center items-center'>
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

          <p className='text-base md:text-lg lg:text-xl leading-[2] w-[85%] mx-auto md:mx-0 lg:mx-0'>
            Lorem ipsum dolor sit amet consectetur. Laoreet sed est dui gravida
            fames est. Tellus a amet suspendisse lectus justo hac proin. Tempus
            viverra at at elementum dolor bibendum. Tempus mi facilisis faucibus
            dolor ligula maecenas. Et amet enim et bibendum nunc ornare. Sodales
            vitae lectus massa amet mattis dictum ut. Porttitor sapien facilisis
            volutpat odio tellus in velit.
          </p>
        </div>

        <div className='w-full h-full bg-blue-300 hidden md:block'></div>
      </div>

      {/* What We Do Section */}

      <div id='what-we-do' className='min-h-screen text-center my-16 lg:my-32'>
        <h1 className='font-montserrat font-bold text-4xl lg:text-[64px]'>
          What We Do
        </h1>

        <div className='w-full grid lg:grid-cols-3 gap-8 lg:gap-6 mt-8'>
          {[
            {
              title: 'Support Children’s Education',
              text: 'Lorem ipsum dolor sit amet consectetur. Sit vel elementum libero eros lorem velit eget risus. Mattis ac vitae donec aliquet mattis adipiscing magna fermentum. Congue feugiat quisque turpis proin aliquet auctor pretium at dui.',
            },
            {
              title: 'Create Awareness',
              text: 'Lorem ipsum dolor sit amet consectetur. Sit vel elementum libero eros lorem velit eget risus. Mattis ac vitae donec aliquet mattis adipiscing magna fermentum. Congue feugiat quisque turpis proin aliquet auctor pretium at dui.',
            },
            {
              title: 'Provide Support',
              text: 'Lorem ipsum dolor sit amet consectetur. Sit vel elementum libero eros lorem velit eget risus. Mattis ac vitae donec aliquet mattis adipiscing magna fermentum. Congue feugiat quisque turpis proin aliquet auctor pretium at dui.',
            },
          ].map((cardItem, index) => (
            <div key={cardItem.title} className='w-full'>
              <div className='font-libre text-lg lg:text-2xl text-center rounded-full py-3 lg:py-5 px-5 lg:px-7 bg-slate-400 w-fit mx-auto'>
                {index + 1}
              </div>

              <h1 className='font-space font-bold text-xl lg:text-[32px] mb-2 lg:mb-4 mt-3 lg:mt-6'>
                {cardItem.title}
              </h1>

              <p className='text-base lg:text-xl leading-[2] w-[95%] lg:w-auto mx-auto lg:mx-0'>
                {cardItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TODO: center donation cards */}
      {/* Donate Section */}
      <div className='min-h-screen mb-16 lg:mb-24 grid place-content-center'>
        <div className='text-center mb-8 lg:mb-16'>
          <h1 className='font-montserrat font-bold text-4xl lg:text-6xl mb-3'>
            Select your donation
          </h1>

          <p className='text-lg lg:text-xl w-[90%] lg:w-[80%] mx-auto'>
            You give but little when you give of yourself, it when you give of
            your yourself. Ready to the incredible?
          </p>
        </div>

        <div className='w-full grid lg:grid-cols-3 justify-evenly gap-8 lg:gap-0'>
          {[
            { price: 10, priceText: 'Worth feed for 2 people in Africa' },
            { price: 50, priceText: 'Worth feed for 10 people in Africa' },
          ].map((cardItem) => (
            <div
              key={cardItem.price}
              className='relative lg:w-[80%] w-[70%] bg-white shadow-xl'
            >
              <div className='w-full h-1 lg:h-2 absolute top-0 bg-[#125A71]'></div>

              <div className='px-4 py-3'>
                <div className='mt-4'>
                  <h1 className='font-libre font-bold text-3xl lg:text-4xl'>{`$${cardItem.price}`}</h1>
                  <p className='text-sm lg:text-lg my-2 lg:my-3'>
                    {cardItem.priceText}
                  </p>
                </div>

                <button
                  className='font-space font-bold text-textWhite bg-[#125A71] py-2 lg:px-5 px-4 rounded-full lg:text-xl
                  text-sm'
                >
                  Donate
                </button>
              </div>
            </div>
          ))}

          <div className='relative lg:w-[80%] w-[70%] bg-white shadow-xl'>
            <div className='w-full h-1 lg:h-2 absolute top-0 bg-[#125A71]'></div>

            <div className='px-4 py-3 my-4'>
              <h1 className='font-libre font-bold text-3xl lg:text-4xl'>
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
                className='font-space font-bold text-textWhite bg-[#125A71] py-2 lg:px-5 px-4 rounded-full lg:text-xl
                  text-sm'
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}

      <div className='min-h-screen grid lg:grid-cols-2 gap-8 mb-8 lg:mb-24'>
        <div className='my-auto text-center'>
          <h1 className='font-montserrat font-bold text-4xl lg:text-6xl mb-4 leading-[1.2]'>
            Want to get involved? Contact us today.
          </h1>
          <div className='text-lg lg:text-xl lg:leading-[2] leading-[1.6]'>
            <p className='w-[90%] lg:w-[80%] mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur. Sit velit aenean eros
              lacus purus quam arcu quisque. Ipsum felis fermentum non arcu
              ornare scelerisque quam malesuada. Tellus id at amet vel quis ac.
              Quis elementum varius hac pellentesque ultrices felis.
            </p>

            <div className='mt-4 hidden lg:block'>
              <p>Phone: +(234) 8011223344</p>
              <p>Email: johndoe@gmail.com</p>
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
                className='w-full capitalize text-xl'
              >
                {formDetails.label}
              </label>

              <input
                type={formDetails.type}
                id={formDetails.label}
                className='w-full my-4 bg-transparent border border-textBlack py-3 px-3'
              />
            </div>
          ))}

          <div>
            <label htmlFor='message' className='w-full capitalize text-xl'>
              Message
            </label>
            <textarea
              id='message'
              className='w-full my-4 bg-transparent border border-textBlack py-3 px-3 h-auto'
            ></textarea>
          </div>

          <button
            type='submit'
            className='px-8 py-4 font-space font-bold bg-[#125A71] text-textWhite text-xl w-fit'
          >
            Donate Now
          </button>
        </form>

        <div className='mt-4 text-lg leading-[1.6] lg:hidden'>
          <p>Phone: +(234) 8011223344</p>
          <p>Email: johndoe@gmail.com</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className='grid lg:grid-cols-2 gap-4 py-6 lg:py-16'>
        <div className=''>
          <div className='mb-6 font-poppins hidden lg:block'>
            <h1 className='mb-2 font-bold text-4xl'>LOGO</h1>

            <p className='font-medium text-base opacity-60'>
              &copy; 2022. All Rights Resevered
            </p>
          </div>

          <div>
            <h1 className='font-montserrat font-bold text-xl'>Follow Us</h1>
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
              links: ['home', 'about', 'what we do', 'donate', 'get involved'],
            },
          ].map((navItem) => (
            <div key={navItem.title}>
              <h1 className='font-bold font-space text-base lg:text-xl mb-4'>
                {navItem.title}
              </h1>

              <ul className='flex flex-col gap-4 font-poppins font-medium text-base lg:text-xl'>
                {navItem.links.map((footerLinks) => (
                  <li key={footerLinks}>
                    <button>
                      <a
                        href={`#${footerLinks}`}
                        className='capitalize opacity-70 hover:opacity-100 hover:font-bold'
                      >
                        {footerLinks}
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
              <h1 className='font-bold font-space text-base lg:text-xl mb-4'>
                {footerItem.title}
              </h1>

              <ul className='flex flex-col gap-4 font-poppins font-medium text-base lg:text-xl opacity-70'>
                {footerItem.links.map((footerLinks) => (
                  <li key={footerLinks}>{footerLinks}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='font-medium text-sm mt-2 opacity-70 text-center'>
          &copy; 2022. All Rights Resevered
        </p>
      </footer>
    </div>
  );
};

export default App;
