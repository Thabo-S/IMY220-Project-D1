// 56_Seripe_D1
//working
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static('frontend/public'));
app.use(express.json());
app.get('/api',(req, res) => {
    res.json({message: "Backend stuff for later"});
});

// Dummy user data (simulating a database)
const dummyUsers = [
    {
        id: 1,
        name: "John Developer",
        email: "john@example.com",
        password: "password123",
        avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
        bio: "Full-stack developer with 5 years of experience"
    },
    {
        id: 2,
        name: "Sarah Coder",
        email: "sarah@example.com",
        password: "password123",
        avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn",
        bio: "Frontend specialist and UI enthusiast"
    }
];

// Authentication endpoints
app.post('/api/auth/login', (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Input validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user in dummy data
        const user = dummyUsers.find(u => u.email === email && u.password === password);
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Create a simple token
        const token = `dummy-token-${user.id}-${Date.now()}`;
        
        // Return user data without password
        const { password: _, ...userWithoutPassword } = user;
        
        res.json({
            success: true,
            message: "Login successful",
            token: token,
            user: userWithoutPassword
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

app.post('/api/auth/signup', (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Input validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required"
            });
        }

        // Check if user already exists
        const existingUser = dummyUsers.find(u => u.email === email);
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // Create new user
        const newUser = {
            id: dummyUsers.length + 1,
            name,
            email,
            password,
            avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`,
            bio: "New user",
            projectsCount: 0,
            followers: 0,
            following: 0
        };

        // Add to dummy data
        dummyUsers.push(newUser);

        // Create token
        const token = `dummy-token-${newUser.id}-${Date.now()}`;
        
        // Return user data without password
        const { password: _, ...userWithoutPassword } = newUser;
        
        res.status(201).json({
            success: true,
            message: "User created successfully",
            token: token,
            user: userWithoutPassword
        });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

app.get('/{*any}', (req,res)=> res.sendFile(path.resolve('frontend/public','index.html')));

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`API endpoints available:`);
    console.log(`- POST http://localhost:${port}/api/auth/login`);
    console.log(`- POST http://localhost:${port}/api/auth/signup`);
    // console.log(`- GET  http://localhost:${port}/api/test`);
});
