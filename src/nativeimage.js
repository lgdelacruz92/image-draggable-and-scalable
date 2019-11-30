import React from "react";
import * as MUI from "@material-ui/core";
import { createNativeImageId } from "./utils";
import { isMyNativeImageId } from "./utils";

const useStyles = MUI.makeStyles(theme => {
  return {
    nativeImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      verticalAlign: "top"
    }
  };
});
const NativeImage = props => {
  const { src, alt, id } = props;
  const classes = useStyles();

  const [mouseState, setMouseState] = React.useState("mouse-up");

  const onMouseDown = e => {
    const targetId = e.target.id;
    if (mouseState === "mouse-up" && isMyNativeImageId(targetId, props.id)) {
      setMouseState("mouse-down");
    }
  };

  React.useState(() => {
    const onMouseUp = e => {
      setMouseState(s => {
        if (s === "mouse-down") {
          return "mouse-up";
        }
        return s;
      });
    };

    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <img
      id={createNativeImageId(id)}
      className={classes.nativeImage}
      src={src}
      alt={alt}
      onMouseDown={onMouseDown}
    />
  );
};

export default NativeImage;
