import React from "react";

function SidebarHighlight() {
  return (
    <div className="bg-warning p-3 rounded">
      <h5 className="text-white">🎤 BÀI PHÁT BIỂU</h5>
      <img
        src="/demo-article2.jpg"
        alt="Highlight"
        className="img-fluid my-2"
      />
      <p className="text-dark">
        Thủ tướng phát động phong trào thi đua 'Cả nước đổi mới sáng tạo'
      </p>
    </div>
  );
}

export default SidebarHighlight;
