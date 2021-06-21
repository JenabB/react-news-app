import CONFIG from './config';

// CNN
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

//republika
export const getIslamDigest = async () => {
  let url = `${CONFIG.BASE_URL_REPUBLIKA}/islam-digest`;
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

export const getKhazanah = async () => {
  let url = `${CONFIG.BASE_URL_REPUBLIKA}/khazanah`;
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

// CNBC
export const getSyariah = async () => {
  let url = `${CONFIG.BASE_URL_CNBC}/syariah`;
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

// Antara
export const getHumaniora = async () => {
  let url = `${CONFIG.BASE_URL_ANTARA}/humaniora`;
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

// Tribun
export const getRamadan = async () => {
  let url = `${CONFIG.BASE_URL_TRIBUN}/ramadan`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
