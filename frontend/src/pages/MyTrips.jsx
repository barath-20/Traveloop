import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function MyTrips() {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await api.trips.list();
                setTrips(response.trips);
            } catch (err) {
                setError(err.message || 'Failed to fetch trips');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const ongoingTrips = trips.filter(t => t.status === 'ongoing');
    const upcomingTrips = trips.filter(t => t.status === 'upcoming');
    const completedTrips = trips.filter(t => t.status === 'completed');

    if (isLoading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="text-primary animate-pulse font-display-lg">Loading your journeys...</div>
            </div>
        );
    }

    return (
        <div className="bg-background text-on-surface min-h-screen relative">
            {/* Artistic Noise Overlay */}
            <div className="fixed inset-0 grainy-surface z-0 pointer-events-none opacity-20"></div>

            <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10 shadow-xl shadow-background/40">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <Link to="/" className="font-display-lg text-display-lg-mobile text-primary tracking-tight">Traveloop</Link>
                    </div>
                    <div className="flex items-center gap-6 text-on-surface">
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/">Explore</Link>
                            <Link className="font-body-md text-primary font-bold transition-colors duration-300" to="/trips">Trips</Link>
                            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" to="/feed">Community</Link>
                        </nav>
                        <Link to="/profile" className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
                            <img 
                                alt="User Profile" 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpxQoGb2jK6PZqRPZEHLQIE_tR2y-Iq-qnBok_ofYFE4PR3HUKbxbprnMNwZEoaChfQrKHkpU16m1Ts96ENS1wYiIogt2qAq2L4_9Jp2jFMeydPHA8kFKiBd0GE8Tt8aR2nayzWHIHEnjxTjqZcXMtoxrUMPr9MVbrhzIBvYfLDkroNnJpi6M8KRLUE_Ngs1kuJBEq0Wh5UlNYxM4FreIaaBfFpwqFI--F9BMqzY4--JOJU2OpW7d4wagbCvqTncjrEG4jt1ZdSJc"
                            />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg pb-xl relative z-10">
                <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
                    <div>
                        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">My Journeys</h1>
                        <p className="font-body-lg text-on-surface-variant max-w-xl">Manage your upcoming adventures and revisit your global footprints.</p>
                    </div>
                    <div className="flex gap-2 p-1 bg-surface-container rounded-xl">
                        <button className="px-6 py-2 bg-primary-container text-on-primary rounded-lg font-body-sm transition-all active:scale-95">All Trips</button>
                        <button className="px-6 py-2 text-on-surface-variant hover:text-primary rounded-lg font-body-sm transition-all">Archive</button>
                    </div>
                </div>

                {/* Ongoing Section */}
                {ongoingTrips.length > 0 && (
                    <section className="mb-xl">
                        <div className="flex items-center gap-4 mb-gutter">
                            <span className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,107,74,0.6)]"></span>
                            <h2 className="font-label-mono text-label-mono tracking-widest text-primary-container uppercase">Ongoing</h2>
                        </div>
                        {ongoingTrips.map(trip => (
                            <div key={trip.id} className="group relative bg-surface-container rounded-xl overflow-hidden border-l-4 border-primary-container shadow-2xl transition-all hover:-translate-y-1 mb-md">
                                <div className="flex flex-col md:flex-row">
                                    <Link to={`/itinerary/${trip.id}`} className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden block">
                                        <img 
                                            alt={trip.destination} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            src={trip.image_url || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"}
                                        />
                                    </Link>
                                    <div className="w-full md:w-2/3 p-md flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-base">
                                                <div>
                                                    <h3 className="font-headline-md text-on-surface">{trip.title}</h3>
                                                    <p className="font-body-md text-on-surface-variant">{trip.destination}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Link to="/packing" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined">inventory_2</span>
                                                    </Link>
                                                    <Link to="/invoice" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined">receipt_long</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex gap-gutter mt-sm">
                                                <div className="flex flex-col">
                                                    <span className="font-label-mono text-[10px] text-outline uppercase tracking-tighter">Duration</span>
                                                    <span className="font-body-md text-on-surface">{trip.start_date} — {trip.end_date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-lg flex items-center justify-end">
                                            <Link to={`/itinerary/${trip.id}`} className="px-8 py-3 bg-primary-container text-on-primary font-body-md rounded-lg shadow-lg hover:shadow-primary-container/20 transition-all active:scale-95">View Itinerary</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Upcoming Section */}
                {upcomingTrips.length > 0 && (
                    <section className="mb-xl">
                        <div className="flex items-center gap-4 mb-gutter">
                            <span className="w-3 h-3 rounded-full bg-tertiary-container shadow-[0_0_12px_rgba(231,196,70,0.4)]"></span>
                            <h2 className="font-label-mono text-label-mono tracking-widest text-tertiary-container uppercase">Upcoming</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-md">
                            {upcomingTrips.map(trip => (
                                <div key={trip.id} className="group bg-surface-container rounded-xl overflow-hidden border-l-4 border-tertiary-container hover:bg-surface-container-high transition-all">
                                    <div className="flex flex-col md:flex-row">
                                        <Link to="/build" className="w-full md:w-48 h-48 md:h-auto overflow-hidden block">
                                            <img 
                                                alt={trip.destination} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                src={trip.image_url || "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"}
                                            />
                                        </Link>
                                        <div className="flex-1 p-md flex flex-col justify-center">
                                            <div className="flex justify-between items-center">
                                                <Link to="/build">
                                                    <h3 className="font-headline-sm text-on-surface">{trip.title}</h3>
                                                    <p className="font-body-sm text-on-surface-variant">{trip.destination} · {trip.start_date} — {trip.end_date}</p>
                                                </Link>
                                                <Link to="/notes" className="p-3 rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-tertiary-container hover:text-tertiary-container transition-all">
                                                    <span className="material-symbols-outlined">edit_note</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Completed Section */}
                {completedTrips.length > 0 && (
                    <section className="mb-xl opacity-60 hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-4 mb-gutter">
                            <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(151,211,179,0.3)]"></span>
                            <h2 className="font-label-mono text-label-mono tracking-widest text-secondary uppercase">Completed</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-md">
                            {completedTrips.map(trip => (
                                <div key={trip.id} className="group bg-surface-container rounded-xl overflow-hidden border-l-4 border-secondary hover:bg-surface-container-high transition-all">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                            <img 
                                                alt={trip.destination} 
                                                className="w-full h-full object-cover" 
                                                src={trip.image_url || "https://images.unsplash.com/photo-1548013146-72479768bbaa"}
                                            />
                                        </div>
                                        <div className="flex-1 p-md flex flex-col justify-center">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-headline-sm text-on-surface">{trip.title}</h3>
                                                    <p className="font-body-sm text-on-surface-variant">{trip.destination} · {trip.start_date}</p>
                                                </div>
                                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {(trips.length === 0) && (
                    <section className="py-xl flex flex-col items-center text-center">
                        <div className="relative mb-lg">
                            <div className="w-48 h-48 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/20 shadow-inner">
                                <span className="material-symbols-outlined text-7xl text-primary opacity-20">public</span>
                            </div>
                        </div>
                        <h3 className="font-headline-md text-on-surface mb-2">No journeys yet?</h3>
                        <p className="font-body-md text-on-surface-variant max-w-sm mb-lg">Your next global story is waiting to be written. Start exploring destinations today.</p>
                        <Link to="/create" className="px-10 py-4 bg-primary-container text-on-primary font-display-sm rounded-full shadow-2xl hover:scale-105 transition-transform">
                            Book a New Adventure
                        </Link>
                    </section>
                )}
            </main>

            {/* Mobile Nav */}
            <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] md:hidden">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm tracking-wide">Explore</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110 transition-all duration-200" to="/trips">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                    <span className="font-body-sm tracking-wide">Trips</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/saved">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm tracking-wide">Saved</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200" to="/profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm tracking-wide">Profile</span>
                </Link>
            </footer>
        </div>
    );
}
