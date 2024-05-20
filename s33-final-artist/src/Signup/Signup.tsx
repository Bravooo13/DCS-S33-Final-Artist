import React, { useState } from "react";
import "../../css/style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        username // Assuming you want to store username as displayName
      );

      await sendConfirmationEmail(userCredential.user);

      setSuccessMessage(
        "Sign up successful! Please check your email to confirm."
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const sendConfirmationEmail = async (user) => {
    try {
      console.log("Confirmation email sent to: ", user.email);
    } catch (error) {
      console.error("Error sending confirmation email: ", error);
    }
  };

  return (
    <div className="flex flex-col border border-solid border-gray-500 p-[50px] mx-[30px]">
      <div>Sign Up For Our Newsletter!</div>
      <div>
        Fill out the form below to receive interesting updates delivered
        straight to your inbox.
      </div>
      <form>
        <div>Email Address</div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
          className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
        />
        <div>Full Name</div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Full Name"
          value={username}
          className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
        />
        {error && <div className="text-red-500">{error}</div>}
        {successMessage && (
          <div className="text-green-500">{successMessage}</div>
        )}
        <button
          onClick={handleSignup}
          className="p-3 rounded-[8px] border-none text-white bg-bluish font-bold hover:cursor-pointer"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
