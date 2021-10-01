import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdTheaters } from "react-icons/md";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Tambah from "./Tambah";

function A() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdTheaters className="navbar-icon" />
              Movie App
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ color: "#ffffff" }}>
                    Find by
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/findby-popular">Popular</DropdownItem>
                    <DropdownItem href="/findby-upcoming">
                      Upcoming
                    </DropdownItem>
                    <DropdownItem href="/findby-year">Year</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>

              <li className="nav-item">
                <Button
                  style={{ backgroundColor: "#000000", border: "#000000" }}
                >
                  <Tambah />
                </Button>
              </li>
              <li className="nav-item">
                  <Button style={{ backgroundColor: "#000000", border: "#000000"}} href="/search">
                  <Button style={{ backgroundColor: "#000000", border: "#000000"}} href="/search">
                  <FaSearch />
                </Button>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default A;
