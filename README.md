# Paradise 🏔️

Paradise is a modern mountain-suite booking application built with Next.js and TypeScript. The project focuses on delivering a smooth reservation experience through a dynamic Jalali calendar, protected routes, persistent client-side state management, and a fully responsive user interface.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Zustand
- next-themes
- date-fns-jalali

## Highlights

### Authentication & Route Protection

Authentication is handled through cookies and middleware to protect private routes and restrict unauthorized access.

### Interactive Jalali Calendar

Users can select booking dates using a dynamic Persian calendar powered by `date-fns-jalali`.

### Reservation Management

Create, view, and remove reservations through a lightweight state management system powered by Zustand with persistence.

### Theme Switching

Built-in dark and light mode support with theme persistence across sessions.

### Responsive Design

Optimized for mobile, tablet, and desktop devices with a consistent user experience across screen sizes.

### Modern Architecture

The application is structured using the App Router architecture and Server Actions, making it easy to integrate with a real backend in the future.

## Future Integration

The current version uses persistent client-side storage for reservation data. Migrating to a backend service such as Node.js and MongoDB would require minimal changes, primarily within the server-side actions layer.

## Learning Goals

This project was created to practice:

- Next.js App Router
- Server Actions
- Route protection with Middleware
- Zustand state management
- Jalali date handling
- Responsive UI development
- Theme management with next-themes

## Live Demo

🔗 https://lost-paradise.vercel.app/
