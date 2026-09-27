# Paizaar — Premium Leather Footwear Store 🥿

> A full-featured e-commerce web application for a Pakistan-based leather footwear brand. Built with React, TypeScript, and Tailwind CSS. Live on Vercel.

**🌐 Live Demo:** [https://paizaarpk.vercel.app](https://paizaarpk.vercel.app)

---

## ✨ Features

### Customer Storefront
- **Product Catalog** — browsable by 7 categories (Peshawari Sandal, Formal, Casual, Loafers, Leather Jacket, Ladies Footwear, Last Pair Offer)
- **Product Detail Page** — size selection, image gallery, add to cart
- **Animated Cart Sidebar** — live item count badge, quantity controls, item removal
- **Checkout Flow** — full shipping form, Pakistani province selector, 5 payment methods (COD, EasyPaisa, JazzCash, Bank Transfer, Card)
- **Order Confirmation Page** — order ID, payment summary, receipt
- **User Orders Page** — order history tied to logged-in account
- **Search** — keyword search routed through the all-products page
- **Smart Navbar** — hides on scroll-down, reveals on scroll-up, with glassmorphism effect
- **Newsletter Section, Blogs, Brand Story, FAQs, Shipping & Returns pages**

### Admin Portal (`/admin`)
- **Role-based access** — only `admin` role accounts can access
- **Dashboard** — live stat cards (revenue, orders, products, users) + Recharts bar/line charts (last 6 months)
- **Orders Manager** — view all orders, update order status in real time
- **Products Manager** — view product catalog
- **Users Manager** — view registered users
- **Settings Page**

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| UI Components | Radix UI primitives |
| Animations | Framer Motion |
| Routing | React Router v6 |
| State Management | React Context API |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or bun

### Local Development

```bash
# Clone the repository
git clone https://github.com/SaadKhalid-PTUT036/paizaar.pk.git
cd paizaar.pk

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@paizaar.pk | admin123 |
| Customer | user@example.com | user123 |

> **Note:** Authentication is currently localStorage-based. A Supabase backend integration is planned (see roadmap).

---

## 📁 Project Structure

```
src/
├── assets/             # Static images (logo)
├── components/         # Reusable UI components
│   ├── Navbar.tsx      # Sticky nav with cart drawer, search, auth
│   ├── Footer.tsx      # Footer with links and contact
│   ├── HeroSlider.tsx  # Animated homepage hero
│   ├── ProductCard.tsx # Product grid card
│   └── Reveal.tsx      # Scroll-triggered animation wrapper
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Auth state (login, register, roles)
│   ├── CartContext.tsx # Cart state (add, remove, update qty)
│   └── OrderContext.tsx# Order state (create, update status)
├── lib/
│   └── catalog.ts      # Static product catalog data
├── pages/
│   ├── Index.tsx       # Homepage
│   ├── Checkout.tsx    # Checkout form + order summary
│   ├── Login.tsx       # Login + signup tabs
│   ├── admin/          # Admin portal (Dashboard, Orders, etc.)
│   └── categories/     # Per-category pages
└── App.tsx             # Root with routing + providers
```

---

## 🗺️ Roadmap

- [x] Customer storefront with product catalog and cart
- [x] Checkout with Pakistani payment methods
- [x] Admin dashboard with charts and order management
- [x] Role-based authentication (localStorage)
- [x] Deployed on Vercel with custom domain
- [ ] Supabase backend — PostgreSQL database, real auth, product management
- [ ] Stripe / local payment gateway — real payment processing
- [ ] Image uploads — Supabase Storage for product images
- [ ] Email notifications — order confirmation emails

---

## 👨‍💻 Author

**Saad Khalid** — PTUT036

- GitHub: https://github.com/SaadKhalid-PTUT036

---

## 📄 License

This project is for portfolio and educational purposes.
