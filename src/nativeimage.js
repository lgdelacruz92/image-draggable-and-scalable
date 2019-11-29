import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    nativeImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  };
});
const NativeImage = props => {
  const { src, alt, id } = props;
  const classes = useStyles();
  return <img id={id} className={classes.nativeImage} src={src} alt={alt} />;
};

export default NativeImage;
