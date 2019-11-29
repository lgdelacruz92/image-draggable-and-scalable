import React from "react";
import NativeImage from "./nativeimage";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    image: {
      width: props => props.w,
      height: props => props.h
    }
  };
});

const Image = props => {
  const classes = useStyles(props);
  const [state, setState] = React.useState(null);
  React.useState(() => {
    setState({ ...props });
  }, []);
  return (
    <div className={classes.image}>
      {state ? (
        <NativeImage src={state.src} alt={state.alt} id={state.id} />
      ) : null}
    </div>
  );
};

export default Image;
