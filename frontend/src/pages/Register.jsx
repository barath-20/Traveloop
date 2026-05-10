import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../services/api';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        location: '',
        password: 'password123' // Mock password as it's not in the UI yet
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await api.auth.register(formData);
            localStorage.setItem('traveloop_token', response.token);
            localStorage.setItem('traveloop_user', JSON.stringify(response.user));
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    return (
        <div className="w-full relative bg-background text-on-surface min-h-screen flex items-center justify-center p-6 overflow-x-hidden font-body-md">
            {/* Background Elements */}
            <div className="fixed inset-0 grain-texture z-0 pointer-events-none"></div>
            <div className="fixed inset-0 coral-glow z-0 pointer-events-none"></div>
            
            {/* Decorative Connectors */}
            <svg className="fixed inset-0 w-full h-full opacity-10 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100,200 C150,300 350,100 600,400 S950,700 1300,500" fill="none" stroke="#97d3b3" strokeWidth="2" />
                <path d="M1400,100 C1100,300 900,100 600,500 S200,800 -100,600" fill="none" stroke="#97d3b3" strokeWidth="2" />
            </svg>

            <main className="relative z-10 w-full max-w-[560px]">
                {/* Glassmorphism Card */}
                <div className="glass-card rounded-[24px] p-8 md:p-12 transition-all duration-500 hover:translate-y-[-4px]">
                    {/* Logo Row */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary-container text-[40px]">flight_takeoff</span>
                        <span className="font-display-lg text-primary text-3xl tracking-tight">Traveloop</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-headline-md text-on-surface mb-10 text-[28px] leading-tight">Create Your Account</h1>
                    
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Avatar Upload Zone */}
                        <div className="flex flex-col items-center mb-10">
                            <div className="relative group">
                                <div className="w-[100px] h-[100px] rounded-full border-2 border-dashed border-primary-container flex items-center justify-center bg-surface-container overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-surface-container-high cursor-pointer">
                                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">add_a_photo</span>
                                    <img 
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10" 
                                        alt="Traveler Profile" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-YjwIsR1rcfoapYgIwmbp4Je4PBMtbcQbZUUJ-48bHubOJYJp7e3SxMncqhU37UZD9kHnkVAmtMHVZUj4DPveTa-lFmKhqcTMFiFmFqcAvDNKUTM2QRgIBAVfaP-iuALdk_a1kDO6CN8BJZMMxj4C6q58zhKjWPM4y-ckMMQMft38CzqCBH052E-fHXE3Cgl2y5f1r27j-LlLH7Fd4jIQNkCtblf7UMcgkv2hoNonWI0cuK-YnglJC9-XU8GE0XkkVR0XV3Hp550"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary rounded-full p-1 shadow-lg">
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                </div>
                            </div>
                            <p className="font-body-sm text-on-surface-variant mt-3 uppercase tracking-[0.1em] text-[10px]">Upload Profile Picture</p>
                        </div>

                        {/* Input Grid - Single Column for better mobile/desktop consistency */}
                        <div className="grid grid-cols-1 gap-y-8">
                            {/* Name */}
                            <div className="relative group">
                                <input 
                                    className="peer w-full bg-surface-container/50 border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                    id="full_name" 
                                    placeholder=" " 
                                    type="text"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    required
                                />
                                <label 
                                    className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                    htmlFor="name"
                                >
                                    Full Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <input 
                                    className="peer w-full bg-surface-container/50 border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                    id="email" 
                                    placeholder=" " 
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label 
                                    className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Phone */}
                            <div className="relative group">
                                <input 
                                    className="peer w-full bg-surface-container/50 border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                    id="phone" 
                                    placeholder=" " 
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label 
                                    className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                    htmlFor="phone"
                                >
                                    Phone Number
                                </label>
                            </div>

                            {/* Location */}
                            <div className="relative group">
                                <input 
                                    className="peer w-full bg-surface-container/50 border-none rounded-lg px-4 pt-6 pb-2 text-on-surface focus:ring-1 focus:ring-tertiary transition-all outline-none" 
                                    id="location" 
                                    placeholder=" " 
                                    type="text"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                <label 
                                    className="absolute left-4 top-4 text-on-surface-variant font-body-sm transition-all pointer-events-none peer-focus:text-tertiary peer-focus:-translate-y-3 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90" 
                                    htmlFor="location"
                                >
                                    Current City
                                </label>
                            </div>
                        </div>

                        {/* Register Button */}
                        {error && (
                            <p className="text-error text-sm text-center font-bold tracking-tight bg-error/10 py-2 rounded-lg">{error}</p>
                        )}

                        <button 
                            className={`w-full bg-primary-container text-on-primary-fixed py-4 rounded-xl font-body-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,74,0.4)] active:scale-95 ${isLoading ? 'opacity-70' : ''}`} 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Register User'}
                            <span className="material-symbols-outlined">flight</span>
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-8 text-center">
                        <p className="font-body-sm text-on-surface-variant">
                            Already have an account? 
                            <Link to="/login" className="text-secondary hover:text-secondary-fixed transition-colors ml-1 font-medium">Log in here</Link>
                        </p>
                    </div>
                </div>

                {/* Footnote */}
                <p className="mt-6 text-center text-on-surface-variant/40 font-label-mono text-[10px] tracking-widest uppercase">
                    © 2024 Traveloop Concierge Services
                </p>
            </main>
        </div>
    );
}
