import * as yup from "yup";

export const stepperValidation = yup.object().shape({
  linkId: yup.string().required("Sayfanızın URL'si gereklidir."),
  name: yup.string().required("Ad alanı gereklidir."),
  surname: yup.string().required("Soyad alanı gereklidir."),
  phoneNumber1: yup
    .string()
    .matches(/^\d+$/, "Telefon numarası sadece rakam içermelidir."),

  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta alanı gereklidir."),

  themeId: yup
    .number()
    .oneOf([1, 2], "Tasarım seçimi yapılmalıdır.")
    .required("Tasarım seçimi gereklidir."),
});
