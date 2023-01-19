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

      <div id='about' className='grid grid-cols-2 min-h-screen'>
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

      <div>Get involved</div>

      <div>footer</div>
    </div>
  );
};

export default App;
