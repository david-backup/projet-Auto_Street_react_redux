import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <div className="header_title">
        <h1>Garage Auto-Street</h1>
        <Link
          to="https://www.google.com/search?hl=fr-FR&amp;gl=fr&amp;q=AUTO-STREET,+5+Rue+de+Moraye,+26760+Beaumont-l%C3%A8s-Valence&amp;ludocid=17524552952016791104&amp;lsig=AB86z5UtpFnldOaCe7VJJ494I8jO#lrd=0x12b5530b638cdd8d:0xf333b80f907be640,1,,,,"
          target="_blank"
          className="button"
        >
          Voir les avis clients
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
