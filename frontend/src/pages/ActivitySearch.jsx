import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ActivitySearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Adventure", "Culture", "Gastronomy", "Relaxation", "Photography"];

    return (
        <div className="bg-background text-on-surface antialiased min-h-screen relative pb-32">
            {/* Artistic Noise Overlay */}
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            {/* TopAppBar */}
            <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-display-lg">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile tracking-tight">Traveloop</Link>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        <nav className="flex gap-6">
                            <Link className="text-primary font-bold font-body-md transition-colors duration-300" to="/search">Explore</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/trips">Trips</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/saved">Saved</Link>
                        </nav>
                        <Link to="/profile" className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline/20">
                            <img 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9eoD7Ozp3y4sdpVxfweROXUZatFF2fd1mefeIQAfZXRFtJEMuF6_uXRTLqCvr88TzArP0UCwAIiZvFimwISGYL6fRrSfkKixyQmRFRKlZL9X_jix4KnXMeWBFhWxezOO6IT7ydWMsBVqvepPHUe0QJOPBhYda69Bk4kVQtq1XPooOBrAsz_Ztshsg4vLaYo1KZtYyJtbXbUCjfKBwiuerk-Q9pbc-7fNxaoPvs0-SXpEqHH8d2Vc7K11mKiz06mCiJu0Tnc-W_s"
                                alt="Profile"
                            />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <span className="material-symbols-outlined text-primary">menu</span>
                    </div>
                </div>
            </header>

            {/* Toolbar Row */}
            <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop mt-8 space-y-6 relative z-10">
                {/* Full-width Search Input */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input 
                        className="w-full bg-surface-container-high border border-white/5 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary-container/30 transition-all font-body-md outline-none" 
                        placeholder="Search activities, hidden gems, or city tours..." 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter/Sort/Group Pills */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                    <button className="flex items-center gap-2 bg-[#d1c4e9]/10 text-[#d1c4e9] border border-[#d1c4e9]/20 px-4 py-2 rounded-full font-body-sm whitespace-nowrap hover:bg-[#d1c4e9]/20 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter
                    </button>
                    <button className="flex items-center gap-2 bg-[#d1c4e9]/10 text-[#d1c4e9] border border-[#d1c4e9]/20 px-4 py-2 rounded-full font-body-sm whitespace-nowrap hover:bg-[#d1c4e9]/20 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">sort</span>
                        Sort by Price
                    </button>
                    <button className="flex items-center gap-2 bg-[#d1c4e9]/10 text-[#d1c4e9] border border-[#d1c4e9]/20 px-4 py-2 rounded-full font-body-sm whitespace-nowrap hover:bg-[#d1c4e9]/20 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">layers</span>
                        Group by Type
                    </button>
                </div>

                {/* Category Chips */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none border-b border-outline-variant/10">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`${activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'} px-6 py-2 rounded-full font-body-sm whitespace-nowrap transition-all active:scale-95`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Main Content: Activity Results */}
            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {/* Activity Card 1 */}
                    <article className="group bg-surface-container-high rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnG8dgdzN4ZEI2iA4z93eSNb2YTYrV6K7PSP7zT8zjHk2kONaF27dEUR-Hg4Vjv3_P_n-4lTCt8zgF1zLKSe7Y6cCycx83S05hRLqbJ5OUZY0FJ93PhNM6jEDgRG47M6IF8MWznkEhhQl4zCkwNf0Yxb48FKwogpiMCdVKZzmWrwSz7B17wv6uV44LaHNiIi0ynjkLrmQzYFLUIfEqkqOQrdgxJUwQ9aWq5RbonT92-IhwFIqpMRENVPEoGyEKtYRkEKb6MwtJb7s" alt="Cappadocia" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#d1c4e9]/90 text-[#311b92] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">Adventure</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface">Cappadocia Dawn Flight</h3>
                                <span className="font-label-mono text-primary-container text-lg">$280</span>
                            </div>
                            <Link to="/build" className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-body-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:shadow-lg hover:shadow-primary-container/20">
                                <span className="material-symbols-outlined">add</span>
                                Add to Itinerary
                            </Link>
                        </div>
                    </article>

                    {/* Activity Card 2 */}
                    <article className="group bg-surface-container-high rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQXSyujpq31ePWbJTy_UoLRZIP_tur_4C8eE0iU5qCONsmy1exJObksix91uRu0tJhxGRF1rSLiLpWDMCZlQLbmHea8xOQ9WeT60H0CRWJqr98_kp0XwXuPHPSQzsJYB13hdUzMPtmlf4nQWYKmaM1Oek44LUhkMVeir8x5pdB5pw28OGMsBRm2YX7xE6MN06FC4nXtBEP5bGP_Z44xvG3SlJw0YJxsrwJa5FZTIueyDn2V5v6M3vFsICaWLKNQIHGJzMGDScf2A" alt="Dining" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#d1c4e9]/90 text-[#311b92] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">Gastronomy</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface">Chef's Table in Paris</h3>
                                <span className="font-label-mono text-primary-container text-lg">$145</span>
                            </div>
                            <Link to="/build" className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-body-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:shadow-lg hover:shadow-primary-container/20">
                                <span className="material-symbols-outlined">add</span>
                                Add to Itinerary
                            </Link>
                        </div>
                    </article>

                    {/* Activity Card 3 */}
                    <article className="group bg-surface-container-high rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP2v36iidFBhNeKzeXORQ812k2g3qIRb7ZqtBJU8CGMj8moM6w8UmSE5Vu4t42Xc8Ogp3IY30c5AaS3MKTG06Z3_otiBVf1vhQRSk2d8ysHB2j4dJojALq-nLSuPTy4nhPcQx3ouU2ZI11dcCuh85ephNwgLuC3ljrc34MscxFEQ9-uW1q5AaEComW8-K_Yp0CK6rzfwRj0hpMwg1uoReY2K3weLlMDKeOlYOpZhLNqQWG8DKFFGliZCVef8Ta095Qee2PgbOAFYg" alt="Ubud" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#d1c4e9]/90 text-[#311b92] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">Culture</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface">Ubud Spiritual Journey</h3>
                                <span className="font-label-mono text-primary-container text-lg">$65</span>
                            </div>
                            <Link to="/build" className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-body-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:shadow-lg hover:shadow-primary-container/20">
                                <span className="material-symbols-outlined">add</span>
                                Add to Itinerary
                            </Link>
                        </div>
                    </article>

                    {/* Featured Experience Card */}
                    <article className="group bg-surface-container-high rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5 lg:col-span-2">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEyy3GjnkmV32eYmzR0Qaryjjna9gagRK1NM475tKn2lRmNJe6ngL3r4v7o_CjnWFirHMBD-OqJBc3UKgp9_io_q_zvRmVyz-WsjtHb1zKKUfniApLylTUadrV8MitP21U4gDhtyW0pLSzAQGv4ib5skBePbYjvao8E788dwuCEq41Ib0BdOKb1ONt0R08bOIgswlkq6gPXjPAi-Xdxkkev16Zpr1Lek1GFUaH690rKGh8aksqzWXlDAfElgoBtGydrcltCd3ZikQ" alt="Louvre" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-[#d1c4e9]/90 text-[#311b92] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">Featured Experience</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="space-y-2">
                                <h3 className="font-headline-md text-headline-md text-on-surface">Private Louvre Night Tour</h3>
                                <p className="text-on-surface-variant font-body-md max-w-md">Experience the world's most famous museum in complete solitude after hours with an expert curator.</p>
                            </div>
                            <div className="text-center md:text-right space-y-4 w-full md:w-auto">
                                <div className="font-label-mono text-primary-container text-3xl font-bold">$1,200</div>
                                <Link to="/itinerary/1" className="w-full bg-primary text-on-primary px-8 py-4 rounded-xl font-body-md font-bold hover:shadow-[0_0_24px_rgba(255,179,163,0.3)] transition-all active:scale-95 block text-center">
                                    Reserve Now
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Additional Card */}
                    <article className="group bg-surface-container-high rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGeRe4V6_LIHKTc7cv-b9H6RBm7okhqAVjyK8DmNGRvjlarWb8ewlk_uw1ck0VGnwV45ZCfHis3zbDmOixs8ff9-ueaP-7MGYVOQHlYpnwDMWetwINTBb7_jY5VC_DpcHhshYHXTOpJAI5L4AUrk2tPb6DyQ1eviWiidQ2KBwlv5B_xoarJvAfR6eA5YbTJCenjhDUbMtyxNXgUh1EsxuW4L296trW8uMD5UGNLsiUoYiihXm15sEHerzQXw-G3VsqITLGsoOCu7w" alt="London" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#d1c4e9]/90 text-[#311b92] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">Culture</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-headline-sm text-headline-sm text-on-surface">London History Walk</h3>
                                <span className="font-label-mono text-primary-container text-lg">$45</span>
                            </div>
                            <Link to="/build" className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-body-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:shadow-lg hover:shadow-primary-container/20">
                                <span className="material-symbols-outlined">add</span>
                                Add to Itinerary
                            </Link>
                        </div>
                    </article>
                </div>

                {/* Scroll Hint */}
                <div className="flex flex-col items-center justify-center mt-16 space-y-4 opacity-50">
                    <span className="font-body-sm text-on-surface-variant tracking-widest uppercase text-[10px]">Discover More</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
                    <span className="material-symbols-outlined text-primary animate-bounce">expand_more</span>
                </div>
            </main>

            {/* Mobile Nav Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] rounded-t-xl">
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 transition-all duration-200 scale-110" to="/search">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all" to="/trips">
                    <span className="material-symbols-outlined">map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all" to="/saved">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm tracking-wide">Saved</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </nav>
        </div>
    );
}
