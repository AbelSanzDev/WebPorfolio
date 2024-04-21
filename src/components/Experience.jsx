import React from "react";

const Experience = () => {
  return (
    <>
      <h1 className="text-center text-5xl md:text-8xl font-thin underline mt-[10rem] ">
        Experience
      </h1>
      <div className="mx-[5%]">
        <div className=" md:grid md:grid-cols-2 gap-4">
          <div className="">
            <div className=" mt-[5rem]">
              <div className="">
                <h1 className="text-4xl md:text-7xl font-thin ">
                  GRS Technologies
                </h1>
              </div>
              <div className="flex gap-2 mt-2">
                <img
                  className="w-[2rem]"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/d81bfgaubx7sj8yryc21.svg"
                  alt=""
                />
                <img
                  className="w-[2rem]"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/xu7lgqrnkamb4ou4r5gk.svg"
                  alt=""
                />
                <img
                  className="w-[2rem] p-1 bg-white rounded-full "
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/ktflyw7naz8lpnhit3r4.svg"
                  alt=""
                />
                <img
                  className="w-[2rem]"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/cc6jzzp7ddfddfj2sahb.svg"
                  alt=""
                />
                <img
                  className="w-[2rem]"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/u0ihmupvalerozvysubi.svg"
                  alt=""
                />
                <img
                  className="w-[2rem]"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713580561/Portfolio/svgTechnologies/ubiqzado4yik4ykerjtv.svg"
                  alt=""
                />
              </div>
              <section class="max-w-4xl mx-auto shadow-md rounded-lg mt-8">
                <h2 class="text-2xl font-semibold mb-4">
                  Entrepreneurship Experience: Co-founder and Developer at GRS
                  Technologies
                </h2>
                <p class="mb-4 text-xl font-thin">
                  As a co-founder and developer at GRS Technologies, I played a
                  pivotal role in establishing and operating a successful web
                  solutions company catering to other entrepreneurs. Our company
                  specialized in delivering cutting-edge solutions utilizing
                  technologies like React, PHP, MongoDB, SQL, and responsive web
                  design.
                </p>

                <h3 class="text-2xl font-semibold mb-2">
                  Key Responsibilities and Achievements:
                </h3>
                <ul class="list-disc text-xl ml-8 font-thin mb-4">
                  <li>
                    Co-founded GRS Technologies, providing innovative web
                    solutions tailored to entrepreneurs' needs.
                  </li>
                  <li>
                    Spearheaded development using React, PHP, and databases like
                    MongoDB/SQL.
                  </li>
                  <li>
                    Ensured exceptional user experience and modern design
                    principles.
                  </li>
                  <li>
                    Collaborated closely with clients, managing projects from
                    conception to completion.
                  </li>
                  <li>
                    Established strong client relationships, resulting in repeat
                    business.
                  </li>
                  <li>Demonstrated strong leadership and teamwork skills.</li>
                </ul>

                <h3 class="text-2xl font-semibold mb-2">
                  Technical Skills Utilized:
                </h3>
                <ul class="list-disc ml-8 text-xl font-thin mb-4">
                  <li>
                    Proficient in React, PHP, MongoDB, SQL, and responsive web
                    design.
                  </li>
                </ul>

                <p class="mb-0 text-xl font-thin">
                  <strong>GRS Technologies</strong> showcased my entrepreneurial
                  spirit and technical expertise, setting a solid foundation for
                  my professional career.
                </p>
              </section>
            </div>
          </div>
          <div className=" mt-[2rem] md:mt-[10rem]">
            {" "}
            <a
              className="underline text-blue-600 mb-1 text-xl font-thin"
              href="https://grstechs.com/"
              target="_blanck"
              rel="noopener noreferrer"
            >
              https://grstechs.com/
            </a>
            <embed
              className="mb-2 md:h-[100%] h-[20rem]"
              src={"https://grstechs.com/"}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 mt-[7rem]">
          <div>
            <h1 className="text-4xl md:text-7xl font-thin">
              Pueblo Bonito Emerald Bay Resort & Spa
            </h1>
            <ul class="list-disc pl-6 mt-4 text-xl font-thin">
              <li class="mb-4">
                Led the migration of legacy PHP 7.4 applications to PHP 8.2,
                ensuring compatibility and performance enhancements across
                multiple software modules.
              </li>
              <li class="mb-4">
                Collaborated with a team of 4 engineers to redesign and optimize
                backend systems.
              </li>
              <li class="mb-4">
                Developed and integrated new features using JavaScript and AJAX,
                improving user interactivity and real-time data processing on
                client applications.
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-4xl md:text-7xl font-thin">
              Pueblo Bonito Mazatlán Beach Resort
            </h1>
            <ul class="list-disc pl-6 mt-4 text-xl font-thin">
              <li class="mb-4">
                Supported the installation and configuration of software and
                hardware systems, including network printers, routers, and
                firewalls, ensuring seamless integration into existing
                infrastructure.
              </li>
              <li>
                Participated in daily system backup procedures and disaster
                recovery operations, contributing to the development of more
                robust data protection strategies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
