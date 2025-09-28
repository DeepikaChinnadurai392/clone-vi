import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GeneralLogin() {
  const [email, setEmail] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert("Email login submitted: " + email);
    // You can connect this to your backend later
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Section */}
      <div style={{ flex: 1, padding: "80px" }}>
        <Image src="/mainlogo.png" alt="Logo" width={300} height={250} />
        <h1 style={{ fontSize: "2.7rem", fontWeight: "bold", margin: "20px 0" }}>
          Get experience that employers actually notice
        </h1>

        {/* Email Login Form */}
        <form onSubmit={handleEmailLogin} style={{ marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.6rem",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Continue with Email
          </button>
        </form>

        <p style={{ fontSize: "1.5rem", margin: "20px 0" }}>Or</p>

        {/* Continue with Google */}
        <button
          onClick={() => signIn("google")}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "1.6rem",
            fontWeight: "600",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4285F4",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/Google.png" alt="Google" width={30} height={30} style={{ marginRight: "10px" }} />
          Continue with Google
        </button>

        <p style={{ fontSize: "1.4rem", marginTop: "20px" }}>
          By continuing you are agreeing to Virtual Internships's{" "}
          <a href="/terms" style={{ color: "blue" }}>Terms of Use</a> &{" "}
          <a href="/privacy" style={{ color: "blue" }}>Privacy Policy</a> and confirming that you’re above 18 years of age.
        </p>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src="/internship.png" alt="Internship" width={1000} height={1000} />
      </div>
    </div>
  );
}
