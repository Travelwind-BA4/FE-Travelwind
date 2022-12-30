const timeConverter = (date) => {
  console.log(date);
  const test = new Date(date.$d).toISOString();
  console.log(test);
  return test.slice(0, 10);
};

export default timeConverter;
