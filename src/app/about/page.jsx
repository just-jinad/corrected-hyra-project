import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Nav />
      {/* //First body begin */}
      <div className=" md:flex py-8 hidden">
        <div className=" md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="md:text-4xl font-bold">
              Hyra Islamic Stories for Kids
            </p>
            <p className="text-sm mt-7 md:w-96">
              Hyra Islamic Stories for Kids is an engaging and interactive
              Educational app designed to introduce Islamic teachings to
              children.h
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about.png"
            width={400}
            height={200}
          />
          {/* <img
            className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/9ca8/1e40/91d6a0f9eefd5d38a6fd424d8f00af96?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D78RaDZHpt3HClitCuJRXwbl41rSXPb2plaMaeW7O6MmOO35wfmFpwbQTm0IGaEw52mPHlEYKA9OmboofNCu8XRpfihLo4ip1~Tesyx4Z5vq-xlfSKTpyPmwHWdt1E8GenAcDhNz-BWbUqWq2v5r89MBdJ~pgGuvi933Vo~jeb-9UKBpt3upnK0rimr7hF2szq05tEFtmJhYng6lkpYMv9oRvWqI0kaIkL~JLrgenXpqkW2NjM4UUH0a4Idrf1ZrooS7rWyBxbzy8KOUFzEbaweZmOuDMrAgHGPsfKmYeJIgPcqYB5nUM9ZoGGXZoANJox6W6Bq~iQMmyxbOHeLqIQ__"
            alt=""
          /> */}
        </div>
      </div>

      <div className="md:hidden block px-7 py-10">
        <div className="mt-10 md:w-1/2">
        <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about.png"
            width={400}
            height={200}
          />
          {/* <img
            className="md:h-72 mx-auto md:mt-14 rounded-md"
            
            src="https://s3-alpha-sig.figma.com/img/9ca8/1e40/91d6a0f9eefd5d38a6fd424d8f00af96?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D78RaDZHpt3HClitCuJRXwbl41rSXPb2plaMaeW7O6MmOO35wfmFpwbQTm0IGaEw52mPHlEYKA9OmboofNCu8XRpfihLo4ip1~Tesyx4Z5vq-xlfSKTpyPmwHWdt1E8GenAcDhNz-BWbUqWq2v5r89MBdJ~pgGuvi933Vo~jeb-9UKBpt3upnK0rimr7hF2szq05tEFtmJhYng6lkpYMv9oRvWqI0kaIkL~JLrgenXpqkW2NjM4UUH0a4Idrf1ZrooS7rWyBxbzy8KOUFzEbaweZmOuDMrAgHGPsfKmYeJIgPcqYB5nUM9ZoGGXZoANJox6W6Bq~iQMmyxbOHeLqIQ__"
            alt=""
          /> */}
        </div>
        <div className="text-center md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="md:text-4xl font-bold">
              Hyra Islamic Stories for Kids
            </p>
            <p className="text-sm mt-7 md:w-96">
              Hyra Islamic Stories for Kids is an engaging and interactive
              Educational app designed to introduce Islamic teachings to
              children.h
            </p>
          </div>
        </div>
      </div>

      {/* //First body end */}

      {/* //Second body begin */}
      <div
        className=" md:flex py-8 hidden"
        style={{ backgroundColor: "#3835b4" }}
      >
        <div className="md:w-1/2">
        <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about2.png"
            width={400}
            height={200}
          />
          
        </div>

        <div className=" md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm mt-7 text-white md:w-96">
              It has been observed that some children lack proper fundamentals
              of Islamic teachings. Hyra is introduced to help kids know about
              the Islamic Teachings.
            </p>
          </div>
        </div>
      </div>

      <div
        className="md:hidden block px-7 py-10"
        style={{ backgroundColor: "#ff4a90" }}
      >
        <div className="mt-10 md:w-1/2">
          <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about2.png"
            width={400}
            height={200}
          />
        
        </div>
        <div className="text-center md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm mt-7 text-white md:w-96">
              It has been observed that some children lack proper fundamentals
              of Islamic teachings. Hyra is introduced to help kids know about
              the Islamic Teachings.
            </p>
          </div>
        </div>
      </div>

      {/* //Second body end */}

      {/* //third body begin */}
      <div className=" md:flex py-8 hidden">
        <div className=" md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm mt-7 md:w-96">
              The target audience for this app is kids between the ages of 7-12
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about3.png"
            width={350}
            height={200}
          />
          
        </div>
      </div>

      <div className="md:hidden block px-7 py-10">
        <div className="mt-10 md:w-1/2">
          <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about3.png"
            width={400}
            height={200}
          />
         
        </div>
        <div className="text-center md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm mt-7 md:w-96">
              The target audience for this app is kids between the ages of 7-12
            </p>
          </div>
        </div>
      </div>

      {/* //third body End */}

      {/* //Fourth body begin */}
      <div
        className=" md:flex py-8 hidden"
        style={{ backgroundColor: "#ff4a90" }}
      >
        <div className="md:w-1/2">
           <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about4.png"
            width={350}
            height={200}
          />
         
        </div>
        <div className=" md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm text-white mt-7 md:w-96">
              The app combines Islamic teaching, Stories of the Prophet, Stories
              of the Companion, Du’a, quizzes and interactive activities to make
              learning about Islam enjoyable and fun for young mind
            </p>
          </div>
        </div>
      </div>

      <div
        className="md:hidden block px-7 py-10"
        style={{ backgroundColor: "#ff4a90" }}
      >
        <div className="mt-10 md:w-1/2">
           <Image
           className="md:h-72 mx-auto md:mt-14 rounded-md"
            src="/about4.png"
            width={350}
            height={200}
          />
         
        </div>
        <div className="text-center md:w-1/2">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm text-white mt-7 md:w-96">
              The app combines Islamic teaching, Stories of the Prophet, Stories
              of the Companion, Du’a, quizzes and interactive activities to make
              learning about Islam enjoyable and fun for young mind
            </p>
          </div>
        </div>
      </div>
      {/* //Fourth body End */}

      {/* Google playstore */}
      <div class="flex justify-center">
        <div class="md:w-60">
        
         <Image
            src="/about5.png"
            width={350}
            height={200}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
