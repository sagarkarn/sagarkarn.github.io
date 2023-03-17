/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { themes } from "../../data/db";

function NabBar() {
  const setTheme = (mytheme) => {
    document.querySelector("html").setAttribute("data-theme", mytheme);
  };
  return (
    <div className="navbar bg-transparent shadow-lg mb-20">
      <div className="flex-1">
        {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="btn btn-ghost normal-case text-xl" href="#">
          <div class="avatar placeholder">
            <div class="bg-slate-700 text-neutral-content rounded-full w-10">
              <span class="text-xl">SK</span>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0} className="text-lime-200">
            <a href="#">Theme</a>
            <ul className="p-2 bg-base-100 z-50">
              {themes.map((theme) => {
                return (
                  <li key={theme.id} className="text-primary">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme(theme.value);
                      }}
                    >
                      {theme.name}
                    </a>
                  </li>
                );
              })}
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="text-lime-200">
            <Scroll.Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              Project
            </Scroll.Link>
          </li>
          <li className="text-lime-200">
            <Scroll.Link
              to="experiences"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              Experience
            </Scroll.Link>
          </li>
          <li className="text-lime-200">
            <Scroll.Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
            >
              Skills
            </Scroll.Link>
            {/* <a href="#skills">Skills</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NabBar;
