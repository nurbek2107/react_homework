import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // Firebase auth o'zgartirilgan fayli
import useLogin from '../hooks/useLogin';

function Register() {
    const { signInWithGoogle } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Firebase orqali ro'yxatdan o'tish
            // Bu joyga siz kerakli ro'yxatdan o'tish funktsiyasini yozishingiz kerak
            // Masalan, useLogin hookdagi signInWithEmailAndPassword yoki boshqa bir metod
            // Agar signInWithEmailAndPassword yoki uning o'rniga boshqa bir funktsiya ishlatasiz

            // Misol uchun:
            // await registerWithEmailAndPassword(email, password);
            // yoki
            // await auth.createUserWithEmailAndPassword(email, password);

            // Muvaffaqiyatli ro'yxatdan o'tganda kerakli amalni bajaring (masalan, foydalanuvchini yo'naltiring)
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div id="register-popup" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close">
                        <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close popup</span>
                    </button>

                    <div className="p-5">
                        <h3 className="text-2xl mb-0.5 font-medium">Register</h3>
                        <p className="mb-4 text-sm font-normal text-gray-800">Create your account</p>

                        <div className="mt-7 flex flex-col gap-2">
                            <button onClick={signInWithGoogle} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px]" />
                                Continue with Google
                            </button>

                            {/* GitHub va LinkedIn uchun olingan to'g'ri tugmachalarni yozing */}

                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-[18px] w-[18px]" />
                                Continue with GitHub
                            </button>

                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="h-[18px] w-[18px]" />
                                Continue with LinkedIn
                            </button>
                        </div>

                        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                            <div className="h-px w-full bg-slate-200"></div>
                            OR
                            <div className="h-px w-full bg-slate-200"></div>
                        </div>

                        <form onSubmit={handleRegister} className="w-full">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                placeholder="Email Address"
                            />

                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                placeholder="Password"
                            />

                            <p className="mb-3 mt-2 text-sm text-gray-500">
                                <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a>
                            </p>

                            {error && <p className="text-red-500">{error}</p>}

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                            >
                                Continue
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-slate-600">
                            Already have an account? <a href="/login" className="font-medium text-[#4285f4]">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
