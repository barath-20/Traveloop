import React from 'react';
import { Link } from 'react-router-dom';

export default function TripNotes() {
    const journalEntries = [
        {
            id: 1,
            day: "03",
            type: "Featured Moment",
            title: "The Zen of Ryoan-ji",
            content: "Arrived at 7:00 AM before the crowds. The fifteen rocks are arranged so that only fourteen are visible at any given time. There is a profound silence here that feels ancient. I spent forty minutes just watching the shadows shift across the raked gravel...",
            location: "Ryoan-ji Temple",
            time: "Early Morning",
            isFeatured: true,
            color: "tertiary"
        },
        {
            id: 2,
            day: "02",
            type: "Journal Entry",
            title: "Gion's Hidden Tea House",
            content: "Found a small doorway marked only by a weathered indigo curtain. The matcha was whisked into a thick emerald froth. The wagashi sweet resembled a fallen maple leaf, echoing the scenery outside. Spoke briefly with the host about the history of the ceramic bowls...",
            location: "Gion District",
            time: "Afternoon",
            isFeatured: false,
            color: "primary"
        },
        {
            id: 3,
            day: "04",
            type: "Photo Log",
            title: "Golden Hour at Kiyomizu-dera",
            content: "The entire valley turned a burning orange. The wooden terrace of the temple seemed to float above the sea of maple trees. Captured the light hitting the Pagoda from the west path. Simply breathtaking...",
            location: "Kiyomizu-dera",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMxxGnBPTICdWlGlvFJ-82PoJnsfneKKht1aT5xkBKHqu4Il5v3krw0BW2hX1AcjXKcktpR7pGNHL3UwpA3Ta0WjJf6JtNTqG7z51cZo2OXslUI5dSGKqAELIoODyWHX1umcfp1o89YOgpKIs14sGtQxVIeSOTnKce6bhgSW54Zul3mna4FTF0EhJV3KIferwfF7CMIohvnvG-4SXPNTN5pBzE_NHA-GDXaHM-mgMFi1c3UTtgT-FSV_eKDeF5Q76Hkf2Hzyb5T_g",
            isFeatured: false,
            color: "secondary"
        }
    ];

    return (
        <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-white min-h-screen relative">
            <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            {/* TopAppBar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40 sticky top-0 z-50">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-8">
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/">Explore</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/trips">Trips</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/feed">Community</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/profile">Profile</Link>
                        </nav>
                        <Link to="/profile" className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNDi6BOSSC84OVXGqLsk2VWXkmaHcm5fflSeWL3Ak7gg7UTPRE6GM-amE9SXlLGNCiMznI13W5s6_UgCklsKscRRzgQJP-14NX56611bj1gqBhiQRuhvP-col64LbDX6F7LuVNCk5km6cgliGEGvyqbWg0HqPg3T5bAzfN6ypEVr-et4k30MvB-jolt_7dRpjUgjpj0hdBEB2vcDijwl9-iU3hocvjLblPv7IDDvRvLnqDCBajQ5a7DX45wt6P9Dt_yMMjcMo_bJg" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg pb-xl z-10">
                {/* Header & Selector */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-secondary font-label-mono uppercase tracking-widest">
                            <span className="material-symbols-outlined text-[16px]">auto_stories</span>
                            <span>Travel Journal</span>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <h2 className="font-display-xl text-display-lg-mobile md:text-display-lg text-on-surface">Autumn in Kyoto</h2>
                            <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform">expand_more</span>
                        </div>
                        <p className="text-on-surface-variant font-body-lg max-w-xl font-body-md">A collection of whispers, flavors, and moments captured across the Gion district and beyond.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary-container text-on-primary font-bold px-6 py-3 rounded-full shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all w-fit">
                        <span className="material-symbols-outlined">add</span>
                        <span>Add Note</span>
                    </button>
                </div>

                {/* Toolbar & Tabs */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-md border-b border-outline-variant/10 pb-4">
                    <div className="flex p-1 bg-surface-container rounded-full w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-6 py-2 rounded-full bg-surface-variant text-primary font-bold text-body-sm transition-all">All</button>
                        {["By Day", "By Stop"].map(tab => (
                            <button key={tab} className="flex-1 md:flex-none px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface font-medium text-body-sm transition-all">{tab}</button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
                        <span className="text-on-surface-variant text-body-sm font-medium whitespace-nowrap">Filter by:</span>
                        <div className="flex gap-2">
                            {["Temple", "Cuisine", "Photography"].map((tag, idx) => (
                                <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all ${idx < 2 ? "bg-secondary-container/30 text-secondary border border-secondary/20" : "bg-surface-container text-on-surface-variant border border-outline-variant/30"}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Notes List */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Sage Connector Line */}
                    <div className="hidden md:block absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-secondary/20 to-transparent opacity-30"></div>
                    
                    <div className="md:col-start-2 md:col-span-10 space-y-6">
                        {journalEntries.map((entry) => (
                            <article key={entry.id} className={`group relative bg-surface-container/50 backdrop-blur-md p-0 overflow-hidden rounded-xl shadow-xl hover:translate-y-[-4px] transition-all duration-300 border border-white/5 ${entry.isFeatured ? "border-l-4 border-l-tertiary" : ""}`}>
                                {entry.img ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-3">
                                        <div className="h-48 lg:h-full relative">
                                            <img alt={entry.title} className="w-full h-full object-cover" src={entry.img} />
                                            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
                                        </div>
                                        <div className="lg:col-span-2 p-6 md:p-8">
                                            <NoteHeader entry={entry} />
                                            <p className="text-on-surface-variant font-body-lg mb-6 leading-relaxed font-body-md">{entry.content} <span className="text-primary cursor-pointer hover:underline">Read more</span></p>
                                            <NoteFooter entry={entry} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-6 md:p-8">
                                        <NoteHeader entry={entry} />
                                        <p className="text-on-surface-variant font-body-lg mb-6 leading-relaxed font-body-md">{entry.content} <span className="text-primary cursor-pointer hover:underline">Read more</span></p>
                                        <NoteFooter entry={entry} />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            {/* FAB */}
            <button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-primary-container text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 600" }}>edit_note</span>
            </button>

            {/* Mobile Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] rounded-t-xl">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all transition-colors" to="/">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all transition-colors" to="/trips">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all transition-colors" to="/feed">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm tracking-wide">Community</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all transition-colors" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </nav>
        </div>
    );
}

function NoteHeader({ entry }) {
    return (
        <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
                <span className={`font-label-mono uppercase tracking-widest text-[10px] ${entry.isFeatured ? "text-tertiary" : "text-on-surface-variant"}`}>
                    {entry.type} • Day {entry.day}
                </span>
                <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors leading-tight">{entry.title}</h3>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-[20px]">attach_file</span>
                </button>
                <button className="p-2 hover:bg-error-container/20 rounded-full text-error transition-colors">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
            </div>
        </div>
    );
}

function NoteFooter({ entry }) {
    return (
        <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-lg text-[10px] font-bold uppercase font-label-mono border border-outline-variant/30 text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                <span>{entry.location}</span>
            </div>
            {entry.time && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-lg text-[10px] font-bold uppercase font-label-mono border border-outline-variant/30 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    <span>{entry.time}</span>
                </div>
            )}
        </div>
    );
}
