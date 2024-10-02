import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const deleteStory = (storyTitle) => {
    setStories(stories.filter(story => story.title !== storyTitle));
  };

  return (
    <div className="App">
      <h1>Makeup, Skincare, and Fashion News</h1>
      <div className="feed">
        {stories.map((story) => (
          <Story 
            key={story.title} 
            story={story} 
            deleteStory={deleteStory} // Changed from onDelete to deleteStory
          />
        ))}
      </div>
    </div>
  );
}

export default App;
