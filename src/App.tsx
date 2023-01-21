import Navbar from './container/Navbar';

const App = () => {
  return (
    <div className='bg-bgWhite px-16 text-textBlack'>
      <Navbar />

      {/* Home Section */}

      <div
        id='home'
        className='w-full min-h-[90vh] relative grid items-center justify-start z-0'
      >
        <div className='absolute -right-16 top-0 w-[70vw] h-[90vh] bg-[#125A71] -z-10'></div>

        <div className='my-auto'>
          <h1 className='font-montserrat font-bold text-7xl mb-4'>
            Rebuilding Lives:
          </h1>

          <p className='text-xl w-2/3 mb-4 leading-[165%]'>
            Supporting Widows, Divorcees, and Homeless Women on the Road to
            Self-Sufficiency
          </p>

          <button className='px-8 py-4 rounded-full font-space font-bold bg-[#125A71]'>
            <a href='#donate' className='text-textWhite text-xl'>
              Donate Now
            </a>
          </button>
        </div>
      </div>

      {/* Quote Section */}

      <div className='text-center my-32 bg-indigo-500 -mx-16 p-16 radial-gradient text-textWhite'>
        <q className='font-zilla font-bold text-[52px] mb-10'>
          It’s our duty to love the unloved, help the helpless and bring hope to
          the hopeless
        </q>

        <p className='font-montserrat font-medium text-2xl text-right'>
          - Anthony Douglas Williams
        </p>
      </div>

      {/* About Section */}

      <div id='about' className='grid grid-cols-2 min-h-screen my-32'>
        <div className='my-auto'>
          <h1 className='font-montserrat font-bold text-6xl mb-4 leading-[1.25]'>
            About Our Company
          </h1>

          <p className='text-xl leading-[2] w-[85%]'>
            Lorem ipsum dolor sit amet consectetur. Laoreet sed est dui gravida
            fames est. Tellus a amet suspendisse lectus justo hac proin. Tempus
            viverra at at elementum dolor bibendum. Tempus mi facilisis faucibus
            dolor ligula maecenas. Et amet enim et bibendum nunc ornare. Sodales
            vitae lectus massa amet mattis dictum ut. Porttitor sapien facilisis
            volutpat odio tellus in velit.
          </p>
        </div>

        <div className='w-full h-full bg-blue-300'></div>
      </div>

      {/* What We Do Section */}

      <div id='what-we-do' className='min-h-screen text-center my-32'>
        <h1 className='font-montserrat font-bold text-[64px]'>What We Do</h1>

        <div className='w-full grid grid-cols-3 gap-6 mt-8'>
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
              <div className='font-libre text-2xl text-center rounded-full py-5 px-7 bg-slate-400 w-fit mx-auto'>
                {index + 1}
              </div>

              <h1 className='font-space font-bold text-[32px] mb-4 mt-6'>
                {cardItem.title}
              </h1>

              <p className='text-xl leading-[2]'>{cardItem.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}

      <div className='min-h-screen grid grid-cols-2 gap-8 mb-24'>
        <div className='my-auto'>
          <h1 className='font-montserrat font-bold text-6xl mb-4 leading-[1.2]'>
            Want to get involved? Contact us today.
          </h1>
          <div className='text-xl leading-[2]'>
            <p className='w-[80%]'>
              Lorem ipsum dolor sit amet consectetur. Sit velit aenean eros
              lacus purus quam arcu quisque. Ipsum felis fermentum non arcu
              ornare scelerisque quam malesuada. Tellus id at amet vel quis ac.
              Quis elementum varius hac pellentesque ultrices felis.
            </p>

            <div className='mt-4'>
              <p>Phone: +(234) 8011223344</p>
              <p>Email: johndoe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <form className='border border-textBlack'>
          <div className='form_input'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </div>

          <div className='form_input'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='form_input' />
          </div>

          <div className='form_input'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' />
          </div>

          <div className='form_input'>
            <label htmlFor='message'>Message</label>
            <textarea id='message'></textarea>
          </div>

          <button type='submit'>Donate Now</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className='grid grid-cols-2 gap-4 py-16'>
        <div>
          <div className='mb-6 font-poppins'>
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

        <div className='grid grid-cols-3 gap-4'>
          {/* Footer Nav Links */}

          {[
            {
              title: 'Navigation',
              links: ['home', 'about', 'contact'],
            },
          ].map((navItem) => (
            <div key={navItem.title}>
              <h1 className='font-bold font-space text-xl mb-4'>
                {navItem.title}
              </h1>

              <ul className='flex flex-col gap-4 font-poppins text-xl'>
                {navItem.links.map((footerLinks) => (
                  <li key={footerLinks}>
                    <button>
                      <a
                        href={`#${footerLinks}`}
                        className='capitalize opacity-70 hover:opacity-100 hover:font-medium'
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
              <h1 className='font-bold font-space text-xl mb-4'>
                {footerItem.title}
              </h1>

              <ul className='flex flex-col gap-4 font-poppins font-medium text-xl opacity-70'>
                {footerItem.links.map((footerLinks) => (
                  <li key={footerLinks}>{footerLinks}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
