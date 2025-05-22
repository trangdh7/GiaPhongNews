import React, { useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaLock,
  FaUnlock,
  FaCommentDots,
  FaAddressCard,
  FaAddressBook,
} from "react-icons/fa";
import styles from "../../styles/editor/ManageReporter.module.css";
import { Link } from "react-router-dom";

function ManageReporter() {
  const [reporters, setReporters] = useState([
    {
      id: 1,
      avatar: "https://i.pravatar.cc/50?u=1",
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      phone: "0901234567",
      status: "active",
      departments:"sport",
      articles: 12,
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/50?u=2",
      name: "Trần Thị B",
      email: "b@gmail.com",
      phone: "0912345678",
      status: "locked",
      departments:"news",
      articles: 7,
    },
  ]);

  return (
    <div className={styles.container}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="🔍 Tìm kiếm phóng viên..."
          className={styles.searchInput}
        />
        <select className={styles.filterSelect}>
          <option value="">Tất cả chuyên mục</option>
          <option value="politics">Chính trị</option>
          <option value="sports">Thể thao</option>
        </select>
        <Link to="/editor/add-reporter" className={styles.addButton}>
        <button className={styles.addButton}><FaAddressBook/> Thêm phóng viên</button>
        </Link>
      </div>

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>SĐT</th>
            <th>Trạng thái</th>
            <th>Departments</th>
            <th>Số bài viết</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {reporters.map((r) => (
            <tr key={r.id}>
              <td>
                <img src={r.avatar} alt="avatar" className={styles.avatar} />
              </td>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>
                <span
                  className={
                    r.status === "active"
                      ? styles.statusActive
                      : styles.statusLocked
                  }
                >
                  {r.status === "active" ? "Đang hoạt động" : "Tạm khóa"}
                </span>
              </td>
              <td>{r.departments}</td>
              <td>{r.articles}</td>
              <td>
                <button title="Xem">
                  <FaEye />
                </button>
                <button title="Sửa">
                  <FaEdit />
                </button>
                <button title="Xóa">
                  <FaTrash />
                </button>
                <button title={r.status === "active" ? "Khoá" : "Mở khóa"}>
                  {r.status === "active" ? <FaLock /> : <FaUnlock />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {/* <div className={styles.pagination}>
        <button>&laquo;</button>
        <button className={styles.activePage}>1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;</button>
      </div> */}
    </div>
  );
}

export default ManageReporter;
