# J. Website Template

A **fully responsive and modern full-stack website template** built using **React.js, Node.js, Express.js, and MongoDB**, designed to help businesses and individuals quickly deploy a professional web presence. Structured the same way as the Blissful project: a **guest-checkout** storefront (session-based cart, no login) with **Cash-on-Delivery + Safepay** payments, deployable as a single Vercel app.

## Key Features
- **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices using modern CSS and Tailwind/Bootstrap components.
- **Dynamic Content:** Built with React.js for interactive UI components and a smooth user experience.
- **Backend Integration:** Node.js + Express.js API handles products, cart, orders, and payments.
- **Database Support:** MongoDB (Atlas) for persistent storage of products and orders.
- **Guest Checkout:** Session-based cart (`x-session-id`) — no login required.
- **Payments:** Cash on Delivery + Safepay (cards) via the official `@sfpy/node-core` SDK.
- **Deployment Ready:** Single Vercel app (static frontend + serverless API).

## Technologies Used
React.js | Node.js | Express.js | MongoDB | Tailwind CSS / Bootstrap | Vercel

## Live Demo
[https://j-template.vercel.app/](https://j-template.vercel.app/)

## Source Code
[GitHub Repository](https://github.com/ahmad-zaman123/J.-Template)

---

## Structure

```
J.-Template/
  vercel.json            single-app deploy (Frontend static + Backend serverless)
  Frontend/              Create React App storefront
    src/
      services/api.js    axios client (x-session-id header, mapProduct)
      context/CartContext.js
      hooks/useProducts.js
      utils/format.js
  Backend/               Express API
    app.js / server.js   app (exported) + local listen
    api/index.js         Vercel serverless entry
    config/db.js         cached Mongoose connection
    controllers/         product, cart, order, payment
    models/              Product, Order, CartItem  (no User — guest checkout)
    routes/              product, cart, order, payment
    middleware/errorHandler.js
    utils/               ApiError, asyncHandler, safepay (@sfpy/node-core)
    data/products.js     catalog
    seeder.js            seed / seed:destroy
```

## Run locally

### Backend
```bash
cd Backend
npm install
cp .env.example .env      # set MONGO_URI; add Safepay keys for cards
npm run seed              # load the catalog
npm run dev               # API on http://localhost:5000
```

### Frontend
```bash
cd Frontend
npm install
npm start                 # http://localhost:3000
```

The cart is keyed by a per-browser `x-session-id` (no login). Checkout collects
customer + shipping details and creates an order.

## Payments

- **Cash on Delivery** always works.
- **Safepay (cards)** activates only when both `SAFEPAY_API_KEY` and `SAFEPAY_SECRET`
  are set. Uses the official `@sfpy/node-core` SDK (`payments.session.setup` →
  passport → hosted checkout URL). `GET /api/payments/config` tells the frontend
  whether to show the card option.
- Safepay redirects back to `/order-confirmation/:id`; the **webhook**
  (`POST /api/payments/safepay/webhook`, raw-body HMAC verified) flips the order to
  `paid`. The confirmation page polls while `status === "pending_payment"`.


## Use Case
Ideal for startups, freelancers, or small businesses looking for a **ready-to-use
full-stack store template** that is easy to customize, extend, and deploy quickly.
