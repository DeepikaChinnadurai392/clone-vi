# Virtual Internships Clone

A full-stack web application replicating the [Virtual Internships](https://www.virtualinternships.com/) platform. Built with **Next.js** (frontend), **Java Spring Boot** (backend), and **MySQL** (database), this project allows users to browse, view, and manage virtual internships globally.

## Features
- User authentication and registration
- Browse internships by category, location, and company
- View detailed internship information
- Admin panel for CRUD operations on internships
- Responsive and user-friendly design

## Tech Stack
- Frontend: Next.js, React, CSS Modules
- Backend: Java Spring Boot
- Database: MySQL
- Others: Axios for API requests, React-YouTube for videos

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
##  backend install dependencies
cd backend
- mvn clean install
- mvn spring-boot:run
## frondend install dependencies
cd frontend-next
- npm install
- npm run dev
## configure MYSQLDB
CREATE DATABASE vi_clone;
## project structure
vi-clone/
├── frontend-next/        # Next.js Frontend
├── backend/              # Spring Boot Backend
└── README.md             # Optional: project info
## frontend structure(Next.js)
frontend-next/
├─ package.json
├─ next.config.js
├─ public/
│ ├─ mainlogo.png
│ ├─ loginlogo.png
│ ├─ loginlogo1.png
│ └─ circle*.png
├─ pages/
│ ├─ index.js
│ ├─ selection.js
│ ├─ login.js
│ ├─ signup.js
│ └─ _app.js
├─ components/
│ ├─ Navbar.js
│ ├─ Footer.js
│ ├─ Hero.js
│ ├─ FutureOfWork.js
│ ├─ FeatureList.js
│ ├─ SelectionOption.js
│ ├─ VideoCard.js
│ └─ ToggleBar.js
├─ styles/
│ ├─ globals.css
│ ├─ Selection.module.css
│ └─ other module.css files
└─ utils/
├─ api.js
└─ validation.js


 ## backend structure
 backend/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/vi/backend/
│   │   │       ├── BackendApplication.java
│   │   │       ├── AuthController.java      # Handles login
│   │   │       ├── UserController.java      # Optional: user CRUD
│   │   │       ├── model/
│   │   │       │   └── User.java
│   │   │       └── repository/
│   │   │           └── UserRepository.java
│   │   └── resources/
│   │       ├── application.properties      # DB URL, port, etc.
│   │       └── data.sql                    # Optional seed data
└── target


   
