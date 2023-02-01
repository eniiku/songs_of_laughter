const Contact = () => {
  return (
    <div
      id='contact'
      className='min-h-screen grid lg:grid-cols-2 gap-8 mb-8 mb:mb-16 lg:mb-24'
    >
      <div className='my-auto text-center lg:text-left'>
        <h1 className='font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.2]'>
          Want to get involved? Contact us today.
        </h1>
        <div className='text-lg md:text-xl lg:leading-[2] leading-[1.6]'>
          <p className='w-[90%] lg:w-[80%] mx-auto lg:mx-0'>
            "
            <span className='italic'>
              The greatest good you can do for another is not just share your
              riches, but reveal to them their own.
            </span>
            "
            <br />
            Join us in making a difference in the lives of those in need. By
            volunteering or reaching out to us, you have the power to change
            someone's life for the better. Whether it's through your time,
            skills, or resources, every little bit counts.
            <br />
            So, why not make a difference today and become a part of our mission
            to empower in need with education and support. The world needs more
            people like you.
          </p>

          <div className='mt-4 hidden lg:block'>
            <p>
              <span className='font-medium text-xl md:text-[22px]'>Phone:</span>{' '}
              +(234)8011223344
            </p>
            <p>
              <span className='font-medium text-xl text-[22px]'>Email:</span>{' '}
              sourceoflaughter21@gmail.com
            </p>
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
          <label
            htmlFor='message'
            className='w-full capitalize text-lg lg:text-xl'
          >
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
  );
};

export default Contact;
