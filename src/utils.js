export const isMyNativeImageId = (str, imgId) => {
  return str === "native-image-" + imgId;
};

export const createNativeImageId = imgId => {
  return "native-image-" + imgId;
};

export const createTranslateOverlayId = imgId => {
  return "translate-overlay-" + imgId;
};

export const isMyTranslateOverayId = (str, imgId) => {
  return str === "translate-overlay-" + imgId;
};
