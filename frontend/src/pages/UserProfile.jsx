import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    return (
        <div className="bg-background text-on-surface font-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
            {/* Artistic Noise Overlay */}
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            {/* Top Navigation Bar */}
            <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/">Explore</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/trips">Trips</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/feed">Community</Link>
                        <Link className="text-primary font-bold transition-colors duration-300 font-body-md" to="/profile">Profile</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/admin" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</Link>
                        <div className="w-10 h-10 rounded-full border-2 border-primary-container p-0.5 overflow-hidden">
                            <img 
                                alt="User Profile" 
                                className="w-full h-full object-cover rounded-full" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNQCpQ68VuSAFBuOCLiRS5ei0llUQiu4WqaKha3BoAN_kxr02XX0c_ZkFmFRZAs8qjcSOVJ7IgqzKk_U8tmMCZqlinR4f6u1tplEze03npMCIZFEtONqG5Vm2P2KYpWrMWCXdgrgYuopDv8jVisRKT2wXsSgMhxBemRbcUFiNImEFPqd4ko5s_Tag4d9lMAi12QIIlyBDcfS6LB17qDB0cAue34xfcu_vyoMtybPzc8omcdOr38ENlXeycB-0U4PabZxzLq3qFZ0c"
                            />
                        </div>
                    </div>
                </nav>
            </header>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg relative z-10">
                {/* Hero Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] coral-glow -z-10 bg-primary-container/5 rounded-full blur-[100px]"></div>

                {/* Profile Hero Card */}
                <section className="bg-surface-container rounded-xl p-8 mb-xl shadow-2xl relative overflow-hidden glass-sheet border border-white/5">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Avatar with Coral Ring */}
                        <div className="relative">
                            <div className="w-[100px] h-[100px] rounded-full border-4 border-primary-container p-1 bg-background shadow-[0_0_20px_rgba(255,107,74,0.3)] overflow-hidden">
                                <img 
                                    alt="Avatar" 
                                    className="w-full h-full object-cover rounded-full" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuiVOA4MuAkRaMzuvqj821cxyvWCFf5hqjWKe9i37kApbvu_U2sRlBVgoTtuXBcG_TQMr0M3OwkdrERbVSctjPzYh_GfxBAk7f3TN-9_ftQCuVnUBdNMqUu3wGGfs8ibiquEPSbl5mVotVROrbETP5tWjoG8Ch3WFtIybNAOfGrL1YkgIkvMS318RxSxCDHbzxeHB-CYQj5b_OKaWvmtZYz74zmJCOo_YZI8GmqVGwlomK1i-NP7_mMFg7tODWLDz9oaCRIzFDSDs"
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h2 className="font-headline-md text-headline-md text-on-surface">Elena Rodriguez</h2>
                                    <p className="text-on-surface-variant font-body-md">Luxury Explorer & Cultural Curator</p>
                                </div>
                                <button className="px-6 py-2 border-[1.5px] border-primary-container text-primary-container rounded-full font-body-md hover:bg-primary-container/10 transition-all active:scale-95">
                                    Edit Profile
                                </button>
                            </div>
                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                                <Link to="/trips" className="bg-surface-container-low px-6 py-3 rounded-full flex items-center gap-3 border border-outline-variant/10 hover:border-primary-container/30 transition-all">
                                    <span className="text-primary-container font-bold text-headline-sm">24</span>
                                    <span className="text-on-surface-variant text-body-sm tracking-wide uppercase font-label-mono text-[10px]">Trips</span>
                                </Link>
                                <div className="bg-surface-container-low px-6 py-3 rounded-full flex items-center gap-3 border border-outline-variant/10">
                                    <span className="text-primary-container font-bold text-headline-sm">18</span>
                                    <span className="text-on-surface-variant text-body-sm tracking-wide uppercase font-label-mono text-[10px]">Countries</span>
                                </div>
                                <Link to="/trips" className="bg-surface-container-low px-6 py-3 rounded-full flex items-center gap-3 border border-outline-variant/10 hover:border-primary-container/30 transition-all">
                                    <span className="text-primary-container font-bold text-headline-sm">3</span>
                                    <span className="text-on-surface-variant text-body-sm tracking-wide uppercase font-label-mono text-[10px]">Upcoming</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Preplanned Trips Section */}
                <section className="mb-xl">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Preplanned Trips</h3>
                        <Link className="text-primary text-body-sm font-bold flex items-center gap-1 hover:underline" to="/trips">
                            View all <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        {/* Card 1 */}
                        <Link to="/itinerary/1" className="group">
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary-container/20">
                                <img alt="London" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHa4lWf3N9FA4V36WtLjO7LFvURRL4Cj5RBfx-HmpMuegRC4Nziq-Z-9yG6vMALyQcFIKOlwqrwMex4FFy-FR7Jxtkxl_DLqWj5rUUxang0aNUIoP6lD0XiS-UqyfBdCewfi-5w658r6Pp6CN1RzJu2pULYMTc8aoPAy739_lSqgeqNE-EYvFWjW1c_Tpnm7BdSLTSo76kDrES-B4_cP4QVavnDbjW_XxFDTDvNQNW6116ms1nNibEv3crecE6Mr5YI50tvFK30H4" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[10px] font-label-mono text-primary-container bg-primary-container/10 px-2 py-1 rounded mb-2 inline-block">SEP 2024</span>
                                    <h4 className="text-on-surface font-headline-sm">London Fog & Tea</h4>
                                </div>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/itinerary/1" className="group">
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary-container/20">
                                <img alt="Venice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiw2HVADDu8FAgRXNHkid0PbsXNDI1CUKmSypuutEaKcj9Wj6eVGCUR1EeCbDoBvVNwHPZQvHo-dPViTRZTv-1-ILWiTndKXgNCpGBC-_ew3IIv_7bd1oFDd33oaao5WWnLpRG21llMhvsRlBUF4-x2Qew6gb19DpIb4e6PJQeRykNQHPm0LnwLzHRMf8iQIFw7HoOK7nMnq1o2lnoxiENuhN4crsklf2UDpSMOfHMc7nm0dTk3BJKy8kKjpHgBpzbxopJNtX9ao" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[10px] font-label-mono text-primary-container bg-primary-container/10 px-2 py-1 rounded mb-2 inline-block">OCT 2024</span>
                                    <h4 className="text-on-surface font-headline-sm">Venetian Serenade</h4>
                                </div>
                            </div>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/build" className="group">
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary-container/20">
                                <img alt="Kyoto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKP5wetvV7wl2LXnK8hr2-PhTQw1Mpxq1kkhpwiSf0Fwvr6QcyJYYOnUTAWj1dv_blJx7zgTgRNay4pe_RMqwl5Q3JvnZFsUECuCP3N7hi3NfXexTyUQZNFndyOPvpMJOvebBlfzncOi2rW7H6ghg-gRPebrSPvqxFAbx3aGjspWpo5i7LME-56R5GXGSeutlo8bs874YWI8A_4dEl98C6KNkOUDjQzDr529DuGRImNsCm9pJPzkR_c9GbQkwOdkHENlwDcILd4hg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[10px] font-label-mono text-primary-container bg-primary-container/10 px-2 py-1 rounded mb-2 inline-block">NOV 2024</span>
                                    <h4 className="text-on-surface font-headline-sm">Zen Gardens Kyoto</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Previous Trips Section */}
                <section className="mb-xl">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Previous Trips</h3>
                        <span className="text-on-surface-variant font-label-mono uppercase tracking-widest text-[10px]">2023 Archive</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        {/* Previous Card 1 */}
                        <Link to="/notes" className="glass-sheet p-3 rounded-xl group hover:border-primary-container/30 transition-all border border-white/5 block">
                            <div className="aspect-square rounded-lg overflow-hidden mb-4">
                                <img alt="Maldives" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwwQbo9XTlmNwnXTM9j5adBnal-HJZxt8hDuuPZe-qq2-eHjiRISs3ULQJPo1mNNotwWp3naH-_RROPp4xcEo-T-BJUBQ34CxEm9vo682ZGPqSnnBzYMpd34tFzVnzzwSmeYTbQZulGMqlfMSSJu4C2-gWkStKV4YiRVw_mZSP9O3wbQMM3bT-kbr0XFJ08EO5GkQtDT98Q0vArjV8k35r_0Pa4Ep_ucMWUu7PLj8qE37elL08LFzN88L0z72MPUb3CvZlhWHtcZA" />
                            </div>
                            <div className="px-2 pb-2">
                                <h5 className="text-on-surface font-body-lg font-bold">Maldives Retreat</h5>
                                <p className="text-on-surface-variant text-body-sm">February 2023 • 12 days</p>
                            </div>
                        </Link>
                        {/* Previous Card 2 */}
                        <Link to="/notes" className="glass-sheet p-3 rounded-xl group hover:border-primary-container/30 transition-all border border-white/5 block">
                            <div className="aspect-square rounded-lg overflow-hidden mb-4">
                                <img alt="Paris" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8SvdwUqEBDeMXpDZdAoZRD7x1ujKU-7lVA8OFNlaey7wfLQgfgXToiLJ794xHhLDuus1EPdyPbXJ5_9l_1e0KRS6PkvJ1nkFI6yApgxwDr7L5ZdRT5gaRZmbZOVFJjaYB_1YZYRUs0w57jhI2Jcp-0ucnxTloFL2slw6f6Kov3glpa-CEvQLVGcD74sNdaKUbWJKJYgkT7QIp2FIPhOfht6Kpf99GdrZ1sgWcOUmH6J67X60xPzUI6XGBvAR6qIYyJYvUrc1jkf4" />
                            </div>
                            <div className="px-2 pb-2">
                                <h5 className="text-on-surface font-body-lg font-bold">Parisian Spring</h5>
                                <p className="text-on-surface-variant text-body-sm">April 2023 • 7 days</p>
                            </div>
                        </Link>
                        {/* Previous Card 3 */}
                        <Link to="/notes" className="glass-sheet p-3 rounded-xl group hover:border-primary-container/30 transition-all border border-white/5 block">
                            <div className="aspect-square rounded-lg overflow-hidden mb-4">
                                <img alt="Swiss Alps" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYqlo0w9wJhfLdv6-b9HsndTQoV4Tt5BB8mNzKNV4xttXu93YZeff7UlShLEUXdXpqqQY1DW8MVDSTceKIy2B3me96fnnS8WOlWQi5OK9iTyscq7xgdGjZJ8I2TjB60Yi6m-guyLgb1FlKGeMT83ZW0HVJjwYQbPOsuPEIrqKSmTcxwmm9o2Kl5VLPXFikNl4Mnb5EHxUDSUY9IB639_48OJYrrI9-X0pP3vRufVy9MkRUPPewGNDdw3sc1tylp8bMDjB3_HLw60" />
                            </div>
                            <div className="px-2 pb-2">
                                <h5 className="text-on-surface font-body-lg font-bold">Alpine Escape</h5>
                                <p className="text-on-surface-variant text-body-sm">December 2023 • 5 days</p>
                            </div>
                        </Link>
                    </div>
                </section>

                <footer className="mt-xl border-t border-outline-variant/10 pt-10 pb-20 text-center">
                    <button className="text-error flex items-center gap-2 mx-auto font-body-md hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined">logout</span>
                        Logout from Traveloop
                    </button>
                    <p className="text-on-surface-variant/40 text-[10px] mt-6 font-label-mono">Version 2.4.0 • Midnight Editorial Engine</p>
                </footer>
            </main>

            {/* Mobile Nav Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] rounded-t-xl">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/trips">
                    <span className="material-symbols-outlined">map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/saved">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm tracking-wide">Saved</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110 transition-all duration-200" to="/profile">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </nav>
            <div className="h-24 md:hidden"></div>
        </div>
    );
}
