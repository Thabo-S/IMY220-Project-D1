export const users = [
    {
        id: 1,
        name: "John Developer",
        email: "john@example.com",
        avatar: "/assets/images/avatars/john.png",
        bio: "Full-stack developer with 5 years of experience",
        birthday: "1990-05-15",
        gender: "Male",
        work: "Software Engineer at TechCorp",
        phone: "+1-555-0123",
        projectsCount: 12,
        followers: 245,
        following: 87
    },
    {
        id: 2,
        name: "Sarah Coder",
        email: "sarah@example.com",
        avatar: "/assets/images/avatars/sarah.png",
        bio: "Frontend specialist and UI enthusiast",
        birthday: "1992-11-22",
        gender: "Female",
        work: "UI/UX Designer at DesignHub",
        phone: "+1-555-0124",
        projectsCount: 8,
        followers: 178,
        following: 94
    },
    {
        id: 3,
        name: "Mike Programmer",
        email: "mike@example.com",
        avatar: "/assets/images/avatars/mike.png",
        bio: "Backend developer and database expert",
        birthday: "1988-03-08",
        gender: "Male",
        work: "Lead Developer at DataSystems",
        phone: "+1-555-0125",
        projectsCount: 15,
        followers: 312,
        following: 102
    }
];

export const projects = [
    {
        id: 1,
        name: "CloudSync App",
        description: "A lightweight application designed for synchronous files across multiple devices with real-time analytics, built using React and Node.js. Features include various encryption and a user-friendly interface.",
        hashtag: "#AttractorsMinorECloud",
        lastActivity: "User checked in CloudSync App at 2025/06/07 10:00 AMST",
        image: "/assets/images/projects/cloudsync.png",
        creator: users[0],
        createdAt: "2025/06/01",
        downloads: 100,
        isPublic: true,
        files: [
            { id: 1, name: "main.js", created: "01/08/2025 10:00" },
            { id: 2, name: "styles.css", created: "01/08/2025 10:00" },
            { id: 3, name: "index.html", created: "01/08/2025 10:00" }
        ],
        messages: [
            { id: 1, user: users[0], text: "Initial commit", time: "2025/06/01 09:30" },
            { id: 2, user: users[1], text: "Fixed styling issues", time: "2025/06/02 14:22" },
            { id: 3, user: users[0], text: "Added authentication", time: "2025/06/03 11:45" }
        ]
    },
    {
        id: 2,
        name: "DataVisualizer",
        description: "Interactive data visualization tool for complex datasets with multiple chart types and real-time updates.",
        hashtag: "#DataScience",
        lastActivity: "User updated DataVisualizer at 2025/06/06 02:30 PMST",
        image: "/assets/images/projects/datavis.png",
        creator: users[1],
        createdAt: "2025/05/15",
        downloads: 75,
        isPublic: true,
        files: [
            { id: 4, name: "charts.js", created: "01/08/2025 10:00" },
            { id: 5, name: "dataProcessor.js", created: "01/08/2025 10:00" }
        ],
        messages: [
            { id: 4, user: users[1], text: "Started project", time: "2025/05/15 10:15" },
            { id: 5, user: users[2], text: "Added bar chart component", time: "2025/05/16 16:40" }
        ]
    },
    {
        id: 3,
        name: "AI Assistant",
        description: "AI-powered coding assistant with natural language processing and code suggestion capabilities.",
        hashtag: "#MachineLearning",
        lastActivity: "User trained AI model at 2025/07/06 09:15 AMST",
        image: "/assets/images/projects/ai-assistant.png",
        creator: users[2],
        createdAt: "2025/07/06",
        downloads: 210,
        isPublic: false,
        files: [
            { id: 6, name: "model.py", created: "01/08/2025 10:00" },
            { id: 7, name: "training_data.json", created: "01/08/2025 10:00" }
        ],
        messages: [
            { id: 6, user: users[2], text: "Initialized AI project", time: "2025/07/06 09:00" },
            { id: 7, user: users[0], text: "Integrated with code editor", time: "2025/07/07 13:20" }
        ]
    },
    {
        id: 4,
        name: "CodeCollaborator",
        description: "Real-time collaborative code editor for team programming with syntax highlighting.",
        hashtag: "#Collaboration",
        lastActivity: "User fixed sync issue at 2025/07/16 04:45 PMST",
        image: "/assets/images/projects/collaborator.png",
        creator: users[0],
        createdAt: "2025/07/16",
        downloads: 153,
        isPublic: true,
        files: [
            { id: 8, name: "editor.js", created: "01/08/2025 10:00" },
            { id: 9, name: "websocket.js", created: "01/08/2025 10:00" }
        ],
        messages: [
            { id: 8, user: users[0], text: "Set up base editor", time: "2025/07/16 10:30" },
            { id: 9, user: users[1], text: "Added collaboration features", time: "2025/07/17 11:15" }
        ]
    }
];

export const localActivity = [
    {
        id: 1,
        project: projects[0],
        time: "2025/06/07 10:00 AMST",
        type: "checkin",
        user: users[0]
    },
    {
        id: 2,
        project: projects[1],
        time: "2025/06/06 02:30 PMST",
        type: "update",
        user: users[1]
    },
    {
        id: 3,
        project: projects[2],
        time: "2025/07/06 09:15 AMST",
        type: "training",
        user: users[2]
    }
];

export const globalActivity = [
    {
        id: 1,
        project: projects[3],
        creator: users[0],
        createdAt: "2025/07/16",
        downloads: 153
    },
    {
        id: 2,
        project: projects[2],
        creator: users[2],
        createdAt: "2025/07/06",
        downloads: 210
    },
    {
        id: 3,
        project: projects[1],
        creator: users[1],
        createdAt: "2025/05/15",
        downloads: 75
    }
];

export const currentUser = users[0];

export const friends = [
    users[1],
    users[2],
    {
        id: 4,
        name: "Alex Tech",
        avatar: "/assets/images/avatars/alex.png",
        bio: "Mobile developer and open source contributor",
        projectsCount: 9,
        followers: 127
    },
    {
        id: 5,
        name: "Taylor Code",
        avatar: "/assets/images/avatars/taylor.png",
        bio: "DevOps engineer and cloud architect",
        projectsCount: 6,
        followers: 89
    }
];

export const userProjects = [

    {
        id: 5,
        name: "SecurityScanner",
        description: "Automated security vulnerability scanner for code repositories.",
        lastActivity: "User added new tests at 2025/06/10 11:30 AMST",
        image: "/assets/images/projects/security.png",
        projects: [
            projects[0],
            projects[3]
        ]
    }
];