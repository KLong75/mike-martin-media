export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  const re =
    /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return phone === "" || re.test(String(phone));
}
export function validateForm(firstName, lastName, email, phone, message) {
  return (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateMessage(message)
  );
}

export function formatDate(post_date) {
  const date = new Date(post_date);

  // const monthNames = [
  //     'January', 'February', 'March', 'April', 'May', 'June',
  //     'July', 'August', 'September', 'October', 'November', 'December'
  // ];

  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNamesShort[monthIndex].toUpperCase()} ${day}, ${year}`;
}

export const randomizeArray = (array) => {
  const shuffledArray = [...array].sort(() => Math.random() - 0.5);
  return shuffledArray;
};

// export const shortenPostText = (text, num) => {
//   if (text.length < num) {
//     return text + "..";
//   }
//   if (text.length > num) {
//     return text.slice(0, num) + "...";
//   } else {
//     return text;
//   }
// };

export const shortenPostText = (text, num = 240) => {
  const raw = Array.isArray(text) ? text[0] : text;
  const safeText = typeof raw === "string" ? raw.trim() : "";

  if (!safeText) return "";
  if (safeText.length <= num) return safeText;

  return `${safeText.slice(0, num).trimEnd()}...`;
};

export const renderBold = (text = "") =>
  String(text)
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      return isBold ? <span key={i} className="font-semibold">{part.slice(2, -2)}</span> : part;
    });
