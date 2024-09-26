export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 flex items-center justify-center">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className=" relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <img
                src="/code1.png"
                alt="code syntax image"
                className="rounded-lg drop-shadow-three block shadow-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Improved Code Readability
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  With a more defined structure, reading and maintaining code
                  becomes easier. Developers from various backgrounds will find
                  it simple to follow the flow of logic.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Intuitive and Familiar
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Whether you’re working on small scripts or large-scale
                  projects, this Python variant adapts seamlessly to your
                  workflow.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Efficient and Lightweight
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Designed with performance in mind, the compiler ensures that
                  your code runs efficiently, regardless of the size or
                  complexity of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        <LineWave />
      </div>
    </section>
  )
}

const LineWave = () => {
  return (
    <svg
      width="364"
      height="201"
      viewBox="0 0 364 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
        stroke="url(#paint1_linear_25:218)"
      />

      <circle
        opacity="0.8"
        cx="214.505"
        cy="60.5054"
        r="49.7205"
        transform="rotate(-13.421 214.505 60.5054)"
        stroke="url(#paint4_linear_25:218)"
      />
      <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
      <defs>
        <linearGradient
          id="paint0_linear_25:218"
          x1="184.389"
          y1="69.2405"
          x2="184.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_25:218"
          x1="156.389"
          y1="69.2405"
          x2="156.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_25:218"
          x1="125.389"
          y1="69.2405"
          x2="125.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_25:218"
          x1="93.8507"
          y1="67.2674"
          x2="89.9278"
          y2="210.214"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_25:218"
          x1="214.505"
          y1="10.2849"
          x2="212.684"
          y2="99.5816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint5_radial_25:218"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(220 63) rotate(90) scale(43)"
        >
          <stop offset="0.145833" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.08" />
        </radialGradient>
      </defs>
    </svg>
  )
}
