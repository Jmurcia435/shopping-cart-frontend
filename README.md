# Frontend React Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

Frontend will open on `http://localhost:3000`

## Configuration

The frontend automatically proxies API calls to the backend via the `proxy` setting in `package.json`.

To use a different backend URL:
```bash
REACT_APP_API_URL=http://your-server:5000/api npm start
```

## Features

### Product Browsing
- Displays all products from the backend
- Shows product name, description, price, category, and stock
- Grid layout with responsive design

### Shopping Cart
- Add products to cart
- Adjust quantities with +/- buttons
- Remove items
- View cart summary with subtotal, tax estimate, and total

### Checkout
- Save orders to database
- Success notification on successful checkout
- Cart clears after successful order

## File Structure

```
frontend/src/
├── index.js              - React entry point
├── App.jsx               - Main app component
├── App.css               - Main styles
├── api.js                - API service (axios instance)
└── components/
    ├── ProductList.jsx   - Product grid display
    ├── ProductList.css
    ├── ShoppingCart.jsx  - Shopping cart sidebar
    └── ShoppingCart.css
```

## Key Components

### App.jsx
Main component that manages:
- Product list state
- Shopping cart state
- API calls to backend
- Checkout functionality

### ProductList.jsx
Displays available products in a grid with:
- Product image/card
- Name, description, price
- Category badge
- Stock information
- Add to cart button

### ShoppingCart.jsx
Sidebar shopping cart with:
- List of cart items
- Quantity adjusters
- Remove item buttons
- Order summary
- Checkout button

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **axios** - HTTP client for API calls
- **react-scripts** - Build tools

## Development

### Hot Module Reloading
Changes to `src/` files automatically reload in the browser.

### Build for Production
```bash
npm run build
```

Creates optimized build in `build/` folder.

## Environment Variables

Create `.env` file (optional):
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Styling

All components use CSS files with:
- Modern flexbox/grid layouts
- Gradient backgrounds
- Responsive design
- Hover effects and transitions

## Troubleshooting

### Backend connection error
- Ensure backend is running on `http://localhost:5000`
- Check CORS is enabled in backend
- Verify proxy in package.json points to backend

### Products not loading
- Check network tab in DevTools
- Verify `/api/products` endpoint responds
- Check backend logs for errors

### Cart not working
- Open browser console for JavaScript errors
- Check if API calls are being made
- Verify checkout response in network tab
