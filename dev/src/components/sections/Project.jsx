import React, { useState } from "react";
import { projects } from "../../data/db";


function ProjectCard({project}) {
    
    return (
      <>
        <div className={`card m-5 bg-base-300 shadow-xl`}>
          {/* <figure>
            <img
              src="wp.jpg"
              alt="Shoes"
            />
          </figure> */}
          <div className={`card-body`}>
            <h2 className="card-title">{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            {/* <div className="card-actions justify-end">
              <a href="#my-modal" className="btn btn-primary">More info</a>
            </div> */}
          </div>
        </div>
        </>
    )
}

function ProjectDescriptionModal({project, id}) {
    return (
        <div className="modal cursor-pointer " id={id}>
          <div className="modal-box relative w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="py-4">
              {project.berief}
            </p>
            <div className="modal-action">
              <label htmlFor={id} className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
    )
}

function Project() {

  return (
    <section className="lg:px-32 py-16 bg-base-200" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <div style={{ width: "100%" }} className="mt-5 flex justify-center">
            <hr className="border-2 border-gray-500 w-24" />
          </div>
          <div className="grid lg:grid-cols-3 items-center justify-center mt-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
                ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Project;
