import React from 'react';
import { Link } from 'react-router-dom';

export default function MainDashboard() {
    return (
        <div className="bg-background text-on-surface font-body-md overflow-x-hidden relative min-h-screen">
            <div className="fixed inset-0 grain z-50 pointer-events-none"></div>
            
            {/* TopAppBar */}
            <header className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-headline-md">flight_takeoff</span>
                        <h1 className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-primary font-bold font-body-md hover:text-primary transition-colors duration-300" to="/">Explore</Link>
                        <Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" to="/trips">Trips</Link>
                        <Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" to="/saved">Saved</Link>
                        <Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" to="/profile">Profile</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">search</button>
                        <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5">
                            <img 
                                alt="User Profile" 
                                className="w-full h-full rounded-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANJ4g3PihDEVK-hMCYIbBQFPWWTY4cyp6BiJrywqraoK858QlNamEXDGq7Bkxd9mpLsv2YYBoBlWyVp4Cz9m8kOxFD4Ed7kLvpJzqsvF6o_NCG25zTPsCGJrjI3NloA0QLGj0ejihmq73rvnVK-0h8gNhXHSnSSl9lvufSmdLp-HXuLKdeU8DqhswV5EodnMTOypDdZoeFiMR5UZGqG-NYGDx0QNXqMoadqqknvOFyiHTvuYMxZHCBVaiE7BgyzFDQ-V8C9OFZvzw"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Filter Toolbar */}
            <div className="sticky top-[72px] z-30 bg-background/60 backdrop-blur-md py-3 border-b border-outline-variant/10">
                <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop flex gap-3 overflow-x-auto hide-scrollbar">
                    <button className="px-5 py-1.5 rounded-full bg-primary-container text-on-primary font-body-sm whitespace-nowrap shadow-lg shadow-primary-container/20">All Regions</button>
                    <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-secondary font-body-sm whitespace-nowrap transition-all">Europe</button>
                    <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-secondary font-body-sm whitespace-nowrap transition-all">Asia</button>
                    <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-secondary font-body-sm whitespace-nowrap transition-all">South America</button>
                    <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-secondary font-body-sm whitespace-nowrap transition-all">Africa</button>
                    <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-secondary font-body-sm whitespace-nowrap transition-all">Oceania</button>
                </div>
            </div>

            <main className="mt-8 pb-32 max-w-[1200px] mx-auto">
                {/* Hero Banner aligned with layout */}
                <section className="px-margin-mobile md:px-margin-desktop mb-12">
                    <div className="h-[280px] w-full rounded-3xl hero-mesh relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <h2 className="relative z-10 font-display-xl text-white text-display-lg-mobile md:text-display-xl mb-4 drop-shadow-lg">Where to next?</h2>
                        <div className="relative z-10 w-full max-w-md px-6">
                            <Link to="/search" className="flex items-center bg-surface-container-low/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-inner shadow-white/5 hover:bg-surface-container-low transition-all">
                                <span className="material-symbols-outlined px-3 text-primary">search</span>
                                <div className="bg-transparent border-none focus:ring-0 w-full text-on-surface-variant font-body-md py-2">Search cities, countries...</div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Top Regional Selections */}
                <section className="mb-12">
                    <div className="px-margin-mobile md:px-margin-desktop flex justify-between items-end mb-6">
                        <div>
                            <span className="font-label-mono text-tertiary uppercase tracking-widest mb-1 block">Curated for you</span>
                            <h3 className="font-headline-md text-on-surface">Top Regional Selections</h3>
                        </div>
                        <Link to="/search" className="flex items-center gap-1 text-primary font-body-sm hover:underline">
                            View all <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </Link>
                    </div>
                    <div className="flex overflow-x-auto hide-scrollbar gap-6 px-margin-mobile md:px-margin-desktop">
                        {/* Card 1 */}
                        <Link to="/itinerary/1" className="flex-shrink-0 w-[150px] md:w-[180px] group cursor-pointer">
                            <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary-container transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg">
                                <img 
                                    alt="Paris" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAhhCowp-Qe2POSj5hPXAf_pKlvS7Do_kEOqYJN-nHauk1gVhnba2l4Ng0SrxpbNEhQOpHBE55hUUiZgEw7bqwokvowliFpQ4r1s-A9O1485PTmC8OzIVVGVwFidvfVGYh6jpDvhvblhASY3Mn1Gh5qpzXht38kgRQWuJHryUp-MYSdCBqYm992Cl03e4inYlVOyKvtQl1el938nezqObAPDAuNazRReVNOchhudWvaFnUPt-sjXHYVe9ClENGK9LMOiNibXAhtUI"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-3 left-3 text-white">
                                    <p className="font-body-sm font-bold">Paris</p>
                                    <p className="text-[10px] opacity-70">France</p>
                                </div>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/itinerary/1" className="flex-shrink-0 w-[150px] md:w-[180px] group cursor-pointer">
                            <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary-container transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg">
                                <img 
                                    alt="Tokyo" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2jCOd32G2_q7s17qSwiR_6NvYzpQ_8NDJYf3dkK_B-ZiowVpdOO5hyGYlJkYD7wvwcFsXm4OtLdaMFKCLKgoBOtPaHWamo5Tmz40J2FwJSSeEUdoJUia1RMqwZ6-tZPqeyUJEmkHYPxUN03KIs3CNtrrZwxTN57y3fO37l2m6uyp7DcMIadYx_0cDyZ5FMYj0FsPtTIhWud6PAfrM7GVx1aaLZLsVlQHhTX9U6zScUeNV0UB8HC6P9ruy7epGNEEqn3Eg1-a1qtA"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-3 left-3 text-white">
                                    <p className="font-body-sm font-bold">Tokyo</p>
                                    <p className="text-[10px] opacity-70">Japan</p>
                                </div>
                            </div>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/itinerary/1" className="flex-shrink-0 w-[150px] md:w-[180px] group cursor-pointer">
                            <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary-container transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg">
                                <img 
                                    alt="Venice" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQgMAf_N9NY6EAHbVaR-hk-ukuzdBsbjRcOuDIELbacF_-9pvlLrf-aL-LpKPXk-2Wo24KcwoIaGqAWlmSph-da2wpRYqy_FrVh0t6ZRg1RwZSvv3B05wGoDAMjfDUNvOl-5vylfzXM2mer_V-T1bWMvBmAfmwvMR3eu4cjbaqIhrMTojBjfGY1jkfruVdpVkZy9Q9473aAlPQfqjg8gx4g8RDaabEZfkC1rr4xNWZAb7Tjx0jygzdX85owRrbd91VAQXZiJ_Lto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-3 left-3 text-white">
                                    <p className="font-body-sm font-bold">Venice</p>
                                    <p className="text-[10px] opacity-70">Italy</p>
                                </div>
                            </div>
                        </Link>
                         {/* Card 4 */}
                         <Link to="/itinerary/1" className="flex-shrink-0 w-[150px] md:w-[180px] group cursor-pointer">
                            <div className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary-container transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg">
                                <img 
                                    alt="Santorini" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlPsS1OL7_o9VnaxPx0V7NV6uP6ZFrlxeYORPYvPrao6_H6Gg8Kcntxf7dEQV8PVKfVB4gDu-YLB3aqlYszIfWVSVe2kmtTK-kvs8wjihI58yH6A1E-44vLBz7DLaZUpac11CIMok1b9Tk_Q4yw6eWRGP5WEidx8qKfNFqWGeUo5J94DZkPlyAQ25pt2i3wWDfw88_ntxyhBo2C2AH3H90YkMPnw8y8Y96rUe8asu8UccOoJhGVVWe3h1wT5RnoHhVLQEOQZOqkcs"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-3 left-3 text-white">
                                    <p className="font-body-sm font-bold">Santorini</p>
                                    <p className="text-[10px] opacity-70">Greece</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Previous Trips */}
                <section className="mb-12">
                    <div className="px-margin-mobile md:px-margin-desktop flex justify-between items-end mb-6">
                        <div>
                            <span className="font-label-mono text-secondary uppercase tracking-widest mb-1 block">Your journey</span>
                            <h3 className="font-headline-md text-on-surface">Previous Trips</h3>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto hide-scrollbar gap-6 px-margin-mobile md:px-margin-desktop">
                        {/* Trip 1 */}
                        <div className="flex-shrink-0 w-[240px] md:w-[300px] group cursor-pointer">
                            <div className="bg-surface-container rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-xl">
                                <div className="h-[140px] relative">
                                    <img 
                                        alt="Iceland" 
                                        className="w-full h-full object-cover" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbgm7pCdYytOS9EMlJ4kdukOnb5xEVgykC0xy6y2DwqF1Ir6MuF4bGa4YwTkGxfccAATIumuy76U46RkKOKVdeLUxFkCNEg1SoTjbWU7oy2juShhe14OLCoplgY1_THr8aHNd_baDhoFWsMXBFNY5fY1jBk4iKVNeE-SZWG9_1T7-NlHiAatcY5Bi_MK8X3tqfkzDY5UC8eZg_OAZoaTBxm1pAaeVmGwAR2rhjIQ_7jfEGToppqVlaG5AfGaeXyyMxGqZ9OeW7e78"
                                    />
                                    <div className="absolute top-3 right-3 bg-background/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-label-mono text-primary">DEC 2023</div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-headline-sm text-lg mb-1">Arctic Wonders</h4>
                                    <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">location_on</span> Reykjavik, Iceland
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FAB */}
            <Link to="/create" className="fixed right-6 bottom-24 md:bottom-12 z-50 bg-primary-container text-on-primary px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(255,107,74,0.4)] flex items-center gap-3 active:scale-95 transition-all group overflow-hidden">
                <span className="material-symbols-outlined">add_location</span>
                <span className="font-body-md font-bold">Plan a Trip</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            {/* BottomNavBar */}
            <footer className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 px-4 pb-2">
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 transition-all duration-200" to="/">
                    <span className="material-symbols-outlined">explore</span>
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
            </footer>
        </div>
    );
}
