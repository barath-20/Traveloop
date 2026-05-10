import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpenseInvoice() {
    const expenses = [
        {
            id: 1,
            description: "Private Yacht Charter",
            note: "Positano to Capri Full Day",
            category: "Transportation",
            color: "secondary",
            amount: "€1,200.00"
        },
        {
            id: 2,
            description: "La Sponda Dining",
            note: "Michelin-star dinner service",
            category: "Dining",
            color: "tertiary",
            amount: "€450.00"
        },
        {
            id: 3,
            description: "Luxury Villa Stay",
            note: "Hotel Santa Caterina (3 nights)",
            category: "Lodging",
            color: "primary",
            amount: "€2,850.00"
        }
    ];

    return (
        <div className="bg-background text-on-surface min-h-screen font-body-md selection:bg-primary-container/30 relative">
            <div className="fixed inset-0 grainy-surface z-50 pointer-events-none opacity-20"></div>
            
            {/* Background Glows */}
            <div className="fixed top-1/4 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] -z-10"></div>
            <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

            {/* Top AppBar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40 sticky top-0 z-40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-8 items-center">
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/">Explore</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/trips">Trips</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/feed">Community</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm" to="/profile">Profile</Link>
                        </nav>
                        <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
                            <img alt="User Profile" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhtGw0MHByejPhNnv_1mdKuNc1zY92-1atSDCYkQ8abfLVuIrb7IGHKveKifHY8m7bdR3pr2TTgdIatofUZ_5F3ss7YlhjTp5nm4CCxfEkHEerW86mL1ZEi9WpWThOlcVYYidor2KyFsW2MCD4J4E11GmL5E8zqZJZT0hcTaYUKxBcKTbLgoNF379uAyTqgQIPWGVvZ07sVDfAk95hpXTgHBwtWxkhF82mwzIPrueHbXcB-Y1jtdX6vbQgRiIe1yEngwdcv1DhX_w" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-10 pb-32">
                {/* Toolbar & Back Link */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <Link to="/trips" className="flex items-center gap-2 group cursor-pointer">
                        <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">Back to Amalfi Coast Trip</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <button className="bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2 text-on-surface-variant text-sm hover:brightness-110 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-sm">filter_list</span>
                            <span>All Expenses</span>
                        </button>
                        <button className="bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2 text-on-surface-variant text-sm hover:brightness-110 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            <span>July 2024</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start relative z-10">
                    {/* Left: Invoice Card */}
                    <div className="lg:col-span-8 bg-surface-container-low/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl relative border border-white/5">
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
                                <div>
                                    <h2 className="font-headline-md text-primary mb-2">Invoice #TL-8842</h2>
                                    <p className="text-on-surface-variant font-body-sm font-body-md">Billed to: Elena Rodriguez</p>
                                    <p className="text-on-surface-variant font-body-sm font-body-md">Amalfi Coast Itinerary</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-on-surface-variant font-label-mono mb-1 text-[10px] uppercase tracking-widest">DATE ISSUED</div>
                                    <div className="text-on-surface font-body-md font-bold">July 14, 2024</div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-outline-variant/30">
                                            <th className="py-4 font-label-mono text-on-surface-variant uppercase tracking-widest text-[10px]">Description</th>
                                            <th className="py-4 font-label-mono text-on-surface-variant uppercase tracking-widest text-[10px]">Category</th>
                                            <th className="py-4 font-label-mono text-on-surface-variant uppercase tracking-widest text-[10px] text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/10">
                                        {expenses.map((exp) => (
                                            <tr key={exp.id}>
                                                <td className="py-6">
                                                    <div className="font-body-md text-on-surface font-bold">{exp.description}</div>
                                                    <div className="text-xs text-on-surface-variant font-body-md">{exp.note}</div>
                                                </td>
                                                <td className="py-6">
                                                    <span className={`bg-${exp.color}-container/20 text-${exp.color} border border-${exp.color}/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase`}>
                                                        {exp.category}
                                                    </span>
                                                </td>
                                                <td className="py-6 text-right font-body-md font-bold text-on-surface">{exp.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-primary-container text-on-primary">
                                            <td className="py-5 px-8 rounded-l-xl font-headline-sm" colSpan="2">Grand Total</td>
                                            <td className="py-5 px-8 rounded-r-xl text-right font-headline-sm">€4,500.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="mt-12 pt-8 border-t border-outline-variant/20">
                                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent mb-8"></div>
                                <p className="text-xs text-on-surface-variant italic leading-relaxed font-body-md">
                                    Payment is due within 15 days of issuance. This invoice was automatically generated based on your Traveloop concierge bookings and verified expenses during your Amalfi excursion. For disputes, please contact your private agent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Budget Insights */}
                    <div className="lg:col-span-4 space-y-gutter">
                        <div className="bg-surface-container/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/5">
                            <h3 className="font-headline-sm text-on-surface mb-8">Budget Insights</h3>
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#ff6b4a" strokeDasharray="251.2" strokeDashoffset="50.2" strokeLinecap="round" strokeWidth="10" className="transition-all duration-1000"></circle>
                                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#97d3b3" strokeDasharray="251.2" strokeDashoffset="201" strokeLinecap="round" strokeWidth="6" className="transition-all duration-1000"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="font-label-mono text-primary-container text-lg font-bold">€4,500</span>
                                    <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">SPENT</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                                    <span className="text-on-surface-variant text-sm font-body-md">Monthly Budget</span>
                                    <span className="text-on-surface font-body-md font-bold">€4,000.00</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                                    <span className="text-on-surface-variant text-sm font-body-md">Trip Allocation</span>
                                    <span className="text-on-surface font-body-md font-bold">€5,000.00</span>
                                </div>
                                <div className="p-4 bg-error-container/10 border border-error/20 rounded-xl flex items-start gap-3">
                                    <span className="material-symbols-outlined text-error text-xl">warning</span>
                                    <div>
                                        <div className="text-error font-body-sm font-bold">Over Budget Alert</div>
                                        <p className="text-error/80 text-xs">You are €500 over your planned monthly travel limit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container/40 backdrop-blur-md rounded-2xl p-8 border border-white/5">
                            <h4 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 font-bold">Quick Stats</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-surface-container-low/60 rounded-xl border border-white/5">
                                    <div className="text-primary font-display-lg text-2xl">14</div>
                                    <div className="text-[10px] text-on-surface-variant uppercase font-bold">EXPENSES</div>
                                </div>
                                <div className="p-4 bg-surface-container-low/60 rounded-xl border border-white/5">
                                    <div className="text-secondary font-display-lg text-2xl">3</div>
                                    <div className="text-[10px] text-on-surface-variant uppercase font-bold">VENDORS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Action Row */}
            <div className="fixed bottom-0 left-0 w-full bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/10 z-40 px-margin-mobile md:px-margin-desktop py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
                <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-2">
                        <button className="bg-surface-container-highest hover:bg-surface-variant text-on-surface px-6 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95 text-sm font-bold">
                            <span className="material-symbols-outlined">download</span>
                            Download PDF
                        </button>
                        <button className="bg-surface-container-highest hover:bg-surface-variant text-on-surface px-6 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95 text-sm font-bold">
                            <span className="material-symbols-outlined">share</span>
                            Export CSV
                        </button>
                    </div>
                    <button className="bg-primary-container hover:shadow-lg hover:shadow-primary-container/20 text-on-primary font-bold px-10 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95">
                        <span className="material-symbols-outlined">check_circle</span>
                        Mark as Paid
                    </button>
                </div>
            </div>
        </div>
    );
}
