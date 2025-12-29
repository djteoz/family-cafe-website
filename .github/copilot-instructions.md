# Family Cafe Website - AI Coding Instructions

## Project Overview

This is a **Next.js 16+** project using **App Router**, **TypeScript**, and **Tailwind CSS**. It serves as a website for a family cafe ("Уют") with menu browsing, cart functionality, and table booking via Telegram.

## Architecture & Core Patterns

### App Router Structure

- **Routes**: Located in `src/app`. Each directory with `page.tsx` is a route.
- **Layouts**: `src/app/layout.tsx` defines the root layout and wraps the application in `CartProvider`.
- **API Routes**: Located in `src/app/api`. Example: `src/app/api/booking/route.ts` handles form submissions.
- **Client vs Server**:
  - Default to Server Components.
  - Use `"use client"` at the top of files requiring React hooks (state, effects) or interactivity (e.g., `src/context/CartContext.tsx`, `src/app/menu/page.tsx`).

### State Management

- **Global State**: Managed via React Context in `src/context/CartContext.tsx`.
- **Persistence**: Cart state is persisted to `localStorage`.
- **Usage**: Consume via `useCart()` hook.
  ```typescript
  const { addToCart, cartItems } = useCart();
  ```

### Data Handling

- **Static Data**: Menu items are defined in `src/data/menu.ts`.
- **Types**: Interfaces are co-located with data or components.
  - `MenuItem`: Core type for food items.
  - `CartItem`: Extends `MenuItem` with `quantity`.

## Styling Conventions

- **Framework**: Tailwind CSS v4.
- **Custom Colors**: The project uses a specific palette (e.g., `bg-vanilla`, `text-berry`). Check `globals.css` or `tailwind.config.ts` (if present) for definitions.
- **Responsive Design**: Mobile-first approach using standard Tailwind breakpoints (`sm:`, `lg:`).

## API & Integrations

- **Booking System**:
  - Form data is sent to `src/app/api/booking`.
  - The API route forwards the request to a Telegram Bot.
- **Environment Variables**:
  - Required for API functionality: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
  - Ensure these are checked before making external calls.

## Development Workflow

- **Package Manager**: `npm`.
- **Scripts**:
  - `npm run dev`: Start development server.
  - `npm run build`: Build for production.
- **Imports**: Use the `@/` alias for imports from `src/` (e.g., `import { useCart } from "@/context/CartContext"`).

## Common Tasks

- **Adding Menu Items**: Update `menuItems` array in `src/data/menu.ts`. Ensure all fields (id, category, tags) match the `MenuItem` interface.
- **Modifying Cart Logic**: Edit `src/context/CartContext.tsx`. Remember to handle `localStorage` synchronization.
