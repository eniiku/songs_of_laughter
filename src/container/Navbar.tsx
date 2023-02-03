import * as React from 'react';

const Navbar = () => {
  const navLinks = [
    { text: 'home', link: 'home' },
    { text: 'about', link: 'about' },
    { text: 'what we do', link: 'what-we-do' },
    { text: 'get involved', link: 'contact' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className='flex items-center justify-between py-6'>
      <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'>LOGO</h1>

      {/* Desktop Nav */}

      <div className='hidden lg:flex gap-8 items-center'>
        <nav>
          <ul className='font-space text-lg flex gap-8 text-textBlack'>
            {navLinks.map((navLink) => (
              <li key={navLink.text}>
                <button>
                  {/* TODO: set links to bold on hover and change font */}

                  <a
                    href={`#${navLink.link}`}
                    className='uppercase opacity-70 hover:opacity-100 hover:font-medium'
                  >
                    {navLink.text}
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
          <a href='#donate'>Donate Now</a>
        </button>
      </div>

      {/* Mobile Navbar */}
      <button onClick={handleOpenMenu} className='lg:hidden'>
        <p className='font-medium text-lg border border-textBlack py-1 px-3'>
          Menu
        </p>
      </button>

      {isOpen ? (
        <div className='lg:hidden'>
          <nav className='fixed inset-0 bg-textBlack z-30 grid items-center'>
            <ul>
              {navLinks.map((mobileLinks) => (
                <li
                  key={mobileLinks.text}
                  className='w-full border-y border-y-textWhite border-opacity-40 pl-8 py-5'
                >
                  <button onClick={handleCloseMenu}>
                    <a
                      href={`#${mobileLinks.link}`}
                      className='text-xl font-medium text-textWhite capitalize'
                    >
                      {mobileLinks.text}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
