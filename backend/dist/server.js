"use strict";

var _excluded = ["password"],
  _excluded2 = ["password"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
//working
var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use(express["static"]('frontend/public'));
app.use(express.json());
app.get('/api', function (req, res) {
  res.json({
    message: "Backend stuff for later"
  });
});

// Dummy user data (simulating a database)
var dummyUsers = [{
  id: 1,
  name: "John Developer",
  email: "john@example.com",
  password: "password123",
  avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
  bio: "Full-stack developer with 5 years of experience"
}, {
  id: 2,
  name: "Sarah Coder",
  email: "sarah@example.com",
  password: "password123",
  avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn",
  bio: "Frontend specialist and UI enthusiast"
}];

// Authentication endpoints
app.post('/api/auth/login', function (req, res) {
  try {
    var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // Find user in dummy data
    var user = dummyUsers.find(function (u) {
      return u.email === email && u.password === password;
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Create a simple token
    var token = "dummy-token-".concat(user.id, "-").concat(Date.now());

    // Return user data without password
    var _ = user.password,
      userWithoutPassword = _objectWithoutProperties(user, _excluded);
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
app.post('/api/auth/signup', function (req, res) {
  try {
    var _req$body2 = req.body,
      name = _req$body2.name,
      email = _req$body2.email,
      password = _req$body2.password;

    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required"
      });
    }

    // Check if user already exists
    var existingUser = dummyUsers.find(function (u) {
      return u.email === email;
    });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email"
      });
    }

    // Create new user
    var newUser = {
      id: dummyUsers.length + 1,
      name: name,
      email: email,
      password: password,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=".concat(name),
      bio: "New user",
      projectsCount: 0,
      followers: 0,
      following: 0
    };

    // Add to dummy data
    dummyUsers.push(newUser);

    // Create token
    var token = "dummy-token-".concat(newUser.id, "-").concat(Date.now());

    // Return user data without password
    var _ = newUser.password,
      userWithoutPassword = _objectWithoutProperties(newUser, _excluded2);
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
app.get('/{*any}', function (req, res) {
  return res.sendFile(path.resolve('frontend/public', 'index.html'));
});

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })

app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
  console.log("API endpoints available:");
  console.log("- POST http://localhost:".concat(port, "/api/auth/login"));
  console.log("- POST http://localhost:".concat(port, "/api/auth/signup"));
  console.log("- GET  http://localhost:".concat(port, "/api/test"));
});