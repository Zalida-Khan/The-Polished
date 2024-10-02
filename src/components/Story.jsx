import React from 'react';

const Story = ({ story, deleteStory }) => {
  return (
    <div className="story">
      <span className="delete" onClick={() => deleteStory(story.title)}>x</span>
      <div className="story_header">
        <div className="story_image">
          <img 
            src={story.image_url || "https://placehold.co/600x400?text=News+Story"} 
            alt={story.title} 
          />
        </div>
        <h1>
          <a href={story.link} target="_blank" rel="noopener noreferrer">{story.title}</a>
          <span className="story_creator">By: {story.creator || 'Unknown'}</span>
        </h1>
      </div>
      <p className="description">{story.description}</p>
    </div>
  );
};

export default Story;
