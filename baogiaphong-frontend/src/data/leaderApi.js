const leadershipData = [
  {
    name: "Đồng chí Đoàn Minh Huấn",
    position: "Bí thư Tỉnh ủy",
    image:
      "https://xdcs.cdnchinhphu.vn/446259493575335936/2024/8/3/123tolam-1722656424879316960876.jpg",
    level: 0,
    birthDate: "01/01/1960",
    hometown: "Hà Nội",
    ethnicity: "Kinh",
    profession: "Cử nhân chính trị",
    politicalTheory: "Cao cấp",
    positions: [
      "Ủy viên Ban Chấp hành Trung ương Đảng khóa X, XI, XII",
      "Bí thư Tỉnh ủy tỉnh Nghệ An",
    ],
    timeline: [
      { year: "2005", description: "Chủ tịch HĐND tỉnh Nghệ An" },
      { year: "2010", description: "Bí thư Tỉnh ủy tỉnh Nghệ An" },
    ],
  },
  {
    name: "Đồng chí Mai Văn Tuất",
    position: "Phó Bí thư Thường trực Tỉnh ủy\nChủ tịch HĐND tỉnh",
    image:
      "https://datafiles.chinhphu.vn/cpp/files/dlt/2021/04/phamminhchinh.jpg",
    level: 1,
    birthDate: "12/06/1965",
    hometown: "Hải Phòng",
    ethnicity: "Kinh",
    profession: "Cử nhân luật",
    politicalTheory: "Cao cấp",
    positions: [
      "Ủy viên Ban Chấp hành Trung ương Đảng khóa XI",
      "Chủ tịch HĐND tỉnh Hải Phòng",
    ],
    timeline: [
      { year: "2000", description: "Trưởng phòng pháp lý Hải Phòng" },
      { year: "2015", description: "Chủ tịch HĐND tỉnh Hải Phòng" },
    ],
  },
  {
    name: "Lương Cường",
    position: "Bí thư Trung ương Đảng, Thường trực Ban Bí thư",
    image:
      "https://tulieuvankien.dangcongsan.vn/Uploads/2024/8/6/17/dc-Luong-cuong.jpg",
    level: 0,
    birthDate: "15/8/1957",
    hometown: "Xã Dữu Lâu, thành phố Việt Trì, tỉnh Phú Thọ",
    ethnicity: "Kinh",
    profession: "Cử nhân xây dựng Đảng và chính quyền nhà nước",
    politicalTheory: "Cao cấp",
    positions: [
      "Ủy viên Ban Chấp hành Trung ương Đảng khóa XI, XII, XIII",
      "Bí thư Trung ương Đảng khóa XII, XIII",
      "Thường trực Ban Bí thư khóa XIII (đến 25/10/2024)",
      "Ủy viên Bộ Chính trị khóa XIII",
      "Đại biểu Quốc hội khóa XV",
      "Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam (từ tháng 10/2024)",
    ],
    timeline: [
      { year: "2002", description: "Chính ủy Quân đoàn 2" },
      { year: "2008", description: "Chính ủy Quân khu 3" },
      { year: "2009", description: "Tham gia lãnh đạo Ban Trung ương" },
    ],
  },
  {
    name: "Đồng chí Phạm Quang Ngọc",
    position: "Phó Bí thư Tỉnh ủy\nChủ tịch UBND tỉnh",
    image:
      "https://tulieuvankien.dangcongsan.vn/Uploads/2024/8/6/17/dc-Luong-cuong.jpg",
    level: 1,
    birthDate: "10/03/1968",
    hometown: "Hà Nội",
    ethnicity: "Kinh",
    profession: "Cử nhân Kinh tế",
    politicalTheory: "Cao cấp",
    positions: [
      "Ủy viên Ban Chấp hành Trung ương Đảng khóa XII",
      "Chủ tịch UBND tỉnh Quảng Bình",
    ],
    timeline: [
      { year: "2005", description: "Giám đốc Sở Tài chính tỉnh Quảng Bình" },
      { year: "2015", description: "Chủ tịch UBND tỉnh Quảng Bình" },
    ],
  },
  {
    name: "Ban Văn hóa",
    position: "Trưởng ban: Nguyễn Văn A",
    image:
      "https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/w800/uploaded/krigzmiahwkly8uzveukg/2020_05_08/nga_2_ykcp.jpg",
    level: 3,
    birthDate: "05/10/1975",
    hometown: "Thái Bình",
    ethnicity: "Kinh",
    profession: "Thạc sĩ Văn hóa",
    politicalTheory: "Cao cấp",
    positions: ["Trưởng ban Văn hóa tỉnh Quảng Ninh"],
    timeline: [
      { year: "2010", description: "Chủ tịch Hội Văn hóa tỉnh Quảng Ninh" },
      { year: "2015", description: "Trưởng ban Văn hóa tỉnh Quảng Ninh" },
    ],
  },
  {
    name: "Ban Phụ nữ",
    position: "Trưởng ban: Trần Thị B",
    image:
      "https://www.hoilhpn.org.vn/documents/1809139/0/PCT+lanphuong.jpg/9c2b5fff-91b0-4401-81bd-ba52bbd15712",
    level: 3,
    birthDate: "20/09/1980",
    hometown: "Quảng Nam",
    ethnicity: "Kinh",
    profession: "Thạc sĩ xã hội học",
    politicalTheory: "Cao cấp",
    positions: ["Trưởng ban Phụ nữ tỉnh Đắk Lắk"],
    timeline: [
      { year: "2012", description: "Giám đốc Trung tâm Phụ nữ Đắk Lắk" },
      { year: "2018", description: "Trưởng ban Phụ nữ tỉnh Đắk Lắk" },
    ],
  },
  {
    name: "Ban Quân Đội",
    position: "Trưởng ban: Nguyễn Văn A",
    image:
      "https://datafiles.chinhphu.vn/cpp/files/dlt/2021/12/phanvangiang.jpg",
    level: 3,
    birthDate: "05/10/1975",
    hometown: "Thái Bình",
    ethnicity: "Kinh",
    profession: "Thạc sĩ Văn hóa",
    politicalTheory: "Cao cấp",
    positions: ["Trưởng ban Văn hóa tỉnh Quảng Ninh"],
    timeline: [
      { year: "2010", description: "Chủ tịch Hội Văn hóa tỉnh Quảng Ninh" },
      { year: "2015", description: "Trưởng ban Văn hóa tỉnh Quảng Ninh" },
    ],
  },
  {
    name: "Ban Công An",
    position: "Trưởng ban: Nguyễn Văn A",
    image:
      "https://cdnimage.daihoidang.vn/t400x500/Media/Graphic/Profile/2024/10/20/luong-tam-quang-dai-tuong2.PNG",
    level: 3,
    birthDate: "05/10/1975",
    hometown: "Thái Bình",
    ethnicity: "Kinh",
    profession: "Thạc sĩ Văn hóa",
    politicalTheory: "Cao cấp",
    positions: ["Trưởng ban Văn hóa tỉnh Quảng Ninh"],
    timeline: [
      { year: "2010", description: "Chủ tịch Hội Văn hóa tỉnh Quảng Ninh" },
      { year: "2015", description: "Trưởng ban Văn hóa tỉnh Quảng Ninh" },
    ],
  },
  {
    name: "Xóm trưởng Xóm A",
    position: "Trưởng xóm: Nguyễn Văn D",
    image:
      "https://storage-vnportal.vnpt.vn/nbh-ubnd/sitefolders/root/2303/anh-lanh-dao/2019/pham-minh-thuong.jpg",
    level: 4,
    birthDate: "01/02/1970",
    hometown: "Hải Dương",
    ethnicity: "Kinh",
    profession: "Cử nhân Quản lý nhà nước",
    politicalTheory: "Cao cấp",
    positions: ["Trưởng xóm Xóm A, xã Đông Hải, tỉnh Hải Dương"],
    timeline: [
      { year: "2000", description: "Chủ tịch Hội Cựu Chiến binh xã Đông Hải" },
      { year: "2015", description: "Trưởng xóm Xóm A, xã Đông Hải" },
    ],
  },
  {
    name: "Tổ trưởng Tổ dân phố 1",
    position: "Tổ trưởng: Lê Thị E",
    image:
      "https://storage-vnportal.vnpt.vn/nbh-ubnd/sitefolders/ubnd-ninhbinhen/anh-lanh-dao/dinhthuyngan_new.jpg",
    level: 4,
    birthDate: "15/08/1985",
    hometown: "Bắc Giang",
    ethnicity: "Kinh",
    profession: "Cử nhân Kinh tế",
    politicalTheory: "Cao cấp",
    positions: ["Tổ trưởng Tổ dân phố 1, phường Phúc Xá, thành phố Hà Nội"],
    timeline: [
      { year: "2007", description: "Tổ trưởng Tổ dân phố 1, phường Phúc Xá" },
    ],
  },
];
export default leadershipData;
