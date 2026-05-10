import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminAnalytics() {
    const stats = [
        { label: "Daily Active Users", value: "42,892", trend: "+12.5%", color: "secondary", icon: "trending_up" },
        { label: "Global Reach", value: "184", trend: "+4.2%", color: "secondary", icon: "public" },
        { label: "Bookings", value: "1,204", trend: "-2.1%", color: "error", icon: "confirmation_number" },
        { label: "Revenue (USD)", value: "12.4M", trend: "+18.7%", color: "secondary", icon: "monetization_on" }
    ];

    const recentUsers = [
        { id: 1, name: "Elena Rodriguez", region: "Barcelona, ES", plan: "Nomad Elite", status: "Active", time: "2h ago", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkuyGWxVm_WhtJ3HRsqWqX8utpYcXEGmpZWUaZNfXutTzezYj1AKYubEv31KOMMgrUy7j37rU58bpiBsndiJCKW5titVY-vOAoZRYjwvoF-EtDBzjIL5rKCV6TTfI_3SNiKeNXB_sYDc7U7C14R7RUAwVPLUDMo-vQyPyugsE03F_gL2EWOQVXlJDvCXmzsMm04gQlN8fTpJPD0L26BlJ2Jelxd8x2-hxCTV4r_ZE5IUDDQ4aGwQYk4ugiiFBuOaHN0kpfFY59UBw" },
        { id: 2, name: "Julian Vance", region: "London, UK", plan: "Explorer", status: "Active", time: "5h ago", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC9CKHl4rM4r0X6t2S2miv1s6yhPal191OpfGvDt2AVy6NJQsRa-60mM1-Z7Bmh86Rr2g40mVAuWiJuJS0ed2o3E4DbM0QRZjGFHJT_zGOAQRNiXPNSqzVkKS6r5soBepIc4DBDVcDPbWkFCH5VnoysbSWXZcSrHFUVZRvoBa6hf8I5popqAFFk5FsdqAnoSbkmd9UYKKDVtsK28H2xNJO0jlw5YgD9p1T5wUCwHugV2s6YhDAB5eFq2-I3o14ToMdSl5x6yl6DvQ" }
    ];

    return (
        <div className="bg-background text-on-surface font-body-md min-h-screen selection:bg-primary/30 relative">
            <div className="fixed inset-0 grainy-surface z-50 pointer-events-none opacity-20"></div>
            <div className="fixed top-0 left-0 w-full h-full coral-glow opacity-30 pointer-events-none z-0"></div>

            {/* Top AppBar */}
            <header className="sticky top-0 z-[60] bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary tracking-tight">Traveloop Admin ⚙</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-8 items-center">
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/">Explore</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/trips">Trips</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/feed">Community</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/profile">Profile</Link>
                        </nav>
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container shadow-lg">
                            <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDsxzb7UtZ-LMsWdBOTnsRZxYWfut08OOdk58-eUxikaLMj7OHcSrnEysCCZEMPD8F7GQ7s7-tzQTFOZL0MFV9h8HSu3VnMbL8KKxXJzYXpQeaxNe-x4-xdl-I_8v3CE9tmiS3UL4mrWGmntDOXw8watS8wjTH56YUbTUbWvphxRaSVT4_5a2c73h3-Soiw4ZjoN9q9zZH4rsMkOLcquL9seB8RbtxJMxEDpg8VE2mlXZVMtX46YiEiE5TntO1ASmqE60u0DKgpiM" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Admin Nav */}
            <div className="bg-surface-container-high/50 border-b border-outline-variant/10 px-margin-mobile md:px-margin-desktop relative z-10">
                <div className="max-w-[1200px] mx-auto flex items-center gap-8 h-14 overflow-x-auto no-scrollbar">
                    <button className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary h-full px-2 transition-all">
                        <span className="material-symbols-outlined text-sm">insights</span>
                        <span className="text-body-sm tracking-wide">Trends</span>
                    </button>
                    {["Manage Users", "Destinations", "Revenue"].map((link, idx) => (
                        <button key={link} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors h-full px-2">
                            <span className="material-symbols-outlined text-sm">{idx === 0 ? "group" : idx === 1 ? "map" : "payments"}</span>
                            <span className="text-body-sm tracking-wide whitespace-nowrap">{link}</span>
                        </button>
                    ))}
                </div>
            </div>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col lg:flex-row gap-gutter relative z-10">
                <section className="flex-1 space-y-gutter">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 shadow-lg hover:translate-y-[-4px] transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="p-2 bg-primary-container/10 rounded-lg">
                                        <span className="material-symbols-outlined text-primary-container">{stat.icon}</span>
                                    </span>
                                    <span className={`text-${stat.color} text-xs font-label-mono font-bold`}>{stat.trend}</span>
                                </div>
                                <div className="text-on-surface-variant text-[10px] mb-1 uppercase tracking-widest font-bold">{stat.label}</div>
                                <div className="font-label-mono text-3xl text-on-surface font-bold">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        {/* Popularity Card */}
                        <div className="bg-on-surface rounded-2xl p-8 shadow-2xl overflow-hidden relative">
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-background font-headline-sm mb-6 flex items-center justify-between">
                                    Destination Popularity
                                    <span className="text-[10px] font-label-mono bg-background/10 px-2 py-1 rounded font-bold uppercase tracking-widest">Top 5</span>
                                </h3>
                                <div className="flex-1 flex items-center justify-center min-h-[250px]">
                                    <div className="relative w-48 h-48 rounded-full border-[24px] border-primary-container">
                                        <div className="absolute inset-[-24px] rounded-full border-[24px] border-background/20 border-t-transparent border-l-transparent rotate-45"></div>
                                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                                            <span className="font-label-mono text-2xl text-background font-bold font-body-md">48%</span>
                                            <span className="text-background/60 text-[10px] uppercase font-bold font-body-md">Europe</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {["Europe", "Asia", "Americas", "Oceania"].map((region, idx) => (
                                        <div key={region} className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-primary-container" : `bg-background/${(idx + 1) * 20}`}`}></span>
                                            <span className="text-background/80 text-body-sm font-body-md">{region}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Registration Card */}
                        <div className="bg-on-surface rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                            <h3 className="text-background font-headline-sm mb-6">Weekly Registrations</h3>
                            <div className="h-[250px] flex items-end justify-between gap-2 px-2">
                                {[40, 60, 50, 90, 70, 80, 65].map((height, idx) => (
                                    <div key={idx} className="w-full bg-background/5 rounded-t-lg relative group h-full hover:bg-primary-container/20 transition-colors">
                                        <div 
                                            className="absolute bottom-0 w-full bg-primary-container rounded-t-lg transition-all duration-1000" 
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6 text-background/60 font-label-mono text-[10px] font-bold">
                                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(day => <span key={day}>{day}</span>)}
                            </div>
                        </div>
                    </div>

                    {/* Recent Users Table */}
                    <div className="bg-on-surface rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-8 border-b border-background/5 flex justify-between items-center text-background">
                            <h3 className="font-headline-sm">Recent New Users</h3>
                            <button className="text-primary-container font-bold text-body-sm flex items-center gap-1 hover:gap-2 transition-all">
                                View All Users <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-background/5">
                                        <th className="px-8 py-4 font-label-mono text-[11px] text-background/60 uppercase tracking-widest font-bold">User</th>
                                        <th className="px-8 py-4 font-label-mono text-[11px] text-background/60 uppercase tracking-widest font-bold">Region</th>
                                        <th className="px-8 py-4 font-label-mono text-[11px] text-background/60 uppercase tracking-widest font-bold">Plan</th>
                                        <th className="px-8 py-4 font-label-mono text-[11px] text-background/60 uppercase tracking-widest font-bold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-background/5">
                                    {recentUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-background/5 transition-colors cursor-pointer group">
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-background/10 overflow-hidden">
                                                        <img alt={user.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={user.img} />
                                                    </div>
                                                    <div>
                                                        <div className="text-background font-bold text-body-md font-body-md">{user.name}</div>
                                                        <div className="text-background/40 text-xs font-body-md">Joined {user.time}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 text-background/70 text-body-sm font-body-md">{user.region}</td>
                                            <td className="px-8 py-4">
                                                <span className={`px-3 py-1 ${user.plan === "Nomad Elite" ? "bg-tertiary/10 text-tertiary-container" : "bg-background/10 text-background/60"} rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                                                    {user.plan}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4">
                                                <span className="flex items-center gap-1.5 text-secondary text-xs font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> {user.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="w-full lg:w-80 space-y-gutter">
                    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-headline-sm text-on-surface">Admin Notes</h3>
                            <button className="p-1.5 rounded-full hover:bg-surface-container-highest transition-colors">
                                <span className="material-symbols-outlined text-sm text-primary">add_circle</span>
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { date: "MAY 24, 2024", msg: "Review the spike in API latency for Southeast Asia node.", color: "primary" },
                                { date: "MAY 23, 2024", msg: "Q3 Marketing assets are ready for staging. Sync with local teams.", color: "secondary" },
                                { date: "MAY 21, 2024", msg: "Database cleanup scheduled for 02:00 UTC. Check snapshots.", color: "tertiary" }
                            ].map((note, idx) => (
                                <div key={idx} className={`p-4 bg-surface-container-low rounded-xl border-l-4 border-${note.color} shadow-sm relative overflow-hidden group`}>
                                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <span className="material-symbols-outlined text-xs text-on-surface-variant">close</span>
                                    </div>
                                    <div className={`text-${note.color} text-[10px] font-label-mono mb-1 font-bold`}>{note.date}</div>
                                    <p className="text-on-surface-variant text-body-sm leading-relaxed font-body-md">{note.msg}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-outline-variant/10">
                            <h4 className="font-label-mono text-[10px] uppercase text-on-surface-variant mb-4 tracking-widest font-bold">System Health</h4>
                            <div className="space-y-4">
                                {[
                                    { label: "Server Load", value: "32%", color: "secondary" },
                                    { label: "Storage", value: "68%", color: "tertiary" }
                                ].map(health => (
                                    <div key={health.label}>
                                        <div className="flex justify-between text-body-sm mb-2 font-body-md font-bold">
                                            <span className="text-on-surface-variant">{health.label}</span>
                                            <span className="text-on-surface">{health.value}</span>
                                        </div>
                                        <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                                            <div className={`h-full bg-${health.color} transition-all duration-1000`} style={{ width: health.value }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary-container rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                        <h3 className="text-on-primary font-headline-sm mb-2 relative z-10">Export Report</h3>
                        <p className="text-on-primary/80 text-body-sm mb-6 relative z-10 font-body-md">Generate a comprehensive PDF audit of last month's performance.</p>
                        <button className="w-full bg-background text-primary-container py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download PDF
                        </button>
                    </div>
                </aside>
            </main>

            <footer className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-12 border-t border-outline-variant/10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">flight_takeoff</span>
                        <span className="font-display-lg text-headline-sm text-on-surface tracking-tighter">Traveloop Admin</span>
                    </div>
                    <div className="flex gap-8">
                        {["API Docs", "Privacy Policy", "System Status"].map(link => (
                            <a key={link} className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-md" href="#">{link}</a>
                        ))}
                    </div>
                    <p className="text-on-surface-variant/40 font-label-mono text-[10px] font-bold">© 2024 TRAVELOOP CORP. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    );
}
