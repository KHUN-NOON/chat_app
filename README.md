# Chat App 
### Project Overview
A real-time chat application using React for the front end, Node.js for the backend, and a relational database (e.g., PostgreSQL) to store user information and chat messages. Additionally, the application requires scraping functionality to retrieve data from external sources.
### Project Approach
**FrontEnd - ReactJS**
- **Framework Choice**: Choosing ReactJS for frontend due to its component based architecture, which promotes reusability and maintainability of code.
- **State Management**: Utilize React's built-in state management capabilities along with libraries like Redux for managing complex application states.
- **CSS Framework**: Tailwind CSS follows a utility-first approach, providing a comprehensive set of utility classes that allow us to style components rapidly and consistently across our application.

**BackEnd - ExpressJS**
- **Framework Choice**: Express.js was chosen for its minimalist and flexible approach to building web applications and APIs, allowing us to design our backend with simplicity and scalability.
- **JWT Authentication**: Implement token-based authentication using JWT to authenticate and authorize users accessing our API endpoints.
- **RESTful API Design**: Follows RESTful principles, ensuring a standardized and predictable interface for interacting with the server, making it easier to integrate with frontend.
- **WebSocket**: Socket.IO facilitates real-time, event-based communication between the client and server, enabling instant updates and notifications in our application.
- **Database**: MySQL provides a reliable and robust relational database solution, allowing us to store structured data in tables with defined relationships and constraints. Along with Sequelize ORM to make the querying operations less tidious.

**Development Environment**
- **NPM Scripts**: Project dependencies and scripts are managed using NPM (Node Package Manager), facilitating the development workflow and enabling seamless integration with other tools and libraries.
### Features
- Real-time chat messages
- Data extraction from external sources in chat messages
### Getting Started
To run this project locally, follow these steps:
1. Clone the repository
2. Install dependencies on both `frontend` and `backend` folders
```
cd frontend
npm i

cd backend
npm i
```
3. Go back to the `backend` directory and copy `.env.example` to `.env` and modify all credientials specifice to your preferences
4. After that create database and run the below `sequelize` command to create tables and data seeding
```
npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all
```
5. To start the ExpressJS server go to the `backend` directory and run this command
```
npm run dev-start
```
6. To run the React project got to the `frontend` directory and run this command
```
npm run dev
```


