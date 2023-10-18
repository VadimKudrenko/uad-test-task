import React from 'react';
import HeaderSection from './components/HeaderSection/HeaderSection'
import AboutUsSection from './components/AboutUsSection/AboutUsSection'
import WomenProfilesSection from './components/WomenProfilesSection/WomenProfilesSection';
import QuickStartSection from './components/QuickStartSection/QuickStartSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import StartDatingWithVCHSection from './components/StartDatingWithVCHSection/StartDatingWithVCHSection'
import JoinUsSection from './components/JoinUsSection/JoinUsSection'
import FooterComponent from './components/FooterComponent/FooterComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <AboutUsSection />
      <WomenProfilesSection/>
      <QuickStartSection />
      <ReviewsSection/>
      <StartDatingWithVCHSection />
      <JoinUsSection />
      <FooterComponent />
    </div>
  );
}

export default App;
