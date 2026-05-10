import React from 'react';
import { Link } from 'react-router-dom';

export default function CommunityFeed() {
    const feedItems = [
        {
            id: 1,
            user: "Elena Rossi",
            role: "Luxe Nomad",
            userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCapyCKvGsVuxcSv30uGhhRuhYSVgbU9XlMqWOywesu7MHKgBxgshHAgUSeyxgnsCKBK2i4VqvS1W05zRBLEHNlDcIADWLh5nc5Bqn2zAF_biF28tC5_Jcz20zTrmN7kTeZXcT2q2Vh7iwihc9G7fcbublBeiFhD-_4ZlJaCspOEYUPR8ZrMTWPJJx1F4LmoS9DE1W6jnpupWMj6BwzCYhwfPqkr7HMHal7D4KwpmAYPKed1XbmkmTWNyW4Qfv70vnyFa9FIgkLrqg",
            title: "The Ultimate Amalfi Coast Retreat",
            description: "7 Days of lemon groves, hidden villas, and the finest Italian gastronomy.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGydqHoUwvdCc5LWBDPwoE2Ql41wC_I4cPJp6F6jbx_mYMnMwSqZbzKuJ2CtRRRERzYTt__UU-Q5EL59gCz9OByBGd9tSDa36Gsi2cBY2H-rA25WjDDm-ISD4Vi4c0zxmcAy2T-wdNtt7cGVaRkRw24veNyzhXPk-8L-ahK-rHdmRcPs9uX9qGcZF8SDsqp52yst1-Td20OraqnT2FiXzI90M8v3eV8-tYm7wvM55PH4oKR7wh-sM8kX4uLVzVkvwhP-znOM_pkgA",
            locations: "5 CITIES",
            likes: "1.2k",
            comments: "84"
        },
        {
            id: 2,
            user: "Marcus Chen",
            role: "Architectural Scout",
            userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR3MMxuzcM4glUr5B21xd20UxHcx5Hu4pXpjYHRI44itL-Jkq4k1gBwrZHX8q0MpFBUrBoGSbL8TqikkZUrN8moZOayptC5O1qem2EZMD64xUvoukML_YV2NahiboN8KCeyNtIeRkNYOB3jyxo6BvvV9MdYxLNHQFAqrWRBs7GAjWnKqWcdSAWHE4A8YaVNW7-NIAgHy9METfUud1JdRJROa_IhLGNQijBhfpvncYNOP0Usd-Gjkfl8sXD-bJwCodStFWMDSXteCQ",
            title: "Kyoto: Modernity Meets Tradition",
            description: "A deep dive into Japan's ancient soul through the lens of modern architecture.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDet3d-G-cZa8HKvI0hery2Wls-d4sBmlFyscjyghcPTJ-CcjwJqyLuQwGgNrY9ouWUMl_fw_i7qYe4m7dpiSx-JinL8tPBx3_5bkJ2ClZsz3qt2haOvZS7E9rUxsHLeoLYEArxbKUoPhR6XHaeqz06unVT-ySmFkWFEoVsIU7PDe3QOJ9wXr5BvgtdFChMADhLg530MuxtPgefS0iGUeQ_igoq3F1FHj-OUaPeLSlGRIxkIMoLd0a1nH7HqLhHUD_qCTf9xij3Bsw",
            locations: "3 CITIES",
            likes: "2.5k",
            comments: "152"
        },
        {
            id: 3,
            user: "Sophie Laurent",
            role: "Gastronomy Guide",
            userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNftgOHVz3t6tTfBen9nItDTtjdotYEGdd6Kvhl7esG-8hPMNpxgF8QImmKh-3DXW_DisMzI-6M-2pDHxTl6hdKikUF6f1r6_wDc7znIzFxuOp_cR5ewuqJQStnSO2CecWuASdDJSv8gLwaVEXYxXn8NNorr9sVdxXJqV1B13zvToaClL5GS7Scs9o7U0zPXf-aNEmBclu0bnysuBVIjK1ZHrRPaeHhOzM2usTw65I52DOX8c0Q371MhL_S19mWKG8msi41ZsNmWs",
            title: "Parisian Nights: A Foodies Diary",
            description: "Discovering the secret bistros and Michelin stars of the City of Light.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-_hBP1wxHKP1qUtI5kfgo4nfaFHgzCSF-gqoBx1D71QTZTJZ6hDDszGYbQMT3VdHWQAk5Gpw2GzAM4wz-GeTDcoDDYzjPQ-QDA0Yc5GA1Ul0UA1wuw5n6y9tBy3v4OsWKBxKbhYf64nBvuy5k5EipxaPA1XTO6XGoV2irJPbbORJnckQo_aWq4RCCcfHQhb0xU6n9O0_LqCj0BYB5R9Oq4vzYFogG14BT_s4hkCLdiA-0uPu5PcmgTOf8NymtoKM5RXmpRSV1Ioo",
            locations: "2 CITIES",
            likes: "3.8k",
            comments: "241"
        }
    ];

    return (
        <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative">
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] coral-glow z-[-1] opacity-20 pointer-events-none rounded-full blur-[120px]"></div>

            {/* TopAppBar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40 sticky top-0 z-50">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-6 items-center">
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/">Explore</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/trips">Trips</Link>
                            <Link className="text-primary font-bold transition-colors duration-300 font-body-md" to="/feed">Community</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/profile">Profile</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz0QYghPHTUn2ApocmHLE0QCa3aK9B9NyyioM6cpgU1BglD7ehxCsfblP9_RBUuGwscRWbzXX3FBuqWS7JWYSUWtL8yi6A4uLn3jTRvpBStqOIf1ORheX9a2k2Uj-RPenmwmKiiyjHUkcivbGs_OLHf4S91gQMIH7ltt-1vfpiJB8p33baS6mu_c8zUxnNJFunoo9IdJx25LGVCViVjkiztxdyJINkjX_0ABcqNobnfXxDl4EVPEWHnd895lLCvZ1XjZ299vRS8T0" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Toolbar */}
            <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl flex items-center gap-3">
                            Community
                            <span className="material-symbols-outlined text-tertiary animate-pulse">auto_awesome</span>
                        </h1>
                        <p className="text-on-surface-variant font-body-lg max-w-lg mt-2">Shared inspiration from a world of collective journeys. Explore itineraries curated by global nomads.</p>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        <div className="flex items-center gap-2 bg-secondary-container/30 border border-secondary/20 px-4 py-2 rounded-full whitespace-nowrap">
                            <span className="material-symbols-outlined text-secondary text-sm">filter_list</span>
                            <span className="text-secondary font-body-sm">All Regions</span>
                        </div>
                        {["Europe", "Asia", "Americas"].map(region => (
                            <div key={region} className="flex items-center gap-2 bg-surface-container-high border border-outline-variant/20 px-4 py-2 rounded-full whitespace-nowrap text-on-surface-variant hover:border-primary/40 transition-all active:scale-95 cursor-pointer">
                                <span className="text-body-sm">{region}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent mt-8"></div>
            </section>

            {/* Main Feed */}
            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {feedItems.map((item) => (
                        <article key={item.id} className="group relative bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5">
                            {/* User Row */}
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-primary-container to-secondary">
                                        <img className="w-full h-full rounded-full object-cover border-2 border-surface-container" src={item.userImg} alt={item.user} />
                                    </div>
                                    <div>
                                        <p className="font-body-md font-bold text-on-surface">{item.user}</p>
                                        <p className="text-label-mono text-on-surface-variant uppercase tracking-widest text-[10px]">{item.role}</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">more_vert</span>
                            </div>

                            {/* Image Area */}
                            <div className="relative h-96 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={item.img} alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
                                
                                <div className="absolute top-4 left-4">
                                    <div className="bg-tertiary-container/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px] text-on-tertiary-container font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                        <span className="text-label-mono text-on-tertiary-container font-bold">{item.locations}</span>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-display-lg text-headline-sm text-on-surface leading-tight">{item.title}</h3>
                                    <p className="text-body-sm text-on-surface-variant line-clamp-2 mt-2 font-body-md">{item.description}</p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-surface-container-high/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4">
                                        <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-xl">favorite</span>
                                            <span className="text-label-mono">{item.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-xl">chat_bubble</span>
                                            <span className="text-label-mono">{item.comments}</span>
                                        </button>
                                    </div>
                                    <Link className="text-primary-container font-bold font-body-sm flex items-center gap-1 group/link" to={`/itinerary/${item.id}`}>
                                        View Itinerary
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            {/* FAB */}
            <button className="fixed bottom-24 right-margin-mobile md:right-margin-desktop bg-primary-container text-on-primary font-bold px-6 py-4 rounded-full shadow-[0_8px_32px_rgba(255,107,74,0.4)] flex items-center gap-3 active:scale-95 transition-all duration-200 z-40 hover:scale-105">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_location_alt</span>
                <span className="font-body-md">Share My Trip</span>
            </button>

            {/* BottomNavBar */}
            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] md:hidden rounded-t-xl">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary" to="/">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary" to="/trips">
                    <span className="material-symbols-outlined">map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110 transition-all duration-200" to="/feed">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="font-body-sm tracking-wide">Community</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </nav>
        </div>
    );
}
