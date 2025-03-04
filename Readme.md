# Expense Tracker

## 📌 Project Overview
The **Expense Tracker** is a web application that allows users to record, filter, and track their daily expenses efficiently. It provides a simple interface to add expenses, categorize them, and apply filters for better financial management.

## 🛠️ Technologies Used
- **Frontend:** React.js (with TypeScript)
- **Styling:** Tailwind CSS
- **State Management:** useState Hook
- **Backend Database:** MongoDB (via Mongoose)
- **Backend Runtime:** Node.js with Express.js
- **Environment Management:** dotenv
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have the following installed:
- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas Account (or a local MongoDB instance)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DB_USERNAME=yourMongoDBUsername
DB_PASSWORD=yourMongoDBPassword
```

### 5️⃣ Run the Application
```sh
npm start
```
This will start the development server.

### 6️⃣ Build for Production
```sh
npm run build
```
This will generate the optimized production build.

## 🔗 API Endpoints
### Database Connection (`dbConnection.ts`)
- Connects to MongoDB using Mongoose.
- Requires environment variables for credentials.

## 📂 Folder Structure
```
expense-tracker/
│── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Main pages of the application
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styling (Tailwind CSS)
│── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── dbConnection.ts  # MongoDB connection
│── .env                 # Environment variables
│── package.json         # Dependencies & scripts
│── README.md            # Documentation
```

## 🛡️ Security Considerations
- Always store sensitive credentials in `.env` files.
- Do not hardcode passwords or API keys in source code.

## 🛠️ Future Improvements
- Implement charts for expense visualization

## 📜 License
This project is licensed under the MIT License.

---

### 🎯 Happy Coding! 🚀

