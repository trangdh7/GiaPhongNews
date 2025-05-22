import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarMenuReporter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // giả lập đăng nhập

  const reporterBase = "/reporter";
  const menuItems = [
    { name: "Trang chủ", path: `${reporterBase}/home` },
    { name: "Bài viết của tôi", path: `${reporterBase}/my-articles` },
    { name: "Tạo bài viết", path: `${reporterBase}/create-article` },
    { name: "Media của tôi", path: `${reporterBase}/my-media` },
    { name: "Phản hồi", path: `${reporterBase}/feedback` },
    { name: "Tài liệu hướng dẫn", path: `${reporterBase}/guidelines` },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    // Giả lập đăng nhập
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
          </ul>

          {/* Login / Account section */}
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link text-white"
                    onClick={handleLogin}
                  >
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
                <Link
                  to="/account"
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Tài khoản
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/account">
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

export default NavBarMenuReporter;
