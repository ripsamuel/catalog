import { CiLocationOn } from "react-icons/ci";
import { FaReact, FaNodeJs, FaPython, FaCode, FaUsers, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between mt-2" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <a href="#">
          <span className="sr-only">Portafolio de Samuel</span>
          <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo" />
        </a>
      </div>
      <div className=" mdblock ml-10 pr-4 space-x-8">
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">About</a>
        <a href="#Proyects" className="font-medium text-gray-500 hover:text-gray-900">Projects</a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Contact</a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">CV</a>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="relative bg-white flex">
      <div className="">
        <div className="relative z-10  bg-white pb-8 w-full ">
          <Navbar />

          <main className="mt-10 flex w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className=" text-center justify-center">
              <h1 className="text-4xl mb-4 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Samuel Osorio </span>
                <span className="block text-indigo-600 xl:inline">@ripsamuel</span>
                <div className="text-xl font-normal text-gray-900 mt-2">
                  <span className="flex items-center gap-2">
                    <CiLocationOn className="w-5 h-5" />
                  </span>
                  <span>Colombia</span>
                </div>
              </h1>


              <div className="w-full  overflow-hidden">
                <p className="mt-3 font-medium text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl 
  break-words overflow-hidden w-full">
                  I am Web dev able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.

                  I have excellent design & coding skills, as well as an ability to convert requirements into exciting online applications.
                </p>
              </div>
              <div className="mt-8 ">
                <QuickFacts />
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
};

const Projects = () => {
  const redirectToPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>

      <section className="bg-white w-full py-16 px-4 sm:py-24 lg:px-8">
        <h2 id="Proyects" className="text-3xl font-extrabold tracking-tight text-gray-900">
          Last Projects
        </h2>

        {/* Ajuste para evitar scroll horizontal en móviles */}
        <div className="section_proyects grid grid-cols-1 sm:grid-cols-2 md:gap-4 ">
          <figure
            className="w-full cursor-pointer"
            onClick={() => redirectToPage('https://ripsamuel.github.io/Viento-Travel/index.html')}
          >
            <img
              className="w-full h-auto max-w-full object-cover rounded-lg shadow-md"
              src="../src/assets/img/352713540_553324033679483_2981095221770650334_n.png"
              alt="Project 1"
            />
          </figure>

          <figure
            className="w-full cursor-pointer"
            onClick={() => redirectToPage('https://ripsamuel.github.io/Viento-Travel/index.html')}
          >
            <img
              className="w-full h-auto max-w-full object-cover rounded-lg shadow-md"
              src="../src/assets/img/352713540_553324033679483_2981095221770650334_n.png"
              alt="Project 1"
            />
          </figure>
          <figure
            className="w-full cursor-pointer"
            onClick={() => redirectToPage('https://ripsamuel.github.io/Viento-Travel/index.html')}
          >
            <img
              className="w-full h-auto max-w-full object-cover rounded-lg shadow-md"
              src="../src/assets/img/352713540_553324033679483_2981095221770650334_n.png"
              alt="Project 1"
            />
          </figure>

          <figure
            className="w-full cursor-pointer"
            onClick={() => redirectToPage('https://zesty-banoffee-4c8ce9.netlify.app/')}
          >
            <img
              className="w-full h-auto max-w-full object-cover rounded-lg shadow-md"
              src="../src/assets/img/352762472_797184108753670_4898374992203178136_n.png"
              alt="Project 2"
            />
          </figure>
        </div>
      </section>
    </>

  );
};


const Contact = () => {
  return (
    <div className="bg-gray-50">
      <div className=" py-12 px-4 sm:px-6 ">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 ">
          <span className="block">Contact</span>
          <span className="block text-indigo-600">Keep in touch.</span>
        </h2>
      </div>
    </div>
  );
};

const QuickFacts = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg w-full ">
      <h2 className="text-lg  text-indigo-600 font-bold  flex items-center gap-2">
        <span>📌</span> Quick Facts
      </h2>
      <div className="flex gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg w-1/2">
          <p className="text-gray-400 text-sm">Age</p>
          <p className="text-white  text-lg">24 years</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg w-1/2">
          <p className="text-gray-400 text-sm">Experience</p>
          <p className="text-white font-bold text-lg">3 years</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Web Development", icon: <FaLaptopCode /> },
    { name: "Software Development", icon: <FaCode /> },
    { name: "ReactJs Programming", icon: <FaReact /> },
    { name: "Node backend Programming", icon: <FaNodeJs /> },
    { name: "Python backend Programming", icon: <FaPython /> },
    { name: "Good team player", icon: <FaUsers /> },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
      <div className="bg-gray-100 p-6 rounded-lg w-full mt-6">
        <h2 className="text-lg font-semibold text-indigo-600 flex items-center gap-2">
          <span>⚡</span> Skills
        </h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-1 rounded-lg"
            >
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
