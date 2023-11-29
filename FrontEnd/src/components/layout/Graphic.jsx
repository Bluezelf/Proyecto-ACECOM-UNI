import AcChart from "../custom/AcChart";

const Graphic = () => {
  return (
    <section className="hidden md:flex acBox flex-col md:col-span-3 md:row-span-2 lg:row-span-3 lg:col-span-2">
      <h1 className="acBox__title">Graphic</h1>
      <AcChart />
    </section>
  );
};

export default Graphic;
