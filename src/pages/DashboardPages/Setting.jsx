import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bghero from "/bghero/bg-hero.png";
const Setting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={bghero}
        className="absolute top-0 right-0 lg:h-screen -z-50 w-96 lg:w-full"
      />
      <div className="flex items-center justify-center h-screen  pb-32 lg:pb-0">
        <div className="  border border-slate-500 rounded-md p-5  shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30 relative">
          <h1 className="text-2xl md:text-3xl text-white font-bold text-center mb-6">
            Şifreni Değiştir
          </h1>
          <Formik
            initialValues={{
              userName: "",
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              userName: Yup.string().required(
                "Kullanıcı adı alanı boş bırakılamaz"
              ),
              currentPassword: Yup.string().required("Eski Şifrenizi giriniz"),
              newPassword: Yup.string()
                .required("Şifre alanı boş bırakılamaz")
                .min(8, "Şifre en az 8 karakter olmalıdır")
                .matches(/[a-zA-Z]/, "Şifrede en az bir harf olmalıdır"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Şifreler uyuşmuyor")
                .required("Şifre tekrarı alanı boş bırakılamaz"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const token = localStorage.getItem("token");
                const headers = {
                  Authorization: `Bearer ${token}`,
                };

                const response = await axios.post(
                  "https://ecoqrcode.com/api/auth/changePassword",
                  values,
                  { headers }
                );
                console.log("values", values);
                navigate("/");
              } catch (error) {
                console.error("Error:", error);
                console.log("values", values);
              }
              setSubmitting(false);
            }}
          >
            <Form>
              <div className="flex-col justify-betweenmd:flex md:flex-col">
                <div className="relative my-4">
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Kullanıcı İsminiz"
                    className="block w-60 lg:w-80 py-1 pt-5 px-0 placeholder:text-black font-medium text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Eski Şifreniz"
                    className="block w-60 lg:w-80  py-1 pt-5 px-0 placeholder:text-black font-medium text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer"
                  />
                  <ErrorMessage
                    name="currentPassword"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Yeni Şifreniz"
                    className="block w-60 lg:w-80  py-1 pt-5 px-0 placeholder:text-black font-medium text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder=" Yeni şifrenizi tekrar giriniz"
                    className="block w-60 lg:w-80  py-1 pt-5 px-0 placeholder:text-black font-medium text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-black focus:border-purple-600 peer"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full font-medium mb-4 text-lg mt-6 rounded-full bg-purple-700 text-white hover:bg-purple-300 hover:text-black py-2 transition-colors duration-300"
              >
                Güncelle
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Setting;
