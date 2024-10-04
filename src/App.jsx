import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story';

function App() {
  const [stories, setStories] = useState(news_feed.results);
  const wordLimit = 22;
  
  const deleteStory = (storyTitle) => {
    setStories(stories.filter(story => story.title !== storyTitle));
  };

  const limitDescription = (description) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
  };

  return (
    <div className="App">
      <h1 className="news-heading">The Polished: Beauty & Fashion News</h1>
      <div className="feed">
        {stories.map((story) => (
          <Story 
            key={story.title} 
            story={{ ...story, description: limitDescription(story.description) }} 
            deleteStory={deleteStory}
          />
        ))}
      </div>
      <footer className="footer">
                <p>&copy; 2024 The Polished: Beauty & Fashion News. All content used for educational purposes.</p>
                <p>Designed by Zalida Khan</p>
            </footer>
    </div>
  );
}

export default App;
