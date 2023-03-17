import React from "react";
import { skills } from "../../data/db";

function SkillItem({ name, icon }) {
  return (
    <div className="flex flex-row">
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: "80px" }}
      >
        <img
          alt={name}
          width={48}
          src={icon}
        />
        <p>{name}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <progress
          className="progress progress-secondary w-56 bg-gray-50"
          value="95"
          max="100"
        ></progress>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="lg:px-32 py-16" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Skills</h1>
          <div style={{ width: "100%" }} className="mt-5 flex justify-center">
            <hr className="border-2 border-gray-500 w-24" />
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center justify-center flex-wrap w-full">
                {skills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
