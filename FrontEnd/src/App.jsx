import { Details, Graphic, AirQuality} from "./components/layout"
import { AcDarkMode } from "./components/custom";
import CustomSocketHook from "./utils/CustomSocketHook";

import "./App.css";

function App() {

  const { temperature, airquality, humidity, date } = CustomSocketHook();

  return (
    <>
      <main className="grid w-full h-screen items-center md:py-5 md:px-5 md:gap-5 md:grid-rows-3 md:grid-cols-4 lg:px-20 lg:py-0 lg:gap-12">
        <AcDarkMode/>
        <Details socketsInfo = {{temperature, humidity, date}} />
        <Graphic/>
        <AirQuality socketsInfo = {{airquality}}/>
      </main>
    </>
  );
}

export default App;