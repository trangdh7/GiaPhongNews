import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/auth/LoginPage.module.css";
import logo from "@/assets/images/logo.png";
import { register } from "../data/Auth_API";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Bắt buộc nhập tên tài khoản"),
  full_name: Yup.string().required("Bắt buộc nhập họ và tên"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Bắt buộc nhập email"),
  password: Yup.string().required("Bắt buộc nhập mật khẩu"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
    .required("Bắt buộc nhập lại mật khẩu"),
  phone: Yup.string().required("Bắt buộc nhập số điện thoại"),
  birthdate: Yup.date().required("Bắt buộc nhập ngày sinh"),
  gender: Yup.string().required("Bắt buộc chọn giới tính"),
  address: Yup.string().required("Bắt buộc nhập địa chỉ"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    const cleanedValues = {
      ...values,
      username: values.username.trim(),
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      address: values.address.trim(),
    };

    try {
      await register(cleanedValues);
      navigate("/login", {
        state: { message: "Đăng ký thành công! Vui lòng đăng nhập." },
      });
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setErrors({ general: error.message || "Đăng ký thất bại" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Đăng ký</h2>

        <Formik
          initialValues={{
            username: "",
            full_name: "",
            email: "",
            password: "",
            confirm_password: "",
            phone: "",
            birthdate: "",
            gender: "",
            address: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting, errors }) => (
            <Form autoComplete="off">
              {errors.general && (
                <div className={styles.error} style={{ textAlign: "center" }}>
                  {errors.general}
                </div>
              )}

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Tên tài khoản</label>
                  <Field
                    name="username"
                    className={styles.input}
                    placeholder="Nhập tên tài khoản"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Họ và tên</label>
                  <Field
                    name="full_name"
                    className={styles.input}
                    placeholder="Nhập họ và tên"
                  />
                  <ErrorMessage
                    name="full_name"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Mật khẩu</label>
                  <Field
                    name="password"
                    type="password"
                    className={styles.input}
                    placeholder="Nhập mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Nhập lại mật khẩu</label>
                  <Field
                    name="confirm_password"
                    type="password"
                    className={styles.input}
                    placeholder="Xác nhận mật khẩu"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Số điện thoại</label>
                  <Field
                    name="phone"
                    className={styles.input}
                    placeholder="0123456789"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Ngày sinh</label>
                  <Field
                    name="birthdate"
                    type="date"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="birthdate"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Giới tính</label>
                  <div className={styles.radioGroup}>
                    <label>
                      <Field type="radio" name="gender" value="Nam" /> Nam
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="Nữ" /> Nữ
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="Khác" /> Khác
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label>Địa chỉ</label>
                <Field
                  name="address"
                  as="textarea"
                  className={styles.textarea}
                  placeholder="Nhập địa chỉ"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
              </button>
            </Form>
          )}
        </Formik>

        <p className={styles.redirectText}>
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}
