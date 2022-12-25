const timeConverter = (date) => {
  // if (date.$D < 10) {
  //   return `${date.$y}-${date.$M + 1}-0${date.$D}`;
  // } else {
  //   return `${date.$y}-${date.$M + 1}-${date.$D}`;
  // }

  const test = new Date(date.$d).toISOString();
  return test.slice(0, 10);
};

export default timeConverter;
