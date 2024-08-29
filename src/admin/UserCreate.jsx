import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
const UserCreate = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen  ">
        <div className="bg-emerald-700  border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
            Kullanıcı Oluştur
          </h1>
          <Formik
            initialValues={{
              email: "",
              name: "",
              surname: "",
              password: "",
              username: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Geçerli bir email adresi girin")
                .required("Email alanı boş bırakılamaz"),
              name: Yup.string().required("İsim alanı boş bırakılamaz"),
              surname: Yup.string().required("Soyisim alanı boş bırakılamaz"),

              username: Yup.string().required(
                "Kullanıcı adı alanı boş bırakılamaz"
              ),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const response = await axios.post(
                  "https://ecoqrcode.com/api/auth/signup",
                  values
                );

                // Başarıyla kullanıcı oluşturulduysa, SweetAlert2 ile bilgi ver
                await Swal.fire({
                  title: "Başarılı!",
                  text: "Kullanıcı başarıyla oluşturuldu.",
                  icon: "success",
                  confirmButtonText: "Tamam",
                });

                // Formu sıfırla
                resetForm();
              } catch (error) {
                // Hata oluştuysa, SweetAlert2 ile hata mesajı ver
                await Swal.fire({
                  title: "Hata!",
                  text: "Kullanıcı oluşturulurken bir hata oluştu.",
                  icon: "error",
                  confirmButtonText: "Tamam",
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <Form>
              <div className="flex-col md:flex md:flex-row md:gap-10">
                <div className="relative my-4 pb-2">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="İsim"
                    className="block w-72 py-1 pt-5  px-0 placeholder:text-white font-medium  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Soyisim"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
              </div>
              <div className="flex-col md:flex md:flex-row md:gap-10">
                <div className="relative my-4">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Kullanıcı Adı"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
              </div>
              <div className="relative my-4">
                <Field
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Şifre"
                  className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm font-medium pt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full font-medium mb-4 text-lg mt-6 rounded-full bg-white hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              >
                Oluştur
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
