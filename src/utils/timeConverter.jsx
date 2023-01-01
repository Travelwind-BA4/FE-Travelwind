const timeConverter = (date) => {
  let year = date.$d.getFullYear();
  let month = date.$d.getMonth() + 1;
  let dt = date.$d.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return year + "-" + month + "-" + dt;
};

export default timeConverter;
