import React from "react";
import Header from "../../components/Header";
import NavBarMenuReporter from "./Navbar.reporter";

function HomeReporter() {
  return (
    <div>
      <div className="container mt-4">
        <h2>Chào mừng bạn, Phóng viên!</h2>
        <p>
          Hãy bắt đầu với bài viết đầu tiên của bạn hoặc xem lại bài viết gần
          đây.
        </p>
        {/* Thêm nội dung dashboard hoặc router outlet ở đây */}
      </div>
    </div>
  );
}

export default HomeReporter;
