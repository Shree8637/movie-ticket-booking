import React from 'react';
import './AboutUs.css';
import NavBar from './NavBar';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <NavBar />
      <h1>About Us</h1>
      <div className="content-box">
        <h2><b><u>Movie Ticket Booking Website Project</u></b></h2>
        <p>
          Our mission is to make movie ticket booking as convenient as possible. Whether you're looking to watch the latest blockbuster or an indie film, we've got you covered. Thank you for choosing us for your movie ticket booking needs.
        </p>
      </div>
      <div className="content-box">
      <p><b>Project Overview:</b><br />
The goal of this project is to develop a fully functional movie ticket booking website, similar to popular platforms like BookMyShow. The website will allow users to browse movies, select shows, book tickets, and manage their bookings. The project will be developed using React for the front end and Node.js/Express for the back end, ensuring a responsive and user-friendly interface.<br /><br /><br />

<b>Key Features:</b><br />
1. User Authentication:<br />
- Sign up and login functionality.<br />
- Secure password management.<br /><br />

2. Movie Listings:<br />
- Display currently showing movies with details like title, description, poster, and showtimes.<br />
- Include upcoming movies in a separate section.<br /><br />

3. Show Selection:<br />
- List of available theaters and showtimes for each movie.<br />
- Detailed information for each show, including seating availability.<br /><br />

4. Booking System:<br />
- Select seats and confirm booking.<br />
- Payment gateway integration for processing payments.<br /><br />

5. User Dashboard:<br />
- View and manage current and past bookings.<br />
- Update personal information.<br /><br /><br />

<b>Technologies Used:</b><br />
- Front End: React, CSS, HTML<br />
- Back End: Node.js, Express<br />
- Database: MongoDB (or any other preferred database)<br />
- Additional Tools: Axios for API requests, React Router for navigation<br /><br /><br />

<b>Roles and Responsibilities:</b><br />
1. Project Manager:<br />
- Oversee the project timeline and task assignments.<br />
- Ensure communication and collaboration among team members.<br />
- Handle deployment and final testing.<br /><br />

2. Front-End Developer:<br />
- Design and implement user interface components using React.<br />
- Create responsive and visually appealing layouts.<br />
- Handle client-side routing and state management.<br /><br />

3. Back-End Developer:<br />
- Develop server-side logic using Node.js and Express.<br />
- Design and manage the database schema and queries.<br />
- Implement API endpoints for communication with the front end.<br /><br />

4. Full-Stack Developer:<br />
- Assist in both front-end and back-end development.<br />
- Ensure seamless integration between the client and server sides.<br />
- Handle additional tasks such as user authentication and payment processing.<br /><br /><br />

<b>Development Stages:</b><br />
1. Planning:<br />
- Define project scope and requirements.<br />
- Create wireframes and mockups for the website layout.<br />
- Set up a project timeline and assign tasks.<br /><br />

2. Design:<br />
- Design the UI/UX for the website.<br />
- Create a style guide and design components.<br /><br />

3. Implementation:<br />
- Set up the development environment and repositories.<br />
- Develop front-end and back-end components in parallel.<br />
- Integrate third-party services (e.g., payment gateways).<br /><br />

4. Testing:<br />
- Perform unit and integration testing.<br />
- Conduct user acceptance testing to gather feedback.<br />
- Fix bugs and make necessary improvements.<br /><br />

5. Deployment:<br />
- Deploy the application to a hosting service (e.g., Heroku, AWS).<br />
- Set up a production database.<br />
- Monitor and maintain the live application.<br /><br /><br />

<b>Conclusion:</b><br />
Creating a movie ticket booking website as a group project is a comprehensive exercise that involves multiple aspects of web development. It provides an opportunity to collaborate, learn, and apply various technologies and methodologies. By distributing tasks according to each team member's strengths, the group can efficiently build a robust and user-friendly platform.<br />
</p>

      </div>
    </div>
  );
};

export default AboutUs;
