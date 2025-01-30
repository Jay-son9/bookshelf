import SearchBar from "./SearchBar";
import { ImBook } from "react-icons/im";

function NavBar({ onSearch }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-primary border-4 mb-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <ImBook className="m-2" /> BookInfo Finder
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
