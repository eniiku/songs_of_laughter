const Navbar = () => {
  return (
    <header className='flex items-center justify-between py-6'>
      <h1>LOGO</h1>

      <nav>
        <ul className='font-space font-medium text-lg flex gap-8 text-textBlack'>
          {['home', 'about', 'what we do', 'get involved'].map((navLink) => (
            <li key={navLink}>
              <button>
                {/* TODO: set links to bold on hover and change font */}

                <a
                  href={`#${navLink}`}
                  className='uppercase opacity-70 hover:opacity-100'
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
    </header>
  );
};

export default Navbar;
