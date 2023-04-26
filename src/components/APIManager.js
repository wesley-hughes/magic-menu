export const getAllRecipes = () => {
  return fetch(`

    https://magic-menu-wlmtp.ondigitalocean.app/recipes

    `).then((res) => res.json())
}

export const postMenu = (weekToSendToApi) => {

  return fetch(`https://magic-menu-wlmtp.ondigitalocean.app/menus`, {



    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(weekToSendToApi),
  }).then((response) => response.json())
}

export const getMenus = (userId) => {

  return fetch(`https://magic-menu-wlmtp.ondigitalocean.app/menus?_sort=date&userId=${userId}`).then(



    (res) => res.json()
  )
}

export const getUser = (userId) => {
  return fetch(`

    https://magic-menu-wlmtp.ondigitalocean.app/users/?id=${userId}

   `).then((res) => res.json())
}

export const getRecipes = () => {
  return fetch(`

  https://magic-menu-wlmtp.ondigitalocean.app/recipes

  `).then((res) => res.json())
}

export const getUserFavorites = (userId) => {
  return fetch(`

    https://magic-menu-wlmtp.ondigitalocean.app/favorites?_expand=recipe&userId=${userId}  `).then(

    (res) => res.json()
  )
}

export const postFavorite = (newFavorite) => {

  return fetch(`https://magic-menu-wlmtp.ondigitalocean.app/favorites`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFavorite),
  }).then((response) => response.json())
}