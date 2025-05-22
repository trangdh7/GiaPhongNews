const articles = [
  {
    id: 1,
    title: "Thủ tướng chủ trì phiên họp Chính phủ thường kỳ tháng 4",
    slug: "thu-tuong-hop-chinh-phu-thang-4",
    summary:
      "Phiên họp Chính phủ diễn ra tại Trụ sở Chính phủ, với sự tham gia của các Bộ trưởng và cơ quan Trung ương.",
    image:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/4/28/img2023-17458090238011395675936.jpg",
    content: `
      Sáng 24/4, tại Hà Nội, Thủ tướng Chính phủ Phạm Minh Chính chủ trì phiên họp Chính phủ thường kỳ tháng 4 để đánh giá tình hình kinh tế - xã hội.
      Thủ tướng yêu cầu các bộ ngành tập trung vào các nhóm giải pháp cụ thể nhằm thúc đẩy tăng trưởng GDP quý II/2025.
      Phiên họp nhấn mạnh vai trò của đổi mới sáng tạo và cải cách hành chính trong giai đoạn mới.
    `,
    date: "2025-04-24T09:00:00Z",
    views: 1200,
  },
  {
    id: 2,
    title: "Thủ tướng phát động phong trào thi đua toàn quốc",
    slug: "thu-tuong-phat-dong-thi-dua-toan-quoc",
    summary:
      "Hưởng ứng lời kêu gọi thi đua yêu nước, Thủ tướng kêu gọi toàn dân đoàn kết, đổi mới và sáng tạo.",
    image:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/4/28/img2023-17458090238011395675936.jpg",
    photoDescription:
      "Thủ tướng Phạm Minh Chính khẳng định Việt Nam coi Nhật Bản là một trong những đối tác tin cậy và quan trọng hàng đầu.",
    photoAuthor: "NguyenVanA",
    content: `
      <p>Chiều 23/4, tại Nhà hát Lớn Hà Nội, Thủ tướng Chính phủ phát động phong trào thi đua toàn quốc với thông điệp: "Toàn dân đổi mới sáng tạo, phát triển bền vững".</p>
      <p>Buổi lễ có sự tham gia của đại diện các ban ngành Trung ương, địa phương và đông đảo nhân dân.</p>
    `,
    date: "2025-04-23T15:30:00Z",
    author: "Nguyễn Văn A",
    views: 1500,
  },
  {
    id: 3,
    title: "Chính phủ họp bàn giải pháp ổn định giá xăng dầu",
    slug: "hop-ban-giai-phap-gia-xang-dau",
    summary:
      "Thủ tướng yêu cầu Bộ Công Thương phối hợp chặt chẽ để đảm bảo nguồn cung và bình ổn giá.",
    image:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/4/23/dhd1-17454103539721810380185.jpg",
    content: `
      <p>Ngày 22/4, tại Trụ sở Chính phủ, các thành viên Chính phủ họp bàn về tình hình giá xăng dầu trong nước và quốc tế.</p>
      <p>Thủ tướng yêu cầu đẩy mạnh kiểm tra, chống đầu cơ và đảm bảo nguồn cung ổn định.</p>
    `,
    date: "2025-04-22T13:00:00Z",
    author: "Trần Văn B",
    views: 800,
  },
  {
    id: 4,
    title: "Công bố kết quả kỳ thi THPT quốc gia năm 2025",
    slug: "ket-qua-thpt-2025",
    summary:
      "Bộ Giáo dục và Đào tạo chính thức công bố điểm thi trên toàn quốc, hơn 1 triệu thí sinh đã tra cứu kết quả.",
    image:
      "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/4/28/nxt1004-17458152091881316080278.jpg",
    content: `
      <p>Sáng 25/4, Bộ GD&ĐT công bố kết quả kỳ thi THPT Quốc gia. Tỷ lệ tốt nghiệp đạt 98,3%.</p>
      <p>Trang web của Bộ chịu tải cao nhưng vẫn hoạt động ổn định.</p>
    `,
    date: "2025-04-25T08:00:00Z",
    author: "Lê Thị Hồng",
    views: 2000,
  },
  {
    id: 5,
    title: "Hội nghị xúc tiến đầu tư vùng Đông Nam Bộ",
    slug: "xuc-tien-dau-tu-dong-nam-bo",
    summary:
      "Nhiều tập đoàn lớn tham dự hội nghị nhằm tìm kiếm cơ hội đầu tư chiến lược vào các tỉnh phía Nam.",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/28/dsc4337-17458444938301962104226-94-0-1094-1600-crop-17458445250041221533490.jpg",
    content: `
      <p>Hội nghị tổ chức tại Bình Dương với hơn 500 đại biểu trong và ngoài nước tham dự.</p>
      <p>Chính phủ cam kết cải thiện môi trường đầu tư và hỗ trợ doanh nghiệp phát triển bền vững.</p>
    `,
    date: "2025-04-20T10:00:00Z",
    author: "Nguyễn Thị Mai",
    views: 950,
  },
  {
    id: 6,
    title: "Kỷ niệm trọng thể 50 năm Giải phóng miền Nam, thống nhất đất nước",
    slug: "ky-niem-trong-the-50-nam-giai-phong-mien-nam-thong-nhat-dat-nuoc",
    summary:
      "Sáng 30/4, tại Thành phố Hồ Chí Minh, Ban Chấp hành Trung ương Đảng, Quốc hội, Chủ tịch nước, Chính phủ, Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và UBND Thành phố Hồ Chí Minh đã tổ chức trọng thể Lễ kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975-30/4/2025)",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/30/img2237-1745974233889993851264.jpg",
    content: `
      Là sự kiện lịch sử có ý nghĩa đặc biệt quan trọng, buổi lễ có sự tham dự của các đồng chí lãnh đạo cấp cao của Đảng, Nhà nước, Quốc hội, Chính phủ, MTTQ Việt Nam cùng các đại biểu trong và ngoài nước. Dự kiến, Tổng Bí thư Tô Lâm sẽ có bài diễn văn quan trọng; đại diện cựu chiến binh tham gia Chiến dịch Hồ Chí Minh và đại diện thế hệ trẻ phát biểu tại buổi lễ.
    `,
    date: "2025-04-30T14:00:00Z",
    views: 3000,
  },
];

export default articles;
