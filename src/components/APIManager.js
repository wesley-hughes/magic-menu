export const getAllRecipes = () => {
  return fetch(`
    http://localhost:8088/recipes
    `).then((res) => res.json());
};

export const postMenu = (weekToSendToApi) => {
  return fetch(`http://localhost:8088/menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(weekToSendToApi),
  }).then((response) => response.json());
};

export const getMenus = (userId) => {
  return fetch(`http://localhost:8088/menus?_sort=date&userId=${userId}`).then(
    (res) => res.json()
  );
};

export const getUser = (userId) => {
  return fetch(`
    http://localhost:8088/users/?userId=${userId}
   `).then((res) => res.json());
};

export const getRecipes = () => {
  return fetch(`
  http://localhost:8088/recipes
  `).then((res) => res.json());
};

export const getUserFavorites = (userId) => {
  return fetch(`
    http://localhost:8088/favorites?_expand=recipe&userId=${userId}  `).then(
    (res) => res.json()
  );
};

export const postFavorite = (newFavorite) => {
  return fetch(`http://localhost:8088/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFavorite),
  }).then((response) => response.json());
}
