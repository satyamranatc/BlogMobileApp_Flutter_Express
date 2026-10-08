# BlogApp — Project Context & Architecture

## Overview
BlogApp is a full-stack, cross-platform blog platform composed of:
1. **Backend**: Node.js & Express REST API with MongoDB (Mongoose).
2. **Frontend**: Flutter application for Mobile (Android) and Web.

---

## Directory Structure

```
BlogApp/
├── .agent/                   # Agent memory, context, and project guidelines
│   ├── README.md
│   ├── context.md            # This project context document
│   └── rules/                # Agent coding and architectural rules
├── backend/                  # Node.js Express REST API
│   ├── config/
│   │   └── dbConfig.js       # MongoDB connection via Mongoose
│   ├── controllers/
│   │   └── blogController.js # CRUD handlers and business logic
│   ├── middleware/           # Express middleware (custom auth/validation)
│   ├── models/
│   │   └── Blog.js           # Mongoose schema for Blog posts
│   ├── routes/
│   │   └── blogRoutes.js     # Express routing definitions
│   ├── .env                  # Environment variables (PORT, MONGO_URI, etc.)
│   ├── package.json          # Node dependencies and scripts
│   ├── seed.js               # Sample data seeding script
│   └── server.js             # API entrypoint and middleware pipeline
└── blog_app/                 # Flutter client application
    ├── lib/
    │   ├── main.dart         # Flutter entrypoint & route definitions
    │   └── screens/
    │       ├── AdminPage.dart # Admin management interface
    │       ├── BlogPage.dart  # Single blog detail view
    │       └── HomePage.dart  # Home feed / list of blogs
    ├── android/              # Native Android wrapper
    ├── web/                  # Web wrapper
    └── pubspec.yaml          # Flutter dependencies and assets
```

---

## Backend Specifications

### Tech Stack
* **Runtime**: Node.js (ES Modules `"type": "module"`)
* **Framework**: Express (`^5.2.1`)
* **Database**: MongoDB via Mongoose (`^9.10.4`)
* **Utilities**: `dotenv`, `cors`, `nodemon` (dev)

### Environment Variables (`backend/.env`)
* `PORT`: Port number for Express server (default `5000`).
* `MONGO_URI`: MongoDB connection string.

### Data Models

#### Blog Schema (`backend/models/Blog.js`)
| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | Yes | Title of the post (trimmed) |
| `desc` | String | Yes | Content/Description (alias: `description`, trimmed) |
| `poster` | String | No | Image URL or banner path (default: `""`, trimmed) |
| `createdAt` | Date | Auto | Timestamp when created |
| `updatedAt` | Date | Auto | Timestamp when updated |

### API Endpoints (`/api/blogs`)

| Method | Endpoint | Description | Query / Body Params |
|---|---|---|---|
| `GET` | `/api/blogs` | Get all blogs (newest first) | `?search=<term>` (searches title & desc) |
| `POST` | `/api/blogs` | Create a new blog post | Body: `{ title, desc, poster }` |
| `GET` | `/api/blogs/:id` | Get single blog by MongoDB `_id` | Param: `id` |
| `PUT` / `PATCH` | `/api/blogs/:id` | Update an existing blog | Param: `id`, Body fields to update |
| `DELETE` | `/api/blogs/:id` | Delete blog by ID | Param: `id` |
| `GET` | `/` | Health check endpoint | Returns `{ message: "API is live" }` |

---

## Frontend Specifications

### Tech Stack
* **Framework**: Flutter (Dart SDK `^3.12.2`)
* **Platforms**: Web & Android

### Navigation & Screen Structure (`blog_app/lib/main.dart`)
* `MainScreen` (`StatefulWidget`) hosts the `BottomNavigationBar` switching between:
  * **Tab 0**: [HomePage](file:///Users/satyamrana/Documents/BlogApp/blog_app/lib/screens/HomePage.dart) (`Icons.home`)
  * **Tab 1**: [BlogPage](file:///Users/satyamrana/Documents/BlogApp/blog_app/lib/screens/BlogPage.dart) (`Icons.article`)
  * **Tab 2**: [AdminPage](file:///Users/satyamrana/Documents/BlogApp/blog_app/lib/screens/AdminPage.dart) (`Icons.admin_panel_settings`)

### Current Implementation State
* The screens are currently shell/placeholder widgets (`Scaffold` with `Center(child: Text(...))`).
* Network client package (e.g. `http` or `dio`) needs to be added to `pubspec.yaml` to connect with backend endpoints.
* Base URL configurations should handle:
  * Local Web: `http://localhost:5000`
  * Android Emulator: `http://10.0.2.2:5000`
  * Real Device: Local network IP (e.g. `http://192.168.x.x:5000`)

---

## Running the Project

### Running Backend
```bash
cd backend
npm install
npm run dev   # Starts server via nodemon on http://localhost:5000
npm run seed  # Populates database with sample blog posts
```

### Running Frontend
```bash
cd blog_app
flutter pub get
flutter run -d chrome     # Run Flutter Web
flutter run -d <device>   # Run on Android emulator / physical device
```
