import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/auth/LoginPage.module.css";
import logo from "@/assets/images/logo.png";
import { register } from "../data/Auth_API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Bắt buộc nhập tên tài khoản"),
  fullname: Yup.string().required("Bắt buộc nhập họ tên"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Bắt buộc nhập email"),
  password: Yup.string()
    .min(8, "Tối thiểu 8 ký tự")
    .required("Bắt buộc nhập mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Bắt buộc xác nhận mật khẩu"),
  phone: Yup.string().required("Bắt buộc nhập số điện thoại"),
  birthday: Yup.date().required("Bắt buộc nhập ngày sinh"),
  gender: Yup.string().required("Chọn giới tính"),
  address: Yup.string().required("Bắt buộc nhập địa chỉ"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    try {
      const mappedData = {
        username: values.username,
        full_name: values.fullname,
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
        phone: values.phone,
        birthdate: values.birthday,
        gender: values.gender,
        address: values.address,
      };

      await register(mappedData);

      toast.success("Đăng ký thành công!", {
        position: "top-right",
        autoClose: 3000,
      });

      // ⏳ Chờ Toast hiển thị rồi mới chuyển trang
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      setErrors({ email: error.message || "Đăng ký thất bại" });
      toast.error(error.message || "Đăng ký thất bại", {
        position: "top-right",
        autoClose: 3000,
      });
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
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            birthday: "",
            gender: "",
            address: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Tên tài khoản</label>
                  <Field name="username" className={styles.input} />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Họ và tên</label>
                  <Field name="fullname" className={styles.input} />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Mật khẩu</label>
                  <Field
                    type="password"
                    name="password"
                    className={styles.input}
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
                    type="password"
                    name="confirmPassword"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.flexGroup}>
                <div className={styles.fieldGroup}>
                  <label>Email</label>
                  <Field type="email" name="email" className={styles.input} />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Số điện thoại</label>
                  <Field name="phone" className={styles.input} />
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
                  <Field type="date" name="birthday" className={styles.input} />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Giới tính</label>
                  <div role="group" className={styles.radioGroup}>
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
                  as="textarea"
                  name="address"
                  className={styles.textarea}
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
          Đã có tài khoản?{" "}
          <a href="/login" className={styles.link}>
            Đăng nhập
          </a>
        </p>
      </div>

      {/* Toast container dùng cho thông báo */}
      <ToastContainer />
    </div>
  );
}
