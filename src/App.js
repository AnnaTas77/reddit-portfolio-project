import React from 'react';
import { Article, Navbar, Search, SubredditContainer } from './components';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="gradient__bg">
        <Navbar />
        {/* <Header /> */}
      </div>
      <div className='subreddits-container'>
        <SubredditContainer defaultSubreddit={"frontend"} />
        <SubredditContainer defaultSubreddit={"webdev"} />
        <SubredditContainer defaultSubreddit={"programming"} />
      </div>

    </div >
  );
}

export default App;