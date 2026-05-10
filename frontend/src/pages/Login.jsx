import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../services/api';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await api.auth.login({ email, password });
            localStorage.setItem('traveloop_token', response.token);
            localStorage.setItem('traveloop_user', JSON.stringify(response.user));
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="w-full relative bg-[#0B1A2E] text-on-surface min-h-screen flex items-center justify-center overflow-hidden font-body-md selection:bg-primary-container selection:text-on-primary-container">
            {/* Design System Overlays */}
            <div className="fixed inset-0 grain-overlay z-10 pointer-events-none"></div>
            <div className="fixed inset-0 coral-glow z-0 pointer-events-none"></div>
            
            {/* Background Decorative Icons */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <span className="material-symbols-outlined absolute top-[10%] left-[15%] text-primary-container text-4xl transform -rotate-12">flight_takeoff</span>
                <span className="material-symbols-outlined absolute top-[60%] left-[5%] text-primary-container text-2xl transform rotate-45">flight</span>
                <span className="material-symbols-outlined absolute top-[25%] right-[10%] text-primary-container text-5xl transform -rotate-45">flight_takeoff</span>
                <span className="material-symbols-outlined absolute bottom-[15%] right-[20%] text-primary-container text-3xl transform rotate-12">flight</span>
                <span className="material-symbols-outlined absolute bottom-[40%] left-[25%] text-primary-container text-lg transform -rotate-90">flight</span>
            </div>

            <main className="relative z-20 w-full max-w-[520px] px-margin-mobile">
                <div className="glass-card rounded-[20px] p-lg md:p-xl shadow-2xl flex flex-col items-center">
                    {/* Logo Segment */}
                    <div className="flex items-center gap-2 mb-lg">
                        <span className="material-symbols-outlined text-primary-container text-3xl">flight_takeoff</span>
                        <span className="font-display-lg text-primary tracking-tight text-3xl">Traveloop</span>
                    </div>

                    {/* Profile Preview segment */}
                    <div className="relative mb-md">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary-container p-1">
                            <img 
                                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl" 
                                alt="Admin Profile" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWqAfR-3Jc93INKpE7VxY2xt9PL057eDt_VrFBoV3y49QQZPtn8WO8h6cs3BUU_0Bq9fPzyuidSRARI2Fn2uVQG8rPO3WXoiPSnLNOv7oWjA_kZeTwAIXijkdLeaYnAP1vyqnEWfzP5zUK8-igvDv0CgXLtIsxNQTn4zLMGX3D-_Bdd1Pfb-YgnLkGvimYsjKmyxzpC7BxN2mSjWSWlS95nQTK_iloN3vLkmhK1biia_C4H9ZvYNEb9mBe9ziALL3R5-k0YIwe6s"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary-container rounded-full p-1 border-2 border-[#0B1A2E]">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                    </div>

                    <h1 className="font-headline-md text-headline-md text-on-surface mb-xl text-center">Welcome Back</h1>
                    
                    <form className="w-full space-y-md" onSubmit={handleSubmit}>
                        {/* Email Input Segment */}
                        <div className="relative group">
                            <input 
                                className="peer w-full bg-surface-container border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                id="email" 
                                placeholder=" " 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label 
                                className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                        </div>

                        {/* Password Input Segment */}
                        <div className="relative group">
                            <input 
                                className="peer w-full bg-surface-container border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                id="password" 
                                placeholder=" " 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label 
                                className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <button className="absolute right-4 top-5 text-on-surface-variant hover:text-primary transition-colors" type="button">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <a className="text-body-sm text-primary hover:text-primary-container transition-colors font-medium" href="#">Forgot password?</a>
                        </div>

                        {error && (
                            <p className="text-error text-sm text-center font-bold tracking-tight bg-error/10 py-2 rounded-lg">{error}</p>
                        )}

                        <button 
                            className={`w-full bg-primary-container text-on-primary-container font-body-lg font-bold py-4 rounded-lg shadow-lg shadow-primary-container/20 hover:shadow-primary-container/40 hover:scale-[1.01] active:scale-95 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`} 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Login'}
                        </button>

                        <div className="relative py-4 flex items-center">
                            <div className="flex-grow border-t border-outline-variant/30"></div>
                            <span className="flex-shrink mx-4 text-label-mono text-on-surface-variant uppercase tracking-widest">or</span>
                            <div className="flex-grow border-t border-outline-variant/30"></div>
                        </div>

                        {/* Google Login button segment */}
                        <button 
                            className="w-full border-[1.5px] border-primary-container text-primary-container font-body-lg font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary-container/5 transition-colors group" 
                            type="button"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </form>

                    <p className="mt-xl text-body-sm text-on-surface-variant">
                        Don't have an account? 
                        <Link to="/register" className="text-primary hover:text-primary-container transition-colors font-bold ml-1">Create Account</Link>
                    </p>
                </div>

                <footer className="mt-md flex justify-center gap-md opacity-40">
                    <a className="text-label-mono hover:opacity-100 transition-opacity" href="#">Privacy</a>
                    <a className="text-label-mono hover:opacity-100 transition-opacity" href="#">Terms</a>
                    <a className="text-label-mono hover:opacity-100 transition-opacity" href="#">Support</a>
                </footer>
            </main>

            {/* Desktop Editorial sidebar Segment */}
            <div className="fixed bottom-margin-desktop left-margin-desktop hidden lg:block z-20">
                <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="h-[1px] w-12 bg-primary-container/30"></div>
                    <p className="text-label-mono uppercase tracking-[0.2em] text-[10px]">Curated by Traveloop Editorial</p>
                </div>
            </div>
        </div>
    );
}
