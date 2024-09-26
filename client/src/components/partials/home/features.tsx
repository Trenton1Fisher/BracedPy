import SectionTitle from '../../ui/sectionTitle'

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-20 lg:py-28 flex flex-col items-center justify-center"
    >
      <div className="container">
        <SectionTitle
          title="Main Features"
          paragraph="Explore the unique capabilities of our Python-inspired compiler, designed for simplicity and efficiency."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div>
              <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  className="fill-current"
                >
                  <path
                    opacity="0.5"
                    d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                  />
                  <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
                </svg>
              </div>
              <h3 className="mb-5 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Crafted for Startups
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Designed with the unique needs of startups in mind, our compiler
                allows for rapid development and experimentation. Easily
                integrate features and get your product to market faster.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="fill-current"
                >
                  <path
                    opacity="0.5"
                    d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
                  />
                  <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
                </svg>
              </div>
              <h3 className="mb-5 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                High-quality Design
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Enjoy a polished and intuitive user experience with our
                thoughtfully crafted design. Simplified syntax and structure
                make it easier to learn and use, even for beginners.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                <svg
                  width="40"
                  height="45"
                  viewBox="0 0 40 45"
                  className="fill-current"
                >
                  <path
                    opacity="0.5"
                    d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
                  />
                  <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
                </svg>
              </div>
              <h3 className="mb-5 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Support for Semicolons and Brackets
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Our compiler embraces the familiarity of semicolons and
                brackets, making it easy for users transitioning from languages
                like JavaScript or C#. Write clean and structured code with
                confidence!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
