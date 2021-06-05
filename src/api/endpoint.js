import CONFIG from "./config";

export const getTopHeadline = async () => {
  let url = `${CONFIG.BASE_URL}&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getSports = async () => {
  let url = `${CONFIG.BASE_URL}&category=sports&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getBusiness = async () => {
  let url = `${CONFIG.BASE_URL}&category=business&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getTechnology = async () => {
  let url = `${CONFIG.BASE_URL}&category=technology&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getEntertaiment = async () => {
  let url = `${CONFIG.BASE_URL}&category=entertainment&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getHealth = async () => {
  let url = `${CONFIG.BASE_URL}&category=health&apiKey=${CONFIG.API_KEY}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
