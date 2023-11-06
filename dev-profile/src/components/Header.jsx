import React from "react";

function Header({setCurrentPage}) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onClick={() => {
                setCurrentPage('AboutMe')
            }}>
          Kevin Atwood
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active" onClick={() => {
                setCurrentPage('AboutMe')
            }}>
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item" onClick={() => {
                setCurrentPage('Portfolio')
            }}>
              <a class="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item" onClick={() => {
                setCurrentPage('Contact')
            }}>
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item" onClick={() => {
                setCurrentPage('Resume')
            }}>
              <a class="nav-link " href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
