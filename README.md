codex-lv3-may-2025
[Family Game Night]
[Connecting families, one game at a time.]

About This Project
Family Game Night Library is a React-based web app that helps families easily discover, explore, and review board games. Users can browse all games or filter by category—like Adventure, Fighting, Fantasy, Card Game, City Building, or Trivia. Each game displays key details such as player count, mechanics, designer, and play time. The app also includes a review system where users can submit and view game reviews. Powered by Supabase for database management, this project creates a simple and interactive way for families to find the perfect game for their next game night.


The Problem
 Instead of families wasting time searching for ideas or arguing over what to play, the app organizes games by category, shows reviews.

The Solution
Family Game Night app solves the problem of finding fun, age-appropriate games quickly and keeping everyone engaged.
It makes planning game night simple, helps families discover new games they’ll enjoy together, and brings people closer through easy, stress-free entertainment.

Features
✅ Create Records - Add new user-generated content through forms
✅ Display Data - View records from both external and user data tables
✅ List Patterns - Uses map, filter, and reduce to process data
✅ For-Loops - Implements for-loop patterns in the code
✅ Navigation - Multi-page application with navigation bar
✅ Responsive Design - Works on desktop and mobile devices
⭐ Login System - User authentication with local storage (bonus)
⭐ Data Visualization - Interactive charts using [Chart.js/Recharts] (bonus)
Tech Stack
Frontend Framework: React (Vite)
Database: Supabase (PostgreSQL)
Database Client: @supabase/supabase-js
Styling: [Bootstrap / Custom CSS]
Visualization: [Chart.js / Recharts] (if implemented)
Deployment: Netlify / Vercel
Screenshots
[Add 2-3 screenshots of your application]

Home/Splash Screen
Home Screen

Report Page
Report Page

Form Page
Form Page

Dataset Sources
External Data
Dataset: [Name from Code.org, e.g., “New York Times Bestsellers”]
Source: Code.org App Lab Data Tab
Records: [Number of records, e.g., 500+]
Key Columns: [List 3-4 key columns from the dataset]
User Data
Purpose: [What user data you collect, e.g., “User book reviews”]
Columns: [List user data columns]
Database Schema
[External Data Table Name]
| Column | Type | Description | |——–|——|————-| | id | int | Primary key | | [column1] | text | [Description] | | [column2] | int | [Description] | | created_at | timestamp | Record timestamp |

[User Data Table Name]
| Column | Type | Description | |——–|——|————-| | id | int | Primary key | | [column1] | text | [Description] | | [column2] | int | References external table | | created_at | timestamp | Record timestamp |

Getting Started
Prerequisites
Node.js (v18 or higher)
npm or yarn
A Supabase account
Installation
Clone the repository
git clone [your-repo-url]
cd [your-project-name]
Install dependencies
npm install
Set up environment variables Create a .env file in the root directory:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Run the development server
npm run dev
Open your browser Navigate to http://localhost:5173 (or the port shown in terminal)
Usage
For Users
View Data - Navigate to the Report page to see records from both tables
Add Records - Use the Form page to create new user data entries
Explore Visualizations - Check out the Analytics/Charts page (if implemented)
Search/Filter - Use filters to find specific records
Key Pages
Home/Splash Page - Landing page with app overview
Report Page - Displays all records with list patterns applied
Form Page - Create new user-generated records
Analytics Page - Data visualizations (bonus feature)
List Patterns Implemented
Map
[Describe where you use map]:

// Example of your map implementation
const formattedData = data.map(item => ({
  ...item,
  formattedDate: formatDate(item.created_at)
}));
Filter
[Describe where you use filter]:

// Example of your filter implementation
const recentItems = data.filter(item => 
  isRecent(item.created_at)
);
Reduce
[Describe where you use reduce]:

// Example of your reduce implementation
const total = data.reduce((sum, item) => 
  sum + item.value, 0
);
For-Loop Implementation
[Describe where you use a for-loop]:

// Example of your for-loop implementation
for (let i = 0; i < items.length; i++) {
  // Your implementation
  processItem(items[i]);
}

// Or with for...of
for (const item of items) {
  // Your implementation
  processItem(item);
}
Deployment
This project is deployed on Netlify: [family-game-night-git.netligy.app]

Deployment Steps
Build the project: npm run build
Connect repository to Netlify
Add environment variables in Netlify dashboard
Deploy automatically on git push
Project Structure
src/
├── components/
│   ├── Navigation.jsx
│   ├── ReportPage.jsx
│   └── FormPage.jsx
├── pages/
│   ├── Home.jsx
│   ├── Report.jsx
│   └── Form.jsx
├── supabase/
│   └── client.js
├── App.jsx
└── main.jsx
Future Improvements: I want to expand my project by creating a user profile system that allows people to log in and view their favorite games in one place. This feature would let each user have a personalized experience, where their saved games are stored securely in Supabase and displayed on their own profile page. By adding this functionality, the app becomes more interactive, more customized, and more useful, giving users a reason to return and explore the games they enjoy most.
Add update and delete functionality for records
Add data visualizations
Improve mobile responsiveness
Add authentication with Supabase Auth
Implement users profiles
Implement search functionality with SQL
Lessons Learned

Building this project taught me how to integrate React with a real-time backend using Supabase and manage asynchronous data flow across multiple components. I learned how to structure and process data using map, filter, and reduce while keeping state updates clean and efficient. I also gained experience handling user input through forms, submitting records to a database, and rendering dynamic content based on user interactions.

Resources
Code.org Datasets
React Documentation
Supabase Documentation
Chart.js Documentation (if used)
Acknowledgments
Code.org for providing datasets
Supabase for database hosting
[Any other acknowledgments]
Author
[Sally and Isaac Watson]

GitHub: @sallymarie-dev
        @youngpk-1
Project Link: https://github.com/sallymarie-dev/game-night.git
Built with React + Supabase 🚀