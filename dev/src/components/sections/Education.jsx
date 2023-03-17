import React from "react";

function Education() {
  return (
    <section className="lg:px-16 py-16" id="experiences">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Education & Experience
          </h1>
          <div style={{ width: "100%" }} className="mt-5 flex justify-center">
            <hr className="border-2 border-gray-500 w-24" />
          </div>
          <div className="grid lg:grid-cols-2 items-center justify-center mt-6">
            <div className="card bg-primary text-primary-content m-6">
              <div className="card-body">
                <div className="flex flex-row justify-between ">
                  <p>Capital Numbers Infotech</p>
                  <span className="ml-5">2022-2023</span>
                </div>
                <div className="">
                  <p>-Software Engineer</p>
                </div>
                <div className="">
                  <span>-work as full stack developer on vuejs laravel</span>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content m-6">
              <div className="card-body">
                <div className="flex flex-row justify-between ">
                  <p>Softsnare Technologies</p>
                  <span className="ml-5">2019-2022</span>
                </div>
                <div className="">
                  <p>-Software Engineer</p>
                </div>
                <div className="">
                  <span>-work as full stack developer on vuejs laravel react</span>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content m-6">
              <div className="card-body">
                <div className="flex flex-row justify-between ">
                  <p>Freelancing</p>
                  <span className="ml-5">2020-2022</span>
                </div>
                <div className="">
                  <p>-worked on end-to-end project explored android, react native, sharepoint with react typescript, asp.net core, WPF.net</p>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content m-6">
              <div className="card-body">
                <div className="flex flex-row ">
                  <p>Indra gandhi national open university</p>
                  <span className="ml-5">2016-2020</span>
                </div>
                <div className="">
                  <p>-Bachelor of computer application</p>
                </div>
                <div className="">
                    <p>-got Skills such as java, javascript, html, css, php</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
