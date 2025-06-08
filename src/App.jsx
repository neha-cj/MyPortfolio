import { FaGithub } from "react-icons/fa";
import { BsFolder2Open } from "react-icons/bs";
const projects = [
  {
    title: "ToDoApp",
    description:
      "An application created with a Flask and Supabase back-end and a javascript front-end.",
    tech: "Javascript, Python (Flask), SupaBase, HTML / CSS",
    github: "#",
  },
  {
    title: "BlogWebApplicatiton",
    description:
      "Website to create edit and delete blogs with Express.js",
    tech: "Javascript, HTML / CSS",
    github: "#",
  },
  {
    title: "BlockChain EVoting WebAppliaction",
    description:
      "Built and implemented an E – Voting System using Blockchain technology for conducting secure and efficient elections.",
    tech: "React, Solidity, Ganache, Truffle, Web3.js",
    github: "#",
  }
 
];

function App() {
  return (
    <>
      <nav className="px-4 py-3 flex justify-between items-center">
        <div className="text-xl">Neha C J</div>
        <ul className="flex space-x-6 font-medium">
          <li className="hover:text-[#e8b467] cursor-pointer">Home</li>
          <li className="hover:text-[#e8b467] cursor-pointer">About</li>
          <li className="hover:text-[#e8b467] cursor-pointer">Projects</li>
          <li className="hover:text-[#e8b467] cursor-pointer">Contact</li>
        </ul>
      </nav>

      <h1 className="text-7xl tracking-[0.2em] text-center mt-10">PORTFOLIO</h1>

      <div className="flex flex-col items-center justify-center mt-20 px-4">

        <div className="max-w-xl text-xl text-center md:text-left">
          <p>Hey this is Neha! I am passionate about FrontEnd WebDevelopment and problem solving.</p>
          <br/>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.
            <br/>Lorem Ipsum is simply dummy text.
          </p>
        </div>
      </div>

      <div className="px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        
        <div className="text-xl max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">ABOUT ME</h2>
            <p className="text-lg mb-4"> I am a BTech student currently pursuing Computer Science Engineering
            in Model Engineering College, Thrikkakara
            </p>
            <p className="mb-4">Here are some technologies I have been working with:</p>
            <div className=" text-xl grid grid-cols-2 gap-x-10 gap-y-2 mb-6 list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML and CSS</li>
              <li>Tailwind CSS</li>
            </div>
            <p className="text-sm">I also love Reading Books, Learning French and playing Acoustic Guitar (self taught)</p>
          </div>
          
          <div className="flex-shrink-0">
            <img
                src="bali.jpg"
                alt=" dummy Profile"
                className="rounded-xl w-72 h-72 object-cover shadow-lg"
            />
          </div>  
      </div>

      <section className="px-6 py-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#261a56] p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 relative"
          >
            <div className="flex justify-between items-center mb-4">
              <BsFolder2Open className="text-2xl" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#1e8186]"
              >
                <FaGithub className="text-xl"/>
              </a>
            </div>

            <h3 className="text-lg font-semibold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{project.description}</p>
            <p className="text-xs text-slate-500">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
      
    </>
  );
}


export default App
