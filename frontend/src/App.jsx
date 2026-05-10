import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import ActivitySearch from './pages/ActivitySearch';
import AdminAnalytics from './pages/AdminAnalytics';
import BuildItinerary from './pages/BuildItinerary';
import CommunityFeed from './pages/CommunityFeed';
import CreateTrip from './pages/CreateTrip';
import ExpenseInvoice from './pages/ExpenseInvoice';
import ItineraryView from './pages/ItineraryView';
import MyTrips from './pages/MyTrips';
import PackingChecklist from './pages/PackingChecklist';
import TripNotes from './pages/TripNotes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/search" element={<ActivitySearch />} />
        <Route path="/admin" element={<AdminAnalytics />} />
        <Route path="/build" element={<BuildItinerary />} />
        <Route path="/feed" element={<CommunityFeed />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/invoice" element={<ExpenseInvoice />} />
        <Route path="/itinerary/:id" element={<ItineraryView />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="/packing" element={<PackingChecklist />} />
        <Route path="/notes" element={<TripNotes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
