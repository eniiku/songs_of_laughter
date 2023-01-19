import Navbar from './container/Navbar';

const App = () => {
  return (
    <div className='bg-bgWhite px-16'>
      <Navbar />

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

          <button className='px-8 py-4 rounded-full font-space font-bold bg-textBlack'>
            <a href='#donate' className='text-textWhite text-xl'>
              Donate Now
            </a>
          </button>
        </div>
      </div>

      <div className='text-center my-32 bg-indigo-500 -mx-16 p-16 radial-gradient text-textWhite'>
        <q className='font-zilla font-bold text-[52px] mb-10'>
          It’s our duty to love the unloved, help the helpless and bring hope to
          the hopeless
        </q>

        <p className='font-montserrat font-medium text-2xl text-right'>
          - Anthony Douglas Williams
        </p>
      </div>

      <div>about page</div>

      <div>Get involved</div>

      <div>footer</div>
    </div>
  );
};

export default App;
