import React from "react";

import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    translateOverlay: {
      width: props => props.w,
      height: props => props.h,
      top: 0,
      left: 0,
      position: "absolute"
    }
  };
});

const TranslateOverlay = props => {
  const classes = useStyles(props.imgState);
  console.log(props.imgState);
  return <div className={classes.translateOverlay} />;
};

export default TranslateOverlay;
