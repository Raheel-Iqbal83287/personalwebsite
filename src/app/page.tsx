

export default function Home() {
  return (
    <div className="container min-h-screen grid grid-cols-[22rem,1fr] border-">

    <div className="sidebar items-center justify text-center text-wrap bg-black">
      <img src="/PHOTO.JPG" width={150} height={150} className="icon rounded-full mx-auto flex mt-2" />

      <ul className="">
      <h1 className="text-3xl font-bold text-yellow-200 pt-4">Raheel Iqbal</h1>  

      <p className="text-white pt-6">Human Resource Professional</p>

      <p className="text-white pt-6">Master of Business Administration, KASB Institue of Technology Karachi (2009-2011)</p>
      
      <p className=" text-white pt-3">Master of Science (Human Resource Management), ILMA University Karachi (2018-2020)</p>

      <p className="text-white pt-6">CONTACT ME</p>
      </ul>
      
    </div>

    <div className="main items-center">
      <h1 className="text-2xl px-16 pt-8">ABOUT ME</h1>
      <p  className="text-justify pt-8 px-16">As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in human resource management. I am able to tacke complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.</p>

      <p className="text-justify pt-6 px-16">When I am not working, I love hiking, reading, and spending time with my friends and family, I believe that my determination can-do attitude, and hard work make me a true asset to any team</p>

      <div className="flex flex-row pt-8 px-16">
        <p className="basis-2/4 border bg-yellow-200 p-3">SOFT SKILLS</p>
        <p className="basis-2/4 border text-right bg-slate-100 p-3">HARD SKILLS</p>
      </div>

      <div className="px-16 pt-4">
        
        <div className="flex flex-row">
        <p className="border rounded-md bg-cyan-200 p-2">Active Listening</p>
        <p className="border rounded-md bg-cyan-200 p-2 mx-2">Effective Communication</p>
        </div>

        <div className="flex flex-row mt-2">
        <p className="border rounded-md bg-cyan-200 p-2">Collaboration</p>
        <p className="border rounded-md bg-cyan-200 p-2 mx-2">Teamwork</p>
        </div>

        <div className="flex flex-row mt-2">
        <p className="border rounded-md bg-cyan-200 p-2">Creative Problem Solving</p>
        <p className="border rounded-md bg-cyan-200 p-2 mx-2">Time management</p>
        </div>

      </div>

      <div className="flex flex-col px-16 pt-8">
        <p>PROFESSIONAL EXPERIENCE</p>

        <p className="border p-4 mt-4 bg-gray-100  shadow drop-shadow-2xl shadow-green-300">
          Assistant Manager, Trading Corporation of Pakistan (Pvt.) Ltd. (2005-Present)
        </p>

        <p className="border p-4 mt-4 bg-gray-100">
          Human Resource Division (2018-Present)

          <p className="mt-2">
            Court Cases, Legal Cases, Academic Record.
          </p>

        </p>

        <p className="border p-4 mt-4 bg-gray-100">
          Information Technology Cell (2016-2018)

          <p className="mt-2">
            Preparation of Payroll.
          </p>

        </p>

        <p className="border p-4 mt-4 bg-gray-100">
          Human Resource Division (2011-2016)

          <p className="mt-2">
            Disciplinary cases, Court Cases, Legal Cases, Academic Record.
          </p>

        </p>

        <p className="border p-4 mt-4 mb-8 bg-gray-100">
          Finance Division (2005-2011)

          <p className="mt-2">
            Commodity operation, billing to provincial governments, and other distributors. 
          </p>

        </p>

      </div>

    </div>

    </div>
  );
}
