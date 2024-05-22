import React, { useState } from "react";
import "../style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Button } from "@material-tailwind/react";

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
    <div className="flex flex-col items-center justify-center h-full pt-[75px]">
      <div className="w-[75%] border border-solid border-gray-500 rounded-[10px] p-[50px]">
        <div className="text-center mb-5 font-bold text-lg">
          Sign Up For Our Newsletter!
        </div>
        <div className="text-center mb-5">
          Fill out the form below to receive interesting artwork and poetry
          updates delivered straight to your inbox.
        </div>
        <form>
          <div className="mb-2">Email Address</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-black focus:outline-[1px] outline-gray-500 w-full"
          />
          <div className="mb-2">Full Name</div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Full Name"
            value={username}
            className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-black focus:outline-[1px] outline-gray-500 w-full"
          />
          {error && <div className="text-red-500 mb-5">{error}</div>}
          {successMessage && (
            <div className="text-green-500 mb-5">{successMessage}</div>
          )}
          <Button
            color="blue"
            variant="filled"
            size="lg"
            ripple={true}
            onClick={handleSignup}
            className="flex items-center gap-3"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
