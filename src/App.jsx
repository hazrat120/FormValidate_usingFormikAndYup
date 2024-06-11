import "./index.css";
import BookAppointment from "./components/BookAppointment/Index";
import Contact from "./components/ContactUs/Index";

const App = () => {
  return (
    <div>
      <div>
        <BookAppointment />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
