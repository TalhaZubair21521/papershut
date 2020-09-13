organizePricing = (result) => {
  let response = { school: [], college: [], master: [], doctor: [] };
  result.forEach((value) => {
    if (value.academic_id === 1) {
      response.school.push({
        price: value.price,
        timerange: value.timerange,
      });
    } else if (value.academic_id === 2) {
      response.college.push({
        price: value.price,
        timerange: value.timerange,
      });
    } else if (value.academic_id === 3) {
      response.master.push({
        price: value.price,
        timerange: value.timerange,
      });
    } else if (value.academic_id === 4) {
      response.doctor.push({
        price: value.price,
        timerange: value.timerange,
      });
    } else {
    }
  });
  return response;
};
exports.organize = organizePricing;
