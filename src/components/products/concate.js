function concate(title) {
  if (title.length > 50) {
    return title.substr(0, 50) + "...";
  }
  return title;
}

export default concate;
