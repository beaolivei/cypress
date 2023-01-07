# Cypress and Test Strategy

## Why do we create tests to start with? 
- make sure code is working, that we are getting the expected result
- help us to make refactors with more peace of mind 
- it helps us reflect on best practices

## Common Test Layers: 
- unit: functions, individual components, helper functions, service. JEST/ React Test Library
- integration: two services that communicate, 1 user flow. Jest/ React Testing Library
- E2E: test the entire user flow on a higher level. Cypress/ webdriver.io


## Making the decision on which one to use
 - it is no an either/or situation. The test layers can be combined for better results. 
 - decision on where to focus efforts depends on the team, product and company structure

## Using Cypress

- Check [documentation](https://docs.cypress.io/guides/getting-started/installing-cypress) on how to start

- `npm install cypress --save-dev`
- node > 10
- `npx cypress open`