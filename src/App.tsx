import "./App.css";
import { AccordianContainer } from "./components/Accordian/AccordianContainer";
import { accordionData } from "./components/Accordian/data";
//import { OTPInput } from "./components/OTPInput";

const App = () => {
  return (
    <>
      <div>
        {/* <OTPInput /> */}
        <AccordianContainer data={accordionData} />
      </div>
    </>
  );
};

export default App;
