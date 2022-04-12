export const convertViewers = viewers => {
  if (viewers < 1000) {
    return viewers;
  } else if (viewers < 1000000) {
    return 'less than a million, but more than 1000'
  } else {
    return 'more than a million'
  }
};