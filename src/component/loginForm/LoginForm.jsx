
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLoginClick = async () => {
        if (!username || !password) {
            setError('نام کاربری و رمز عبور نباید خالی باشند');
            return;
        }

        try {
            // ارسال دادهها به سرور
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            console.log(response)

            if (response.ok) {
                onLogin();
            } else {
                setError('نام کاربری یا رمز عبور اشتباه است');
            }
        } catch (error) {
            setError('خطایی رخ داده است');
        }
    };

    const handleRegisterClick = async () => {
        if (!username || !email || !password) {
            setError('تمام فیلدها باید پر شوند');
            return;
        }

        try {
            // ارسال دادهها به سرور
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                onLogin();
            } else {
                setError('خطایی رخ داده است');
            }
        } catch (error) {
            setError('خطایی رخ داده است');
        }
    };

    return (
        <div className="login-form-container flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
            {error && <p className="text-red-500">{error}</p>}
            {isLogin ? (
                <div className="login-form w-full max-w-xs">
                    <h2 className="text-2xl font-bold mb-4">ورود</h2>
                    <input
                        type="text"
                        placeholder="نام کاربری"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="رمز عبور"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        onClick={handleLoginClick}
                    >
                        ورود
                    </button>
                    <p
                        onClick={toggleForm}
                        className="text-blue-500 mt-4 cursor-pointer hover:underline"
                    >
                        ثبت نام
                    </p>
                </div>
            ) : (
                <div className="register-form w-full max-w-xs">
                    <h2 className="text-2xl font-bold mb-4">ثبت نام</h2>
                    <input
                        type="text"
                        placeholder="نام کاربری"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="ایمیل"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="رمز عبور"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        onClick={handleRegisterClick}
                    >
                        ثبت نام
                    </button>
                    <p
                        onClick={toggleForm}
                        className="text-blue-500 mt-4 cursor-pointer hover:underline"
                    >
                        ورود
                    </p>
                </div>
            )}
        </div>
    );
}

export default LoginForm;