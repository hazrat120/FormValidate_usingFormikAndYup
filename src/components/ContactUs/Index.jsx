import { registrationSchema } from "../Schemas/index2";
import styled from "./contact.module.css";
import { useFormik } from "formik";

const initialvalues = {
  name: "",
  email: "",
  department: "",
  available: "",
  comment: "",
};

const Index = () => {
  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: registrationSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className={styled.contactform}>
      <div className={styled.contact_wrapper}>
        <div className={styled.contact_text}>
          <h5>Contact Us</h5>
          <h3>Make an Appointment</h3>
        </div>

        <div className={styled.contact_form}>
          <form className={styled.form} onSubmit={handleSubmit} action="">
            <div className={styled.input_fild}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name"
                />
                {errors.name && touched.name ? (
                  <p className={styled.error}>{errors.name}</p>
                ) : null}
              </div>
              <div>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <p className={styled.error}>{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className={styled.select_fild}>
              <div>
                <select
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option className={styled.same} value="">
                    Please Select
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                </select>
                {errors.department && touched.department ? (
                  <p className={styled.error}>{errors.department}</p>
                ) : null}
              </div>

              <div>
                <select
                  name="available"
                  value={values.available}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option className={styled.same} value="4pm">
                    4:00 Available
                  </option>
                  <option value="5pm">5:00 Available</option>
                  <option value="6pm">6:00 Available</option>
                  <option value="7pm">7:00 Available</option>
                  <option value="8pm">8:00 Available</option>
                </select>
                {errors.available && touched.available ? (
                  <p className={styled.error}> {errors.available}</p>
                ) : null}
              </div>
            </div>

            <div>
              <textarea
                name="comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message"
              ></textarea>
              {errors.comment && touched.comment ? (
                <p className={styled.error}>{errors.comment}</p>
              ) : null}
            </div>
            <div className={styled.btn_wrap}>
              <button type="submit" className={styled.form_btn}>
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
