// import React from "react";

// function Header({setCurrentPage}) {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <a class="navbar-brand" href="/">
//           Kevin Atwood
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item active">
//               <a class="nav-link" href="/">
//                 About Me
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="/portfolio">
//                 Portfolio
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="/contact">
//                 Contact
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link " href="/resume">
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
import React from 'react';

function Header({ setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand p-3" href="/">
        Kevin Atwood
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id= "about" href="/" onClick={() => setCurrentPage('about')}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id= "portfolio" href="/portfolio" onClick={() => setCurrentPage('portfolio')}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id= "contact" href="/contact" onClick={() => setCurrentPage('contact')}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id= "resume" href="/resume" onClick={() => setCurrentPage('resume')}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
