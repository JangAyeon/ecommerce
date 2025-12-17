import {
  Section1Products,
  Section2Products,
  Section3Products,
  Section4Products,
  Section5Products,
  Section6Products,
  Section7Products,
  Section8Products,
  Section9Products,
} from "@/@lib/mock-data";
import ProductGrid from "./ProductGrid";

const Content = () => {
  return (
    <>
      <main id="parallax__cont">
        <section id="section1" className="parallax__item">
          <span className="parallax__item__num">01</span>
          <h2 className="parallax__item__title">Dream Big</h2>
          <ProductGrid products={Section1Products} />
        </section>

        <section id="section2" className="parallax__item">
          <span className="parallax__item__num">02</span>
          <h2 className="parallax__item__title">The Journey</h2>
          <ProductGrid products={Section2Products} />
        </section>

        <section id="section3" className="parallax__item">
          <span className="parallax__item__num">03</span>
          <h2 className="parallax__item__title">Keep Moving</h2>
          <ProductGrid products={Section3Products} />
        </section>

        <section id="section4" className="parallax__item">
          <span className="parallax__item__num">04</span>
          <h2 className="parallax__item__title">Foundation</h2>
          <ProductGrid products={Section4Products} />
        </section>

        <section id="section5" className="parallax__item">
          <span className="parallax__item__num">05</span>
          <h2 className="parallax__item__title">Resilience</h2>
          <ProductGrid products={Section5Products} />
        </section>

        <section id="section6" className="parallax__item">
          <span className="parallax__item__num">06</span>
          <h2 className="parallax__item__title">Action</h2>
          <ProductGrid products={Section6Products} />
        </section>

        <section id="section7" className="parallax__item">
          <span className="parallax__item__num">07</span>
          <h2 className="parallax__item__title">Stay Humble</h2>
          <ProductGrid products={Section7Products} />
        </section>

        <section id="section8" className="parallax__item">
          <span className="parallax__item__num">08</span>
          <h2 className="parallax__item__title">Luck & Effort</h2>
          <ProductGrid products={Section8Products} />
        </section>

        <section id="section9" className="parallax__item">
          <span className="parallax__item__num">09</span>
          <h2 className="parallax__item__title">Never Give Up</h2>
          <ProductGrid products={Section9Products} />
        </section>
      </main>
    </>
  );
};

export default Content;
