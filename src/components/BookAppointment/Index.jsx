import { signUpSchema } from "../Schemas";
import styled from "./bookappointment.module.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  department: "",
  time: "",
};
const Index = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Value:" + values);
        action.resetForm();
      },
    });

  return (
    <div className={styled.bookform}>
      <div className={styled.form_wrapper}>
        <div className={styled.form_img}>
          <img src="/public/images/contact-cover-1.png" alt="cover-img" />
        </div>

        <div className={styled.form_top}>
          <h3>Book Appointment</h3>
          <form action="" onSubmit={handleSubmit} className={styled.form}>
            <div className={styled.form_control}>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full Name"
              />
              {errors.name && touched.name ? (
                <p className={styled.error}>{errors.name}</p>
              ) : null}
            </div>

            <div className={styled.form_control}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="example@gmail.com"
              />
              {errors.email && touched.email ? (
                <p className={styled.error}>{errors.email}</p>
              ) : null}
            </div>

            <div className={styled.form_control}>
              <label htmlFor="department">Departement</label>
              <select
                name="department"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Please Select</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
              </select>
              {errors.department && touched.department ? (
                <p className={styled.error}>{errors.department}</p>
              ) : null}
            </div>

            <div className={styled.form_control}>
              <label htmlFor="time">Time</label>
              <select
                name="time"
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="4:00">4:00 Avaiable</option>
                <option value="5:00">5:00 Avaiable</option>
                <option value="6:00">6:00 Avaiable</option>
                <option value="7:00">7:00 Avaiable</option>
              </select>
              {errors.time && touched.time ? (
                <p className={styled.error}>{errors.time}</p>
              ) : null}
            </div>

            <div className={styled.forbtn}>
              <button type="submit">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
