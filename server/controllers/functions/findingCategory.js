findingCategory = (time, type) => {
  switch (type) {
    case "hours":
      if (time <= 12) {
        return "12h";
      } else if (time <= 24) {
        return "24h";
      } else {
        return "Hours Problem";
      }
    case "days":
      if (time === 1 || time === 2) {
        return "2d";
      } else if (time === 3) {
        return "3d";
      } else if (time === 4 || time === 5) {
        return "4-5d";
      } else if (time === 6 || time === 7) {
        return "6-7d";
      } else if (time >= 8) {
        return "8+d";
      } else {
        return "Days Problem";
      }
    default:
      return "Type problem";
  }
};
exports.findingCategory = findingCategory;
