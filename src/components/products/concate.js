function concate(title, num) {
  if (title.length > num) {
    return title.substr(0, num) + "...";
  }
  return title;
}

export default concate;
