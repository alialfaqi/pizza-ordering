import React from "react";

export default function MenuItem() {
  return (
    <>
      <div className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all duration-200">
        <div>
          <img className="max-h-24  mx-auto" src="/pizza.png" alt="pizza" />
        </div>
        <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">
          Add to cart $12
        </button>
      </div>
    </>
  );
}
