import React, { useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./Styles.js";
const YoutubeEmbed = ({ embedId }) => {
  const classes = useStyles();
  const [play, setplay] = useState(0);
  const videoplay = () => {
    setplay(1);
  };
  const videostop = () => {
    setplay(0);
  };
  return (
    <div className={classes.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=${play}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={classes.frame}
        onMouseEnter={videoplay}
        onMouseLeave={videostop}
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
