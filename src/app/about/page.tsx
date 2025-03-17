import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full mb-11   ">
      {/* Delivery bike image */}
      
      <Image 
  src="/images/frame.png" 
  alt="Minutos Delivery Bike" 
  layout="responsive" 
  width={1200} 
  height={600} 
  className="w-full h-auto" 
/>



      {/* Mission and introduction */}
      <div className="max-w-6xl mx-auto  space-y-14 mt-9">
        <p className="text-gray-800 leading-relaxed sm:justify-center ml-5">
          At Minutos, our mission is to transform the local commerce landscape by empowering Kirana stores and vegetable shops to thrive in the fast-paced world of quick deliveries. Designed for ultra-fast delivery times—typically within 10 to 20 minutes—we aim to bridge the gap between modern consumer expectations and the traditional retail experience.
        </p>

        <p className="text-gray-800 leading-relaxed ml-5">
          Recently, we secured pre-seed funding from renowned investors, enabling us to strengthen our operational infrastructure and technology. This funding will help us stay ahead of the curve and continue to innovate in the realm of local deliveries. What sets Minutos apart is our commitment to fostering meaningful emotional connections with both store owners and customers, making us more than just a delivery platform—we're building a community-driven ecosystem.
        </p>

        <p className="text-gray-800 leading-relaxed ml-5">
          Although we're still in our early stages, the excitement surrounding Minutos is palpable. Customers and store owners alike recognize the immense value of a platform that seamlessly blends technology with a deep commitment to local communities. With upcoming features like AI-driven ordering and a frictionless shopping experience, we are poised to revolutionize the way India shops locally.
        </p>

        <p className="text-gray-800 leading-relaxed ml-5">
          Minutos is more than just a quick-commerce platform—it's a movement to support and uplift local businesses in an ever-evolving market. We're here to ensure that Kirana stores and vegetable shops not only survive but thrive, creating a sustainable and inclusive future for local retail.
        </p>
      </div>
    </div>
  );
};

export default About;