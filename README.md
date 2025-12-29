# Blog Application

A modern, full-stack blog application built with Next.js, featuring an admin panel for content management, MongoDB for data storage, and a responsive user interface.

## 🚀 Features

- **Public Blog Listing**: Browse and view all published blog posts
- **Individual Blog Pages**: Detailed view for each blog post
- **Admin Panel**: 
  - Add new blog posts with image uploads
  - View blog list
  - Manage subscriptions
- **Image Upload**: Upload and store blog thumbnails
- **Toast Notifications**: User-friendly notifications using React Toastify
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Category Filtering**: Organize blogs by categories (Startup, Technology, Lifestyle)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Notifications**: React Toastify

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- MongoDB Atlas account (or local MongoDB instance)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure MongoDB**
   
   Update the MongoDB connection string in `lib/config/db.js`:
   ```javascript
   await mongoose.connect('your-mongodb-connection-string');
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
my-app/
├── app/
│   ├── admin/              # Admin panel pages
│   │   ├── addProduct/     # Add new blog post
│   │   ├── blogList/       # View all blogs
│   │   ├── subscriptions/  # Manage subscriptions
│   │   └── layout.jsx      # Admin layout with sidebar
│   ├── api/
│   │   └── blog/
│   │       └── route.js     # Blog API endpoints
│   ├── blogs/
│   │   └── [id]/           # Individual blog pages
│   ├── page.js             # Home page
│   └── layout.js           # Root layout
├── Components/
│   ├── AdminComponents/
│   │   └── Sidebar.jsx     # Admin sidebar navigation
│   ├── BlogItem.jsx        # Blog card component
│   ├── BlogList.jsx        # Blog listing component
│   ├── Footer.jsx          # Footer component
│   └── Header.jsx          # Header component
├── lib/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   └── models/
│       └── BlogModel.js    # Blog Mongoose schema
├── Assets/                 # Static assets (images, icons)
└── public/                 # Public files (uploaded images)
```

## 🔌 API Endpoints

### GET `/api/blog`
Retrieves all blog posts.

**Response:**
```json
{
  "blogs": [
    {
      "_id": "...",
      "title": "Blog Title",
      "description": "Blog description",
      "category": "Technology",
      "author": "Author Name",
      "image": "/image_url",
      "authorImg": "/author_image_url",
      "date": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### POST `/api/blog`
Creates a new blog post.

**Request (FormData):**
- `title` (string, required): Blog title
- `description` (string, required): Blog description
- `category` (string, required): Blog category
- `author` (string, required): Author name
- `authorImg` (string, required): Author image URL
- `image` (file, required): Blog thumbnail image

**Response:**
```json
{
  "success": true,
  "msg": "Blog added"
}
```

**Error Response:**
```json
{
  "success": false,
  "msg": "Error message"
}
```

## 📝 Blog Model Schema

```javascript
{
  title: String (required),
  description: String (required),
  category: String (required),
  author: String (required),
  image: String (required),
  authorImg: String (required),
  date: Date (default: Date.now)
}
```

## 🎨 Features in Detail

### Admin Panel
- **Add Blog**: Upload blog posts with images, set categories, and manage content
- **Blog List**: View and manage all published blogs
- **Subscriptions**: Manage blog subscriptions

### Public Pages
- **Home Page**: Displays all blog posts in a grid/list layout
- **Blog Detail**: Individual blog post pages with full content

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Environment Variables

For production, consider using environment variables for:
- MongoDB connection string
- API keys
- Other sensitive configuration

Create a `.env.local` file:
```env
MONGODB_URI=your-mongodb-connection-string
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

Developed with ❤️ using Next.js

---

For more information about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
