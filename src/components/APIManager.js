 export const getBreakfastArray = () => {
    return fetch(`
    https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=0e6bf87f&app_key=3d10db39e18da4d3e97391ae362bbcc9&mealType=Breakfast&imageSize=SMALL&random=true&field=label&field=image&field=healthLabels&field=calories&field=totalTime&field=cuisineType&field=mealType
    `)
      .then(res => res.json())
  };
  export const getLunchArray = () => {
    return fetch(`
    https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=0e6bf87f&app_key=3d10db39e18da4d3e97391ae362bbcc9&mealType=Lunch&imageSize=SMALL&random=true&field=label&field=image&field=healthLabels&field=calories&field=totalTime&field=cuisineType&field=mealType
    `)
      .then(res => res.json())
  };
  export const getDinnerArray = () => {
    return fetch(`
    https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=0e6bf87f&app_key=3d10db39e18da4d3e97391ae362bbcc9&mealType=Dinner&imageSize=SMALL&random=true&field=label&field=image&field=healthLabels&field=calories&field=totalTime&field=cuisineType&field=mealType
    `)
      .then(res => res.json())
  };
  export const getSnackArray = () => {
    return fetch(`
    https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=0e6bf87f&app_key=3d10db39e18da4d3e97391ae362bbcc9&mealType=Snack&imageSize=SMALL&random=true&field=label&field=image&field=healthLabels&field=calories&field=totalTime&field=cuisineType&field=mealType
    `)
      .then(res => res.json())
  };


