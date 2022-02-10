
<h1 align="center">Welcome to App Links Page 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/npm-6.14.6-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/edvaldotorres/legends-flix#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Project developed with JavaScript technology using React.js. 

### ✨ [Page of Links ] (https://list-of-link.vercel.app/)

## Pre-requisites

* npm >= 6.14.6

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Author

👤 **Fernanda M Bitencourt**


* Github: [@fernandaMBitencourt](https://github.com/FernandaMBitencourt)


## App 

JavaScript web app that maintains a 
list of bookmarks (links). 
The user is able to add/edit/delete any link in the list.



##  Outlining the solution’s

Overview Page

  1. Form at the top of the page calling to the action.

  2. Submit button.

  3. Delet button.

  4. Edit button.
  
  5. Show how many links per page.
  
  6. Search field.

  7. Table links display.

  8. Pagination with next and previous links.

  9. Routes (react-router-dom)

Results Page

  1. Contains a message thanking the user for a submission.

  2. Table links display the user’s submission.

  3. Action button to return to the overview page.


## Resolutions and Limitations
 
   Form:
   I developed two easy-to-view pages where the user enters a link in a form and sends it to their registration list.
   the form validation system are fetched in information lists, are made with link insertion validation function in,
   In case the user enters a non-valid URL, an alert will be triggered, informing that a URL is not a valid request.
   To get the browser data, I used the localStorage function, which fetches the browser information.

   Submit, Delete and Edit buttons:

   The buttons were developed from the bootstrap library, I created a function for each button, and the delete one has an action to delete what was inserted, the edit button presents the function of changing what was registered and the add one allows the link submission. The edit and delete buttons were imported icons from font awesome.

   Table display:
   I first developed the spreedsheet using a jQuery library datable, even though I knew it could be developed in react, but I believed it would be the fastest and lightest way to solve the problem.
   The add button appears an alert that the link has been successfully inserted. This url appears first in the list, to design this function I prioritized that new entries appear first in the list for this I used the unshift method, after pressing the submit button the final action takes the user to the thank you page.

   When clicking on the edit icon, the registered url appears in the insert bar, and it is possible to edit the link, after editing, click on the edit button, the edited url appears first in the registration list and the user is sent to the thank you page.
   The methods used to develop the above function were: map method searching the list for edit ID items.

   When clicking on the delete icon, a validation (warning) appears saying that the link was deleted.
   The function to delete the links is an ID validation.

   For all url validations I used the Alert component that was developed with the use effect hook.

   On the thank you page, on the return button,
   for the overview page I used a TAG link of routes that is inserted in react.

   I used a JQuery data table library to make, page length, searche field, table links display (spreadcheet), and pagination previous links.











   

     

























