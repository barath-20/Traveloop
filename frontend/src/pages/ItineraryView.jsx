import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ItineraryView() {
    const { id } = useParams();

    return (
        <div className="bg-background text-on-background min-h-screen font-body-md selection:bg-primary-container selection:text-on-primary-container relative">
            {/* Artistic Noise Overlay */}
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            {/* Top AppBar */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-8 items-center">
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Explore</Link>
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/trips">Trips</Link>
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/feed">Community</Link>
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/profile">Profile</Link>
                        </nav>
                        <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden bg-surface-container-high">
                            <img 
                                alt="Profile" 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6VUg63HczXeuPkkmUC46Hehhe2JVfzG3KGkqUupO4OGGIWux7ZCikJ8FVn_D17_0GADvaEk8XGwgn4Wq1fpceruS13Ais2Y_fCHk9bRd6lQunWvaDj-Zoenx8lPgdQFUfN7a9pQ7PVc_FHLF43JYGLPBtII-O5UiSbAXh2PMCMt2JQvq3ZJMuNyj7fUgPS5P2hiVBBqdDfmk3j22cTTNxDrD8wdul9opdXkQte_tctYe1ASPOalewRvY-6yIlqvhcyt2olq3OiY"
                            />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg relative z-10">
                {/* Atmospheric Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] coral-glow opacity-30 -z-10 bg-primary-container/10 blur-[120px] rounded-full"></div>

                <div className="flex flex-col gap-lg mb-xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
                        <div>
                            <span className="font-label-mono text-[10px] text-primary-container tracking-[0.2em] mb-2 block uppercase">ITINERARY</span>
                            <h2 className="font-display-xl text-display-lg md:text-display-xl">Amalfi Coast Escape</h2>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                            <button className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-body-sm font-bold whitespace-nowrap shadow-lg shadow-primary-container/20 active:scale-95 transition-transform">Day 01</button>
                            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-body-sm hover:text-primary transition-colors whitespace-nowrap">Day 02</button>
                            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-body-sm hover:text-primary transition-colors whitespace-nowrap">Day 03</button>
                            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-body-sm hover:text-primary transition-colors whitespace-nowrap">Day 04</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                        {/* Timeline Column */}
                        <div className="lg:col-span-8 flex flex-col gap-12 relative">
                            {/* Activity 1 */}
                            <div className="relative group">
                                <div className="absolute left-[24px] top-[40px] bottom-[-48px] w-[2px] bg-gradient-to-b from-secondary to-transparent z-0"></div>
                                <span className="material-symbols-outlined absolute bottom-[-52px] left-[17px] text-secondary text-base">keyboard_double_arrow_down</span>
                                
                                <div className="ml-16 bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary-container/10 border border-white/5">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                            <img alt="Breakfast" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKs_s0U4QBXTi8GKF-SSKNcxxgJcYlL2_YEHc_BBVK9pZLdDM8h2B49L2SPERDCjQKt4ZsQffr5ucEpyBMy7waySHB2Gy-Wx7IYXYUISGhU2NfrBUj-eo-Dz_U_Kbp3PWDn_pIt_b_nArqTvstsjWtdT5jgHpfaLcHV0JBGy_lRrN1NJkQeuoPdBnFXgGZQkfcxkwQwN8oBtEWWFffbNdp0oIApsgIYIYI87CHjU4P3MA8sdpQYJE1MYfe8nP4MIq6H-OhkOsLe7M" />
                                        </div>
                                        <div className="md:w-2/3 p-6 flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="font-label-mono text-primary text-[10px] tracking-widest uppercase">09:00 AM — MORNING</span>
                                                    <h3 className="font-headline-sm text-on-surface mt-1">Sunrise Terrace Breakfast</h3>
                                                </div>
                                                <span className="material-symbols-outlined text-primary-container">restaurant</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md leading-relaxed">Indulge in artisanal pastries and locally sourced fruits while watching the golden light hit the cliffs of Positano.</p>
                                            <div className="flex gap-2 mt-2">
                                                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[11px] font-bold tracking-wider">GASTRONOMY</span>
                                                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] uppercase tracking-tighter">Hotel Le Sirenuse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity 2 */}
                            <div className="relative group">
                                <div className="absolute left-[24px] top-[40px] bottom-[-48px] w-[2px] bg-gradient-to-b from-secondary to-transparent z-0"></div>
                                <span className="material-symbols-outlined absolute bottom-[-52px] left-[17px] text-secondary text-base">keyboard_double_arrow_down</span>
                                
                                <div className="ml-16 bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary-container/10 border border-white/5">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                            <img alt="Boat Tour" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-BLONO7qR_Drgk_83vXDTrKIEu8UHdhJlyY8HCnK3bt1IHHFwdxmU2kzXl5yvNf6I0PzKRZDWDbejgIcBul60gEDKbQ5apUz1xdbZzaKuRw_dp_gcRXS931B2HMKyI_oQlh_G1AhdEKH3X7XxnbC0Pg0Qze2C-SDpkSTg7-eRULAPwYLbSKtYCepUfpqZ6Snx2dFZb6sTGY2kIHprEGVUbuvA1nbE_c9cfmQ2TIikC9wNN7Z8ppBsPJn6li_3V72_9GJ5wRcoZg0" />
                                        </div>
                                        <div className="md:w-2/3 p-6 flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="font-label-mono text-primary text-[10px] tracking-widest uppercase">11:30 AM — ADVENTURE</span>
                                                    <h3 className="font-headline-sm text-on-surface mt-1">Private Boat to Capri</h3>
                                                </div>
                                                <span className="material-symbols-outlined text-primary-container">sailing</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md leading-relaxed">A dedicated captain takes you on a bespoke tour through the Faraglioni rocks and hidden grottos.</p>
                                            <div className="flex gap-2 mt-2">
                                                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[11px] font-bold tracking-wider">PRIVATE</span>
                                                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px]">4 HOURS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity 3 */}
                            <div className="relative group">
                                <div className="ml-16 bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary-container/10 border border-white/5">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                            <img alt="Dinner" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuqIwO8MMgKHD2xfdCuCcz-uw0r7AnnnNU_BOUjfhasqTdKReE_ofltjHzEiIAmZcO9-UTN1OUJZH6zc9bPwIHfwbqGJ1dj6x0jJZA0_B_OTGnB2omoDZXyXdWiyaSheVzJlLubSGSelZHqTuFzqN2zOCj8GOVbpazXs7TlMCxuweYPdEQiQspdCz5TyqcCqmJV5kXUdQspmERaTQcfpTIvtJKzmx2P8ttHZ0G98ht93pYEzdBQfg3cN4erg1Qooi-LVYHc9-z1rs" />
                                        </div>
                                        <div className="md:w-2/3 p-6 flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="font-label-mono text-primary text-[10px] tracking-widest uppercase">08:00 PM — EVENING</span>
                                                    <h3 className="font-headline-sm text-on-surface mt-1">Michelin Star Dinner</h3>
                                                </div>
                                                <span className="material-symbols-outlined text-primary-container">nightlight</span>
                                            </div>
                                            <p className="text-on-surface-variant font-body-md leading-relaxed">Reserved seating at La Sponda, featuring 400 candles and world-class Mediterranean cuisine.</p>
                                            <div className="flex gap-2 mt-2">
                                                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[11px] font-bold tracking-wider">RESERVED</span>
                                                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px]">POSA POSA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-surface-container-high rounded-xl p-6 border border-white/5">
                                    <h4 className="font-display-lg text-headline-sm mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary-container">receipt_long</span>
                                        Daily Expenses
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center group">
                                            <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Breakfast Buffet</span>
                                            <span className="font-label-mono text-primary-container">€ 45.00</span>
                                        </div>
                                        <div className="flex justify-between items-center group border-t border-outline-variant/10 pt-4">
                                            <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Private Boat Charter</span>
                                            <span className="font-label-mono text-primary-container">€ 850.00</span>
                                        </div>
                                        <div className="flex justify-between items-center group border-t border-outline-variant/10 pt-4">
                                            <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Dining Reservation</span>
                                            <span className="font-label-mono text-primary-container">€ 320.00</span>
                                        </div>
                                        <div className="flex justify-between items-center group border-t border-outline-variant/10 pt-4">
                                            <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Local Transport</span>
                                            <span className="font-label-mono text-primary-container">€ 65.00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Map */}
                                <div className="bg-surface-container-high rounded-xl overflow-hidden border border-white/5">
                                    <div className="h-40 bg-surface-variant relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')] bg-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary-container rounded-full animate-pulse shadow-[0_0_15px_rgba(255,107,74,0.6)]"></div>
                                            <span className="font-label-mono text-[9px] bg-background/80 px-2 py-0.5 rounded mt-2">YOU ARE HERE</span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <span className="font-body-sm text-on-surface-variant">Positano, Italy</span>
                                        <button className="text-primary-container font-label-mono text-[11px] uppercase tracking-tighter hover:underline">View Map</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Sticky Bottom Bar */}
            <footer className="fixed bottom-0 left-0 w-full z-40 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] px-margin-mobile md:px-margin-desktop py-4">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-8 md:gap-16">
                        <div className="flex flex-col">
                            <span className="font-label-mono text-[10px] text-on-surface-variant/60 tracking-widest uppercase">DAY TOTAL</span>
                            <span className="font-label-mono text-xl text-primary-container">€ 1,280.00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-label-mono text-[10px] text-on-surface-variant/60 tracking-widest uppercase">TRIP BUDGET</span>
                            <span className="font-label-mono text-xl text-primary">€ 5,420 / € 8k</span>
                        </div>
                    </div>
                    <button className="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded-full font-body-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        Generate PDF Report
                    </button>
                </div>
            </footer>
            
            <div className="h-40 md:h-24"></div>
        </div>
    );
}
