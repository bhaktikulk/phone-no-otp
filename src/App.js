// import React, { useState } from "react";
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import OtpInput from "otp-input-react";
// import "./App.css";

// const App = () => {
//   const [step, setStep] = useState("phone"); // "phone" or "otp"
//   const [ph, setPh] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handlePhoneSubmit = () => {
//     if (ph) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         setStep("otp"); // Move to OTP form after phone submission
//       }, 1000); // Simulate a network request delay
//     } else {
//       alert("Please enter a valid phone number!");
//     }
//   };

//   const handleOtpSubmit = () => {
//     if (otp) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         alert("Mock: OTP verified successfully!");
//       }, 1000); // Simulate OTP verification
//     } else {
//       alert("Please enter the OTP!");
//     }
//   };

//   return (
//     <div className="app">
//       <section className="bg-gradient flex items-center justify-center">
//         <div className="auth-container card">
//           <h1 className="app-title">
//             OTP <span>Verification</span>
//           </h1>

//           {step === "phone" && (
//             <div className="phone-section">
//               <div className="icon-container">
//                 <BsTelephoneFill size={30} />
//               </div>
//               <p className="phone-label">Enter your mobile number</p>
//               <PhoneInput
//                 country={"in"}
//                 value={ph}
//                 onChange={setPh}
//                 inputStyle={{
//                   width: "100%",
//                   borderRadius: "8px",
//                   height: "45px",
//                   borderColor: "#4f46e5",
//                   paddingLeft: "12px",
//                 }}
//               />
//               <button
//                 onClick={handlePhoneSubmit}
//                 className="submit-button flex items-center justify-center gap-2 mt-4"
//               >
//                 {loading && <CgSpinner className="spinner" />}
//                 Send OTP
//               </button>
//             </div>
//           )}

//           {step === "otp" && (
//             <div className="otp-section">
//               <div className="icon-container">
//                 <BsFillShieldLockFill size={30} />
//               </div>
//               <p className="otp-label">Enter the OTP sent to your phone</p>
//               <OtpInput
//                 value={otp}
//                 onChange={setOtp}
//                 OTPLength={6}
//                 otpType="number"
//                 disabled={false}
//                 autoFocus
//                 className="otp-container mb-4"
//                 inputStyle={{
//                   width: "45px",
//                   height: "45px",
//                   margin: "0 5px",
//                   fontSize: "16px",
//                   borderRadius: "8px",
//                   border: "1px solid #4f46e5",
//                   textAlign: "center",
//                 }}
//               />
//               <button
//                 onClick={handleOtpSubmit}
//                 className="submit-button flex items-center justify-center gap-2"
//               >
//                 {loading && <CgSpinner className="spinner" />}
//                 Verify OTP
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import "./App.css";

const App = () => {
  const [step, setStep] = useState("phone"); // "phone" or "otp"
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = () => {
    if (ph) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep("otp"); // Move to OTP form after phone submission
      }, 1000); // Simulate a network request delay
    } else {
      alert("Please enter a valid phone number!");
    }
  };

  const handleOtpSubmit = () => {
    if (otp) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Mock: OTP verified successfully!");
      }, 1000); // Simulate OTP verification
    } else {
      alert("Please enter the OTP!");
    }
  };

  return (
    <div className="app">
      <section className="bg-gradient flex items-center justify-center">
        <div className="auth-container card">
          <h1 className="app-title">
            <span style={{ color: "#4caf50" }}>OTP</span> Verification
          </h1>

          {step === "phone" && (
            <div className="phone-section">
              <div
                className="icon-container"
                style={{ backgroundColor: "#e1f5fe", color: "#0288d1" }}
              >
                <BsTelephoneFill size={30} />
              </div>
              <p className="phone-label" style={{ color: "#0288d1" }}>
                Enter your mobile number
              </p>
              <PhoneInput
                country={"in"}
                value={ph}
                onChange={setPh}
                inputStyle={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "45px",
                  borderColor: "#4caf50",
                  paddingLeft: "12px",
                }}
              />
              <button
                onClick={handlePhoneSubmit}
                className="submit-button flex items-center justify-center gap-2 mt-4"
                style={{
                  backgroundColor: "#0288d1",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 20px",
                }}
              >
                {loading && <CgSpinner className="spinner" />}
                Send OTP
              </button>
            </div>
          )}

          {step === "otp" && (
            <div className="otp-section">
              <div
                className="icon-container"
                style={{ backgroundColor: "#f3e5f5", color: "#6a1b9a" }}
              >
                <BsFillShieldLockFill size={30} />
              </div>
              <p className="otp-label" style={{ color: "#6a1b9a" }}>
                Enter the OTP sent to your phone
              </p>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="otp-container mb-4"
                inputStyle={{
                  width: "45px",
                  height: "45px",
                  margin: "0 5px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #6a1b9a",
                  textAlign: "center",
                }}
              />
              <button
                onClick={handleOtpSubmit}
                className="submit-button flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#6a1b9a",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 20px",
                }}
              >
                {loading && <CgSpinner className="spinner" />}
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;

