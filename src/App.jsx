
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>COLOR CLOCK</h1>

        <p className="greeting">Your time, your moment.</p>

        <div className="time">
          {format(currentTime, 'hh:mm:ss a')}
        </div>

        <div className="date">
          {format(currentTime, 'EEEE, MMMM do, yyyy')}
        </div>

        <p className="footer">
          Every second counts ✨
        </p>
      </div>
    </div>
  );
}

export default App;
