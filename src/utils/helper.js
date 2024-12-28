import { getCookie } from "./cookie";

const getAuthorized = () => {
  const refToken = getCookie("Torino::RefToken");

  if (refToken) {
    return "Authorized";
  } else {
    return "Unathorized";
  }
};

export { getAuthorized };
