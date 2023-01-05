import moment from "moment";
const convertDiff = (departureTime, arrivalTime) => {
  var time = moment
    .utc(
      moment(arrivalTime, "HH:mm:ss").diff(moment(departureTime, "HH:mm:ss"))
    )
    .format("HH:mm:ss");
  var second = moment.duration(time).asSeconds();
  var hours = Math.floor(second / 3600);
  var minutes = Math.floor((second % 3600) / 60);
  return hours + "H" + minutes + "M";
};

export default convertDiff;
