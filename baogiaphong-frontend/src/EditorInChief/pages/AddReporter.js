import React, { useState } from "react";
import styles from "../../styles/editor/AddReporter.module.css";

function AddReporter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    status: "active",
    departments: "sport",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result, // Lưu đường dẫn ảnh tạm thời
        }));
      };
      reader.readAsDataURL(file); // Đọc file ảnh dưới dạng base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi formData lên server tại đây
    console.log("Submit data:", formData);

    alert("Phóng viên đã được thêm!");
  };

  return (
    <div className={styles.container}>
      <h2>➕ Thêm phóng viên mới</h2>
      <div className={styles.contentWrapper}>
        {/* Col-8: Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Họ tên:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Số điện thoại:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Ảnh đại diện:
            <input type="file" onChange={handleFileChange} />
          </label>

          <label>
            Trạng thái:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="active">Đang hoạt động</option>
              <option value="locked">Tạm khóa</option>
            </select>
          </label>

          <label>
            Chuyên mục:
            <select
              name="departments"
              value={formData.departments}
              onChange={handleChange}
            >
              <option value="sport">Ban Thể Thao</option>
              <option value="news">Ban Thời sự</option>
            </select>
          </label>

          <button type="submit" className={styles.submitBtn}>
            Lưu
          </button>
        </form>

        {/* Col-4: Preview */}
        <section className={styles.previewSection}>
          <h3>Xem trước thông tin</h3>
          <p>
            <strong>Họ tên:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Điện thoại:</strong> {formData.phone}
          </p>
          <p>
            <strong>Chuyên mục:</strong>{" "}
            {formData.departments === "sport" ? "Ban Thể Thao" : "Ban Thời sự"}
          </p>
          <p>
            <strong>Trạng thái:</strong>{" "}
            {formData.status === "active" ? "Đang hoạt động" : "Tạm khóa"}
          </p>
          {formData.avatar && (
            <img
              src={formData.avatar}
              alt="Avatar Preview"
              className={styles.avatarThumb}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default AddReporter;
