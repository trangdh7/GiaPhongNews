import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Tin tức");
  const [tags, setTags] = useState(["tag1"]);
  const [newTag, setNewTag] = useState("");
  const [status, setStatus] = useState("draft");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "" && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    // Gửi dữ liệu tới backend hoặc xử lý lưu trữ
    const formData = {
      title,
      description,
      content,
      category,
      tags,
      status: type === "publish" ? "public" : "draft",
      image,
    };
    console.log("Submitted: ", formData);
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Tạo bài viết mới</h3>

      <div className="mb-3">
        <label className="form-label">Tiêu đề bài viết</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mô tả ngắn</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nội dung</label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </div>

      <div className="mb-3">
        <label className="form-label">Ảnh đại diện</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Chuyên mục</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Tin tức">Tin tức</option>
            <option value="Phóng sự">Phóng sự</option>
            <option value="Phân tích">Phân tích</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Thẻ</label>
          <div className="d-flex align-items-center gap-2">
            <input
              type="text"
              className="form-control"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Thêm thẻ..."
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddTag}
            >
              +
            </button>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Trạng thái</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            checked={status === "draft"}
            onChange={() => setStatus("draft")}
          />
          <label className="form-check-label">Nháp</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            checked={status === "public"}
            onChange={() => setStatus("public")}
          />
          <label className="form-check-label">Công khai</label>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-danger"
          onClick={(e) => handleSubmit(e, "draft")}
        >
          Lưu nháp
        </button>
        <button
          className="btn btn-danger"
          onClick={(e) => handleSubmit(e, "publish")}
        >
          Xuất bản
        </button>
        <button className="btn btn-secondary" type="button">
          Hủy
        </button>
      </div>
    </div>
  );
}

export default CreateArticle;
