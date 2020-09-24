import dynamic from "next/dynamic";
import Delivery from "../components/delivery";
import dateFake from "../fake-data.json";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/map-leaflet"),
  {
    ssr: false,
  }
);

console.log(dateFake);

export default function HomePage() {
  return (
    <>
      <header></header>
      <main>
        <section className="delivery-task">
          <Delivery listTask={dateFake} />
        </section>
        <section className="delivery-map">
          <DynamicComponentWithNoSSR />
        </section>
      </main>
      <footer></footer>
      <style jsx>{`
        main {
          height: 100vh;
          width: 100%;
          display: flex;
        }

        .delivery-task {
          border: 1px solid red;
          width: 25%;
          overflow: auto;
        }
        .delivery-map {
          border: 1px solid red;
          flex: 1;
        }
      `}</style>
    </>
  );
}
