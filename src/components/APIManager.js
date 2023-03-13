
  export const getDinnerArray = () => {
    return fetch(`
    http://localhost:8088/recipes
    `)
      .then(res => res.json())
  };


export const postDay = (dayToSendToApi) => {
  return fetch(`http://localhost:8088/menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dayToSendToApi),
  })
    .then((response) => response.json())
}




