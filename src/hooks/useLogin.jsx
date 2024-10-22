import { API_KEY, BASE_URL, END_POINT } from "@/helper/endpoint";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

const UseLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const header = {
      headers: {
        apiKey: `${API_KEY}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${BASE_URL.API}${END_POINT.LOGIN}`,
        formData,
        header
      );
      const token = response.data?.token;
      setCookie("token", token);
      setSuccess(true);
      setError("");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (e) {
      setSuccess(false);
      setError(e.response.data.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    success,
    error,
    isLoading,
    handleChange,
    handleLogin,
  };
};

export default UseLogin;
