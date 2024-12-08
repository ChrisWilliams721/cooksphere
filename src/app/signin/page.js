"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { gitHubSignIn, user } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      router.push("/"); // Redirect to the homepage after signing in
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded shadow-lg">
        {!user ? (
          <>
            <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
            <button
              onClick={handleSignIn}
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <p className="text-lg">You're already signed in!</p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
