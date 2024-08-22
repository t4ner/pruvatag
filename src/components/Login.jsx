import React, { useState } from "react";
import loginImage from "/bghero/login.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ecoqrcode.com/api/auth/login",
        {
          usernameOrEmail: formData.email,
          password: formData.password,
        }
      );
      console.log(response);
      const token = response.data.token; // Sunucudan gelen token alanı buraya göre düzenlendiğini varsayıyorum
      console.log(token);
      if (!token) {
        throw new Error("Token not found in response");
      }

      // Tokenin doğru formatta olduğundan emin olun
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      localStorage.setItem("token", token);
      localStorage.setItem("email", decodedToken.sub);

      if (decodedToken.sub === formData.email) {
        navigate("/");
        setError(null);
      } else {
        setError("Kullanıcı adı veya şifre yanlış");
      }
    } catch (error) {
      setError("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex overflow-hidden">
        <div className="basis-1/2">
          <div>
            <div className="flex items-center justify-center h-screen">
              <div className="bg-gradient-to-l from-fuchsia-600 to-blue-600 pb-2 border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
                  Giriş yap
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="relative my-4 pb-2">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-72 py-1 pt-5  px-0  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:text-white focus:border-green-400 peer"
                    />
                    <label
                      htmlFor="email"
                      className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative my-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block w-72 py-1 pt-5 px-0  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:text-white focus:border-green-400 peer"
                    />
                    <label
                      htmlFor=""
                      className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
                    >
                      Şifre
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full mb-4 text-lg font-medium mt-6 rounded-full bg-white text-purple-600 hover:bg-gray-600 hover:text-white py-2 transition-colors duration-300"
                  >
                    Login
                  </button>
                </form>
                {error && (
                  <p className="text-white border-b-2 border-b-red-400 text-center py-2 font-semibold">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
