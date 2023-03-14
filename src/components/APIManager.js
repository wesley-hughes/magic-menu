// export const getRecipes = () => {
//   return fetch(`
//     http://localhost:8088/recipes
//     `).then((res) => res.json());
// };

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
  return fetch(`http://localhost:8088/menus?userId="${userId}"`).then((res) =>
    res.json()
  );
};

export const getUser = (userId) => {
  return fetch(`
    http://localhost:8088/users/?userId=${userId}
   `).then((res) => res.json());
}

export const getRecipes = (user) => {
  
  if (user.vegetarian === true) {
    return fetch(`
  http://localhost:8088/recipes/?vegetarian=true`).then((res) => res.json());
  } else if (user.vegan === true) {
    return fetch(`
    http://localhost:8088/recipes/?vegan=true`).then((res) => res.json());
  } else if (user.glutenFree === true) {
    return fetch(`
    http://localhost:8088/recipes/?glutenFree=true`).then((res) => res.json());
  } else if (user.dairyFree === true) {
    return fetch(`
    http://localhost:8088/recipes/?dairyFree=true`).then((res) => res.json());
  } else {
    return fetch(`
  http://localhost:8088/recipes
  `).then((res) => res.json());
  } 
};
