import React from "react";

function Contact() {
  return (
    <div className="mt-12 mb-24 py-24">
      <div className="  mx-auto">
        <div className="border-2 border-purple-600 shadow-3xl  flex flex-col lg:flex-row w-[85%]  bg-white rounded-xl mx-auto overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/bghero/login.jpg')",
            }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>

            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Firstname"
                className="border border-gray-400 py-1 px-2"
              />
              <input
                type="text"
                placeholder="Surname"
                className="border border-gray-400 py-1 px-2"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5 flex items-center">
              <input type="checkbox" className="border border-gray-400" />
              <span className="ml-2">
                I accept the{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
