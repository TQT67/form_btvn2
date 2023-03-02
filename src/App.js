import { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    content: "",
    isRead: false,
    attachment: "",
  });

  const stringJson = JSON.stringify(values);
  return (
    <div className="container">
      <h1>Soạn thảo email</h1>
      <Formik
        initialValues={{ email: "", subject: "", content: "", isRead: false, attachment: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.subject) {
            errors.subject = "Required";
          }
          if (!values.content) {
            errors.content = "Required";
          }
          if (!values.attachment) {
            errors.attachment = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <p>Nhập email:</p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <div className="error">{errors.email}</div>}
            <br />
            <p>Nhập chủ đề:</p>
            <input
              type="subject"
              name="subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {errors.subject && touched.subject && <div className="error">{errors.subject}</div>}
            <br />
            <p>Nhập nội dung:</p>
            <input
              type="content"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            {errors.content && touched.content && <div className="error">{errors.content}</div>}
            <br />
            <p>Upload file đính kèm:</p>
            <input
              type="attachment"
              name="attachment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.attachment}
            />
            {errors.attachment && touched.attachment && (
              <div className="error">{errors.attachment}</div>
            )}
            <br />
            <br />
            <label>
              <input
                name="isRead"
                type="checkbox"
                checked={values.isRead}
                onChange={handleChange}
              />
              Tôi đã đọc và chấp nhận chính sách bảo mật:
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              Gửi
            </button>
          </form>
        )}
      </Formik>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}
