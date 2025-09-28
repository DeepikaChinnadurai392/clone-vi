import Image from "next/image";
import Link from "next/link";

export default function Internship() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Section */}
      <div style={{ flex: 1, padding: "80px" }}>
       <Link href="/mainlogo.png">
       <Image 
         src="/mainlogo.png" 
         alt="Logo" 
         width={300} 
         height={250} 
         priority
       />
               </Link>
        <h1 style={{ fontSize: "2.7rem", fontWeight: "bold", margin: "20px 0" }}>
          Start your internship journey
        </h1>
        <p style={{ fontSize: "1.7rem", marginBottom: "20px" }}>
          And gain experience to be career-ready
        </p>
        <p style={{ fontSize: "1.8rem", marginBottom: "20px" }}>How are you applying?</p>

        {/* Horizontal separator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            width: "100%",
          }}
        >
          <hr style={{ flex: 1, border: "1px solid #ebe2e2ff" }} />
        </div>

        {/* Horizontal Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "50px" }}>
          {/* University Partner Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "50px 20px",
              border: "1px solid #ccc",
              borderRadius: "30px",
              backgroundColor: "#f9f9f9",
              transition: "0.3s",
            }}
          >
            <Link href="/university-login" passHref>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <Image src="/cap.png" alt="Graduation Cap" width={120} height={100} />
                <h2 style={{ marginLeft: "15px", fontSize: "1.8rem", fontWeight: "500" }}>
                  <b>University Partner</b>
                  <p>Select this if you are applying through your University's partnership with Virtual Internship</p>
                </h2>
              </div>
            </Link>

            {/* Buttons with gap */}
            <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
              <Link href="/special-program" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#ccd2d8ff",
                    color: "#242020ff",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/verify.png" alt="Verify" width={30} height={20} style={{ marginRight: "8px" }} />
                  Special Program
                </button>
              </Link>

              <Link href="/support" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#ccd2d8ff",
                    color: "#242020ff",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/hand.png" alt="Help" width={30} height={20} style={{ marginRight: "8px" }} />
                  Support & Assistance
                </button>
              </Link>
            </div>
          </div>

          {/* General Login Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px 20px",
              border: "1px solid #ccc",
              borderRadius: "30px",
              backgroundColor: "#f9f9f9",
              transition: "0.3s",
            }}
          >
            <Link href="/general-login" passHref>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <Image src="/user.png" alt="User Login" width={110} height={100} />
                <h2 style={{ marginLeft: "15px", fontSize: "1.8rem", fontWeight: "500" }}>
                  <b>General Login</b>
                  <p>Select this if you are a student applying independently</p>
                </h2>
              </div>
            </Link>

            {/* Buttons with gap */}
            <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
              <Link href="/flexible-start" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#ccd2d8ff",
                    color: "#242020ff",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/calender.png" alt="Calendar" width={30} height={20} style={{ marginRight: "8px" }} />
                  Flexible Start Date
                </button>
              </Link>

              <Link href="/global-opportunities" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#ccd2d8ff",
                    color: "#242020ff",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/global.png" alt="Global" width={30} height={20} style={{ marginRight: "8px" }} />
                  Global Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src="/internship.png" alt="Internship" width={1200} height={1100} />
      </div>
    </div>
  );
}
