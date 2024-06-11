import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please enter your name!"),
  email: Yup.string().email().required("Please enter your email!"),
  department: Yup.string()
    .oneOf(["one", "two", "three", "four"], "Invalid option")
    .required("Please select option"),
  time: Yup.string()
    .oneOf(["4:00", "5:00", "6:00", "7:00"], "Invalid option")
    .required("Please select time"),
});
