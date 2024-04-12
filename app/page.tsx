import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="navbar-container sticky top-0 z-50">
          <div className="navbar bg-[#5a63e0] text-white p-4 shadow-md flex justify-between items-center">
              <div className="logo text-3xl font-extrabold tracking-wider">
                  SocialNation
              </div>
              <div className="pages flex gap-6">
                  <Link href="/ContactUs"><div className="hover:text-[#5a63e0] hover:bg-white hover:cursor-pointer transition duration-200 font-semibold border border-white rounded-full px-4 py-2">Contact Us</div></Link>
                  <Link href="/login"><div className="hover:text-[#5a63e0] hover:bg-white hover:cursor-pointer transition duration-200 font-semibold border border-white rounded-full px-4 py-2">Log in / Sign up</div></Link>
              </div>
          </div>
      </div>

      <div className="Body pl-[10%] bg-gradient-to-r from-[#d9e3f7] to-[#bdc9fd] h-full text-black flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center md:items-start md:justify-center md:pr-8 mb-4 md:mb-0">
            <div className="text-center md:text-left mb-4">
                <h1 className="text-6xl font-extrabold mb-2">Welcome to SocialNation</h1>
                <p className="text-4xl">Where meaningful connections<br></br> blossom effortlessly</p>
            </div>
            <div>
                <Link href="/signup">
                    <button className="text-xl bg-[#5a63e0] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
        <div className="flex-1 mb-8 pr-[5%] md:mb-0">
            <img src="homepagePicture.png" alt="people chatting" className="rounded-lg shadow-xl h-full" />
        </div>
    </div>

  </div>

  )
}
