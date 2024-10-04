const Story = ({ story, deleteStory }) => {
  return (
    <div className="story">
      <span className="delete" onClick={() => deleteStory(story.title)}>X</span>
      <div className="story_header">
        <div className="story_image">
          <img 
            src={story.image_url} 
            alt={story.title} 
          />
        </div>
        <h1>
          <a href={story.link} target="_blank" rel="noopener noreferrer">{story.title}</a>
          <span className="story_creator">By: {story.creator || 'Unknown'}</span>
          <span className="description"><p>{story.description}</p></span>
        </h1>
      </div>
    </div>
  );
};

export default Story;