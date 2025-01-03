function setCookie(name, value, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function getCookie(name) {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === name)
    ?.split("=")[1];
}

function removeCookie(name) {
  document.cookie = `${name}=; max-age=0; path=/`;
}

export { setCookie, getCookie, removeCookie };
