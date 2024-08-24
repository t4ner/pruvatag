import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pi7fqld", "template_pbhc8yg", form.current, {
        publicKey: "4z5ni50PSFSjcxbaE",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-posta başarıyla gönderildi!");
        },
        (error) => {
          toast.error("E-posta gönderirken bir hata oluştu!");
        }
      );
  };
  return (
    <div className="mt-12 mb-24 lg:mb-12 lg:py-12 px-2 lg:px-0">
      <ToastContainer />
      <div className="  mx-auto">
        <div className="border-2 border-purple-600 shadow-3xl  flex flex-col lg:flex-row  lg:w-[83%]  bg-white rounded-xl mx-auto overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/bghero/login.jpg')",
            }}
          >
            <h1 className="text-white text-3xl mb-3"></h1>
            <div>
              <p className="text-white opacity-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-purple-500 font-semibold opacity-0">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-4 lg:py-16 px-4 lg:px-12">
            <h2 className="text-3xl mb-4"> Bizimle iletişime geçin!</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  name="user_name"
                  placeholder="Adınız"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="email"
                  required
                  name="user_email"
                  placeholder="Mail adresiniz"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  required
                  id="name"
                  name="user_telephone"
                  placeholder="Telefon Numaranız"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <textarea
                  required
                  name="message"
                  placeholder="Mesajınız..."
                  style={{ height: "121px" }}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>

       
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-purple-500 py-3 text-center text-white"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
