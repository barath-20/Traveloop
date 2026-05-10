# Traveloop API Endpoints Documentation

## Dashboard Overview
![Main Dashboard](docs/dashboard.png)

## Authentication (`/auth`)
- `POST /api/v1/auth/register`: Register a new traveler
- `POST /api/v1/auth/login`: Authenticate and receive a JWT token
- `POST /api/v1/auth/logout`: End the current session
- `POST /api/v1/auth/forgot-password`: Initiate password reset
- `POST /api/v1/auth/reset-password`: Complete password reset

## User Profiles (`/users`)
- `GET /api/v1/users/me`: Get current user details
- `PUT /api/v1/users/me`: Update profile information
- `GET /api/v1/users/{id}`: View public profile of another user

## Trips Management (`/trips`)
- `GET /api/v1/trips/`: List all user trips
- `POST /api/v1/trips/`: Create a new trip
- `GET /api/v1/trips/{id}`: Get trip details
- `PUT /api/v1/trips/{id}`: Update trip details
- `DELETE /api/v1/trips/{id}`: Remove a trip

## Trip Sections & Itinerary
- `GET /api/v1/trips/{id}/sections`: List sections of a trip
- `POST /api/v1/trips/{id}/itinerary`: Generate or update itinerary builder data
- `GET /api/v1/trips/{id}/itinerary`: View detailed voyage schedule

## Activities & Search
- `GET /api/v1/search/`: Search for destinations and activities
- `GET /api/v1/activities/`: List system-wide activity recommendations
- `GET /api/v1/destinations/`: Explore available travel destinations

## Expenses & Budgeting
- `GET /api/v1/trips/{id}/expenses`: Track voyage spending
- `POST /api/v1/trips/{id}/expenses`: Log a new expense
- `GET /api/v1/trips/{id}/invoice`: Generate expense summary/invoice

## Utilities (Checklist & Notes)
- `GET /api/v1/trips/{id}/checklist`: Packing checklist management
- `GET /api/v1/trips/{id}/notes`: Manage trip-specific journals and notes

## Community & Admin
- `GET /api/v1/community/feed`: View global community travel feed
- `GET /api/v1/admin/analytics`: Detailed usage metrics for administrators
