# Magic Menu
An application for busy witches who choose to spend their spare time casting spells rather than meal planning.

## Description
Generates a week of random recipes from a databse of 1.5M possibilities. Allows the user to save favorite recipes and save their weekly menus. The user profile enables the user to filter the pool of available recipes down to their own specific dietary requirements.

## How it works
### Builder
Create a week of recipes using the buttons to build out week. Can filter by mealtype for main courses, small plates lunches, and dinners. Date must be selected in order to save.
<img width="1512" alt="Builder" src="https://user-images.githubusercontent.com/115202706/229541202-31623631-5a95-41e5-8719-2f16cc7e7bf4.png"/>
### Saved Weeks
Review saved weeks and favorite the recipes you would like to keep in rotation. Delete weeks once you are done with them.
<img width="1511" alt="Saved Week" src="https://user-images.githubusercontent.com/115202706/229541234-4e70dde8-0d32-4da5-9f23-7fee7228e45a.png">
### Favorite Recipes
Your favorite recipes are stored here for quick reference.
<img width="1512" alt="Favorite Recipes" src="https://user-images.githubusercontent.com/115202706/229542438-1b67b455-be47-4edc-a695-f12eb65e3244.png">
### Profile
Update your email and dietary needs here.
<img width="1465" alt="Profile" src="https://user-images.githubusercontent.com/115202706/229543618-abd8b840-85ae-414d-b807-7719d8b7a0ff.png">

## Installation
Necessary to install Tailwind CSS and daisyUI-- installation instruction links below.
* https://tailwindcss.com/docs/guides/create-react-app
* https://daisyui.com/docs/install/

## Challenges
The number of filters required to filter through each diet restriction and each day of the week in builder-- many filters stacked across two components.
In original wireframe intended to randomize individual days. However as generating each subsequent day is dependent on filtered recipe list from day before, when randomize button clicked on individual day all subsequent weekdays also randomize.
Stacking filters in one useEffect created errors and did not fire properly, so had to divide into separates and watch existing filters.

## Public URL
<img width="1505" alt="Login" src="https://user-images.githubusercontent.com/115202706/229557345-8851a113-70e2-4a68-abc7-2780ce5878ae.png">
