export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other'
  completedDate: string
}

export const projects: Project[] = [
  {
    id: 'interactive-learning-web-application',
    title: 'Interactive Learning Web App',
    shortDescription: 'Web based application is an attempt to bridge the gap in communication by designing a convenient way to interact in a live lecture amongst a large classroom.',
    fullDescription: `
      Built an interactive learning tool as a web application geared towards professors to help
      engage and interact with their students during and outside of class. The problem that we wanted
      to solve was that it is difficult for students to communicate with professors and professors to 
      students in large classrooms. Our solution included many features such as chat rooms classified
      as 'lectures' led by professors, poll creation to gauge student involvement during class, raise
      hand feature for students to ask questions, and others!

      Key features include:
      • Login Page: Login page connected to the backend for approval of login
      • Registration Page: Registration page connected to backend for approval of ISU student/staff registration
      • Class/Lectures: For each class, there may be different chats for lectures/tests where the student can chat with students/TA's/professors anonymously or not
      • Raise Hand Feature: Students can raise hand and professor will be able to see pending question
      • Poll Feature: Professors can create polls for to gauge student learning/involvement
      • View History: Students/Professors can view and acess past lectures 24/7
      • Database: Stores users and data on backend database using MySQL
      • Application Security: Bcrypt hashing, permission checks with use of roles and join codes
      • Network Security: Private network inside ISU's network, SSl certificate ensuring encrypted connections over HTTPS and WSS
      • Testing: Frontend E2E testing using Cypress, Backend unit tests using Jest and integration tests using Postman
    `,
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'CI/CD', 'Docker'],
    images: [
      '/images/sdmay23-40-feature-page.png',
      '/images/sdmay23-40-course-page.png',
      '/images/sdmay23-40-lecture-page.png',
      '/images/sdmay23-40-lecture-poll-page.png',
      '/images/sdmay23-40-poll-page.png',
      '/images/sdmay23-40-live-demo.png'
    ],
    githubUrl: 'https://git.ece.iastate.edu/sd/sdmay23-40',
    liveUrl: 'https://www.google.com/',
    category: 'web',
    completedDate: '2023-05'
  },
  {
    id: 'mars-rover',
    title: 'Mars Rover Navigation System',
    shortDescription: 'Automated roomba to navigate a field using sensors and avoiding obstacles to reach a final destination',
    fullDescription: `
      Our final goal was to develop the functionality of an automated Robot to navigate various terrain through use of a user-friendly GUI that recieves sensor data (sonar, infrared, etc) and sends commands to the Robot through bluetooth communication.

      We opted to use a GUI written for MatLab to control our Robot.  The general control strategy for our
      system was to send single characters from the desktop environment via a Bluetooth module on the iRobot
      Create platform.  We would then block in our MatLab environment, listening for a handshake from the robot,
      confirming the completion of its action, and any necessary environmental stimuli it may have encountered.
      We would plot all sonar and infra-red information on a polar graph in our GUI. And then with our handcode move/rotate the roomba
      based on the information gathered from the sensors such as using the infrared sensor to detect objects widths, boundaries, cliffs, etc.
      And then we use the ping sensor to detect the distance from us to the object(s), then traverse a distance, 
      then rescan the area and repeat until the destination zone is detected.

      • Used device and processor : iRobot Roomba, Tiva_TM4C123GH6PM
      • Using components : Wifi Module, Collision detect sensor, Infrared sensor, Ping Sensor
      • Demo Video : The Roomba is automated by the commands over Wifi by Putty, using the values grabbed by the sensors, 
      • Object detecting : Detecting objects is executed by two sensors which are Infrared sensor and Ping sensor. 
          Infrared sensor is used to detect the objects and Ping sensor is used to measure the distance between robot and object.
      • Showing the result on GUI function : From the result having number of detected objects and distance, show the locations where objects are at by GUI function
    `,
    technologies: ['Embedded C', 'MATLAB', 'Sensors', 'Serial Communication', 'Putty'],
    images: [
      '/images/cpre288-iowastate_2.jpg',
      '/images/cpre288-iowastate_1.jpg',
      '/images/cpre288-iowastate_3.jpg',
      '/images/cpre288-iowastate_4.jpg',
      '/images/cpre288-iowastate_4.gif',
      '/images/cpre288-iowastate_5.jpg'
    ],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://google.com',
    category: 'other',
    completedDate: '2022-08'
  },
  {
    id: 'todo-list-application',
    title: 'TODOLIST Application',
    shortDescription: 'Todo list application built with JavaScript',
    fullDescription: `
      This is a todo list application made using Javascript. It has several features
      including user authentication, todo lists, task filtering, and task 
      editing/completion/deletion. It allows users to create an account, manage/create
      their own todo lists and add tasks with priorities and due dates.

      Features include:
      • User Authentication: Secure login and registration
      • Multiple Todo Lists: Create and manage separate todo lists 
      • Task Management: Add, edit, complete, and delete tasks
      • Filtering: Filter tasks y status, priority, and search terms
      • Prioritization: Set low/medium/high priority on tasks
      • Due Dates: Set and track task deadlines
      • Search Bar: Search bar for better user experience
      • Light/Dark Theme: Toggle between light and dark themes for better user experience
    `,
    technologies: ['Javascript', 'HTML5', 'CSS', 'Local Storage'],
    images: [
      '/images/main-page.png',
      '/images/login-page.png',
      '/images/registration-page.png',
      '/images/dark-theme.png',
      '/images/new-todo-list.png',
      '/images/filter.png'
    ],
    githubUrl: 'https://github.com/glin19/todo-list-application',
    liveUrl: 'https://todo-list-application-lg.netlify.app/',
    category: 'web',
    completedDate: '2025-06'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription: 'Todo list application built with JavaScript',
    fullDescription: `
      This is a todo list application made using Javascript. It has several features
      including user authentication, todo lists, task filtering, and task 
      editing/completion/deletion. It allows users to create an account, manage/create
      their own todo lists and add tasks with priorities and due dates.

      Features include:
      • User Authentication: Secure login and registration
      • Multiple Todo Lists: Create and manage separate todo lists 
      • Task Management: Add, edit, complete, and delete tasks
      • Filtering: Filter tasks y status, priority, and search terms
      • Prioritization: Set low/medium/high priority on tasks
      • Due Dates: Set and track task deadlines
      • Search Bar: Search bar for better user experience
      • Light/Dark Theme: Toggle between light and dark themes for better user experience
    `,
    technologies: ['Typescript', 'React', 'Tailwind CSS', 'Node.js'],
    images: [
      '/images/portfolio-hero.png',
      '/images/portfolio-projects.png',
      '/images/portfolio-contact-me.png',
      '/images/portfolio-contact-submit.png'
    ],
    githubUrl: 'https://github.com/glin19/todo-list-application',
    liveUrl: 'https://google.com/',
    category: 'web',
    completedDate: '2025-06'
  }
]

// Helper functions
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}