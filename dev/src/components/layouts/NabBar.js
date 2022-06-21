import React from 'react'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'

function NabBar() {
  return (
    <div className="navbar bg-transparent shadow-lg mb-20">
      <div className="flex-1">
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
          <li tabIndex={0}>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
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
  )
}

export default NabBar
