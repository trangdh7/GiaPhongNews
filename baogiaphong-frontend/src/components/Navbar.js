import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/profile" },
    { name: "Bộ máy tổ chức", path: "/manage-leader" },
    { name: "Dịch Vụ công", path: "/direct" },
    { name: "Khoa Học", path: "/speech" },
    { name: "Thể thao", path: "/former" },
    { name: "Liên hệ", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

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
        </div>
      </div>
    </nav>
  );
}

export default NavBarMenu;
