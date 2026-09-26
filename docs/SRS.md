# Software Requirements Specification (SRS)

Project: Paizar.PK (Footwear E‑commerce Web App)
Version: 0.1 (Draft)
Date: 2025-12-12
Owner: YOU (Product/Engineering)

Note: Brand name appears as "Paizar.PK" in the Admin and "Ladir" in index.html. Please confirm the canonical brand name and domain. This draft uses "Paizar.PK" throughout.


## 1. Introduction

### 1.1 Purpose
This SRS defines the requirements for the Paizar.PK e‑commerce web application. It covers scope, users, system features, non‑functional requirements, constraints, and assumptions for building and operating the site and its admin panel.

### 1.2 Intended Audience and Reading Suggestions
- Business owners and stakeholders
- Product managers
- Designers and frontend engineers
- QA/test engineers
- Future backend/API developers

### 1.3 Product Scope
Paizar.PK is an e‑commerce storefront for premium footwear and apparel (e.g., Peshawari sandals, formal/casual shoes, loafers, leather jackets), with an Admin Panel to manage catalog, orders, users, and settings.

### 1.4 Definitions, Acronyms, and Abbreviations
- SKU: Stock Keeping Unit
- COD: Cash on Delivery
- NFR: Non‑Functional Requirement
- FR: Functional Requirement

### 1.5 References
- Repository: this project folder
- Tech stack: React 18, Vite 5, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Lucide, Framer Motion


## 2. Overall Description

### 2.1 Product Perspective
- Current state: Client‑side SPA running in the browser. No backend integration yet. Auth is in‑memory with localStorage persistence; cart is in‑memory.
- Future state: Add APIs for products, orders, users, checkout, payments, notifications.

### 2.2 User Classes and Characteristics
- Visitor: Anonymous shopper; can browse categories/products, read content pages, use search, add items to cart.
- Customer: Authenticated non‑admin (planned); will access account/order history once implemented.
- Admin: Authenticated; access to Admin Panel (dashboard, products, orders, users, settings).

### 2.3 Operating Environment
- Modern browsers (Chromium, Firefox, Safari) desktop and mobile
- Responsive UI; Tailwind CSS; shadcn/ui components

### 2.4 Design and Implementation Constraints
- No server/database currently; all data is mock/client‑side.
- Auth uses localStorage; not secure for production secrets.
- Currency: PKR (displayed as Rs.).

### 2.5 Assumptions and Dependencies
- Payment methods to include COD, bank transfer, JazzCash, Easypaisa, and cards (based on FAQ copy) — to be confirmed.
- Nationwide shipping in Pakistan; timelines 2–7 days depending on city — to be confirmed.
- Product images and content provided by business.


## 3. External Interface Requirements

### 3.1 User Interfaces
- Storefront: Navbar with categories, search dialog, cart sheet, responsive layout.
- Pages: Home, Category pages, Product Detail, Brand, Blogs, Size Chart, Shipping, Returns, FAQ.
- Admin Panel: Sidebar navigation; Dashboard, Products, Orders, Users, Settings.

### 3.2 Hardware Interfaces
- None beyond standard user devices.

### 3.3 Software Interfaces (Planned)
- Payment Gateways: JazzCash/Easypaisa, card processors (TBD)
- Shipping: Tracking provider (TBD)
- Email/SMS: Transactional notifications (TBD)

### 3.4 Communications Interfaces
- HTTPS for all public endpoints once backend exists.


## 4. System Features (Functional Requirements)

Each feature lists FR IDs with acceptance criteria. Where code references exist, impacted modules/routes are noted.

### 4.1 Navigation and Search
- FR-01: Global navigation lists product categories and content pages.
  - AC: Navbar shows links for Home, Peshawari, Formal, Casual, Loafers, Jackets, Ladies, Last Pair Offer, Brand, Blogs.
  - Code: `components/Navbar.tsx`, `App.tsx` routes.
- FR-02: Basic search from Navbar.
  - AC: Submitting a keyword navigates to a relevant category based on keyword matching.
  - Code: `Navbar.tsx` search dialog logic.

### 4.2 Category Browsing
- FR-03: Category pages for Peshawari, Formal, Casual, Loafers, Jackets, Ladies, Last Pair Offer.
  - AC: Each category route renders products list UI.
  - Routes: `/category/*` per `App.tsx`.

### 4.3 Product Detail
- FR-04: Product detail page with images, price, description, size selection, quantity, related items.
  - AC: User can select size, set quantity, add to cart.
  - Code: `pages/ProductDetail.tsx`.

### 4.4 Cart Management
- FR-05: Add to cart from product cards and product detail.
  - AC: Item appears in cart sheet; total updates accordingly.
  - Code: `components/ProductCard.tsx`, `CartContext.tsx`.
- FR-06: Update quantity and remove items from cart.
  - AC: Increment/decrement; removal when quantity reaches 0 or via remove action.
  - Code: `Navbar.tsx` (cart sheet UI), `CartContext.tsx`.
- FR-07: Proceed to checkout entry point (UI only for now).
  - AC: Checkout button visible; behavior TBD until backend.

### 4.5 Authentication & Authorization
- FR-08: Login with email/password.
  - AC: Valid admin credentials route to Admin; others to Home.
  - Code: `contexts/AuthContext.tsx`, `pages/Login.tsx`.
- FR-09: Role‑based access to Admin area.
  - AC: Non‑admin/unauthenticated are redirected to login.
  - Code: `components/ProtectedRoute.tsx`, `pages/admin/AdminLayout.tsx`.
- Test credentials (dev only):
  - Admin: `saadkganz49@gmail.com` / `admin123`, `admin@ladir.pk` / `admin123`
  - Customer: `user@example.com` / `user123`

### 4.6 Admin Panel
- FR-10: Dashboard with basic KPIs and charts.
  - Code: `pages/admin/Dashboard.tsx`.
- FR-11: Products list with search and actions (UI only).
  - Code: `pages/admin/Products.tsx`.
- FR-12: Orders list with filters and view action (UI only).
  - Code: `pages/admin/Orders.tsx`.
- FR-13: Users list with basic stats (UI only).
  - Code: `pages/admin/Users.tsx`.
- FR-14: Settings for store info, shipping, notifications (UI only).
  - Code: `pages/admin/Settings.tsx`.

### 4.7 Content Pages
- FR-15: Brand page, Blogs listing, Size Chart, Shipping, Returns, FAQ.
  - Code: `pages/Brand.tsx`, `pages/Blogs.tsx`, `pages/SizeChart.tsx`, `pages/Shipping.tsx`, `pages/Returns.tsx`, `pages/FAQ.tsx`.

### 4.8 Error Handling
- FR-16: 404 Not Found for undefined routes.
  - Code: `pages/NotFound.tsx` with `App.tsx` catch‑all route.

### 4.9 Out‑of‑Scope (Current Release)
- Full checkout flow (address, shipping selection, payment authorization, order placement)
- Inventory and real product catalog management
- Real authentication, password reset, and customer profiles


## 5. Non‑Functional Requirements (NFRs)

- NFR-01 Performance: Initial load under reasonable network conditions; interactions are client‑side and responsive.
- NFR-02 Security: No secrets in client; sanitize inputs; restrict admin via role checks; migrate to real auth on backend.
- NFR-03 Reliability: SPA should gracefully handle missing data (until APIs exist).
- NFR-04 Usability/Accessibility: Keyboard navigable; readable contrast; responsive design.
- NFR-05 Maintainability: TypeScript with component modularity; linting via ESLint; Vite dev/build.
- NFR-06 Portability: Runs in modern browsers on desktop and mobile; development via Node.js LTS.


## 6. Data Requirements

### 6.1 Data Entities (current mock/in‑memory)
- Product: `id`, `name`, `price`, `originalPrice?`, `image`, `category`, `description?`, `sizes?`, `colors?`.
- CartItem: Product subset + `quantity`, `size?`.
- User (mock): `email`, `password`, `role` (admin|customer).
- Order (planned): `id`, `items[]`, `totals`, `status`, `customer`, `shipping`, `payment`.

### 6.2 Validation
- Required fields for cart ops: `id`, `name`, `price`.
- Quantity must be positive integer.
- Email/password format checks at UI; server‑side to be added later.

### 6.3 Privacy and Retention
- LocalStorage only stores auth status and role (current dev setup). Move to secure session tokens later.


## 7. Constraints, Assumptions, and Risks

- Constraint: No backend; features are UI/mock only.
- Assumption: Only Pakistan market initially; PKR currency.
- Risk: Client‑side auth/cart not production‑grade; potential data loss on refresh; no SEO SSR currently.
- Mitigation: Prioritize API development and integrate real auth/cart/order services.


## 8. Future Enhancements

- Full checkout (address, shipping, payment gateways integration)
- Product catalog CRUD with media management
- Real search and filtering
- Customer accounts, order history, wishlist
- Promotions/coupons, reviews/ratings
- SEO/SSR, sitemap, analytics


## 9. Acceptance Criteria (MVP)

- User can browse categories and view product details.
- User can add/remove items and adjust quantities in cart.
- Admin can log in and access Admin Panel routes.
- Content pages render and are reachable via Navbar.
- 404 route renders for unmatched paths.


## 10. Traceability (FR → Code Modules)

- FR-01/02: `components/Navbar.tsx`, routes in `App.tsx`
- FR-03: `pages/categories/*`
- FR-04: `pages/ProductDetail.tsx`
- FR-05/06/07: `components/ProductCard.tsx`, `contexts/CartContext.tsx`, `components/Navbar.tsx`
- FR-08/09: `contexts/AuthContext.tsx`, `components/ProtectedRoute.tsx`, `pages/Login.tsx`, `pages/admin/AdminLayout.tsx`
- FR-10..14: `pages/admin/*`
- FR-15: `pages/Brand.tsx`, `pages/Blogs.tsx`, `pages/SizeChart.tsx`, `pages/Shipping.tsx`, `pages/Returns.tsx`, `pages/FAQ.tsx`
- FR-16: `pages/NotFound.tsx`, route in `App.tsx`


## 11. Open Questions

- Canonical brand name and domain (Paizar.PK vs Ladir)?
- Payment methods to support at launch (COD only or COD + digital wallets + cards)?
- Shipping provider(s) and SLAs?
- Do we need customer accounts at MVP or later?
- Any compliance or policy constraints (refund policy, terms, privacy statement)?
