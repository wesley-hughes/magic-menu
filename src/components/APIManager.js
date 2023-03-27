export const getAllRecipes = () => {
  return fetch(`
    https://mm-app-ej7qy.ondigitalocean.app//recipes
    `).then((res) => res.json());
};

export const postMenu = (weekToSendToApi) => {
  return fetch(`https://mm-app-ej7qy.ondigitalocean.app//menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(weekToSendToApi),
  }).then((response) => response.json());
};

export const getMenus = (userId) => {
  return fetch(`https://mm-app-ej7qy.ondigitalocean.app//menus?_sort=date&userId=${userId}`).then(
    (res) => res.json()
  );
};

export const getUser = (userId) => {
  return fetch(`
    https://mm-app-ej7qy.ondigitalocean.app//users/?userId=${userId}
   `).then((res) => res.json());
};

export const getRecipes = () => {
  return fetch(`
  https://mm-app-ej7qy.ondigitalocean.app//recipes
  `).then((res) => res.json());
};

export const getUserFavorites = (userId) => {
  return fetch(`
    https://mm-app-ej7qy.ondigitalocean.app//favorites?_expand=recipe&userId=${userId}  `).then(
    (res) => res.json()
  );
};

export const postFavorite = (newFavorite) => {
  return fetch(`https://mm-app-ej7qy.ondigitalocean.app//favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFavorite),
  }).then((response) => response.json());
}
