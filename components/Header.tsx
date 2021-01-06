import { FaMoon } from "react-icons/fa";
import { lightTheme, darkTheme } from "./Theme";

const Header = () => {
  return (
    <header className="section header-section">
      <div className="container header-container">
        <h1>Where in the world?</h1>
        <button
          type="button"
          className="toggle-mode">
          <FaMoon className="toggle-icon" />
          Dark Mode Unavaliable
        </button>
      </div>
    </header>
  );
};

export default Header;
