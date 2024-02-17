export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email).toLowerCase());
}
export function validateName(name) {
  var re = /^[a-zA-Z]+$/;
  return re.test(String(name));
}
export function validateMessage(message) {
  return message.length > 0;
}
export function validatePhone(phone) {
  // Regular expression to match the 3 usual formats of US phone numbers
  var re = /^(?:\(\d{3}\)\s?|\d{3}-)?\d{3}-?\d{4}$/;
  return phone === "" || re.test(String(phone));
}
export function validateForm(firstName, lastName, email, phone, message) {
  return validateName(firstName) && validateName(lastName) && validateEmail(email) && validatePhone(phone) && validateMessage(message);
}

export function formatDate(post_date) {
  let date = new Date(post_date);

  let monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
}