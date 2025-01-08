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
//             <span style={{ color: "#4caf50" }}>OTP</span> Verification
//           </h1>

//           {step === "phone" && (
//             <div className="phone-section">
//               <div
//                 className="icon-container"
//                 style={{ backgroundColor: "#e1f5fe", color: "#0288d1" }}
//               >
//                 <BsTelephoneFill size={30} />
//               </div>
//               <p className="phone-label" style={{ color: "#0288d1" }}>
//                 Enter your mobile number
//               </p>
//               <PhoneInput
//                 country={"in"}
//                 value={ph}
//                 onChange={setPh}
//                 inputStyle={{
//                   width: "100%",
//                   borderRadius: "8px",
//                   height: "45px",
//                   borderColor: "#4caf50",
//                   paddingLeft: "12px",
//                 }}
//               />
//               <button
//                 onClick={handlePhoneSubmit}
//                 className="submit-button flex items-center justify-center gap-2 mt-4"
//                 style={{
//                   backgroundColor: "#0288d1",
//                   color: "#fff",
//                   borderRadius: "8px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 {loading && <CgSpinner className="spinner" />}
//                 Send OTP
//               </button>
//             </div>
//           )}

//           {step === "otp" && (
//             <div className="otp-section">
//               <div
//                 className="icon-container"
//                 style={{ backgroundColor: "#f3e5f5", color: "#6a1b9a" }}
//               >
//                 <BsFillShieldLockFill size={30} />
//               </div>
//               <p className="otp-label" style={{ color: "#6a1b9a" }}>
//                 Enter the OTP sent to your phone
//               </p>
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
//                   border: "1px solid #6a1b9a",
//                   textAlign: "center",
//                 }}
//               />
//               <button
//                 onClick={handleOtpSubmit}
//                 className="submit-button flex items-center justify-center gap-2"
//                 style={{
//                   backgroundColor: "#6a1b9a",
//                   color: "#fff",
//                   borderRadius: "8px",
//                   padding: "10px 20px",
//                 }}
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

import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      },auth);
      
    }
  }

  // function onSignup() {
  //   setLoading(true);
  //   onCaptchVerify();

  //   const appVerifier = window.recaptchaVerifier;

  //   const formatPh = "+" + ph;

  //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //   .then((confirmationResult) => {
  //     window.confirmationResult = confirmationResult; 
  //     setLoading(false);
  //     setShowOTP(true);
  //     toast.success('OTP sended successfully!');
  //   }).catch((error) => {
  //      console.log(error)
  //      setLoading(false)
  //   });

  // }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();
  
    const appVerifier = window.recaptchaVerifier;
  
    const formatPh = "+" + ph;
  
    signInWithPhoneNumber(auth, formatPh, appVerifier) // Use formatPh instead of phoneNumber
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }


  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> CODE A PROGRAM
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default App;

