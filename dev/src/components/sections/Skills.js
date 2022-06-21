import React from 'react'

function Skills() {
  return (
    <section className="lg:px-32" id="skills">
      <div className="card">
        <div className="card-body">
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-2 border-gray-400"></div>
            <span class="flex-shrink mx-4 text-3xl">SKILLS</span>
            <div class="flex-grow border-2 border-gray-400"></div>
          </div>
          <div className="grid grid-rows-4 grid-flow-col gap-4 ">
            <div className="text-right">dotnet</div>
            <div className="text-right">Android</div>
            <div className="text-right">React</div>
            <div className="text-right">Laravel</div>
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value="755"
                class="range range-xs"
              />
              <div class="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value="755"
                class="range range-xs"
              />
              <div class="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value="555"
                class="range range-xs"
              />
              <div class="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value="455"
                class="range range-xs"
              />
              <div class="w-full flex justify-between text-xs px-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
