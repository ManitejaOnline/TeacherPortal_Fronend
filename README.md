Figma: https://www.figma.com/design/IBG2cOGlDsYyOxl6SPJOVD/Untitled?node-id=0-1&m=dev&t=Yj9nrpvZeA1W2P4H-1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TeacherPortal_Frontend README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      max-width: 800px;
      margin: auto;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #333;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <h1>TeacherPortal_Frontend</h1>
  <p>Welcome to the <strong>TeacherPortal_Frontend</strong> project! This repository contains the frontend code for a teacher portal application, designed to manage student information, subjects, and marks.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Login</strong>: Secure login for teachers and students.</li>
    <li><strong>Dashboard</strong>: Personalized dashboards for teachers and students.</li>
    <li><strong>Student Management</strong>: Teachers can add and delete student records.</li>
    <li><strong>Subject Management</strong>: Teachers can manage subjects.</li>
    <li><strong>Marks Management</strong>: Teachers can add and view student marks, while students can view their own marks.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>React.js</strong>: JavaScript library for building user interfaces.</li>
    <li><strong>Material-UI</strong>: React UI framework for building design-consistent components.</li>
    <li><strong>Redux</strong>: State management library for JavaScript applications.</li>
    <li><strong>Axios</strong>: Promise-based HTTP client for making API requests.</li>
    <li><strong>CSS</strong>: For styling the application.</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
<code>src/
│
├── components/       # Shared UI components
├── services/         # API service functions
├── styles/           # CSS files for styling
├── utils/            # Utility functions
├── pages/            # Application pages (Login, Home, etc.)
│
├── App.js            # Main app component
├── index.js          # Application entry point
├── store.js          # Redux store configuration (if applicable)
└── ...               # Other necessary files and directories
</code>
  </pre>

  <h2>Setup and Installation</h2>
  <ol>
    <li><strong>Clone the repository</strong>:
      <pre><code>git clone https://github.com/ManitejaOnline/TeacherPortal_Frontend.git</code></pre>
    </li>
    <li><strong>Navigate to the project directory</strong>:
      <pre><code>cd TeacherPortal_Frontend</code></pre>
    </li>
    <li><strong>Install dependencies</strong>:
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start the development server</strong>:
      <pre><code>npm start</code></pre>
      <p>The application will be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
    </li>
  </ol>

  <h2>Usage</h2>
  <ul>
    <li><strong>Login</strong>: Teachers and students can log in using their credentials.</li>
    <li><strong>Dashboard</strong>: Access personalized information and functionalities based on user roles.</li>
    <li><strong>Student Management</strong>: Teachers can manage student records.</li>
    <li><strong>Subject Management</strong>: Teachers can manage subject information.</li>
    <li><strong>View Marks</strong>: Teachers can input and view marks; students can view their own marks.</li>
  </ul>

  <h2>Contribution</h2>
  <p>Contributions are welcome! Feel free to submit issues or pull requests. Please ensure you follow the code of conduct and contribution guidelines.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License. For more information, please refer to the <a href="LICENSE">LICENSE</a> file.</p>

  <h2>Contact</h2>
  <p>For any questions or inquiries, please contact [Your Name] at [Your Email].</p>
</body>
</html>
