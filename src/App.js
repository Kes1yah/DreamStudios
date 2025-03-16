import React, { useRef } from "react";
import First from './pages/First';
import Wedoit from './pages/Wedoit';
import Home from './pages/Home';
import LiveVideo from './pages/LiveVideo';
import MeetTheTeam from './pages/MeetTheTeam';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import LiveStream from './pages/LiveStream';
import MediaProduction from './pages/MediaProduction';
import ContactPage from './pages/ContactPage';

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
      <LiveVideo />
      <Services />
      <LiveStream />
      <MediaProduction />
      <Portfolio />
      <MeetTheTeam />
      <ContactPage />
    </div>
  );
}

export default App;