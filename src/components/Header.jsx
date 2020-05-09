import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// const right = {
//   textAlign: "right",
// };

// export class Header extends Component {
//   render() {
//     return (
//       <header class="header">
//         <div class="navItems">
//           <a class="icon headerLink" href="/">
//             About
//           </a>
//           <a class="icon headerLink" href="/code">
//             Code
//           </a>
//           <a class="icon headerLink" href="/videos">
//             Videos
//           </a>
//           <a class="icon headerLink" href="/photos">
//             Photos
//           </a>
//           <div class="activeHeader"></div>
//         </div>
//       </header>
//     );
//   }
// }

export class Header extends Component {
  render() {
    return (
      <body>
        <nav class="nav">
          <a href="/" class="nav-item">
            About Me
          </a>
          <a href="/code" class="nav-item">
            Code
          </a>
          <a href="/videos" class="nav-item">
            Videos
          </a>
          <a href="/photos" class="nav-item">
            Photos
          </a>
          <span class="nav-indicator"></span>
        </nav>
        <script src="snake.js"></script>
      </body>
    );
  }
}

export default Header;
