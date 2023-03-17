import React from "react";
import NavBar from "../../../src/components/layouts/NabBar";
function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60">
        <NavBar />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            I am <span className="text-primary">Sagar Karn</span>
          </h1>
          <p className="text-warning">Always making progress</p>
          <p className="mb-5">
            Learning, Exploring, and Creating Innovative Solutions.
          </p>

          <a className="btn btn-primary" href="mailto:sagarkarn333@gmail.com">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
