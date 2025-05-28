import React from "react";
import logo from "../assets/bear.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div >
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width={40}
              height={30}
              className="d-inline-block align-text-top"
            />
            <span>PUFFY</span>
          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#" to='/home'>Tasks</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#" to='/home'>Puffy Routine</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#" to='/home'>Unique PFP</Link>
            </li>
            
          <Button/>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
