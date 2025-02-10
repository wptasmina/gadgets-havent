
![Gadgets_Heavent](https://github.com/user-attachments/assets/1936b2ac-1bfc-4b4b-8c37-87a39ef7aeac)

# Live views:  
 [Gadgets_Heavent](https://gadgetheavenshop.netlify.app)

Project Name: Gadgets Heavent


# Product Management Application

A React-based application for managing products, cart, and wishlist, with dynamic data handling using Context API.

## React Fundamental Concepts Used

1. **Functional Components**: Components like `ProductDetails`, `Dashboard`, and `Product` to display and manage product information.
2. **State Management**: Used `useState` for managing states like `isInWish` (wishlist status).
3. **Props**: Passed data (e.g., product details) between components.
4. **Event Handling**: Handled user interactions such as adding products to the cart and wishlist.
5. **Conditional Rendering**: Rendered UI elements conditionally based on the `isInWish` state.

## Data Management

- **Context API**: Used "DashboardContext" to manage global states like cart and wishlist across components.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
