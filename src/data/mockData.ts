import { Project, Certificate, Achievement, Skill, ContactInfo } from '../types';

export const projectsData: Project[] = [
  {
    id: '2',
    title: 'IPL Ticket Booking System Website',
    description: 'IPL Ticket Booking System Website with login for user and admin role specific tasks',
    imageUrl: '/pictures/IPL.png',
    technologies: ['React', 'Vite', 'Docker', 'MySQL Workbench','Postman'],
    githubUrls: [
      {
        label: 'Frontend',
        url: 'https://github.com/Akshaya09072004/IPL-TICKET-BOOKING-FRONTEND'
      },
      {
        label: 'Backend',
        url: 'https://github.com/Akshaya09072004/IPL-TICKET-BOOKING-Backend'
      }
    ]
  },
  {
    id: '1',
    title: 'Student Grievance Management System',
    description: 'Developed a web platform allowing students to submit grievances online, with an option for group complaints.',
    imageUrl: '/pictures/grievance.png',
    technologies: ['HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Akshaya09072004/Online-Grievance-Redressal'
  },
  {
    id: '5',
    title: 'Movie Recommendation System',
    description: 'Developed a movie review platform featuring user and admin logins with respective operation specifications.',
    imageUrl: '/pictures/movierecommendation.png',
    technologies: ['HTML/CSS', 'JavaScript','Python', 'Machine Learning'],
    githubUrl: 'https://github.com/Akshaya09072004/MOVIE-RECOMMENDATION-ML'
  },
  {
    id: '3',
    title: 'AI-Based Industrial Machine Downtime Prediction System',
    description: 'Designed a predictive maintenance web system using IoT sensors to forecast industrial machine downtimes.',
    imageUrl: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'Machine Learning', 'IoT', 'Data Science'],
    githubUrl: 'https://github.com/username/machine-prediction'
  },
  {
    id: '4',
    title: 'Online Blood Bank System',
    description: 'A web application that allows hospitals and donation centers to access and manage blood stocks efficiently and transparently. The system also provides emergency notifications, data insights',
    imageUrl: '/pictures/bloodbank.png',
    technologies: ['HTML/CSS', 'JS'],
    githubUrl: 'https://github.com/Akshaya09072004/Blood-Bank-System'
  },
  {
    id: '6',
    title: 'To-Do List Application',
    description: 'A simple web-based to-do list application that allows users to add, edit, and delete tasks. It uses local storage to save tasks.',
    imageUrl: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['HTML/CSS', 'JS'],
    githubUrl: 'https://github.com/Akshaya09072004/Blood-Bank-System'
  }
];

export const certificatesData: Certificate[] = [
  {
    id: '0',
    title: 'Presidio Launchpad Workshop',
    issuer: 'Presidio and Meenakshi Sundararajan Engineering College',
    date: '2025-03-24',
    imageUrl: '/pictures/presidio.png',
    verificationUrl: '/pictures/presidio launchpad workshop certificate.jpeg'
  },
  {
    id: '9',
    title: 'IT Security and Digital Forensics',
    issuer: 'YesPanchi Tech Services Pvt Ltd and Meenakshi Sundararajan Engineering College',
    date: '2025-05-19',
    imageUrl: '/pictures/yespanchi.png',
    verificationUrl: '/pictures/yespanchicertificate.jpeg'
  },
  {
    id: '1',
    title: 'Python for Data Science and Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: '2024-08-24',
    imageUrl: '/pictures/udemy.png',
    verificationUrl: '/pictures/python.pdf'
  },
  {
    id: '10',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2025-04-23',
    imageUrl: '/pictures/udemy.png',
    verificationUrl: '/pictures/udemyfullstack.pdf'
  },
  {
    id: '2',
    title: ' IT Integration with Generative AI',
    issuer: 'Infosys',
    date: '2024-04-15',
    imageUrl: '/pictures/infosys.png',
    verificationUrl: '/pictures/infosyscertificate.pdf'
  },
  {
    id: '3',
    title: 'Programming in C',
    issuer: 'NPTEL',
    date: '2024-04-15',
    imageUrl: '/pictures/nptel.png',
    verificationUrl: '/pictures/NPTEL C.pdf'
  },
  {
    id: '4',
    title: 'Intro To mongoDB',
    issuer: 'MongoDB',
    date: '2024-06-08',
    imageUrl: '/pictures/mongodb.png',
    verificationUrl: '/pictures/mongodb1.pdf'
  },
  {
    id: '6',
    title: 'SQL (Intermediate)',
    issuer: 'Hacker Rank',
    date: '2025-05-03',
    imageUrl: '/pictures/hackerrank.png',
    verificationUrl: '/pictures/sql_intermediate certificate.pdf'
  },
  {
    id: '5',
    title: 'CCNA : Intro to Networks',
    issuer: 'Cisco',
    date: '2024-11-21',
    imageUrl: '/pictures/cisco.png',
    verificationUrl: '/pictures/CCNA.pdf'
  },
  {
    id: '7',
    title: 'Python (Basic)',
    issuer: 'Hacker Rank',
    date: '2024-11-21',
    imageUrl: '/pictures/hackerrank.png',
    verificationUrl: '/pictures/python_basic certificate.pdf'
  },
  {
    id: '8',
    title: 'Java (Basic)',
    issuer: 'Hacker Rank',
    date: '2024-11-21',
    imageUrl: '/pictures/hackerrank.png',
    verificationUrl: '/pictures/java_basic certificate.pdf'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: '1',
    title: 'First Prize in Hackintym 25',
    date: '2023-09-15',
    description: 'Our team Mixed Signals, clinched 1st place at Hackintym 25, a 30-hour hackathon hosted by Meenakshi Sundararajan Engineering College with a cash prize of ₹7,500.',
    imageUrl: '/pictures/hackintym.jpg'
  },
  {
    id: '3',
    title: 'First Prize in Group Discussion',
    date: '2024-09-17',
    description: 'Secured 1st Prize in Group Discussion among more than 100 participants.',
    imageUrl: '/pictures/GD Winner Certificate.jpeg'
  },
  {
    id: '2',
    title: 'First Prize in AI+IOT Innovative Idea Presentation',
    date: '2024-06-21',
    description: 'Secured first place in AI+IOT innovative idea presentation competition.',

  },
  {
    id: '4',
    title: 'E³ Third Prize for Project Presentation',
    date: '2025-03-10',
    description: 'Received third prize in E³ mini project presentation competition and the project was "Online Student Grievance Redressal"',
    imageUrl: '/pictures/E cube 3rd prize 5th sem certificate.jpg'
  },
  {
    id: '6',
    title: 'E³ Third Prize for Paper Presentation',
    date: '2024-03-15',
    description: 'Received third prize in E³ paper presentation competition and my topic was on "Chatbots".',
    imageUrl: '/pictures/E cube 3rd prize third sem certificate.jpg'
  },
  {
    id: '5',
    title: 'School Academic Excellence Award',
    date: '2023-03-15',
    description: 'Achieved first rank in 10th standard at Shri B S Mootha Girls Senior Secondary School by securing 586/600 ,i.e.,97.67% .',
    imageUrl: '/pictures/10th topper.png'
  },
  {
    id: '7',
    title: 'Full Attendance Award - Semester 3',
    date: '2023-03-15',
    description: 'This achievement shows my punctuality and commitment towards my studies.',
    imageUrl: '/pictures/attendance.png'
  },
  {
    id: '8',
    title: 'Incepta Hackathon',
    date: '2025-03-11',
    description: 'This shows my team collaboration and active participation in technical events',
    imageUrl: '/pictures/incepta.jpeg'
  }

];

export const skillsData: Skill[] = [
  { id: '1', name: 'Python', category: 'frontend', proficiency: 5, icon: 'Code2' },
  { id: '2', name: 'JavaScript', category: 'frontend', proficiency: 4, icon: 'FileCode' },
  { id: '3', name: 'HTML/CSS', category: 'frontend', proficiency: 4, icon: 'FileCode' },
  { id: '4', name: 'Java', category: 'backend', proficiency: 4, icon: 'FileCode' },
  { id: '5', name: 'Flutter', category: 'frontend', proficiency: 4, icon: 'Smartphone' },
  { id: '6', name: 'Firebase', category: 'backend', proficiency: 4, icon: 'Database' },
  { id: '7', name: 'SQL', category: 'backend', proficiency: 4, icon: 'Database' },
  { id: '8', name: 'Power BI', category: 'tools', proficiency: 4, icon: 'BarChart' },
  { id: '9', name: 'Tableau', category: 'tools', proficiency: 4, icon: 'PieChart' },
  { id: '10', name: 'Excel', category: 'tools', proficiency: 4, icon: 'Table' },
  { id: '11', name: 'Communication', category: 'soft', proficiency: 5, icon: 'MessageSquare' },
  { id: '12', name: 'Leadership', category: 'soft', proficiency: 4, icon: 'Users' },
  { id: '13', name: 'Time Management', category: 'soft', proficiency: 4, icon: 'Clock' },
  { id: '14', name: 'Data Visualization', category: 'tools', proficiency: 4, icon: 'LineChart' },
  { id: '15', name: 'Database Design', category: 'backend', proficiency: 4, icon: 'Database' }
];

export const aboutMeData = {
  name: 'Akshaya K',
  title: 'Full Stack Developer | Data Scientist',
  bio: `Dedicated and enthusiastic Artificial Intelligence and Data Science student with a strong academic record. Seeking an opportunity to apply classroom knowledge and develop practical skills. Eager to contribute to a dynamic team environment.

  Currently pursuing B.Tech(hons) in Artificial Intelligence & Data Science at Meenakshi Sundarajan Engineering College, Chennai, maintaining a CGPA of 9.1.

  I have experience in both front-end and back-end development, with a particular focus on Python, Java, and web technologies. My recent internships have given me practical experience in data science and web development.`,
  location: 'Chennai, India',
  avatarUrl: '/pictures/my pic.png'
};

export const contactData: ContactInfo = {
  email: 'akshayashetty09072004@gmail.com',
  phone: '8610753205',
  linkedin: 'https://www.linkedin.com/in/akshaya-k-856b112a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  github: 'https://github.com/Akshaya09072004'
};