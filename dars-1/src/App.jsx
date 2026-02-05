import "./App.css";
import Rasm from "./assets/rasm.webp";
import Welcome from "../src/components/Welcome.jsx";
import Car from "./components/Car";

function App() {
  return (
    <>
      <div><HH6>`                                                                                                                                                                                                                                                                                         </HH6>
        <img src={Rasm} width={200} alt="rasm" />
        <h1>Abbosbek</h1>
        <Welcome lang={"React JS"} />
        <Welcome lang={"Python"} />
        <Welcome lang={"C++"} />
        <Car name={"Lamborghini Urus"} description={"This is my lovely car"} />
        <Car
          name={"Chevrolet Malibu"}
          description={"Uzbek great and popular car"}
        />
      </div>
    </>
  );
}

export default App;