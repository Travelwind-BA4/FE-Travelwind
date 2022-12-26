const timeConverter = (date) => {
  const test = new Date(date.$d).toISOString();
  return test.slice(0, 10);
};

export default timeConverter;
