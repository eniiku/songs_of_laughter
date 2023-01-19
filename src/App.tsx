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

      <div>Get involved</div>

      <div>footer</div>
    </div>
  );
};

export default App;
