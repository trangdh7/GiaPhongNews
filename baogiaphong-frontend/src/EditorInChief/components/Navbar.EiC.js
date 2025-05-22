import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarEiC() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Giả lập đăng nhập
  const navigate = useNavigate();
  const editorBase = "/editor";

  const menuItems = [
    { name: "Trang chủ", path: `${editorBase}` },
    { name: "Bài viết chờ duyệt", path: `${editorBase}/review-articles` },
    { name: "Tất cả bài viết", path: `${editorBase}/all-articles` },
    { name: "Quản lý phóng viên", path: `${editorBase}/reporters` },
    { name: "Chuyên mục", path: `${editorBase}/categories` },
    { name: "Phản hồi nội bộ", path: `${editorBase}/internal-feedback` },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-md bg-danger border-bottom">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0 gap-md-3">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className="nav-link fw-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Dropdown "Quản lí" */}
            <li className="nav-item dropdown">
              <a
                href="#/"
                className="nav-link dropdown-toggle fw-semibold text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quản lí chung
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Bộ máy tổ chức</li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`${editorBase}/manage-leader`}
                    onClick={() => setIsOpen(false)}
                  >
                    Xem Bộ máy tổ chức
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`${editorBase}/manage-leader/create`}
                    onClick={() => setIsOpen(false)}
                  >
                    Thêm Bộ máy tổ chức
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to={`${editorBase}/manage-banner`}
                    onClick={() => setIsOpen(false)}
                  >
                    Quản lý banner
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`${editorBase}/manage-graphic`}
                    onClick={() => setIsOpen(false)}
                  >
                    Quản lý đồ họa
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    Đăng nhập
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link text-white">
                    Đăng ký
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a
                  href="#/"
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tài khoản
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/editor/account">
                      Thông tin cá nhân
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarEiC;
