import { FiSearch } from "react-icons/fi";
import img91 from "../../assets/f-icon.png";
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FiSearch color="#838383" className="search-icon" aria-label="Search Icon" />
      <input
        type="text"
        placeholder="Search for plants..."
        className="search-input"
        aria-label="Search Plant"
      />
      <img src={img91} alt="Logo" className="logo" />
    </div>
  );
};

export default SearchBar;
