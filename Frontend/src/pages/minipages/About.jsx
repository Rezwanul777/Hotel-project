// import React from 'react'
// import aboutImg from '../../assets/about-background.jpg'
// import Experiences from './Experiences'
// const About = () => {
//   return (
//     <section> 
//     {/* banner */}
//     <div
//        className="w-full h-[400px] container mx-auto  bg-no-repeat bg-cover  flex items-center justify-center text-white"
//        src={aboutImg}
//      >
//        <div className=''>
//        <h1 className="text-5xl font-bold">About Us</h1>
//        </div>
//      </div>
//      <Experiences/>
//    </section>
//   )
// }

// export default About

import Reveal from '../../animation/Reveal';
import aboutImg from '../../assets/about-background.jpg';
import Experiences from './Experiences';

const About = () => {
  return (
    <section>
      {/* Banner */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>
     <Reveal>
     <Experiences />
     </Reveal>
    </section>
  );
};

export default About;