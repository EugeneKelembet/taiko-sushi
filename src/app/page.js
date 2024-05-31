import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our experience'}
          mainHeader={'Best sushi in London'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Taiko team has been part of the world of sushi for more than 15 years. Brought together by our common passion we strive to make the best sushi in London.
          </p>
          <p>Preparation of high-quality sushi is a delicate process, in which everything is important, down to the smallest details. We value quality above all else.</p>
          <p> To enjoy the best sushi experience in London visit us or order delivery to your office building or home. We love sushi and want to share our passion with you!</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t wait!'}
          mainHeader={'Choose us!'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+38 096 512 951">
            +38 096 512 951
          </a>
        </div>
      </section>
    </>
  )
}
