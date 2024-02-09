'use client'

import CustonButton from "./CustonButton";
import Image from 'next/image'

const Hero = () => {

    const handleScroll = () => {
    }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor molestiae accusamus, necessitatibus culpa a inventore? Fugiat voluptatem voluptate totam itaque ipsam, dicta maiores, velit necessitatibus, quisquam animi rerum voluptatum.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex, deserunt itaque id laudantium eum minima ipsam cum odio praesentium, provident, ducimus adipisci consectetur! Ea fugiat ratione provident veniam assumenda.
        </p>

        <CustonButton
          title="Explore Cars"
          containerStyle="bg-emerald-500 text-white rounded-full mt-10"
          handelClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
            <Image src='/hero.png' alt='hero' fill className='object-contain' />
            <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
