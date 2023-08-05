'use client';
//image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
//components
import PizzaDetails from './PizzaDetails';
//icons
import { IoCloseOutline } from 'react-icons/io5';
const Pizza = ({ pizza }) => {
  console.log(pizza);
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image width={270} alt={pizza.name} height={270} src={pizza.image} />
      {/* title */}
      <div>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className="mb-6 flex items-center justify-between">
        {/* price -> hidden(sm)-visible (lg) */}
        <div className="hidden lg:flex text-xl font-semibold">
          start at {pizza.priceSm}
        </div>
        {/* btn hidden (sm) - visible lg */}
        <button
          className="hidden lg:flex gradient text-white rounded-lg btn-sm
        font-semibold text-sm"
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default Pizza;
