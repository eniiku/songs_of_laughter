const Navbar = () => {
  const navLinks = ['home', 'about', 'what we do', 'get involved'];

  return (
    <header className='flex items-center justify-between py-6'>
      <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'>LOGO</h1>

      {/* Desktop Nav */}

      <div className='hidden lg:block'>
        <nav>
          <ul className='font-space text-lg flex gap-8 text-textBlack'>
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <button>
                  {/* TODO: set links to bold on hover and change font */}

                  <a
                    href={`#${navLink}`}
                    className='uppercase opacity-70 hover:opacity-100 hover:font-medium'
                  >
                    {navLink}
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className='py-3 px-8 bg-[#125A71] text-textWhite font-bold font-space text-lg
        rounded-full'
        >
          <a href='donate'>Donate Now</a>
        </button>
      </div>

      {/* Mobile Navbar */}

      <div className='lg:hidden'>
        <button>
          <p className='font-medium text-lg border border-textBlack py-1 px-3'>
            Menu
          </p>
        </button>

        <nav className='absolute inset-0 bg-textBlack z-30 grid items-center'>
          <ul>
            {navLinks.map((mobileLinks) => (
              <li
                key={mobileLinks}
                className='w-full border-y border-y-textWhite border-opacity-40 pl-8 py-5'
              >
                <button>
                  <a
                    href={`#${mobileLinks}`}
                    className='text-xl font-medium text-textWhite capitalize'
                  >
                    {mobileLinks}
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
