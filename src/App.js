import React, { useRef } from "react";
import First from './pages/First';
import Wedoit from './pages/Wedoit';
import Home from './pages/Home';
import MeetTheTeam from './pages/MeetTheTeam';
import Portfolio from './pages/Portfolio';


const App = () => {
  const HomeRef = useRef(null);

  const handleFinish = () => {
    HomeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <First onFinish={handleFinish} />
      <Wedoit />
      <div ref={HomeRef}>
        <Home />
      </div>
      <MeetTheTeam />
      <Portfolio />
    </div>
  );
}

export default App;