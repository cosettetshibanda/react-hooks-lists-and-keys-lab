import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const map = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{map}</nav>;
}

export default NavBar;
