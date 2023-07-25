import React from "react";
import PropTypes from "prop-types"; //part of React library - helps cleck/enforce types of data(props) Component receives, making sure everything fits together

const getYoutubeEmbedId = (url) => {
  const videoIdRegex = /(?:youtube.com\/watch\?v=|youtu.be\/)([\w-]+)/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

const YoutubeEmbed = ({ url }) => {
  const embedId = getYoutubeEmbedId(url);

  if (!embedId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
