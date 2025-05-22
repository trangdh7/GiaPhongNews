import React from "react";

const feedbackData = [
  {
    title: "Ảnh hưởng của biến đổi khí hậu đến đời sống nông dân miền Trung",
    feedback: [
      "Tiêu đề cần hấp dẫn hơn, làm nổi bật tác động cụ thể.",
      "Thiếu thông tin về thời gian và địa điểm trong phần dẫn nhập.",
      "Cần thêm 2 ý kiến người dân địa phương để tăng tính xác thực.",
    ],
    deadline: "17h hôm nay",
  },
  {
    title: "Sự hồi sinh của du lịch Đà Nẵng sau đại dịch",
    feedback: [
      "Bổ sung số liệu cụ thể về lượng khách du lịch.",
      "Trích dẫn từ đại diện sở du lịch sẽ tăng độ tin cậy.",
    ],
    deadline: "12h ngày mai",
  },
  // Bạn có thể thêm nhiều bài viết khác tại đây
];

function Feedback() {
  return (
    <div className="p-4 max-w-6xl mx-auto bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">
        Danh sách feedback từ Tổng biên tập
      </h2>
      <table className="w-full table-auto border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Bài viết</th>
            <th className="p-3 border">Feedback</th>
            <th className="p-3 border">Deadline chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border font-semibold">{item.title}</td>
              <td className="p-3 border">
                <ul className="list-disc list-inside space-y-1">
                  {item.feedback.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </td>
              <td className="p-3 border">{item.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Feedback;
