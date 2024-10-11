/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  /**
   * Renders the Navbar component.
   *
   * This component renders a navigation bar with some sample links. It is
   * designed to be used as a starting point for more complex navigation bars.
   *
   * @return {JSX.Element} The rendered component.
   */
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NewsMonkey
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">
                  business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/general">
                  general
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
