// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig"; // Ensure the correct import path

// function useLogin() {
//     const handleLogin = async () => {
//         const provider = new GoogleAuthProvider();
//         try {
//             const result = await signInWithPopup(auth, provider);
//             const user = result.user;
//             console.log("User signed in: ", user); // Log user information
//         } catch (err) {
//             const errorMessage = err.message; // Corrected 'error' to 'err'
//             alert('Error: ' + errorMessage);
//         }
//     };

//     return { handleLogin }; 
// }

// export { useLogin };
