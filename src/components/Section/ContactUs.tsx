import React from 'react';
import Button from '../Button';

function ContactUs() {
  return (
    <section className="bg-light-violet py-12 dark:bg-light-green mb-12">
      <div className="form-container ml-[16px] mr-[16px] md:max-w-[450px] md:mx-[auto]  ">
        <h2 className="font-semibold text-[24px] text-center mb-4">Can’t find your answer?</h2>
        <p className="text-center text-light-gray-400 mb-10 dark:text-light-gray">
          Contact us and we’ll get back to you as soon as we can.
        </p>

        <form>
          <div className="form-group">
            <p className="label  dark:text-light-gray">YOUR NAME</p>
            <input
              type="text"
              id="nickname"
              className="form-control dark:bg-[#2A2A32]"
              placeholder="How we can call you?"
            />
          </div>
          <div className="form-group">
            <p className="label  dark:text-light-gray">EMAIL</p>
            <input
              type="text"
              id="nickname"
              className="form-control dark:bg-[#2A2A32]"
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <p className="label  dark:text-light-gray">ISSUE</p>
            <input
              type="text"
              id="nickname"
              className="form-control dark:bg-[#2A2A32]"
              placeholder="Describe your problem as detailed as you can"
            />
          </div>
          <div className="flex justify-between">
            <Button type="submit" className="text-white rounded-full px-8" color="primary">
              Submit request
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
