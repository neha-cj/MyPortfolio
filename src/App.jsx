
function App() {
  return (
    <>
      <nav className="px-4 py-3 flex justify-between items-center">
        <div className="text-xl text-[#d94a7c]">Neha C J</div>
        <ul className="flex space-x-6 text-[#d94a7c] font-medium">
          <li className="hover:text-[#d94a7c] cursor-pointer">Home</li>
          <li className="hover:text-[#b7476e] cursor-pointer">Skills</li>
          <li className="hover:text-[#d94a7c] cursor-pointer">Projects</li>
          <li className="hover:text-[#d94a7c] cursor-pointer">Contact</li>
        </ul>
      </nav>

      <h1 className="text-7xl tracking-[0.2em] text-center mt-10 text-[#95556b]">PORTFOLIO</h1>

      <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-4">
        <div className="w-40 h-40 bg-gray-200 overflow-hidden mb-6 md:mb-0 md:mr-10">
          <img src="bali.jpg" alt="Profile" className="object-cover w-full h-full" />
        </div>

        <div className="max-w-xl text-xl text-center md:text-left">
          <p className="text-[#9b5c72]">
            Hey this is Neha! I am a BTech student currently pursuing Computer Science Engineering
            in Model Engineering College, Thrikkakara.
          </p>
          <br />
          <p className="text-[#a05f76]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.
            <br/>Lorem Ipsum is simply dummy text.
          </p>
        </div>
      </div>

      <div className="px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        
        <div className="text-xl max-w-2xl text-[#bb768e]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#95556b]">ABOUT ME</h2>
            <p className="text-lg mb-4"> I am passionate about FrontEnd WebDevelopment and problem solving.
            </p>
            <p className="mb-4">Here are some technologies I have been working with:</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 mb-6 text-sm list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML and CSS</li>
              <li>Tailwind CSS</li>
            </div>
          </div>
          {/*
          <div className="flex-shrink-0">
            <img
                src="/your-image-path.jpg"
                alt="Profile"
                className="rounded-xl w-72 h-72 object-cover shadow-lg"
            />
          </div>  */}
      </div>

      <div className="mt-40 text-center ml-20 text-[#95556b]">
        <h2 className="text-4xl mb-4 ">MY PROJECTS</h2>
        <div className="text-left">
          <h4 >BlockChain E – Voting System</h4>
            <p>Team Size: 4 Duration:2 Months </p>
            <p>Technologies Used: React, Solidity, Ganache, Truffle, Web3.js
                Built and implemented an E – Voting System using Blockchain technology for conducting secure and efficient elections.</p>
            <p>Repository Link: </p>
        </div>
      </div>
    </>
  );
}


export default App
