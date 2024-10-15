import React from "react";
import { NavLink } from "react-router-dom";

/**
 * A functional component that renders a navigation bar.
 *
 * The navigation bar contains links to different news categories, as well as a
 * search bar. The search bar is not functional.
 *
 * @return {JSX.Element} The rendered component.
 */

const categories = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/business", title: "Business" },
  { path: "/entertainment", title: "Entertainment" },
  { path: "/general", title: "General" },
  { path: "/health", title: "Health" },
  { path: "/science", title: "Science" },
  { path: "/sports", title: "Sports" },
  { path: "/technology", title: "Technology" },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand"   to="/">
          NewsMonkey
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map(({ path, title }) => (
              <li key={path} className="nav-item">
                <NavLink className="nav-link"   to={path}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="d-flex" style={{ gap: "0.5rem" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

