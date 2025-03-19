# 🛒 E-Commerce Store

## 🚀 Overview
This is a modern, fully functional e-commerce application built with Next.js, Tailwind CSS, TypeScript, and Sanity. It provides a seamless shopping experience with secure payments and user-friendly authentication.

## 🔥 Features
- **Dynamic UI**: Built with Next.js for smooth navigation and React hooks for interactivity.
- **Responsive Design**: Styled using Tailwind CSS for a sleek and adaptive interface.
- **Strong Type Safety**: TypeScript ensures robust and error-free code.
- **CMS Integration**: Sanity is used to manage products, categories, users, cart items, and order details.
- **Secure Payments**: Stripe integration for handling online transactions.
- **State Management**: Redux Toolkit stores cart items in localStorage for persistent shopping sessions.
- **Validation & Authentication**: Zod ensures secure form validation.

## 🏷️ Tech Stack
- **Frontend**: Next.js, React Hooks, Tailwind CSS
- **Backend & Database**: Sanity (Headless CMS)
- **Authentication & Validation**: Zod
- **State Management**: Redux Toolkit
- **Payments**: Stripe
- **Deployment**: Vercel

## 🛋️ Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd ecommerce-project
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file and add the required API keys:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the development server**  
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## 🛒 How It Works
1. **Browse Products**: Explore different product categories.
2. **Add to Cart**: Items can be added to the cart and saved via Redux Toolkit.
3. **Checkout & Payment**: Secure payment processing with Stripe.
4. **Order Management**: Orders are stored and managed in Sanity.

## 🌍 Live Demo
Try the live version here:  
🔗 [E-Commerce Store](https://hackathon-q2-seven-beta.vercel.app/)


## 📝 License
This project is licensed under the [MIT License](LICENSE).

