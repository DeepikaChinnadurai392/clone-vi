// pages/login.js
import { useState } from "react";
import Image from "next/image";
import { login } from "../utils/api";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("company"); // default option
  const [error, setError] = useState("");

  // ✅ Email validation
  const validateEmail = (email) => {
    const blockedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const domain = email.split("@")[1];
    return domain && !blockedDomains.includes(domain.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (option === "company" && !validateEmail(email)) {
      setError(
        "Only an official company email address can be used. Contact companysupport@virtualinternships.com for help."
      );
      return;
    }

    try {
      const result = await login(option, { email });
      console.log(result);
      setError("");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Section */}
      <div style={{ flex: 1, padding: "110px", backgroundColor: "#fff", position: "relative" }}>
        {/* Logo */}
        <Image
          src="/image copy 4.png"
          alt="Logo"
          width={200}
          height={110}
          style={{ position: "absolute", top: 20, left: 20 }}
        />

        <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "30px" }}>
          Access the company platform
        </h1>
        <p style={{ fontSize: "1.9rem", marginBottom: "30px" }}>
          Use your work email address to continue. Need an account? We’ll help you create one.
        </p>

        {/* Email login form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <input
            type="email"
            placeholder="example@yourcompany.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              fontSize: "1.8rem",
              borderRadius: "22px",
              border: "1px solid #524545ff",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1.8rem",
              fontWeight: "bold",
              backgroundColor: "#1a1c1fff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Continue with Email
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "1.5rem" }}>
            {error}
          </p>
        )}

        {/* Separator */}
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0", width: "100%" }}>
          <hr style={{ flex: 1, border: "1px solid #ccc" }} />
          <span style={{ margin: "0 10px", color: "#666" }}>or</span>
          <hr style={{ flex: 1, border: "1px solid #ccc" }} />
        </div>

        {/* Google login */}
        <button
          onClick={() => signIn("google")}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            backgroundColor: "#4285F4",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
          Tap into a global pool of remote interns
        </h2>
        <p style={{ fontSize: "1.6rem", marginBottom: "20px" }}>
          Find and connect with interns that fit your business needs.
        </p>
        <Image
          src="/companyimg.png"
          alt="Host Company"
          width={400}
          height={350}
          style={{ borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}
