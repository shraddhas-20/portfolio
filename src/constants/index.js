export const myProjects = [
  {
    id: 1,
    title: "CityAQI — AI-Based Air Quality Prediction System",
    description:
      "An AI-powered air quality monitoring system that predicts and classifies AQI levels of Indian cities using real-world pollution data. The project uses machine learning and deep learning techniques to analyze pollutant patterns and categorize air quality levels.",
    subDescription: [
      "Built an end-to-end AQI classification pipeline using the Kaggle Indian Air Quality dataset containing pollution records from multiple Indian cities.",
      "Performed data preprocessing, missing value handling, feature engineering, and city-wise encoding to prepare environmental data for modeling..",
      "Developed and compared Random Forest and TensorFlow/Keras Neural Network models to classify AQI into six categories: Good, Satisfactory, Moderate, Poor, Very Poor, and Severe.",
      "Achieved 82% classification accuracy using machine learning evaluation metrics including precision, recall, and F1-score.",
      "TECH STACK:",
      "Python • Pandas • NumPy • Scikit-learn • TensorFlow • Keras • Random Forest • Data Visualization"
    ],
    href: "https://github.com/shraddhas-20/CityAQI-Classification-Deep-Learning",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Scikit Learn",
        path: "/assets/logos/scikit.svg",
      },
      {
        id: 4,
        name: "Tensorflowz",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 4,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
      {
        id:5,
        name: "Random Forest",
        path: "/assets/logos/random.jpeg"
      }
    ],
  },
  {
    id: 2,
    title: "Stroke Risk Detector — ML-Based Healthcare Predictor",
    description:"An AI-powered healthcare application that predicts the likelihood of stroke risk using patient health parameters. The project focuses on applying machine learning to assist in early risk assessment and support data-driven healthcare decisions.",
      subDescription: [
      "Built a machine learning-based stroke prediction system using Random Forest to assess patient risk based on healthcare attributes.",
      "Performed data preprocessing, feature engineering, and handled class imbalance using SMOTE for improved prediction reliability.",      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Evaluated model performance using precision, recall, and F1-score to ensure effective risk classification.",
      "Designed the application pipeline from data preparation to model prediction.", 
      "TECH STACK:",
      "Python • Pandas • NumPy • Scikit-learn • Random Forest • SMOTE" ],
    href: "https://github.com/shraddhas-20/Stroke-Risk-Detection-Classification-",
    logo: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
       {
        id: 4,
        name: "Tensorflowz",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 5,
        name: "Random Forest",
        path: "/assets/logos/random.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Tarini — Women Safety Application",
    description:
      "A safety-focused web application designed to provide quick emergency assistance and location-based support for women. The platform combines web development, APIs, and machine learning to create a practical real-world solution.",   
      subDescription: [
      "Developed a full-stack safety application using Flask as the backend framework.",
      "Integrated Twilio API for emergency communication and alert notifications.",
      "Used Google Maps API for location-based services and tracking support.",
      "Implemented a machine learning-based decision support system using Random Forest.",
      "Designed the application architecture with future integration possibilities for IoT-based safety devices.",
      "Focused on creating a simple and accessible interface for emergency situations.",
      "TECH SRACK:",
      "Python • Flask • Random Forest • Twilio API • Google Maps API • HTML/CSS/JavaScript"
    ],
    href: "https://tarini.onrender.com/",
    logo: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/flask.svg",
      },
      {
        id: 3,
        name: "Twilio API",
        path: "/assets/logos/twilio.svg",
      },
      {
        id: 4,
        name: "Google Maps API",
        path: "/assets/logos/google.svg",
      },
      {
        id: 5,
        name:"Random Forest",
        path: "/assets/logos/random.jpeg",
      },
      {
        id: 6,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 7,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      
      {
        id: 5,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 5,
        name: "React.Js",
        path: "/assets/logos/react.svg",
      },
      

    ],
  },
  {
    id: 4,
    title: "AR Visualizer — Real-Time Hand Tracking Augmented Reality App",
    description:
      "A computer vision-based AR application that allows users to interact with a virtual canvas using hand gestures. The project explores real-time vision processing and human-computer interaction.",
    subDescription: [
      "Developed an interactive AR drawing application using MediaPipe and OpenCV.",
      "Implemented real-time hand tracking to detect finger movements and gestures.",
      "Processed live camera input to create gesture-based controls.",
      "Built a virtual rendering system that maps hand movements into digital interactions.",
      "Explored computer vision techniques for creating natural and intuitive user experiences.",
    ],
    href: "https://ar-visualizer-nine.vercel.app/",
    logo: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "MediaPipe",
        path: "/assets/logos/mediapipe.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/assets/logos/open.svg",
      },
      {
        id: 4,
        name: "Augmented Reality",
        path: "/assets/logos/ar.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Credit Card Fraud Detector — Machine Learning & Deep Learning System",
    description:
    "A fraud detection system designed to identify suspicious credit card transactions using machine learning and deep learning techniques. The project explores how AI can help financial systems detect abnormal patterns and reduce fraudulent activities" ,  
    subDescription: [
      "Developed a fraud detection system using Machine Learning and Deep Learning techniques to identify suspicious financial transactions.",
      "Applied preprocessing, feature engineering, and SMOTE-based imbalance handling on transaction data.",
      "Trained and optimized a Random Forest classifier using evaluation metrics like precision, recall, and F1-score..",
      "Built a TensorFlow/Keras Deep Neural Network and compared its performance against traditional ML approaches",
      "TECH STACK:",
      "Python • Pandas • Scikit-learn • TensorFlow • Keras • Random Forest • Neural Networks"
    ],
    href: "https://github.com/shraddhas-20/CreditCard-Fraud-Detection-Deep-learning",
    logo: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Scikit-learn",
        path: "/assets/logos/scikit.svg",
      },
      {
        id: 4,
        name: "Tensorflow",
        path: "/assets/logos/tensorflow.svg",
      },
       {
        id: 4,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
       {
        id: 4,
        name: "Random Forest",
        path: "/assets/logos/random.jpeg",
      },
    ],
  },
  {
    id: 6,
    title: "Food Saver — Food Waste Management Platform",
    description:
    "An ML-powered food rescue application designed to reduce food wastage by connecting restaurants with nearby organizations/individuals who can collect surplus food. The platform uses location-based services to enable faster and more efficient food redistribution.",
    subDescription: [
      "Developed an intelligent food rescue platform that identifies nearby restaurants and potential food collection points using Google Maps API.",
      "Implemented location-based matching to connect surplus food providers with nearby receivers for quick pickup coordination.",
      "Built an alert system to notify nearby restaurants/organizations about available surplus food.",
      "Applied machine learning concepts to enhance decision-making and optimize food redistribution workflows.",
      "Built a responsive interface focused on accessibility and ease of use.",
      "TECH STACK:",
      "Python • Machine Learning • Google Maps API • Flask • APIs • Data Processing "
    ],
    href: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/flask.svg",
      },
      {
        id: 3,
        name: "Google Maps API",
        path: "/assets/logos/google.svg",
      },
         {
        id: 4,
        name: "Random Forest",
        path: "/assets/logos/random.jpeg",
      },
      {
        id: 5,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 6,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
        {
        id: 7,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
        {
        id: 8,
        name: "React.Js",
        path: "/assets/logos/react.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shraddha-singh-422a0032b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/shraddhas-20",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Data Science / AIML Intern",
    job: "Techiguru",
    date: "July 2026-Present",
    contents: [
     "✅Building machine learning solutions by applying data preprocessing, feature engineering, and predictive modeling techniques.",
     "✅Worked with Python, Pandas, NumPy, and Scikit-learn to analyze datasets and extract meaningful insights.",
     "✅Exploring deep learning concepts and AI workflows while gaining practical experience with industry-standard tools."
    ],
  },
  {
    title: "Machine Learning Intern",
    job: "SRDT Pvt. Ltd.",
    date: "June 2026",
    contents: [
      "✅ Built and delivered 3+ end-to-end AI/ML projects",
      "✅ Worked on real-world datasets, performing data cleaning, preprocessing, feature engineering, and exploratory data analysis." ,
      "✅ Developed and evaluated machine learning models for classification and prediction using Scikit-learn and TensorFlow.",
      "✅ Built deep learning solutions using Artificial Neural Networks (ANNs) and Convolutional Neural Networks (CNNs).",
      "✅ Optimized model performance through hyperparameter tuning and evaluation using standard ML metrics.",
    ],
  },
  {
    title: "President",
    job: "Computer Society Of India X D'CODERS - SRMCEM",
    date: "August 2025-Present",
    contents: [
      "✅ Led a 20+ member team to organize hackathons, technical workshops, and webinars throughout the academic year.",     
      "✅ Successfully conducted events engaging 300+ student participants across multiple technical domains.",
      "✅ Planned outreach campaigns that generated 200+ registrations for coding contests and technical events.",
      "✅ Designed 15+ promotional posters and prepared detailed event reports and documentation.",
      "✅ Coordinated with industry partners and secured 5+ sponsorships to support chapter initiatives."   
     ],
  },
  {
    title: "Python Developer Intern",
    job: "SRDT Pvt. Ltd.",
    date: "September 2025",
    contents: [
      "✅ Developed Python-based applications using Flask, integrating backend logic with user-friendly interfaces.",      
      "✅ Built data-driven applications utilizing Pandas and Scikit-learn for analysis and predictive modeling.",
      "✅ Collaborated using GitLab for version control, code reviews, and project management.",
      
    ],
  },
   {
    title: "Technical Content Writer",
    job: "GeeksforGeeks - SRMCEM Chapter",
    date: "September 2024-May 2025",
    contents: [
      "✅ Authored technical articles and promotional content for 5+ coding events and technical workshops.",
      "✅ Created event announcements and promotional campaigns that increased student participation.",
      "✅ Worked closely with organizing teams to ensure technical accuracy and consistent communication.",
      "✅ Strengthened technical writing and communication skills through educational content creation."
    ],
  },
   {
    title: "Fundraising Intern",
    job: "NayePankh Foundation",
    date: "April 2024-May 2024",
    contents: [
      "✅ Connected with 50+ potential donors through outreach campaigns, social media initiatives, and fundraising events.",   
      "✅ Promoted the foundation's mission and social impact to increase donor awareness and community engagement.",  
      "✅ Strengthened communication, public speaking, and stakeholder engagement skills while supporting meaningful social initiatives.",
    ],
  },

];

