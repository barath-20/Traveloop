import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BuildItinerary() {
    // Load from localStorage on initial render
    const [sections, setSections] = useState(() => {
        const saved = localStorage.getItem('traveloop_itinerary');
        return saved ? JSON.parse(saved) : [
            { id: 1, destination: "Tokyo, Japan", dates: "Oct 12 - Oct 18", budget: "$2,500.00" },
            { id: 2, destination: "Kyoto, Japan", dates: "Oct 19 - Oct 23", budget: "$1,800.00" }
        ];
    });

    // Save to localStorage whenever sections change
    useEffect(() => {
        localStorage.setItem('traveloop_itinerary', JSON.stringify(sections));
    }, [sections]);

    const addSection = () => {
        const nextId = sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1;
        setSections([...sections, { id: nextId, destination: "", dates: "", budget: "" }]);
    };

    const removeSection = (id) => {
        setSections(sections.filter(s => s.id !== id));
    };

    const updateSection = (id, field, value) => {
        setSections(sections.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const clearAll = () => {
        if (window.confirm("Are you sure you want to clear your entire itinerary?")) {
            setSections([]);
            localStorage.removeItem('traveloop_itinerary');
        }
    };

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen relative selection:bg-primary/30">
            {/* Artistic Noise Overlay - MOVED TO BACKGROUND */}
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>
            
            {/* Top Navigation Bar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 sticky top-0 z-50 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-headline-md">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/">Explore</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/trips">Trips</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/feed">Community</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/profile">Profile</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button onClick={clearAll} className="text-xs font-label-mono text-outline hover:text-error transition-colors uppercase tracking-widest hidden md:block">Clear Data</button>
                        <Link to="/profile" className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
                            <img 
                                alt="User Profile" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6kDdGgDbys8Lev1_EWXO6NKi10BuDCSvcZLKH6V8JELQ5yxApYUXxxnFfVRftvR1xjHsLk0g4DiPG2LHAQOFwJXP1ZaY4cI8niB-TGbreInUzfEzu29DJtyENRj7SUQWQulCIJRY7IhGJY6QezSphq6Ccj1-0y2IdcqSIq1YuUi7q7HzBjl4jdTKbxOBmD7KPHPJ3R87PxRFjbU2R4iG0pjFzdsbc_DyBh2_IHEuj15T40o-jkZAkzDclbTZE6aic2LkSeaJGUhY"
                            />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg relative pb-32 z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-lg relative z-20">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
                        <span className="material-symbols-outlined text-primary-container text-headline-sm">airplanemode_active</span>
                    </div>
                    <div>
                        <h2 className="font-display-lg text-display-lg-mobile text-on-surface leading-tight">Build Your Itinerary</h2>
                        <p className="font-body-md text-on-surface-variant">Changes saved as you type.</p>
                    </div>
                </div>

                <div className="relative z-20 space-y-md max-w-3xl mx-auto">
                    <div className="connector-line hidden md:block"></div>
                    
                    {sections.map((section, index) => (
                        <div key={section.id} className="group relative flex items-start gap-gutter p-md rounded-xl bg-surface-container-high border border-white/5 shadow-2xl transition-all duration-300 hover:bg-surface-container-highest coral-glow glass-sheet">
                            <div className="flex-shrink-0 relative z-30">
                                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-headline-sm shadow-lg shadow-primary-container/20">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-grow space-y-md relative z-30">
                                <div className="flex justify-between items-start">
                                    <div className="w-full">
                                        <label className="block font-label-mono text-primary uppercase mb-xs tracking-widest text-[10px] opacity-70">Destination Name</label>
                                        <input 
                                            className="w-full bg-background/50 border border-outline-variant/20 rounded-lg px-4 py-3 font-headline-sm text-on-surface focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container transition-all outline-none placeholder:text-outline-variant relative z-40" 
                                            type="text" 
                                            value={section.destination}
                                            onChange={(e) => updateSection(section.id, 'destination', e.target.value)}
                                            placeholder="Where to?"
                                        />
                                    </div>
                                    <button 
                                        onClick={() => removeSection(section.id)}
                                        className="material-symbols-outlined text-outline cursor-pointer p-2 hover:text-error transition-all hover:bg-error/10 rounded-full ml-2"
                                    >
                                        delete
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                    <div className="relative group/field">
                                        <label className="block font-label-mono text-outline uppercase mb-xs text-[10px] opacity-70">Travel Dates</label>
                                        <div className="relative flex items-center">
                                            <span className="material-symbols-outlined absolute left-3 text-primary text-body-md pointer-events-none">calendar_today</span>
                                            <input 
                                                className="w-full bg-background/50 border border-outline-variant/20 rounded-lg pl-10 pr-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container outline-none transition-all relative z-40" 
                                                placeholder="Pick dates" 
                                                type="text"
                                                value={section.dates}
                                                onChange={(e) => updateSection(section.id, 'dates', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group/field">
                                        <label className="block font-label-mono text-outline uppercase mb-xs text-[10px] opacity-70">Budget Allocation</label>
                                        <div className="relative flex items-center">
                                            <span className="material-symbols-outlined absolute left-3 text-primary text-body-md pointer-events-none">payments</span>
                                            <input 
                                                className="w-full bg-background/50 border border-outline-variant/20 rounded-lg pl-10 pr-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container outline-none transition-all relative z-40" 
                                                placeholder="$0.00" 
                                                type="text"
                                                value={section.budget}
                                                onChange={(e) => updateSection(section.id, 'budget', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Section Button */}
                    <button 
                        onClick={addSection}
                        className="w-full py-10 border-2 border-dashed border-primary-container/20 rounded-xl flex flex-col items-center justify-center gap-sm group hover:border-primary-container hover:bg-primary-container/5 transition-all active:scale-[0.98] relative z-20"
                    >
                        <span className="material-symbols-outlined text-primary-container text-display-lg transition-transform group-hover:scale-110">add_circle</span>
                        <span className="font-label-mono text-primary-container uppercase tracking-widest font-bold">Add Section</span>
                    </button>
                    
                    <div className="pt-lg flex justify-end relative z-20">
                        <Link to="/itinerary/1" className="bg-primary-container text-on-primary-container font-bold px-10 py-5 rounded-full shadow-[0_8px_32px_rgba(255,107,74,0.3)] hover:shadow-[0_12px_48px_rgba(255,107,74,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            Generate Full Plan
                            <span className="material-symbols-outlined font-bold">auto_awesome</span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Mobile Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] rounded-t-xl">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all" to="/">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110" to="/trips">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
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
            <div className="h-24 md:hidden"></div>
        </div>
    );
}
