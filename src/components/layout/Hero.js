import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything is better with a pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece thar makes every day complete, a simple yer
          delicious joy in life
        </p>
        <div className="flex gap-4  text-sm">
          <button className="bg-primary flex gap-2 items-center uppercase text-white px-4 py-2 rounded-full ">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 items-center py-2 text-gray-600 font-semibold">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image src="/pizza.png" alt="pizza" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
}
