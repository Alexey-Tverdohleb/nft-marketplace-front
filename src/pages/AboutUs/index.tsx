/* eslint-disable max-len */
import React from 'react';
import WhyChooseUs from '../../components/Section/WhyChooseUs';
import useScrollToTop from '../../hooks/useScrollToTop';
import Button from '../../components/Button';
import './index.sass';

function AboutUs() {
  useScrollToTop();

  return (
    <div className="about-us px-4 xl:px-0">
      <div className="container">
        <section className="flex flex-col items-center mb-20 md:mb-60 pt-20">
          <p className="text-[48px] font-semibold text-center">Welcome to OpenSwap</p>
          <p className="text-2xl text-center mb-10">
            It’s marketplace where you can find the most popular NFTs in the world
          </p>
          <img src="/images/about-us/video.png" alt="" />
        </section>
        <div className="mb-40 md:mb-60">
          <WhyChooseUs />
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-x-8 mb-36">
          <img src="/images/about-us/about.png" alt="" className="w-full lg:w-auto mb-10 md:mb-0" />
          <div className=" pr-0 xl:pr-32 mt-10 xl:mt-0">
            <p className="text-2xl mb-2">Some title here it could be so long and even so long</p>
            <p className="text-light-gray-400 dark:text-light-gray text-[18px] mb-8">
              Some subtitle here it could be so long and even so long
              <br />
              and in two lines
            </p>
            <p className="text-light-gray-400 dark:text-light-gray mb-10 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna morbi enim
              maecenas eget. Vel in et ac ut risus in tempus. Imperdiet rhoncus sapien, sagittis sit
              urna, maecenas. Orci vitae ipsum scelerisque pharetra. Nibh arcu feugiat imperdiet
              eget ac senectus at vel elit. Tellus, in neque auctor vitae fermentum ut nulla. Proin
              egestas suspendisse gravida ultrices eget nunc consectetur. Sapien, non nulla id vel
              et ultricies. Laoreet dolor eu elementum commodo quis quam sollicitudin feugiat.
              Scelerisque et morbi varius enim.
            </p>
            <p className="text-light-gray-400 dark:text-light-gray leading-6">
              In auctor bibendum integer commodo neque ut ac amet mauris. Tincidunt sem aenean vitae
              arcu morbi fringilla sed nisi. Dolor praesent pellentesque enim consectetur
              vestibulum. Proin nibh a odio vel molestie eget varius sed curabitur. Dignissim nibh
              suspendisse a consequat ut. Enim aliquet interdum euismod a, at elementum. Nunc tellus
              elementum, interdum ac vulputate et volutpat sem ipsum. Elit sed tortor diam auctor at
              arcu. Imperdiet fringilla tempor elementum suspendisse sed faucibus at velit lectus.
              Nulla.
            </p>
          </div>
        </section>
        <section className="bg-light-violet px-4 xl:px-0 md:-mx-4 xl:-mx-20 h-[766px] flex items-center lg:justify-between mb-20">
          <form className=" px-4 xl:pl-32 xl:pr-20 w-full">
            <p className="text-black text-2xl font-semibold mb-4">Want to discuss collaboration?</p>
            <p className="text-black">Leave your email and we will get to you soon.</p>
            <div className="mt-10 md:mt-6">
              <p className="text-[12px] text-light-gray-400 dark:text-light-gray mb-2">YOUR NAME</p>
              <input
                type="text"
                className="w-full rounded-2xl px-4"
                placeholder="How can we call you?"
              />
            </div>
            <div className="mt-6">
              <p className="text-[12px] text-light-gray-400 dark:text-light-gray mb-2">EMAIL</p>
              <input
                type="text"
                className="w-full rounded-2xl px-4"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex justify-center mt-8 flex-col">
              <Button className="text-white rounded-full px-8" color="primary">
                Submit a request
              </Button>
              <p className="text-center text-light-gray mt-8 mb-8 md:mt-10 md:mb-10">or</p>
              <div className="flex items-center justify-center gap-x-8">
                <img src="/icons/instagram.svg" alt="" />
                <img src="/icons/twitter.svg" alt="" />
                <img src="/icons/facebook.svg" alt="" />
                <img src="/icons/telegram.svg" alt="" />
                <img src="/icons/discord.svg" alt="" />
              </div>
            </div>
          </form>
          <img className="hidden md:block md:max-w-[50%]" src="/images/about-us/mail.svg" alt="" />
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
