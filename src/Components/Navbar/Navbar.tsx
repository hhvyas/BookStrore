import React from "react";
// import '../App.css';
import "../../App.css";
import SearchInput from "./SearchInput";
import { FaSearch, FaFilter } from "react-icons/fa";
import SearchQueryForm from "./SearchQueryForm";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" style={{textDecoration: 'none', color: 'black', fontWeight: '700'}} className="nav-logo">
          Bookstore
        </Link>
        <SearchQueryForm />
        <div className="nav-filter">
          <FaFilter className="nav-filter-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
