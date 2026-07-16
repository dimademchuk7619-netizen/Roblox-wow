# 🎮 Roblox Trading Platform

A complete platform for trading Roblox items with user authentication, payment processing, ratings system, and real-time communication.

**Status:** 🚀 In Development

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation--setup)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Features

### ✅ Authentication & Security
- User registration and login with JWT
- Password hashing with bcryptjs
- Protected routes with middleware
- Session management

### ✅ Item Management
- Create, read, update, delete items
- Item categories and rarity levels
- Advanced filtering (price, category, rarity)
- Search functionality
- Item availability tracking

### ✅ Trading System
- Create trade offers
- Trade history tracking
- Automatic item status updates
- Payment integration
- Trade completion workflow

### ✅ User Profiles & Ratings
- User profiles with avatars and bios
- Star rating system (1-5 stars)
- User reviews and comments
- Automatic rating calculation
- Seller verification

### ✅ Payment Integration
- Stripe payment processing
- Secure payment intents
- Transaction history
- Payment confirmation

### ✅ Additional Features
- Real-time updates
- Responsive design
- Error handling
- Data validation

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js v4.18.2
- **Database:** MongoDB v7.0.0
- **Authentication:** JWT (jsonwebtoken v9.0.0)
- **Security:** bcryptjs v2.4.3
- **Payments:** Stripe v11.0.0
- **CORS:** cors v2.8.5
- **Validation:** express-validator v7.0.0

### Frontend (In Development)
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with animations
- **HTTP Client:** Axios (to be added)

### Development Tools
- **Live Reload:** Nodemon v2.0.20
- **Version Control:** Git & GitHub

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- MongoDB (local or Atlas)
- npm or yarn
- Stripe account (for payment testing)

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/dimademchuk7619-netizen/Roblox-wow.git
cd Roblox-wow
git checkout develop
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/roblox-trading
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/roblox-trading

# JWT
JWT_SECRET=your-secret-key-change-in-production

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

4. **Start MongoDB** (if running locally)
```bash
mongod
```

5. **Start the server**
```bash
# Development with hot reload
npm run dev

# Production
npm start
```

Server will run on `http://localhost:5000`

### Frontend Setup (Optional - Not yet created)

```bash
cd client
npm install
npm run dev
```

---

## 📁 Project Structure

```
Roblox-wow/
├── models/                      # MongoDB Schemas
│   ├── User.js                  # User model with ratings
│   ├── Item.js                  # Item/Product model
│   ├── Trade.js                 # Trade/Transaction model
│   └── Review.js                # Reviews & Comments model
│
├── routes/                      # API Routes
│   ├── auth.js                  # Authentication endpoints
│   ├── users.js                 # User profile endpoints
│   ├── items.js                 # Item CRUD endpoints
│   ├── trades.js                # Trading endpoints
│   ├── reviews.js               # Review endpoints
│   └── payments.js              # Payment endpoints
│
├── middleware/                  # Custom Middleware
│   └── auth.js                  # JWT verification
│
├── config/                      # Configuration
│   └── database.js              # MongoDB connection
│
├── server.js                    # Main server file
├── package.json                 # Dependencies
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 📚 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### 🔐 Authentication Routes (`/auth`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | User login | ❌ |

**Register Example:**
```json
POST /api/auth/register
{
  "username": "player123",
  "email": "player@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "username": "player123",
    "email": "player@example.com",
    "rating": 5,
    "createdAt": "2026-07-15T23:00:00Z"
  }
}
```

---

### 👤 User Routes (`/users`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/` | Get all users | ❌ |
| GET | `/:id` | Get user profile | ❌ |
| PUT | `/:id` | Update profile | ✅ |

**Get User Profile:**
```
GET /api/users/507f1f77bcf86cd799439011
```

**Update Profile:**
```json
PUT /api/users/507f1f77bcf86cd799439011
Authorization: Bearer <token>

{
  "username": "newUsername",
  "bio": "Professional Roblox trader",
  "avatar": "https://example.com/avatar.jpg"
}
```

---

### 📦 Item Routes (`/items`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/` | Get all items | ❌ |
| GET | `/:id` | Get item details | ❌ |
| POST | `/` | Create item | ✅ |
| PUT | `/:id` | Update item | ✅ |
| DELETE | `/:id` | Delete item | ✅ |

**Query Parameters for GET /:**
- `category` - Filter by category
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `search` - Search by name

**Example:**
```
GET /api/items?category=skins&minPrice=100&maxPrice=5000&search=dragon
```

**Create Item:**
```json
POST /api/items
Authorization: Bearer <token>

{
  "name": "Dragon Wings",
  "description": "Legendary dragon wings skin",
  "image": "https://example.com/wings.jpg",
  "price": 2500,
  "category": "skins",
  "rarity": "legendary"
}
```

---

### 🤝 Trade Routes (`/trades`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/` | Get user trades | ✅ |
| POST | `/` | Create trade | ✅ |
| PUT | `/:id/complete` | Complete trade | ✅ |

**Create Trade:**
```json
POST /api/trades
Authorization: Bearer <token>

{
  "itemId": "507f1f77bcf86cd799439012"
}
```

**Complete Trade:**
```
PUT /api/trades/507f1f77bcf86cd799439013/complete
Authorization: Bearer <token>
```

---

### ⭐ Review Routes (`/reviews`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/user/:userId` | Get user reviews | ❌ |
| GET | `/item/:itemId` | Get item reviews | ❌ |
| POST | `/` | Create review | ✅ |

**Create Review:**
```json
POST /api/reviews
Authorization: Bearer <token>

{
  "targetId": "507f1f77bcf86cd799439011",
  "itemId": "507f1f77bcf86cd799439012",
  "rating": 5,
  "comment": "Great item! Fast delivery!"
}
```

---

### 💳 Payment Routes (`/payments`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/create-intent` | Create payment intent | ✅ |
| POST | `/confirm-payment` | Confirm payment | ✅ |

**Create Payment Intent:**
```json
POST /api/payments/create-intent
Authorization: Bearer <token>

{
  "tradeId": "507f1f77bcf86cd799439013"
}
```

---

## 🚀 Getting Started

### 1. Create Your First User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "player123",
    "email": "player@example.com",
    "password": "password123"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "player@example.com",
    "password": "password123"
  }'
```

Copy the `token` from response.

### 3. Create an Item
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Cool Skin",
    "description": "Amazing item",
    "image": "https://example.com/item.jpg",
    "price": 1000,
    "category": "skins",
    "rarity": "rare"
  }'
```

### 4. Browse Items
```bash
curl http://localhost:5000/api/items
```

---

## 🧪 Testing with Postman

1. Import API collection (to be created)
2. Set environment variables:
   - `baseUrl`: `http://localhost:5000/api`
   - `token`: Your JWT token from login
3. Test each endpoint

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development / production |
| `MONGODB_URI` | Database URL | mongodb://localhost:27017/roblox-trading |
| `JWT_SECRET` | JWT signing key | your-secret-key-min-32-chars |
| `STRIPE_SECRET_KEY` | Stripe secret | sk_test_... |
| `STRIPE_PUBLISHABLE_KEY` | Stripe public | pk_test_... |

---

## 🔒 Security Best Practices

✅ **Implemented:**
- Password hashing with bcryptjs (10 salt rounds)
- JWT token authentication
- Protected routes with middleware
- CORS enabled

✅ **To Add:**
- Input validation & sanitization
- Rate limiting
- HTTPS in production
- Environment variable validation
- Error logging
- Request logging

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
❌ MongoDB error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Start MongoDB with `mongod` or check connection string in `.env`

### JWT Token Invalid
```
❌ Invalid token
```
**Solution:** Ensure token is passed in Authorization header: `Bearer <token>`

### Port Already in Use
```
❌ listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change PORT in `.env` or kill process on port 5000

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Documentation](https://jwt.io/)
- [Stripe API Documentation](https://stripe.com/docs/api)

---

## 🚧 Roadmap

- [ ] React frontend
- [ ] User dashboard
- [ ] Item search & filters
- [ ] Chat system
- [ ] Email notifications
- [ ] Admin panel
- [ ] Analytics
- [ ] Testing (Jest)
- [ ] Docker setup
- [ ] CI/CD pipeline

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support

For support, email support@robloxtrade.com or open an issue on GitHub.

---

**Made with ❤️ for the Roblox community** 🎮✨

Last Updated: July 15, 2026
