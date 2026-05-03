# 🍽️ Nature's Spices - Smart Restaurant Website

A modern, AI-powered restaurant website built with Java Spring Boot backend and React frontend, featuring intelligent food search, user authentication, cart management, and seamless ordering experience.

## 🌟 Demo

[🚀 Live Demo](https://drive.google.com/drive/folders/1GJin8A_ZaNECMS8FIgd8nQST_hsT0pgD?usp=sharing) 

## ✨ Features

### 🍴 Core Functionality
- **User Authentication**: Secure login/signup with JWT tokens
- **Food Menu Management**: Dynamic menu with categories (Breakfast, Lunch, Beverages, etc.)
- **Smart Cart**: Add/remove items, quantity management, persistent cart state
- **Order Management**: Place orders, track order history
- **Responsive Design**: Mobile-first design with Bootstrap styling

### 🤖 AI-Powered Features
- **Intelligent Search**: AI-powered food search using vector embeddings
- **AI Assistant**: Interactive chatbot for menu recommendations and assistance
- **Smart Recommendations**: Personalized food suggestions based on user preferences

### 🛠️ Technical Features
- **Microservices Architecture**: Separate frontend and backend services
- **Containerized Deployment**: Docker and Docker Compose setup
- **Database Integration**: MongoDB for data persistence
- **Caching**: Redis for performance optimization
- **Vector Database**: Qdrant for AI search capabilities

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                🌐 Nature's Spices Restaurant                 │
│                   Full-Stack AI Architecture                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
┌─────────────────────┐ ┌─────────────┐ ┌─────────────┐
│   React Frontend    │ │ Spring Boot │ │ AI Service  │
│    (Port 3000)      │ │  Backend    │ │  (Qdrant)   │
│                     │ │ (Port 4000) │ │             │
│ • UI Components     │ │ • REST API  │ │ • Vector DB │
│ • Redux Store       │ │ • JWT Auth  │ │ • AI Agent  │
│ • Responsive Design │ │ • Business  │ │ • RAG +Tool │
└─────────────────────┘ │   Logic     │ └─────────────┘
                        └─────────────┘
              │               │
              └───────────────┘
                      │
              ┌───────┼───────┐
              │       │       │
              ▼       ▼       ▼
┌─────────────────────┐ ┌─────┐ 
│      MongoDB        │ │Redis│ 
│    (Port 27017)     │ │6379 │ 
│                     │ │     │ 
│ • User Data         │ │Cache│ 
│ • Orders & Cart     │ │     │ 
└─────────────────────┘ └─────┘
```

### Architecture Overview

**Frontend Layer**: React application with Redux for state management, Bootstrap for styling, and responsive design.

**Backend Layer**: Spring Boot REST API with JWT authentication, handling business logic for users, orders, and cart operations.

**Data Layer**: MongoDB for primary data storage, Redis for caching and session management.

**Deployment**: Containerized with Docker Compose for easy orchestration and scalability.

## 🛠️ Tech Stack

### Backend
- **Java 21**
- **Spring Boot 3.3.5**
- **Spring Security** (Authentication & Authorization)
- **Spring Data MongoDB** (Database ORM)
- **Spring Data Redis** (Caching)
- **JWT** (Token-based authentication)
- **Maven** (Build tool)

### Frontend
- **React 18.2.0**
- **Redux Toolkit** (State management)
- **React Router** (Client-side routing)
- **Axios** (HTTP client)
- **Bootstrap 5** (UI framework)
- **React Icons** (Icon library)

### Infrastructure
- **Docker & Docker Compose** (Containerization)
- **MongoDB** (Primary database)
- **Redis** (Caching layer)
- **Qdrant** (Vector database for AI search)
- **Nginx** (Web server for React app)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)
- **Java 21** (for local development)
- **Node.js 16+** (for local frontend development)
- **Maven 3.6+** (for local backend development)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Restuarant_Website_NaturesSpices_JavaReact.git
   cd Restuarant_Website_NaturesSpices_JavaReact
   ```

2. **Environment Setup**
   - No additional environment configuration needed for Docker setup
   - For local development, ensure Java 21 and Node.js are installed

## 🏃 Running the Application

### Method 1: Docker Compose (Recommended)

This is the easiest way to run the entire application with all dependencies.

#### 🐳 Step 1: Build Spring Boot Application

Before running the containers, build the backend:

```bash
# Navigate to backend directory
cd SmartRestaurantEngine/SmartRestaurantEngine

# Build the application
./mvnw clean package
```

This generates the required `.jar` file for the Spring Boot application.

#### 🐳 Step 2: Run Frontend & Backend using Docker

From the root directory of the project, run:

```bash
docker-compose up --build
```

**What this does:**
- Builds and starts all required containers
- Runs the React frontend on `http://localhost:3000`
- Runs the Spring Boot backend on `http://localhost:4000`
- Starts MongoDB on port `27017`
- Starts Redis on port `6379`
- Starts Qdrant vector database on port `6333`

### Method 2: Local Development

#### Backend Setup
```bash
# Navigate to backend
cd SmartRestaurantEngine/SmartRestaurantEngine

# Install dependencies and run
./mvnw spring-boot:run
```

#### Frontend Setup
```bash
# Navigate to frontend
cd SmartRestaurantFrontEnd

# Install dependencies
npm install

# Start development server
npm start
```

#### Database Setup
Ensure MongoDB and Redis are running locally, or update `application.properties` to point to your database instances.

## 📚 API Documentation

### Authentication Endpoints
- `POST /user/auth/login` - User login
- `POST /user/auth/signup` - User registration

### Food Management
- `GET /api/food` - Get all food items
- `POST /api/food` - Add new food item
- `PUT /api/food/{id}` - Update food item
- `DELETE /api/food/{id}` - Delete food item

### Cart Management
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/{itemId}` - Remove item from cart

### Order Management
- `POST /api/orders` - Place new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/{id}` - Get order details

### AI Search
- `GET /api/fooditems/search` - AI-powered food search
- `POST /api/ai/chat` - Interact with AI assistant

## 👨‍💻 Developer

**Lokesh Bhangale**
Feel Free to reach me on Linkedlin and on my mail.
- GitHub: (https://github.com/lokeshbhangale89)
- LinkedIn: (https://github.com/lokeshbhangale89)
