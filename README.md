<img width="1883" height="869" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/a49fd799-61e7-47c2-bcbb-bed89e9b491d" />


# 🚀 SkillSphere - Online Learning Platform

SkillSphere is a modern online learning platform where users can explore courses, view details, and manage their profiles. It is built with **Next.js App Router**, **Better Auth**, and **MongoDB**.

---

## 🌐 Features

* 📚 Browse all courses
* 🔍 View course details (dynamic routing)
* 👤 User authentication (Email + Google)
* 🧑 Profile page with user info
* ✏️ Update profile functionality
* ⚡ Fast and responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React
* **Styling:** Tailwind CSS, Framer Motion
* **Authentication:** Better Auth
* **Database:** MongoDB
* **Icons:** Lucide React

---

## 📁 Project Structure

```
app/
 ├── page.jsx                     # Home page
 ├── courses/page.jsx            # Courses page
 ├── course/[id]/page.jsx        # Dynamic course details
 ├── profile/page.jsx            # User profile
 ├── profile/update/page.jsx     # Update profile
 └── api/auth/[...all]/route.js  # Auth API

lib/
 └── auth.js                     # Better Auth config

data/
 └── courseData.json             # Static course data
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=https://skillsphere-online-learning-web.vercel.app

MONGO_DB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
https://github.com/shakil218/skillsphere-online-learning-platform.git
cd skillsphere
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔐 Authentication Setup

* Email & Password login enabled
* Google OAuth integrated
* Uses Better Auth with MongoDB adapter

---

## 📦 Build for Production

```
npm run build
npm start
```

---

## 💡 Key Learnings

* Handling dynamic routes in Next.js
* Server vs Client components
* Authentication with Better Auth
* Fixing build-time errors
* Managing metadata (SEO)

---

## 🧠 Future Improvements

* 🎥 Video-based courses
* 💳 Payment integration
* 📊 User dashboard analytics
* 🧾 Course enrollment system
* ⭐ Reviews & ratings system

---

## 👨‍💻 Author

**Md Shakil Islam**

---

## 📄 License

This project is licensed under the MIT License.
