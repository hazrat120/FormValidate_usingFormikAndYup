import * as Yup from "yup";

export const registrationSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please enter your name!"),
  email: Yup.string().email().required("Please enter your email!"),
  department: Yup.string()
    .oneOf(
      ["option1", "option2", "option3", "option4", "option5"],
      "Invalid option"
    )
    .required("please select option!"),
  available: Yup.string()
    .oneOf(["4pm", "5pm", "6pm", "7pm", "8pm"], "Invalid option")
    .required("Please select "),
});
