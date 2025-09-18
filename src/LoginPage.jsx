import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true); // Show Welcome Page
    } else {
      alert("Please enter valid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Login Form
        <div style={styles.container}>
          <h2>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      ) : (
        // Welcome Page
        <div style={styles.welcome}>
          <h1>Welcome, {email} 🎉</h1>
          <p>You are successfully logged in.</p>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #6ab136ff",
    fontSize: "14px",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    background: "#4c9bafff",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  welcome: {
    padding: "50px",
    textAlign: "center",
  },
  logoutButton: {
    padding: "10px 20px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default LoginForm;