import './App.css'

function App() {
  return (
    <>
      <nav className="px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-[#d94a7c]">Neha C J</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Skills</li>
          <li className="hover:text-purple-600 cursor-pointer">Projects</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold text-center mt-10 text-[#d94a7c]">PORTFOLIO</h1>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 px-4">
        <div className="w-40 h-40 bg-gray-200 overflow-hidden mb-6 md:mb-0 md:mr-10">
          <img src="" alt="Profile" className="object-cover w-full h-full" />
        </div>

        <div className="max-w-xl text-center md:text-left">
          <p className="text-[#d94a7c]">
            Hey this is Neha! I am a BTech student currently pursuing Computer Science Engineering
            in Model Engineering College, Thrikkakara.
          </p>
          <br />
          <p className="text-[#d94a7c]">
            I am very excited to dive into the world of tech and software development.
            As of now I am learning new skills and exploring.
          </p>
        </div>
      </div>
    </>
  );
}


export default App
