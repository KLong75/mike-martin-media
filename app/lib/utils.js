export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email).toLowerCase());
}
export function validateName(name) {
  const re = /^[a-zA-Z]+$/;
  return re.test(String(name));
}
export function validateMessage(message) {
  return message.length > 0;
}
export function validatePhone(phone) {
  // Regular expression to match phine number formats
  const re = /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return phone === "" || re.test(String(phone));
}
export function validateForm(firstName, lastName, email, phone, message) {
  return validateName(firstName) && validateName(lastName) && validateEmail(email) && validatePhone(phone) && validateMessage(message);
}

export function formatDate(post_date) {
  const date = new Date(post_date);

  const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
}