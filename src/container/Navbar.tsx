import * as React from 'react';
import { motion } from 'framer-motion';

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
    <header className='flex items-center justify-between py-6 z-0'>
      <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'>LOGO</h1>

      {/* Desktop Nav */}

      <div className='hidden lg:flex gap-8 items-center'>
        <nav>
          <ul className='font-space text-lg flex gap-8 text-textBlack'>
            {navLinks.map((navLink) => (
              <li key={navLink.text}>
                <button>
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

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: '#125a71',
            color: '#ececec',
            marginLeft: '1rem',
          }}
          transition={{ duration: 0.3 }}
          className='py-3 px-8 bg-transparent border-2 border-[#125A71] text-[#125a71] font-bold font-space text-lg
        rounded-full'
        >
          <a href='#donate'>Donate Now</a>
        </motion.button>
      </div>

      {/* Mobile Navbar */}
      <button onClick={handleOpenMenu} className='lg:hidden'>
        <p className='font-medium text-lg border border-textBlack py-1 px-3'>
          Menu
        </p>
      </button>

      {isOpen ? (
        <motion.nav
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='lg:hidden fixed inset-0 bg-textBlack z-30 grid items-center'
        >
          <ul>
            {navLinks.map((mobileLinks) => (
              <li key={mobileLinks.text}>
                <a href={`#${mobileLinks.link}`} className=''>
                  <button
                    className='w-full border-y border-y-textWhite border-opacity-40 pl-8 py-5 text-xl font-medium text-textWhite uppercase'
                    onClick={handleCloseMenu}
                  >
                    {mobileLinks.text}
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      ) : null}
    </header>
  );
};

export default Navbar;
