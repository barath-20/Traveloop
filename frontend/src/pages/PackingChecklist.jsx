import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PackingChecklist() {
    const [items, setItems] = useState([
        { id: 1, category: "Documents", name: "Passport & Visa", checked: true },
        { id: 2, category: "Documents", name: "Hotel Reservation PDF", checked: true },
        { id: 3, category: "Documents", name: "Travel Insurance", checked: true },
        { id: 4, category: "Documents", name: "International Driving Permit", checked: false },
        { id: 5, category: "Clothing", name: "Linen Shirts (4)", checked: true },
        { id: 6, category: "Clothing", name: "Swim Trunk (2)", checked: false },
        { id: 7, category: "Clothing", name: "Evening Blazer", checked: false },
        { id: 8, category: "Tech", name: "Camera Body", checked: true },
        { id: 9, category: "Tech", name: "Universal Adapter", checked: false },
        { id: 10, category: "Toiletries", name: "Sunscreen SPF 50", checked: true },
        { id: 11, category: "Toiletries", name: "Personal Meds", checked: false },
    ]);

    const toggleItem = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    };

    const checkedCount = items.filter(i => i.checked).length;
    const progress = Math.round((checkedCount / items.length) * 100);

    return (
        <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen pb-32 relative">
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            {/* TopAppBar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40 sticky top-0 z-50">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/">Explore</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/trips">Trips</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/feed">Community</Link>
                        <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/profile">Profile</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyn8MPLYSvNNQ9hsx-STE8_2XLkDgLu9za-hFpdOtdb1t1EeFUMwDuTNE0RNw-wYyYfQVpg9NFGRsK_GognFyO9qaWAwQgK1EeClvHjU4pgq5YG-y9go5XIHiRApCxG3o2y_pp3sjjUm5SrBAtp5RMmA9IlDTesSrlpa0eiOrv6sbIMD03MmMZVyQV2Cp_SiHAs8phxZFnk3C9favQk3XjpKfs9XRbLuD8e6rnMtNunDArFGrvn-rkkz66ee95RI1bPa7V5lM7xUs" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Toolbar & Trip Selector */}
            <nav className="sticky top-[72px] z-40 bg-surface/60 backdrop-blur-md border-b border-outline-variant/5">
                <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative group min-w-[240px]">
                        <button className="w-full flex items-center justify-between bg-surface-container text-on-surface-variant px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-primary-container transition-all">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary">map</span>
                                <span className="font-medium text-on-surface">Amalfi Coast, Italy</span>
                            </div>
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                        <span className="bg-secondary/10 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-body-sm font-medium whitespace-nowrap">Essential</span>
                        {["Summer Wear", "Tech Gear", "Medication"].map(tab => (
                            <span key={tab} className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full text-body-sm whitespace-nowrap hover:bg-surface-container-high transition-colors cursor-pointer">
                                {tab}
                            </span>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop mt-8">
                {/* Progress Section */}
                <section className="bg-surface-container/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h2 className="font-headline-md text-on-surface mb-1">Packing Progress</h2>
                            <p className="text-on-surface-variant text-body-sm font-body-md">You're almost ready for your coastal escape.</p>
                        </div>
                        <div className="text-right">
                            <span className="font-label-mono text-primary text-headline-sm">{progress}%</span>
                        </div>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
                    </div>
                </section>

                {/* Category Grid (Asymmetric Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Documents (Wide Card) */}
                    <div className="md:col-span-12 lg:col-span-7">
                        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 shadow-lg hover:shadow-2xl transition-all group h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">description</span>
                                    </div>
                                    <div>
                                        <h3 className="font-headline-sm text-on-surface">Travel Documents</h3>
                                        <p className="text-on-surface-variant text-body-sm font-body-md">Essential papers & ID</p>
                                    </div>
                                </div>
                                <span className="font-label-mono text-secondary px-3 py-1 bg-secondary/10 rounded-lg">
                                    {items.filter(i => i.category === "Documents" && i.checked).length}/{items.filter(i => i.category === "Documents").length}
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {items.filter(i => i.category === "Documents").map(item => (
                                    <li 
                                        key={item.id} 
                                        onClick={() => toggleItem(item.id)}
                                        className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer border ${item.checked ? "bg-surface-container-high/50 border-transparent opacity-60" : "bg-surface-container-high border-primary-container/20 hover:border-primary-container"}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.checked ? "border-primary-container bg-primary-container" : "border-outline"}`}>
                                                {item.checked && <span className="material-symbols-outlined text-background text-sm font-bold">check</span>}
                                            </div>
                                            <span className={`text-on-surface ${item.checked ? "line-through" : ""}`}>{item.name}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-on-surface-variant opacity-40">drag_handle</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Clothing & Weather (Sidebar Style) */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 shadow-lg hover:shadow-2xl transition-all h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined text-2xl">checkroom</span>
                                    </div>
                                    <div>
                                        <h3 className="font-headline-sm text-on-surface">Clothing</h3>
                                        <p className="text-on-surface-variant text-body-sm font-body-md">Style for the shore</p>
                                    </div>
                                </div>
                                <span className="font-label-mono text-secondary px-3 py-1 bg-secondary/10 rounded-lg">
                                    {items.filter(i => i.category === "Clothing" && i.checked).length}/12
                                </span>
                            </div>
                            <div className="space-y-3">
                                {items.filter(i => i.category === "Clothing").map(item => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => toggleItem(item.id)}
                                        className="flex items-center gap-4 p-3 hover:bg-surface-container-high rounded-xl transition-colors cursor-pointer"
                                    >
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.checked ? "border-primary-container bg-primary-container" : "border-outline"}`}>
                                            {item.checked && <span className="material-symbols-outlined text-background text-sm font-bold">check</span>}
                                        </div>
                                        <span className={`text-body-sm ${item.checked ? "text-on-surface-variant line-through" : "text-on-surface"}`}>{item.name}</span>
                                    </div>
                                ))}
                                <button className="w-full text-center py-2 text-primary text-body-sm font-medium hover:underline">View 9 more items...</button>
                            </div>
                        </div>

                        {/* Weather Card */}
                        <div className="bg-surface-container rounded-2xl p-6 relative overflow-hidden group border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-50 z-0"></div>
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <span className="font-label-mono text-secondary mb-1 block uppercase tracking-widest text-[10px]">Forecast</span>
                                    <h4 className="font-headline-sm text-on-surface">24°C Sunny</h4>
                                    <p className="text-on-surface-variant text-body-sm font-body-md">Perfect for your light linen pack.</p>
                                </div>
                                <span className="material-symbols-outlined text-tertiary text-4xl animate-spin-slow">sunny</span>
                            </div>
                        </div>
                    </div>

                    {/* Tech (Bento Style Small) */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 h-full">
                            <div className="flex items-center justify-between mb-4">
                                <span className="material-symbols-outlined text-primary">devices</span>
                                <span className="font-label-mono text-secondary">
                                    {items.filter(i => i.category === "Tech" && i.checked).length}/5
                                </span>
                            </div>
                            <h3 className="font-headline-sm text-on-surface mb-4">Tech Gear</h3>
                            <div className="space-y-3">
                                {items.filter(i => i.category === "Tech").map(item => (
                                    <div key={item.id} onClick={() => toggleItem(item.id)} className="flex items-center gap-3 cursor-pointer">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.checked ? "border-primary-container bg-primary-container" : "border-outline"}`}>
                                            {item.checked && <span className="material-symbols-outlined text-background text-[12px] font-bold">check</span>}
                                        </div>
                                        <span className={`text-body-sm ${item.checked ? "text-on-surface-variant line-through" : "text-on-surface"}`}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Toiletries (Bento Style Small) */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 h-full">
                            <div className="flex items-center justify-between mb-4">
                                <span className="material-symbols-outlined text-primary">sanitizer</span>
                                <span className="font-label-mono text-secondary">
                                    {items.filter(i => i.category === "Toiletries" && i.checked).length}/6
                                </span>
                            </div>
                            <h3 className="font-headline-sm text-on-surface mb-4">Toiletries</h3>
                            <div className="space-y-3">
                                {items.filter(i => i.category === "Toiletries").map(item => (
                                    <div key={item.id} onClick={() => toggleItem(item.id)} className="flex items-center gap-3 cursor-pointer">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.checked ? "border-primary-container bg-primary-container" : "border-outline"}`}>
                                            {item.checked && <span className="material-symbols-outlined text-background text-[12px] font-bold">check</span>}
                                        </div>
                                        <span className={`text-body-sm ${item.checked ? "text-on-surface-variant line-through" : "text-on-surface"}`}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tip Card */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <div className="bg-primary-container/10 border border-primary-container/20 rounded-2xl p-6 h-full flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-6xl text-primary-container font-variation-settings-fill">lightbulb</span>
                            </div>
                            <span className="material-symbols-outlined text-primary-container mb-2 text-3xl">lightbulb</span>
                            <p className="text-on-surface text-body-md font-medium relative z-10">Pro-tip: Roll your clothes to save 30% more space in your carry-on.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Action Row */}
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[600px] z-50">
                <div className="bg-surface-container/80 backdrop-blur-xl rounded-2xl p-3 flex items-center justify-between gap-3 shadow-2xl border border-white/10">
                    <button className="flex-1 bg-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                        <span className="material-symbols-outlined">add</span>
                        Add Item
                    </button>
                    <button className="w-14 h-14 rounded-xl border border-outline-variant/30 text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors active:scale-90">
                        <span className="material-symbols-outlined">restart_alt</span>
                    </button>
                    <button className="w-14 h-14 rounded-xl border border-outline-variant/30 text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors active:scale-90">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            {/* BottomNavBar */}
            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] md:hidden">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" to="/search">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110 transition-all duration-200" to="/trips">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" to="/feed">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm tracking-wide">Saved</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-colors" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </nav>
        </div>
    );
}
