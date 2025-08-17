# Full-Stack Job Portal Application

This project is a comprehensive **full-stack job portal application** built to connect job seekers with recruiters. It provides a platform where users can **search for job openings and apply** to them, while recruiters can **publish new job posts** and manage applications.

## Features

The application offers a wide range of functionalities for both job seekers and recruiters:

*   **User Features**:
    *   **Job Search**: Users can search for job openings using a search box and apply filters based on categories and location.
    *   **Job Application**: Users can apply for open positions.
    *   **Authentication & Profile Management**: User authentication and management (sign-in, sign-up, profile updates) are handled by **Clerk Auth**, providing ready-to-use UI components.
    *   **Applied Jobs**: Users can view a dedicated "Applied Jobs" page to see all jobs they have applied for, along with their application statuses (pending, accepted, rejected).
    *   **Resume Management**: Users can update and view their resumes, with support for PDF uploads.

*   **Recruiter Features**:
    *   **Recruiter Dashboard**: Recruiters have a dedicated dashboard to manage their activities.
    *   **Job Posting**: Recruiters can publish new job posts through a form, including details like title, description, category, location, level, and salary.
    *   **Job Management**: Recruiters can manage their existing job listings, including controlling job visibility (making them visible or hidden from the public).
    *   **Application Management**: Recruiters can view, accept, or reject job applications received for their job openings.
    *   **Authentication**: A separate recruiter login system is implemented.

*   **Error Monitoring**:
    *   **Sentry Integration**: **Sentry** is integrated for error debugging and application performance monitoring, providing real-time insights into production deployments, tracking errors, crashes, slow code, and database queries.

## Tech Stack

The project is built with a modern and robust full-stack technology stack:

*   **Frontend**:
    *   **React.js**: For building dynamic and interactive user interfaces.
    *   **Vite**: Used for fast development setup of the React project.
    *   **Tailwind CSS**: For utility-first CSS styling, ensuring a responsive design.
    *   **React Router DOM**: For client-side routing and navigation between different application pages.
    *   **React Toastify**: To display sleek toast notifications for user feedback.
    *   **Quill**: A rich text editor integrated for creating and editing detailed job descriptions.
    *   **K-Converter**: Used for displaying salary figures in a concise "K" format (e.g., 91K).
    *   **Moment.js**: For displaying job post times in a user-friendly relative format (e.g., "a month ago").
    *   **Axios**: For making HTTP requests to interact with the backend APIs.

*   **Backend**:
    *   **Node.js**: The JavaScript runtime environment for the server.
    *   **Express.js**: The web application framework used to build the RESTful APIs.
    *   **MongoDB**: A NoSQL database for storing all application data, including user profiles, company details, job listings, and application records.
    *   **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, used for interacting with the database.
    *   **JSON Web Token (JWT)**: Used for authenticating recruiters and ensuring secure API access.
    *   **Bcrypt**: For hashing and securely comparing user/company passwords.
    *   **Multer**: Handles multipart/form-data, primarily for file uploads like company logos and resumes.
    *   **Cloudinary**: An external service for cloud storage and delivery of images (company logos, user profile images) and PDF resumes.
    *   **dotenv**: For securely managing environment variables.
    *   **CORS**: Handles Cross-Origin Resource Sharing, enabling communication between frontend and backend on different origins.
    *   **Nodemon**: For automatic server restarts during development.
    *   **Svix**: Integrated for handling and verifying Clerk webhooks, ensuring real-time synchronization of user data between Clerk and the MongoDB database.

*   **Authentication & User Management**:
    *   **Clerk Auth**: A popular authentication service providing easy integration of user authentication and user management features, including ready-to-use UI components for sign-in, sign-up, and profile management.
    *   **Clerk Express**: Middleware for integrating Clerk with the Express backend.

*   **Deployment**:
    *   **Vercel**: The entire application (both frontend and backend) is deployed on Vercel.

## Installation Guide

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)
*   Git
*   MongoDB Atlas Account
*   Cloudinary Account
*   Clerk Account
*   Sentry Account

### Backend Setup (`server` directory)

1.  **Clone the Repository**:
    ```bash
    git clone <your-repository-url>
    cd job-portal # or your project's root directory name
    ```
2.  **Navigate to Backend Directory**:
    ```bash
    cd server
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
    This installs necessary packages like `express`, `jsonwebtoken`, `bcrypt`, `mongoose`, `nodemon`, `svix`, `cors`, `multer`, `dotenv`, and `cloudinary`.

4.  **Environment Variables Configuration**:
    Create a `.env` file in the `server` directory and add the following variables:
    *   `PORT=5000` (or any preferred port)
    *   `MONGODB_URI=<Your_MongoDB_Connection_String>` (e.g., `mongodb+srv://user:password@cluster.mongodb.net/`)
        *   **Note**: Ensure your MongoDB password does not contain an `@` symbol.
        *   The database name (`jobportal`) will be appended in `config/db.js`.
    *   `JWT_SECRET=<A_strong_secret_key_for_JWT>` (e.g., `devassecret`)
    *   `CLOUDINARY_API_KEY=<Your_Cloudinary_API_Key>`
    *   `CLOUDINARY_API_SECRET=<Your_Cloudinary_API_Secret>`
    *   `CLOUDINARY_CLOUD_NAME=<Your_Cloudinary_Cloud_Name>`
        *   **Cloudinary Configuration**: After creating your Cloudinary account, go to Dashboard -> API Keys to get the key, secret, and cloud name.
        *   Enable PDF and ZIP file delivery in Cloudinary security settings.
    *   `CLERK_WEBHOOK_SECRET=<Your_Clerk_Webhook_Signing_Secret>` (initially can be empty, update after Clerk webhook setup)
    *   `CLERK_PUBLISHABLE_KEY=<Your_Clerk_Publishable_Key>` (from Clerk Dashboard)
    *   `CLERK_SECRET_KEY=<Your_Clerk_Secret_Key>` (from Clerk Dashboard)

5.  **Run the Backend Server**:
    ```bash
    npm run server
    ```
    The server will start on `http://localhost:5000/`. You should see "database connected" and "server is running on Port 5000" messages in the terminal.

### Frontend Setup (`client` directory)

1.  **Navigate to Frontend Directory**:
    ```bash
    cd ../client
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
    This installs React, Tailwind CSS, React Router DOM, React Toastify, Quill, K-Converter, Moment.js, Axios, and Clerk React.

3.  **Environment Variables Configuration**:
    Create a `.env` file in the `client` directory and add the following variables:
    *   `VITE_BACKEND_URL=http://localhost:5000` (or your deployed backend URL)
    *   `VITE_CLERK_PUBLISHABLE_KEY=<Your_Clerk_Publishable_Key>` (from Clerk Dashboard)

4.  **Run the Frontend Application**:
    ```bash
    npm run dev
    ```
    The React application will start on `http://localhost:5173/`.

### Clerk Webhook Setup

1.  **Deploy Backend to Vercel**:
    *   Push your `server` code to a Git repository (e.g., GitHub).
    *   Go to [Vercel](https://vercel.com/) and import your server repository.
    *   Configure the root directory to `server/`.
    *   Add all backend environment variables listed above to Vercel's project settings.
    *   Deploy the project.
2.  **Configure Clerk Webhooks**:
    *   Once your backend is deployed, copy its Vercel domain URL.
    *   In your Clerk Dashboard, go to "Webhooks".
    *   Add a new endpoint: paste your Vercel backend URL followed by `/webhooks/clerk` (e.g., `https://your-backend-domain.vercel.app/webhooks/clerk`).
    *   Select the `user` events to receive (e.g., `user.created`, `user.updated`, `user.deleted`).
    *   After creation, copy the "Signing Secret".
3.  **Update Clerk Webhook Secret**:
    *   Paste the copied "Signing Secret" into your `server/.env` file for the `CLERK_WEBHOOK_SECRET` variable.
    *   If deployed on Vercel, update the `CLERK_WEBHOOK_SECRET` environment variable in Vercel's project settings and redeploy your backend.

### Sentry Integration

1.  **Setup Sentry Account**:
    *   Create a Sentry account and a new project (select Express for backend).
2.  **Configure Backend**:
    *   Sentry SDK is installed as part of `npm install` for the server.
    *   The Sentry configuration is handled in `config/instrument.js` and `server.js`.
    *   MongoDB integration for Sentry is also included in `config/instrument.js`.
    *   Errors and performance metrics from your backend will be reported to your Sentry dashboard.

## Usage

### Running Locally

*   Ensure both frontend and backend servers are running (as per Installation Guide).
*   Open your web browser and navigate to the frontend URL: **`http://localhost:5173/`**.

### Application Flow

#### User Flow

1.  **Homepage**: View the navigation bar, welcome message, search box, company logos, latest job posts, and filters (categories, location).
2.  **Login/Sign Up**: Click the "Login" button to use Clerk Auth for sign-in or sign-up via Google or email.
3.  **Search & Filter**: Use the search box to find jobs by title or location, and apply filters from the sidebar.
4.  **View Job Details**: Click on any job post to see its full description, company details, salary, and posted time.
5.  **Apply for a Job**:
    *   Click "Apply Now". If not logged in, you will be prompted to log in.
    *   If logged in but no resume is uploaded, you will be redirected to the "Applied Jobs" page to upload your resume.
    *   Once a resume is uploaded, you can apply, and the button will show "Already Applied" for that job.
6.  **Manage Applied Jobs**: Navigate to "Applied Jobs" to view all jobs you've applied for, their status (pending, accepted, rejected), and manage your resume.
7.  **Profile Management**: Access the "Manage Account" section to update your profile (image, name) and security settings.

#### Recruiter Flow

1.  **Recruiter Login**: Click "Recruiter Login" on the homepage to access the recruiter authentication form. You can sign up a new company or log in to an existing account.
2.  **Dashboard Access**: After successful login, you will be redirected to the recruiter dashboard, with the default view being "Manage Jobs".
3.  **Add New Job**: Click "Add Job" in the sidebar to fill out a form for a new job post, including title, rich text description, category, location, level, and salary.
4.  **Manage Jobs**: In the "Manage Jobs" section, view all your company's posted jobs. You can toggle their visibility (show/hide from public view) and see the number of applicants for each job.
5.  **View Applications**: In the "View Applications" section, see a list of all applicants for your company's jobs. You can review applications and change their status to "Accepted" or "Rejected".



## Environment Variables

### Client (`client/.env`)

| Variable Name             | Description                                          | Example Value                    |
| :------------------------ | :--------------------------------------------------- | :------------------------------- |
| `VITE_BACKEND_URL`        | URL of the backend server.                           | `http://localhost:5000`          |
| `VITE_CLERK_PUBLISHABLE_KEY` | Your Clerk application's publishable key.            | `pk_test_aWQ...`                 |

### Server (`server/.env`)

| Variable Name             | Description                                          | Example Value                    |
| :------------------------ | :--------------------------------------------------- | :------------------------------- |
| `PORT`                    | Port number for the backend server.                  | `5000`                           |
| `MONGODB_URI`             | MongoDB Atlas connection string.                     | `mongodb+srv://user:password@cluster.mongodb.net/` |
| `JWT_SECRET`              | Secret key used for signing JWTs for recruiter authentication. | `devassecret`                    |
| `CLOUDINARY_API_KEY`      | Cloudinary API Key.                                  | `1234567890abcdefghij`           |
| `CLOUDINARY_API_SECRET`   | Cloudinary API Secret.                               | `secret_abcdefghijklmnop`        |
| `CLOUDINARY_CLOUD_NAME`   | Your Cloudinary Cloud Name.                          | `your_cloud_name`                |
| `CLERK_WEBHOOK_SECRET`    | Signing secret for Clerk webhooks.                   | `whsec_abcdefghijklmnop`         |
| `CLERK_PUBLISHABLE_KEY`   | Your Clerk application's publishable key.            | `pk_test_aWQ...`                 |
| `CLERK_SECRET_KEY`        | Your Clerk application's secret key.                 | `sk_test_aWQ...`                 |

## API Documentation

Below are the key API endpoints available in the application:

### Public Routes (Job Search)

*   **`GET /api/jobs`**
    *   **Description**: Retrieves all job listings that are currently visible (public).
    *   **Authentication**: None required.
    *   **Response**: Array of job objects, populated with basic company details (excluding password).

*   **`GET /api/jobs/:id`**
    *   **Description**: Retrieves details for a single job post by its unique ID.
    *   **Authentication**: None required.
    *   **Parameters**: `id` (Job ID) in the URL path.
    *   **Response**: A single job object, populated with basic company details.

### Company/Recruiter Routes (Protected)

These routes require a JWT token in the `Authorization` header (`Bearer <token>`).

*   **`POST /api/company/register`**
    *   **Description**: Registers a new company account.
    *   **Authentication**: None required.
    *   **Request Body (multipart/form-data)**: `name`, `email`, `password`, `image` (company logo file).
    *   **Response**: Success status, company data, and an authentication token.

*   **`POST /api/company/login`**
    *   **Description**: Authenticates a company and provides a JWT token.
    *   **Authentication**: None required.
    *   **Request Body (JSON)**: `email`, `password`.
    *   **Response**: Success status, company data, and an authentication token.

*   **`GET /api/company/company`**
    *   **Description**: Retrieves the authenticated company's data.
    *   **Authentication**: Required (JWT token).
    *   **Response**: Success status and company details.

*   **`POST /api/company/postjob`**
    *   **Description**: Allows an authenticated company to post a new job listing.
    *   **Authentication**: Required (JWT token).
    *   **Request Body (JSON)**: `title`, `description`, `location`, `salary`, `category`, `level`.
    *   **Response**: Success status and the newly created job object.

*   **`GET /api/company/listjobs`**
    *   **Description**: Retrieves all job listings posted by the authenticated company, including applicant counts.
    *   **Authentication**: Required (JWT token).
    *   **Response**: Array of job objects posted by the company, with `applicants` count.

*   **`POST /api/company/changestatus`**
    *   **Description**: Changes the status of a job application (e.g., from pending to accepted/rejected).
    *   **Authentication**: Required (JWT token).
    *   **Request Body (JSON)**: `id` (Job Application ID), `status` (new status, e.g., "accepted", "rejected").
    *   **Response**: Success status and a confirmation message.

*   **`POST /api/company/changevisibility`**
    *   **Description**: Toggles the visibility status of a specific job post.
    *   **Authentication**: Required (JWT token).
    *   **Request Body (JSON)**: `id` (Job ID).
    *   **Response**: Success status and the updated job object with new visibility status.

*   **`GET /api/company/applicants`**
    *   **Description**: Retrieves all job applications for all jobs posted by the authenticated company.
    *   **Authentication**: Required (JWT token).
    *   **Response**: Array of job application objects, populated with user and job details.

### User Routes (Protected by Clerk)

These routes implicitly use Clerk authentication configured in the backend. The frontend sends the Clerk token in the `Authorization` header (`Bearer <token>`).

*   **`GET /api/users/user`**
    *   **Description**: Retrieves the authenticated user's data.
    *   **Authentication**: Required (Clerk token).
    *   **Response**: Success status and user details.

*   **`POST /api/users/apply`**
    *   **Description**: Allows an authenticated user to apply for a specific job.
    *   **Authentication**: Required (Clerk token).
    *   **Request Body (JSON)**: `jobId`.
    *   **Response**: Success status and a confirmation message ("Applied successfully" or "Already applied").

*   **`GET /api/users/applications`**
    *   **Description**: Retrieves all job applications made by the authenticated user.
    *   **Authentication**: Required (Clerk token).
    *   **Response**: Array of job application objects, populated with company and job details.

*   **`POST /api/users/updateresume`**
    *   **Description**: Uploads or updates the authenticated user's resume.
    *   **Authentication**: Required (Clerk token).
    *   **Request Body (multipart/form-data)**: `resume` (PDF file).
    *   **Response**: Success status and a confirmation message ("Resume updated").

### Webhook

*   **`POST /webhooks/clerk`**
    *   **Description**: Endpoint for Clerk webhooks to synchronize user data (create, update, delete) in the MongoDB database.
    *   **Authentication**: Verified by Svix using the Clerk Webhook Signing Secret.
    *   **Request Body**: Clerk event payload (handled internally).
    *   **Response**: Success/error status.

## Folder Structure

The project follows a clear and organized folder structure:

```
job-portal/
├── client/                     # Frontend application (React.js)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, icons, and dummy data
│   │   ├── components/         # Reusable React components (e.g., Navbar, JobCard, Hero)
│   │   ├── context/            # React Context for global state management
│   │   ├── pages/              # Main application pages (e.g., Home, AppliedJobs, ApplyJob)
│   │   ├── App.jsx             # Main React application component
│   │   ├── index.css           # Global CSS styling
│   │   └── main.jsx            # Entry point of the React application
│   ├── .env                    # Environment variables for frontend
│   └── package.json            # Frontend dependencies and scripts
└── server/                     # Backend application (Node.js/Express.js)
    ├── config/                 # Configuration files (DB connection, Cloudinary, Multer, Sentry)
    ├── controllers/            # Business logic for API endpoints
    ├── middlewares/            # Custom Express middleware (e.g., JWT protection)
    ├── models/                 # Mongoose schemas for MongoDB collections (User, Company, Job, JobApplication)
    ├── routes/                 # API routes definitions
    ├── utils/                  # Utility functions (e.g., token generation)
    ├── .env                    # Environment variables for backend
    ├── server.js               # Main Express server file
    └── package.json            # Backend dependencies and scripts
```

