import React from "react";
import Section from "../layouts/Section";

function WhyWorkWithMe() {
  return (
    <Section className="lg:px-32 py-16 bg-base-200" title="About me">
      <div>
        <div className="grid lg:grid-cols-2">
          <div className="card bg-base-300 m-6">
            <div className="card-body">
              <h2 className="card-title">Why work with me ?</h2>
              <p className="text-left">
                My passion for coding, constant learning, and exploring new
                technologies enable me to create innovative solutions and
                contribute to a productive and positive work environment.
              </p>
            </div>
          </div>
          <div className="card bg-base-300 m-6">
            <div className="card-body">
              <h2 className="card-title">Why do i code ?</h2>
              <p className="text-left">
                I love the challenge of solving complex problems and bringing
                ideas to life through continuous learning and exploration of new
                technologies in a field that I am truly passionate about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyWorkWithMe;
