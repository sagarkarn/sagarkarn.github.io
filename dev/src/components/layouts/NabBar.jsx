/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { themes } from "../../data/db";
import useTheme from "../../hooks/useTheme";

function NabBar() {
  const [theme, setTheme] = useTheme("light");

  return (
    <div className="navbar bg-transparent shadow-lg mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li tabIndex={0} className="text-lime-200">
              <a className="justify-between">
                Theme{" "}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 z-50" style={{columns: 2}}>
                {themes.map((theme, index) => {
                  return (
                    <li key={index} className={"text-primary"}>
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
              </ul>
            </li>
            <li tabIndex={0} className="text-lime-200">
              <a>
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
              </a>
            </li>
            <li tabIndex={0} className="text-lime-200">
              <a>
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
              </a>
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
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <div className="avatar placeholder">
            <div className="bg-slate-700 text-neutral-content rounded-full w-10">
              <span className="text-xl">SK</span>
            </div>
          </div>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a className="justify-between text-lime-200">
              Theme{" "}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-primary z-50 " >
              {themes.map((theme, index) => {
                return (
                  <li key={index} className="text-primary-content">
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
            </ul>
          </li>
          <li tabIndex={0} className="text-lime-200">
            <a>
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
            </a>
          </li>
          <li tabIndex={0} className="text-lime-200">
            <a>
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
            </a>
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
          </li>
        </ul>
      </div>
    </div>
    // <div className="navbar bg-transparent shadow-lg mb-20">
    //   <div className="flex-1">
    //     {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    //     <a className="btn btn-ghost normal-case text-xl" href="#">
    //       <div class="avatar placeholder">
    //         <div class="bg-slate-700 text-neutral-content rounded-full w-10">
    //           <span class="text-xl">SK</span>
    //         </div>
    //       </div>
    //     </a>
    //   </div>
    //   <div className="flex-none">
    //     <div className="dropdown">
    //     <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //     </label>
    // <ul className="menu menu-horizontal p-0">
    //   <li tabIndex={0} className="text-lime-200">
    //     <a href="#">Theme</a>
    //     <ul className="p-2 bg-base-100 z-50">
    //       {themes.map((theme) => {
    //         return (
    //           <li key={theme.id} className="text-primary">
    //             <a
    //               href="#"
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setTheme(theme.value);
    //               }}
    //             >
    //               {theme.name}
    //             </a>
    //           </li>
    //         );
    //       })}
    //       <li>
    //         <a>Submenu 2</a>
    //       </li>
    //     </ul>
    //       </li>
    //       <li className="text-lime-200">
    //         <Scroll.Link
    //           to="projects"
    //           spy={true}
    //           smooth={true}
    //           offset={50}
    //           duration={500}
    //           delay={100}
    //         >
    //           Project
    //         </Scroll.Link>
    //       </li>
    //       <li className="text-lime-200">
    //         <Scroll.Link
    //           to="experiences"
    //           spy={true}
    //           smooth={true}
    //           offset={50}
    //           duration={500}
    //           delay={100}
    //         >
    //           Experience
    //         </Scroll.Link>
    //       </li>
    //       <li className="text-lime-200">
    //   <Scroll.Link
    //     to="skills"
    //     spy={true}
    //     smooth={true}
    //     offset={50}
    //     duration={500}
    //     delay={100}
    //   >
    //     Skills
    //   </Scroll.Link>
    //   {/* <a href="#skills">Skills</a> */}
    // </li>
    //     </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default NabBar;
