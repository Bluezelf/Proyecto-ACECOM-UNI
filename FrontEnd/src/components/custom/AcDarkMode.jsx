import { FaSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import CustomDarkHook from "../../utils/CustomDarkHook";

const AcDarkMode = () => {

  const [darkMode, toggleDarkMode] = CustomDarkHook();

  return (
    <div className="absolute z-20 top-3 right-6 md:right-10 md:top-7 lg:top-10 lg:right-20">
      <input
        type="checkbox"
        id="check"
        onChange={toggleDarkMode}
        className="checkbox hidden"
      />
      <label htmlFor="check" className="toggle">
        <span className="toggle__icon">{darkMode ? <FiMoon /> : <FaSun />}</span>
      </label>
    </div>
  );
};

export default AcDarkMode;
