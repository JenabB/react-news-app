import CONFIG from "./config";

export const getNasional = async () => {
  let url = `${CONFIG.BASE_URL}/nasional`;
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

export const getInternasional = async () => {
  let url = `${CONFIG.BASE_URL}/internasional`;
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

export const getEkonomi = async () => {
  let url = `${CONFIG.BASE_URL}/ekonomi`;
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

export const getOlahraga = async () => {
  let url = `${CONFIG.BASE_URL}/olahraga`;
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

export const getTeknologi = async () => {
  let url = `${CONFIG.BASE_URL}/teknologi`;
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

export const getHiburan = async () => {
  let url = `${CONFIG.BASE_URL}/hiburan`;
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

export const getGayaHidup = async () => {
  let url = `${CONFIG.BASE_URL}/gaya-hidup`;
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
