Day 4: Building a Real-time App with React and Firebase

Firebase is the perfect complement to React as it provides a easy-to-use, real-time data source for populating the state of React components. In this course, you’ll learn the key concepts behind Firebase and how it interacts with React. Jonathan will walk you through several examples, then have you work with React and Firebase on your own.

* Get a hands-on introduction to Firebase
* See how Firebase adds real-time data capabilities to a React app
* Learn about data synchronization, streaming data, and more
* Cover off-line support, debugging, and optimization

## 01 Starting Point

1. Switch to finder
2. Open project directory (i.e., `react-for-web-devs`)
3. Copy `02/12-add-css-animations` directory and paste into `04/` directory
4. Rename `04/12-add-css-animations` to `04/01-starting-point`

## 02 Add Firebase

1. Switch to Terminal application
2. cd into the project directory `cd 01-starting-point-web`
3. Run `npm install` to get node_modules set up
4. Sign up for a free firebase account at [firebase.com](https://www.firebase.com/login/)
5. Copy the URL (e.g., `https://incandescent-fire-1971.firebaseio.com/`)

## 03 Optimize deleteEntry

1. Replace `delete` line with getting fb ref to `/entries/:key`
2. `ref.remove()`

## 04 Move Firebase URL to Helper

1. Add `getDbRef()` function to helpers
2. Replace explicit calls to `new Firebase` with `u.getDbRef()` in App.js

## 05 Optimize addEntry

1. Gut `addEntry()`
2. Get fb ref to entries node
3. Push new entry onto entries

## 06 Optimize setDate

1. Remove modifications to App state from `setDate()` function in App.js
2. Get fb ref to date node
3. Set date ref to new date using store format
4. Delete `comonentWillUpdate` because we're now handling all db writes directly

Things are now weird because:

* the app state is subservient to firebase
* the app state and firebase should not be equal
* app state only needs visible entries, firebase needs all entries
* selected date shouldn't update all views

## 07 Store entries only in Firebase

1. Revert `setDate()`
2. Set `this.state.date` to today in `componentDidMount()`
3. Set `this.state.entries` to Firebase entries in `componentDidMount()`

At this point, we are only writing to the db when records are added or removed, rather than every time the state changed at all. Changing dates is window specific but any changes to entries are reflected everywhere, which is probably the way an app like this should work. However, we're still retrieving entries for all dates regardless of the selected date, which could potentially get slow.

## 08 Group entries by date in Firebase

1. Move init date logic into getInitialState
2. Add `/this.state.date` to `addEntry()`
3. Add `/this.state.date` to `deleteEntry()`
4. Create `getEntries()`
5. Call `getEntries()` from `setDate()` and `componentWillMount()`
6. Add `var entries = entries || {};` to `getEntries()` callback

## 09 Alternate traversal syntax

1. Replace string concat paths in `addEntry()`
2. Replace string concat paths in `deleteEntry()`
3. Replace string concat paths in `getEntries()`

## 10 Add Firebase to iOS Example

1. cd in iOS dir
2. Install Firebase with `npm install firebase --save-dev`
3. Run `npm install` to install node modles
4. Add `import Firebase from 'firebase';` to top of App.js
5. Replace all functions except `render()` with code from App.js in ex09
6. Paste helpers.js in from ex09
7. Double click .xcodeproj file
8. Open firebase dashboard and localhost
9. Add record to web app
10. Edit record in firebase
11. Delete record in iOS




