const API_BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "P6cf7q80QyPwwvDvYEP4aYkfXZYdgFzCDwzmXIdBV4Y";

const callApi = (query) => {
  return fetch(
    `${API_BASE_URL}search/photos?query=${query}&client_id=${ACCESS_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("❌ La solicitud no se pudo completar correctamente.");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      alert(error);
    });
};

export default callApi;
