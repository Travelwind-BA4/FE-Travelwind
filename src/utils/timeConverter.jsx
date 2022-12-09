const timeConverter = (date) => {
  if (date.$D < 10) {
    return `${date.$y}-${date.$M + 1}-0${date.$D} `;
  } else {
    return `${date.$y}-${date.$M + 1}-${date.$D} `;
  }
};

export default timeConverter;
