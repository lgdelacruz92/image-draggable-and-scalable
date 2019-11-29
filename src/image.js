import React from "react";
import NativeImage from "./nativeimage";
import TranslateOverlay from "./translateoverlay";
import * as MUI from "@material-ui/core";
import { translate } from "./translatejss";

const useStyles = MUI.makeStyles(theme => {
  return {
    image: {
      width: props => props.w,
      height: props => props.h,
      transform: props => translate(props.x, props.y),
      position: "absolute"
    },
    imageContainer: {
      position: "relative"
    }
  };
});

const Image = props => {
  const classes = useStyles(props);
  const [state, setState] = React.useState(null);
  const [openTranslateOverlay, setOpenTranslateOverlay] = React.useState(null);
  React.useState(() => {
    setState({ ...props });
  }, []);
  return (
    <div className={classes.image}>
      <div className={classes.imageContainer}>
        {state ? (
          <React.Fragment>
            <NativeImage src={state.src} alt={state.alt} id={state.id} />
            <TranslateOverlay imgState={state} open={true} />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default Image;
