import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaCommentDots, FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ManageArticle() {
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-sm-6">
          <h3>Quản lý bài viết</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Table bordered hover responsive>
            <thead className="table">
              <tr>
                <th>STT</th>
                <th>Tên bài viết</th>
                <th>Người tạo</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hướng dẫn sử dụng ReactJS</td>
                <td>Nguyễn Văn A</td>
                <td>01/01/2023</td>
                <td>
                  <span className="text-success">Đã duyệt</span>
                </td>
                <td>
                  <Button variant="light" size="sm" title="Xem">
                    <FaEye />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Sửa">
                    <FaEdit />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Xóa">
                    <FaTrash />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Gửi phản hồi">
                    <FaCommentDots />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tìm hiểu về NodeJS</td>
                <td>Trần Thị B</td>
                <td>03/02/2023</td>
                <td>
                  <span className="text-warning">Chờ duyệt</span>
                </td>
                <td>
                  <Button variant="light" size="sm" title="Xem">
                    <FaEye />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Sửa">
                    <FaEdit />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Xóa">
                    <FaTrash />
                  </Button>{" "}
                  <Button variant="light" size="sm" title="Gửi phản hồi">
                    <FaCommentDots />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ManageArticle;
