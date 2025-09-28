import Image from "next/image";

export default function UniversityLogin() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Section */}
      <div style={{ flex: 1, padding: "80px" }}>
         <Image src="/mainlogo.png" alt="Logo" width={300} height={300} />
        <h1 style={{ fontSize: "2.7rem", fontWeight: "bold", marginBottom: "30px" }}>
          Your internship journey starts here
        </h1>

        {/* Input for Batch Code */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontSize: "1.6rem",
              fontWeight: "500",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Enter batch code
          </label>
          <input
            type="text"
            placeholder="E.g. ABCD12345"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Card Container */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "15px",
            padding: "30px",
            backgroundColor: "#f9f9f9",
            marginBottom: "20px",
          }}
        >
          {/* Info text */}
          <p style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            Enter the batch code from your university's welcome email, or use the login link that must be provided.
          </p>
        </div>

        {/* Need help text */}
        <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
          Need help?{" "}
          <a
            href="mailto:support@virtualinternships.com"
            style={{ color: "#0070f3", textDecoration: "none", fontWeight: "500" }}
          >
            support@virtualinternships.com
          </a>
        </p>

        {/* Continue Button */}
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1.6rem",
            fontWeight: "600",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#0070f3", // Blue color
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Continue →
        </button>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src="/internship.png" alt="Internship" width={1000} height={1000} />
      </div>
    </div>
  );
}
