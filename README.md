# 🏋️ GearUp Backend API

<p align="center">
  <img src="https://i.imgur.com/0M5YQ0p.png" width="180" alt="GearUp Logo"/>
</p>

<p align="center">
A secure, scalable, and role-based RESTful API for a Sports & Outdoor Equipment Rental Platform.
</p>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express.js](https://img.shields.io/badge/Express.js-5.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Stripe](https://img.shields.io/badge/Payment-Stripe-635BFF)
![License](https://img.shields.io/badge/License-MIT-success)

</p>

---

# 📖 Project Overview

GearUp is a **role-based Sports & Outdoor Equipment Rental Platform** that allows customers to rent sports equipment online while enabling providers to efficiently manage their rental inventory. The platform also provides administrators with powerful management capabilities to oversee users, rental orders, categories, and platform activities.

The application follows modern backend development practices using **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. It implements secure authentication, role-based authorization, payment processing, centralized error handling, and a clean layered architecture for maintainability and scalability.

Whether customers need camping equipment, bicycles, fitness gear, or outdoor accessories, GearUp provides a secure and seamless rental experience.

---

# 🚀 Live Links

### 🌐 Live API

```text
https://sports-equipment-rental-backend.vercel.app
```

### 📮 Postman API Documentation

```text
https://api.postman.com/collections/50741160-b7ae8f4c-4d2e-4ee5-bbda-f4efb0a1ae15?access_key=PMAT-01KY1SBQYZWNAVB2DZ8YXJM5HN
```

### 💻 GitHub Repository

```text
https://github.com/dev-peyas9911/Sports-Equipment-Rental-Backend
```
### 💻 ERD References

```text
https://drawsql.app/teams/peyas-barmon/diagrams/sports-equipment-rental-erd
```

---

# ✨ Key Features

## 🌍 Public Features

- Browse all available sports and outdoor gear
- Search gear by name
- Filter by category
- Filter by brand
- Filter by price range
- View detailed gear information
- Browse available categories

---

## 👤 Customer Features

- Register as a customer
- Secure login using JWT Authentication
- Browse available rental equipment
- Create rental orders
- Select rental duration
- View rental history
- Track rental status
- Make secure online payments
- View payment history
- Leave reviews after returning rented gear
- Update personal profile

---

## 🏪 Provider Features

- Register as a Provider
- Login securely
- Add new gear
- Update gear information
- Delete gear
- Manage inventory stock
- View incoming rental requests
- Confirm rental orders
- Update rental status
- Mark items as Picked Up
- Mark items as Returned

---

## 👑 Admin Features

- View all users
- Suspend users
- Activate users
- View all rental orders
- View all gear listings
- Manage categories
- Monitor overall platform activities

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js
- TypeScript

## Database

- PostgreSQL
- Prisma ORM

## Authentication

- JWT (JSON Web Token)
- bcrypt

## Validation

- Zod

## Payment Gateway

- Stripe

## API Testing

- Postman

## Deployment

- Vercel

## Development Tools

- ESLint
- Prettier
- ts-node-dev
- dotenv
- cookie-parser
- cors

---

# 🏗️ System Architecture

```
                Client Application
                        │
                        ▼
                 Express.js Router
                        │
                        ▼
                  Route Controller
                        │
                        ▼
                Business Logic Layer
                        │
                        ▼
                  Prisma ORM Layer
                        │
                        ▼
                  PostgreSQL Database
```

The project follows a **Layered Architecture**, separating business logic from routing and database operations. This architecture improves scalability, maintainability, and code readability.

---

# 👥 User Roles

| Role | Description |
|------|-------------|
| Customer | Rent sports and outdoor equipment |
| Provider | Manage rental inventory and rental requests |
| Admin | Manage users, categories, gear listings, and rental orders |

---

# ⚡ Core Functionalities

- Role Based Authentication
- Role Based Authorization
- JWT Authentication
- Password Hashing
- RESTful API Design
- Stripe Payment Integration
- Inventory Management
- Rental Order Management
- Category Management
- Review Management
- Centralized Error Handling
- Input Validation
- Secure Environment Variables
- Prisma Transactions
- Consistent API Responses

---

# 📂 Project Structure

```text
src
│
├── app
│   │
│   ├── builder
│   ├── config
│   ├── errors
│   ├── interfaces
│   ├── middlewares
│   ├── modules
│   │      ├── Auth
│   │      ├── User
│   │      ├── Gear
│   │      ├── Category
│   │      ├── Rental
│   │      ├── Payment
│   │      ├── Review
│   │      ├── Provider
│   │      └── Admin
│   │
│   ├── routes
│   └── utils
│
├── prisma
│
├── app.ts
├── server.ts
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/dev-peyas9911/Sports-Equipment-Rental-Backend
```

## Navigate to Project

```bash
cd gearup-backend
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DATABASE_URL=your_database_url

APP_URL=http://localhost:5173

JWT_ACCESS_SECRET=your_secret

JWT_ACCESS_EXPIRES_IN=7d

BCRYPT_SALT_ROUNDS=12

STRIPE_SECRET_KEY=your_stripe_secret

STRIPE_WEBHOOK_SECRET=your_webhook_secret

```

---

# ▶️ Running the Application

Development Mode

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Start Production Server

```bash
npm run start
```

Lint

```bash
npm run lint
```

---

# 🔐 Authentication & Authorization

GearUp implements secure authentication and role-based authorization using **JSON Web Tokens (JWT)**.

## Authentication Flow

```text
User Login
     │
     ▼
Validate Credentials
     │
     ▼
Generate JWT Access Token
     │
     ▼
Return Token
     │
     ▼
Client Stores Token
     │
     ▼
Send Authorization Header
     │
     ▼
Protected Route Access
```

---

## Authorization Header

All protected routes require a valid JWT access token.

```http
Authorization: Bearer <your_access_token>
```

---

## User Roles

| Role | Access |
|------|---------|
| 🌍 Public | Public endpoints only |
| 👤 Customer | Customer APIs |
| 🏪 Provider | Provider APIs |
| 👑 Admin | Full platform access |

---

# 📌 API Endpoints

---

# 🔑 Authentication

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get logged in user | Private |

---

# 🏷 Category

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/api/categories` | Create category | Admin |
| GET | `/api/categories` | Get all categories | Public |
| GET | `/api/categories/:id` | Get single category | Public |
| PATCH | `/api/categories/:id` | Update category | Admin |
| DELETE | `/api/categories/:id` | Delete category | Admin |

---

# 🏕 Gear

## Public

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/gear` | Get all available gear |
| GET | `/api/gear/:id` | Get gear details |

---

## Provider

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/provider/gear` | Add new gear |
| PATCH | `/api/provider/gear/:id` | Update gear |
| DELETE | `/api/provider/gear/:id` | Delete gear |

---

# 📦 Rental Orders

## Customer

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/rentals` | Create rental order |
| GET | `/api/rentals` | Get own rental orders |
| GET | `/api/rentals/:id` | Get rental details |

---

## Provider

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/provider/orders` | View rental requests |
| PATCH | `/api/provider/orders/:id` | Update rental status |

---

## Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/admin/rentals` | Get all rentals |

---

# 💳 Payments

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/api/payments/create` | Create Stripe checkout session | Customer |
| POST | `/api/payments/webhook` | Stripe webhook | Stripe |
| GET | `/api/payments` | Payment history | Customer |
| GET | `/api/payments/:id` | Payment details | Customer |

---

# ⭐ Reviews

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/api/reviews` | Create review | Customer |
| GET | `/api/reviews/:gearId` | Get gear reviews | Public |

---

# 👑 Admin

## Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/admin/users` | Get all users |
| PATCH | `/api/admin/users/:id` | Update user status |

---

## Gear

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/admin/gear` | View all gear |

---

# 🔍 Query Parameters

Several endpoints support query parameters for searching, filtering, sorting, and pagination.

Example

```http
GET /api/gear?search=tent
```

Filter by Category

```http
GET /api/gear?category=Camping
```

Filter by Brand

```http
GET /api/gear?brand=Decathlon
```

Filter by Price

```http
GET /api/gear?minPrice=20&maxPrice=100
```

Sort by Price

```http
GET /api/gear?sortBy=price&sortOrder=asc
```

Pagination

```http
GET /api/gear?page=1&limit=10
```

---

# 📤 API Response Format

Every successful API follows a consistent response structure.

## Success Response

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Gear fetched successfully",
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 30
    },
    "data": []
}
```

---

## Success Response (Single Resource)

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Gear retrieved successfully",
    "data": {}
}
```

---

# ❌ Error Response Format

```json
{
    "success": false,
    "statusCode": 404,
    "message": "Gear not found",
    "errorDetails": {}
}
```

---

# 📥 Example Request

## Register User

```http
POST /api/auth/register
```

Request Body

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "12345678",
    "role": "CUSTOMER"
}
```

---

## Login

```http
POST /api/auth/login
```

```json
{
    "email": "john@example.com",
    "password": "12345678"
}
```

---

## Create Rental Order

```http
POST /api/rentals
```

```json
{
    "gearItemId": "gear_id",
    "quantity": 2,
    "startDate": "2026-07-20",
    "endDate": "2026-07-23"
}
```

---

## Create Payment Session

```http
POST /api/payments/create
```

```json
{
    "rentalOrderId": "rental_order_id"
}
```

---

# 🔒 Protected Routes

The following routes require authentication.

- Authentication
- Customer Dashboard
- Provider Dashboard
- Admin Dashboard
- Rental Orders
- Payments
- Reviews
- Categories (Admin)
- Gear Management
- User Management

---

# 🚫 Authorization Matrix

| Endpoint | Customer | Provider | Admin |
|-----------|:--------:|:--------:|:------:|
| Browse Gear | ✅ | ✅ | ✅ |
| Create Rental | ✅ | ❌ | ❌ |
| Manage Own Gear | ❌ | ✅ | ❌ |
| Manage Categories | ❌ | ❌ | ✅ |
| Manage Users | ❌ | ❌ | ✅ |
| Payment | ✅ | ❌ | ❌ |
| Review Gear | ✅ | ❌ | ❌ |
| View All Rentals | ❌ | ❌ | ✅ |

---

# 🧪 API Testing

The API has been thoroughly tested using **Postman**.

The Postman collection includes:

- Authentication APIs
- Category APIs
- Gear APIs
- Rental APIs
- Payment APIs
- Review APIs
- Provider APIs
- Admin APIs

You can import the collection from:

```text
https://api.postman.com/collections/50741160-b7ae8f4c-4d2e-4ee5-bbda-f4efb0a1ae15?access_key=PMAT-01KY1SBQYZWNAVB2DZ8YXJM5HN
```

---

# 🗄️ Database Design

The application uses **PostgreSQL** as the primary relational database and **Prisma ORM** for database management.

## Database Models

### 👤 User

Stores all registered users including customers, providers, and administrators.

| Field | Type |
|------|------|
| id | UUID |
| name | String |
| email | String |
| password | String |
| role | Enum |
| status | Enum |
| createdAt | DateTime |
| updatedAt | DateTime |

---

### 🏕️ Gear Item

Stores all sports and outdoor equipment listed by providers.

| Field | Type |
|------|------|
| id | UUID |
| providerId | UUID |
| categoryId | UUID |
| title | String |
| description | String |
| brand | String |
| pricePerDay | Decimal |
| availableStock | Integer |
| images | String[] |
| createdAt | DateTime |

---

### 📂 Category

Stores all equipment categories.

Examples:

- Camping
- Cycling
- Fitness
- Hiking
- Water Sports
- Adventure

---

### 📦 Rental Order

Stores rental requests made by customers.

| Field |
|--------|
| id |
| customerId |
| gearItemId |
| quantity |
| rentalDays |
| totalAmount |
| status |
| paymentStatus |

---

### 💳 Payment

Stores payment information.

| Field |
|--------|
| id |
| rentalOrderId |
| transactionId |
| amount |
| provider |
| paymentStatus |
| paidAt |

---

### ⭐ Review

Stores customer reviews.

| Field |
|--------|
| id |
| customerId |
| gearItemId |
| rating |
| comment |

---

# 🔄 Application Workflow

## Customer Journey

```text
Register
     │
     ▼
Login
     │
     ▼
Browse Gear
     │
     ▼
View Gear Details
     │
     ▼
Create Rental Order
     │
     ▼
Stripe Checkout
     │
     ▼
Payment Success
     │
     ▼
Provider Confirmation
     │
     ▼
Pick Up Gear
     │
     ▼
Return Gear
     │
     ▼
Leave Review
```

---

## Provider Journey

```text
Register
     │
     ▼
Login
     │
     ▼
Add Gear
     │
     ▼
Manage Inventory
     │
     ▼
Receive Rental Request
     │
     ▼
Confirm Rental
     │
     ▼
Update Status
     │
     ▼
Rental Completed
```

---

## Payment Workflow

```text
Customer
     │
     ▼
Create Rental Order
     │
     ▼
Create Stripe Session
     │
     ▼
Stripe Checkout
     │
     ▼
Stripe Webhook
     │
     ▼
Payment Verification
     │
     ▼
Database Updated
     │
     ▼
Rental Status Updated
```

---

# 📊 Rental Order Status Flow

```text
PLACED
   │
   ▼
CONFIRMED
   │
   ▼
PAID
   │
   ▼
PICKED_UP
   │
   ▼
RETURNED
```

Cancelled orders terminate the workflow before payment.

---

# 🔒 Security Features

The project follows modern backend security best practices.

- JWT Authentication
- Role-Based Authorization (RBAC)
- Password Hashing using bcrypt
- Environment Variable Protection
- Secure Stripe Payment Integration
- Request Validation using Zod
- Prisma ORM SQL Injection Protection
- Global Error Handling
- Proper HTTP Status Codes
- Protected Routes
- Secure Middleware Architecture

---

# ⚠️ Error Handling

A centralized global error handler ensures consistent error responses throughout the application.

The application handles:

- Validation Errors
- Prisma Errors
- JWT Errors
- Authentication Errors
- Authorization Errors
- Stripe Errors
- Custom Application Errors
- Internal Server Errors

---

# 📦 Business Rules

The application enforces several business rules to ensure data consistency and a reliable rental process.

- Only authenticated users can access protected resources.
- Customers can only create rental orders for available gear.
- Providers can manage only their own gear listings.
- Customers cannot rent more items than the available stock.
- Payment must be completed before the rental process continues.
- Only customers who have completed a rental can submit reviews.
- Administrators have full access to manage users, categories, gear, and rental orders.
- Suspended users cannot access protected features.

---

# 🚀 Deployment

The application is deployed on **Vercel**.

### Production API

```text
https://sports-equipment-rental-backend.vercel.app
```

---

# 🧪 Testing

The API has been tested using:

- Postman
- Thunder Client

Testing includes:

- Authentication
- Authorization
- CRUD Operations
- Rental Management
- Payment Integration
- Error Handling
- Protected Routes
- Validation

---

# 📈 Future Improvements

Potential enhancements for future versions include:

- Email Notifications
- Forgot Password
- Refresh Token Authentication
- Image Upload with Cloudinary
- Wishlist Feature
- Rental Cancellation & Refund
- Coupon & Discount System
- Equipment Availability Calendar
- Admin Analytics Dashboard
- Provider Revenue Dashboard
- Real-Time Notifications
- Docker Support
- CI/CD Pipeline
- Redis Caching
- API Rate Limiting
- Swagger / OpenAPI Documentation
- Unit & Integration Testing

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📚 Resources

### Live API

```text
https://sports-equipment-rental-backend.vercel.app
```

### Postman Documentation

```text
https://api.postman.com/collections/50741160-b7ae8f4c-4d2e-4ee5-bbda-f4efb0a1ae15?access_key=PMAT-01KY1SBQYZWNAVB2DZ8YXJM5HN
```

### GitHub Repository

```text
https://github.com/dev-peyas9911/Sports-Equipment-Rental-Backend
```

---

# 👨‍💻 Author

**Peyas Barmon**

Frontend & Backend Developer

GitHub:

```text
https://github.com/dev-peyas9911
```

LinkedIn:

```text
https://www.linkedin.com/in/peyas-barmon
```

Portfolio:

```text
https://peyasbarmon.netlify.app
```

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for educational and commercial purposes.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

Your support motivates continued development and improvements.

---

<p align="center">

Made with ❤️ using **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **Stripe**

</p>