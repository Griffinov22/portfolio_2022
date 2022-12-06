import logo from "/svg-folder/favicon.svg";
import "../css/index.css";

function Header() {
  return (
    <nav id="nav" className="nav">
      <div id="pic-container">
        <img id="logo-pic" src={logo} alt="GO Logo" />
        <div id="box"></div>
      </div>
      <a id="skills" className="nav-item" href="#skills-box">
        Skills
      </a>
      <a id="work" className="nav-item" href="#works-section">
        Work
      </a>
    </nav>
  );
}

export default Header;
