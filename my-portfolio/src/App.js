import './App.css';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bassa Durga Venkata Subrahmanyam</h1>
        <p>React Developer</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate React developer with
          experience in building web applications.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: subrahmanyamb1551@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/bassa-subrahmanyam-7490a1220</p>
        <p>Github: github.com/yourusername</p>
      </section>
    </div>
  );
}

export default App;

