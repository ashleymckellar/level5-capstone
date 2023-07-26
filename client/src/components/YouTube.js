import React from "react";
import PropTypes from "prop-types"; //part of React library - helps cleck/enforce types of data(props) Component receives, making sure everything fits together

//A utility function - takes youTube video URL as input and extract youTube video ID; function is used to parse the youTube video ID from URL so it can embed the video
const getYoutubeEmbedId = (url) => {
  const videoIdRegex = /(?:youtube.com\/watch\?v=|youtu.be\/)([\w-]+)/; // videoIdRegex = special tool to find video ID. Looks for specific PARTS of the 2 links - 1.youtube.com\/watch OR 2.youtu.be - when PARTS found the video ID is after it - ([\w-]+) - is the treasure chest that contains the ID
  const match = url.match(videoIdRegex); // Where the video ID is stored
  return match ? match[1] : null; //if video ID found give it to us if not display null; the ? is the decision maker it checks to see if there is something in `match` (previous line)
};

const YoutubeEmbed = ({ url }) => { // Functional Component that takes an object as input {url} --Located Home.js lin 22; descructures {url} so we dont have to put props.url and import Home.js
  const embedId = getYoutubeEmbedId(url); // getYouTubeEmbedId(url) pass as an argument. Gets video Id from the getYouTubeEmbedId 

  if (!embedId) { // if falst then error message appears
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="video-responsive">
      <iframe //iframe - is used to EMBED documents or webpage within this document --- youTube video
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`} // takes varibale from line 12 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
// BASICALLY - Component expects a prop called url should have a string and isRequired to be provied when using YouTubeEmbed
//propTypes - set of rules to ensure right kind of data is passed to YouTubeEmbed
YoutubeEmbed.propTypes = { // we are defining propTypes and youTubeEmbed
  url: PropTypes.string.isRequired, // url = name of the prop, Component expects to receive a prop named url. propTypes.string = tells url should be a type string.
};

export default YoutubeEmbed;
