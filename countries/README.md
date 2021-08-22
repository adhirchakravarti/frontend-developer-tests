# Frontend Engineering Problem

## API:

```
https://randomuser.me/api/?results=100
```

## Objective

- Render a list of Countries sorted by the number of Users in each country
- Clicking a country should expand the list of users in that country sorted by the date registered most recent first
- Each user should show the Name, Gender, City, State, and Date Registered
- Only one country's users should be visible at once
- There should be a dropdown that filters the Users by Gender (Male, Female, All)

## Notes

- Attention should be on functionality and less on aesthetics, we have provided some base styles in src/App.css
- Candidates can use any third party libraries to accomplish the objective
- We expect this to take between 2-4 hours
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementation Notes

- I don't use TypeScript on a daily basis at the moment and still have lots to learn, so please take that into consideration
- As suggested, I focussed on functionality, not such on aesthetics. Hence the gray-scale theme.
- Things I would change if spending more time
  1. Add themed colors using SCSS variables
  2. Make the app responsive all the way down to viewport widths less than 200px and greater than 2500px
