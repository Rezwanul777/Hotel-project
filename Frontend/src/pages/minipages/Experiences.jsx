import React from 'react'
import expriencesImg from "../../assets/expricences.png"
import Reveal from '../../animation/Reveal';
// import { motion } from "framer-motion";
// import { SlideLeft, SlideUp } from "../../utils/animation";

// const Experiences = ({product}) => {
//   return (
//     <section className='my-24 container mx-auto flex flex-col md:flex-row items-center justify-center md:gap-20 gap-8'>
//         <div 
//         variants={(product?.delay)}
//         initial="hidden"
//         whileInView={"visible"}
          
//            className='md:w-1/2 md:h-[547px]'>
//             <img src={expriencesImg} alt="" className='h-full w-full' />
//         </div>
//         <div
//         variants={(product?.delay)}
//         initial="hidden"
//         whileInView={"visible"}
//         className='md:w-1/2 mx-auto'>
//             <h3 className='text-lg font-semibold text-primary mb-4'>Experiences</h3>
//             <h2 className='text-4xl font-bold mb-4 capitalize lg:w-2/3'>we provide you the best experience</h2>
//             <p className='text-secondary dark:text-white mb-5 lg:w-2/3 text-justify'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
//             {/* <Button text="More Info"/> */}
//         </div>
//     </section>
//   )
// }



const Experiences = () => {
  return (
    <section className="my-24 container mx-auto px-8 flex flex-col md:flex-row items-center justify-center md:gap-20 gap-8">
      <div className="md:w-1/2 h-auto">
        <img src={expriencesImg} alt="Experiences" className="w-full h-full rounded-sm shadow-lg" />
      </div>
      <div className="md:w-1/3 space-y-5">
        <h3 className="text-4xl font-semibold text-primary mb-4">Experiences</h3>
        <h2 className="text-2xl font-bold mb-4 capitalize text-gray-600">We provide you the best experience</h2>
        <p className="text-secondary dark:text-white mb-5 text-justify">
          You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.We implement robust security measures to safeguard your personal data. Access to your information is restricted to authorized personnel only, and we regularly update our practices to meet security standards.We are committed to protecting your privacy and ensuring your experience is safe and secure. This policy explains how we collect, use, and protect your information.
        </p>
      </div>
    </section>
  );
};

export default Experiences;

