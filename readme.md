# Cypress and Test Strategy

## Why do we create tests to start with? 
- tests are an important part of our Quality Strategy
- having a quality strategy help us to make sure the business does not loose money
- bugs implemented in production may cost millions of dolars
- a reliable path to production is composed by different flavors of testing that help us cover a broad set of scenarios

## Common Test Layers: 

- UNIT: tests individual components/ functions. Help us to make sure that the individual parts are working.
- INTEGRATION: test one specific flow. One or more component and service that interact with each other
- E2E: test entire flows on a higher level. 

## Making the decision on which one to use

- You need to understand the scope of the feature you are building: does it change the entire flow or is it particular to a unit/component/function/service scope? 
- Important to remember: it doesn't have to be one OR another. You can decide to implement both types of tests. Companies that have a quality strategy normally have more than one testing layer.  

## Using Cypress

- Check [documentation](https://docs.cypress.io/guides/getting-started/installing-cypress) on how to start

- `npm install cypress --save-dev`
- node > 10
- `npx cypress open`