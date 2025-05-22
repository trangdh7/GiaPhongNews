import API_URL from "../data/BaseAPI";
import axios from "axios";

// login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
// data/Auth_API.js

export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, formData);

    // Kiểm tra nếu API trả về flag `success` hoặc `status` rõ ràng
    if (response.data?.success === false) {
      throw new Error(response.data.message || "Đăng ký thất bại");
    }

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Đăng ký thất bại";
    throw new Error(message);
  }
};
