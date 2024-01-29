import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="max-w-md mx-auto text-gray-600 mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam
            fuga facere quae numquam excepturi qui quas molestiae? Beatae qui
            expedita optio quo minus distinctio accusamus totam ex itaque.
            Corrupti?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos ullam eaque enim amet dolores tempore commodi veritatis.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="rel:+201095889605"
          >
            +20 109 588 9605
          </a>
        </div>
      </section>
    </>
  );
}
