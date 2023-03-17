import React from "react";

function Section(props) {
  return (
    <section className={props.className} id={props.id}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">{props.title}</h1>
          <div style={{ width: "100%" }} className="mt-5 flex justify-center">
            <hr className="border-2 border-gray-500 w-24" />
          </div>
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default Section;
