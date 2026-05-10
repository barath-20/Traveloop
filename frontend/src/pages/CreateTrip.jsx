import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../services/api';

export default function CreateTrip() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        destination: '',
        start_date: '',
        end_date: '',
        is_public: true
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await api.trips.create(formData);
            navigate('/trips');
        } catch (err) {
            setError(err.message || 'Failed to create trip');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 min-h-screen relative">
            <div className="fixed inset-0 grain pointer-events-none z-0"></div>
            
            {/* TopAppBar */}
            <header className="bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-xl shadow-background/40 docked full-width top-0 sticky z-50">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">Traveloop</h1>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-6">
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/">Explore</Link>
                            <Link className="text-primary font-bold transition-colors duration-300 font-body-md" to="/trips">Trips</Link>
                            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" to="/saved">Saved</Link>
                        </nav>
                        <div className="h-10 w-10 rounded-full border border-primary/20 bg-surface-container overflow-hidden">
                            <img 
                                alt="User Profile" 
                                className="h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLTx4qdIiG8t4Mm2yL9jUk1L5PErG-aZvo4eKmaQ4aaC2qVYPnmsZ38aZmnX-XIu85MRWtX1jTVTgE8A4sPEPiGq9KuXeMjiMSIYVDMBsLMJqlxmPJRRDsuX6qfoc9hPyH0L_zImEJCr5oN21d5JFwVnCLwCnMTDBWMo1ZK6jQB5L50OMROsGyw4e8bnoBbZnL0vWKfFcDYQ-FpDUf3rKt8IdQsYpo5TvS-8xXyTdzNzDS77GzpCtXQ24NcgkE44y5EP6WIHLAJw"
                            />
                        </div>
                    </div>
                    
                    <div className="md:hidden">
                        <span className="material-symbols-outlined text-primary">menu</span>
                    </div>
                </div>
            </header>

            <main className="relative px-margin-mobile md:px-margin-desktop py-12 max-w-[1200px] mx-auto pb-40">
                {/* Atmospheric Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] hero-glow pointer-events-none"></div>

                {/* Header Section */}
                <div className="relative z-10 mb-12">
                    <h2 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-surface mb-4">Plan a New Trip ✈</h2>
                    <p className="text-on-surface-variant max-w-2xl font-body-lg">Design your next escape. Fill in the details below and let Traveloop craft a seamless itinerary tailored to your rhythm.</p>
                </div>

                {/* Main Form Bento Grid */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
                    {/* Trip Details Card */}
                    <div className="md:col-span-8 bg-surface-container p-8 rounded-xl shadow-2xl border border-outline-variant/10">
                        <div className="space-y-8">
                            {/* Trip Name */}
                            <div className="relative group">
                                <label className="block font-label-mono text-tertiary uppercase tracking-widest text-[10px] mb-2">Trip Identity</label>
                                <input 
                                    className="w-full bg-background border-outline-variant/30 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-headline-sm font-headline-sm placeholder:opacity-30" 
                                    placeholder="e.g., Amalfi Coast Summer '24" 
                                    type="text"
                                    id="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Destination */}
                                <div className="relative">
                                    <label className="block font-label-mono text-tertiary uppercase tracking-widest text-[10px] mb-2">Primary Destination</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">location_on</span>
                                        <input 
                                            className="w-full bg-background border-outline-variant/30 rounded-lg p-4 pl-12 text-on-surface focus:ring-2 focus:ring-primary outline-none transition-all font-body-md" 
                                            placeholder="Where to?" 
                                            type="text"
                                            id="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Date Range */}
                                <div className="relative">
                                    <label className="block font-label-mono text-tertiary uppercase tracking-widest text-[10px] mb-2">Timeline</label>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">calendar_month</span>
                                            <input 
                                                className="w-full bg-background border-outline-variant/30 rounded-lg p-4 pl-12 text-on-surface focus:ring-2 focus:ring-primary outline-none transition-all font-body-md" 
                                                placeholder="Start" 
                                                type="date"
                                                id="start_date"
                                                value={formData.start_date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <span className="text-outline-variant">→</span>
                                        <div className="relative flex-1">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">event</span>
                                            <input 
                                                className="w-full bg-background border-outline-variant/30 rounded-lg p-4 pl-12 text-on-surface focus:ring-2 focus:ring-primary outline-none transition-all font-body-md" 
                                                placeholder="End" 
                                                type="date"
                                                id="end_date"
                                                value={formData.end_date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Preview/Helper */}
                    <div className="md:col-span-4 bg-surface-container-high rounded-xl overflow-hidden relative min-h-[300px] border border-outline-variant/10 group">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiHcMJoTqqHb9W0Mk-aBtt6DH_y7j6CN3eejkTncti1Or7IgMpRWYH6C8JpUVszt-cS_qznb00fAUjetE_jb15MiXJmWKzP-cubTg1jf2xHUyY0AHJefahLED44fJSEVXE255_8-JBDozDgs-E5TBvd9QK_-gecGWwS9POrBxKg5obuNggjaMkY_VIJuxcUzw9q-59hLwloCKI41qUv5Yj9s2SvDZDHsvzdNPrmZvo63k_0u_JbARjdhQTXZ7YVSp7g5m1bYno3RE')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="font-display-lg text-headline-md text-on-surface">Explore the Globe</p>
                            <p className="text-body-sm text-on-surface-variant">Selected destinations will appear here.</p>
                        </div>
                    </div>
                </section>

                {/* Suggestions Section */}
                <section className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        <h3 className="font-headline-md text-headline-md">Suggested Places & Activities</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Suggestion Card 1 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="Dolomites Hiking" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR02q0fEHGMP4lFNtYpfjPdsX5pUX2XH92J9Cta3ZYKBGmHrQhJ967qNV6g8Ch0pO0wRrBGT6lyT8fyN3gaOPRESDX1Cca9ItdsiRi_NdSzex0twpbfMX8baCeN-o_qBQW98SPXlLRsU9nIqbenU52h-MHpBKx29F2QjQyGlEwNSReIM-Nf15XgskfJJZwo6uKGlLacgylkkSirwbOXo88eWcU0AFulxV2prrfhHWvG1prrOZG3JtZ6ySAnGbbdr3B40dg_4x-o2Q"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Nature • Adventure</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Dolomites Circuit</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">Experience the raw beauty of the Italian Alps with curated high-altitude trails.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$1,200 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                        {/* Suggestion Card 2 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="London Nightlife" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYtoF1Kxdy5tk_Kf0VaHNbi5KRqvSrTVhm5VoosXmZmWAYX0Zi19wfj7vWk9kX5EBKTk1U6Ihv7Ea3Tf-aOPaNWmdIxnzpRNFq-zV_L0V402uf0Un8tdDp1Gg5t1BY-Nq1CPqeivttHSZr9qXfwXmMpRx43zIOC5rvdqS4K3yIqxKCjT24V776H3EYopzDF3Y5DUvoywJ-gJuLf_sHFUgRWWYWNRrprTQtPwh8Ct-F0hdWTefn6ATg1uyNVsLAeMXShDw4W-_7q94"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Urban • Culture</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Soho After Dark</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">Discover hidden mixology dens and private galleries in the heart of London.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$450 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                        {/* Suggestion Card 3 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="Santorini Retreat" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkQjnfSjTqgkTfRlESOl6cUOJtbSvPhDw3kGH6F5ha8wzbX8I5IMkewxrUBD7OtWJ25eI65LWNR0M1spcKUUGMyPS6MmSbAMAKFRkB0nh8506d5W-6Vyytvv9x_VPWTHR2xTTs0B9OIgWVbHGYt2HL5GZ9oSt98dG0qD7iWO0aXYSGbwWca0j4aGMggob1lczBRCGkvzwVZ2n6s4YgJ3JEO_FMLJmC14_Pe-6CyHUCDZUV3XubSZEl_BBolVH80TGnWi6pp7e-Edk"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Luxury • Wellness</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Oia Serenity</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">Exclusive villa stays with private caldera views and holistic spa treatments.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$2,800 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                        {/* Suggestion Card 4 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="Kyoto Ryokan" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFZwYWGT15Zw6i3qqwslRbz3srln1cY5KSVk1FfAFsJ1cjGBWtUckC7aXy6XvCjG4Fc6ysi6R9Ba3BiWTwCCdvRFnGvGHJvzRm85eyOJLPwgFM_4nPWy3b7wcK8JCgXq1oJ3P5reHQ10m1iqFjOdAviNHN7CN3GbtzcwfG1iGvbZzr_Bjtumw7JtCqyhYnJztZ2qZz8ziKV36jhF01dX6hw5r0ndCVIr2cq7teEGcj4Tu5WxJwrX77ontrXZg2TrJkiLvxJmIDfu4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Zen • Culinary</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Kyoto Ryokan</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">Immerse yourself in ancient traditions with private tea ceremonies and Kaiseki.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$1,950 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                        {/* Suggestion Card 5 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="Desert Safari" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1T3BLgkJ660RDN6sLQNqhBq9HaLacfDuYk8flTBm2tNEv6r55KIP2r5oLlxmLc6kXIkb9QPnxT5G9FINoqTAcQiWli1It12xtk_WRWZ9QJb2Yk8nxozdcHj4d9LMedsszGpOZC7z7iOWkORsNWFjIlnvDdEOwX7DVes5VQ35JrP4IKOzfKiiRZpSwXSXY-B25fOo_XiwbMNgXmRBAB0TfF2q9647WK8B3ZybRSjEcYybS-RWF-XU04_Ps-FctESRpijbFGfIfODc"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Exotic • Stargazing</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Sahara Glamping</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">A night under the clearest skies on earth with gourmet fireside dining.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$890 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                        {/* Suggestion Card 6 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <img 
                                alt="Vietnam Cruise" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSYPMzz_ifx6zLIQACyxiO4WccqXZllfXzlBT4VA9XKh5xscYC0fm6ty7kunhRXYlHkQ-VraDAe3WpDOnkaZd7A9fwjoUxX5JnIdo2Lt2MrQwB8T7ER3uwQtdX6dk-yQ1zbu2USkiC9iu4mh6BPQt3KtP2tqoAslzgTP7Y1vMw4M6XTvk09Mk2yJx8zedif4wt2HsveWb8ZOBS_Zx5wBwE8XNAAhOVyTT4v9eTPtmbvX6SA7IhCtQWtaTmnfgSWACiECG7ly3_nbQ"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 glass-card">
                                <span className="font-label-mono text-[10px] text-tertiary uppercase tracking-widest mb-1 block">Cruise • Heritage</span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Ha Long Mist</h4>
                                <p className="text-body-sm text-on-surface-variant opacity-80 mb-4 line-clamp-2">Sail through the limestone giants of Vietnam on a restored luxury junk boat.</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-body-sm font-bold">$1,400 pp</span>
                                    <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">add_circle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation Shell (Mobile Only) */}
            <footer className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-2 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] rounded-t-xl">
                <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200 cursor-pointer">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-body-sm text-body-sm tracking-wide">Explore</span>
                </div>
                <div className="flex flex-col items-center justify-center text-primary bg-primary-container/10 rounded-full px-4 py-1 scale-110 transition-all duration-200 cursor-pointer">
                    <span className="material-symbols-outlined">map</span>
                    <span className="font-body-sm text-body-sm tracking-wide">Trips</span>
                </div>
                <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200 cursor-pointer">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-body-sm text-body-sm tracking-wide">Saved</span>
                </div>
                <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200 cursor-pointer">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-body-sm text-body-sm tracking-wide">Profile</span>
                </div>
            </footer>

            {/* Fixed Action Button (Web & Mobile) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-margin-desktop z-[60]">
                {error && (
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[300px] bg-error/10 text-error p-3 rounded-lg text-sm text-center font-bold border border-error/20 backdrop-blur-md">
                        {error}
                    </div>
                )}
                <button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`flex items-center gap-3 bg-primary-container text-on-primary px-10 py-5 rounded-full font-headline-sm text-headline-sm shadow-[0_8px_32px_rgba(255,107,74,0.4)] hover:shadow-[0_12px_48px_rgba(255,107,74,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 ${isLoading ? 'opacity-70' : ''}`}
                >
                    <span>{isLoading ? 'Creating...' : 'Create Trip'}</span>
                    <span className="material-symbols-outlined">{isLoading ? 'sync' : 'arrow_forward'}</span>
                </button>
            </div>
        </div>
    );
}
