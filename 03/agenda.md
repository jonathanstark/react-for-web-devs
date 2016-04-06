Day 3: Building a Native iOS App with React
===

In this course you’ll discover how React Native makes the creation of native apps a breeze. You’ll see how React uses native iOS components, and then bring about changes to the UI through a JavaScript thread running in the background. The resulting application is surprisingly smooth and feels altogether native. Jonathan will demonstrate the process through examples and then you will work hands-on with your own app.

* Apply your knowledge of React JS to the creation of a native iOS app using React Native
* Understand UI components, styling, touch handling, and more
* See how React simplifies debugging and reduces errors
* Learn about finalizing app
* Learn how to submit your native iOS to the App Store

## 01 Hello World

1. Install Xcode
2. Install Command Line Tools, if need be (might be bundled with your version of Xcode)
3. Install node, if need be (you should have node installed from previous class)
4. Switch to Terminal application
4. Run `npm install -g react-native-cli` (you can do this from any directory)
5. Run `cd ~/Desktop` (or wherever you want your project to live)
6. Run `react-native init App` to create a React starter project (this can take a couple minutes)
7. Run `cd App` to navigate into the project directory
8. Run `open .` to open the project directory in the Finder
9. Double click the `App.xcodeproj` file in the `ios` directory to open it in Xcode
10. In Xcode, click the run button to launch the project in the iOS simulator
11. Adjust the simulator so that it is easy to view on your machine

## 02 Initial Clean Up

1. Delete comments
2. Change to 4 space indents
3. Briefly explain desctructuring
4. Talk about ES6 class syntax
5. Change ES6 class syntax to ES5 var syntax
6. Talk about iOS "tags" (i.e., View is like div, Text is like span)
7. Replace default JSX with `<View><h1>Kilo</h1></View>`
8. Explain how styles work
    * Subset of CSS
    * Flexbox
    * Multiple styles
9. Replace default styles with `body` and `h1` styles
10. Compare `AppRegistry.registerComponent()` to `ReactDOM.render()`
    * Briefly explain AppRegistry
    * Briefly explain ES6 arrow functions
11. Change arrow function to anonymous ES5 function

## 03 Intro To Styles

1. Nest Text items inside View for the Summary component
2. Split out styles into:
    * body: {alignItems: 'center',flex 1,padding: 40}
    * center: {alignItems: 'center'}
    * large: {fontSize: 40}
    * medium: {fontSize: 30}
    * small: {fontSize: 20}
3. Demonstrate the style array syntax

## 04 Add Button Controls

1. Paste in HTML Controls definition
2. Change UL to View
3. Change LI + A to TouchableHighlight + Text
4. Import TouchableHighlight
5. Add <Controls /> to App definition
6. Add Controls View styles (alignItems: 'center', flexDirection: 'row')
7. Add button styles (border radius/style/width, margin)
8. Add label styles (padding: 10)
9. Add activeOpacity, underlayColor, and onPress attributes
10. Add press handlers

## 05 Add Summary With Props and State

1. Paste in HTML Summary definition
2. Cut/paste View from App into Summary
3. Add Summary component with date and calories to App
4. Add getInitialState to App and populate with calories and date
5. Add this.state.X attrs to Summary tag in App

## 06 Break Into Files

1. Make components dir in App dir
2. Dupe index.ios.js into three files
3. Rename files as App, Controls, Summary
4. Update App file
    * Delete unnecessary stuff
    * Add imports for Summary, Controls
    * Add export line
5. Update Controls file
    * Delete unnecessary stuff
    * Add export line
6. Update Summary file
    * Delete unnecessary stuff
    * Add export line
7. Discuss one big styles.js vs embedded in components

## 07 Add Date Navigation

1. Paste entries.js and helpers.js files into App dir
2. Add import for helpers and entries in Apps.js
3. Paste getInitialState into App.js
4. Paste componentDidMount into Apps.js
    * `date: '2016-01-07'`
    * `entries: entries`
5. Remove localStorage stuff from componentDidMount
6. Make sure Summary tag in Apps is right
    * `<Summary date={this.state.date} entries={this.state.entries} />`
7. Add import for helpers in Summary.js
8. Add var defs for date and cals to render function in Summary.js
9. Update handlePressNext/Prev in Controls.js
    * `this.props.setDate(1);`
10. Paste setDate function into App.js
11. Add setDate prop to Controls tag in App.js
12. Flipflop next/prev buttons in Controls.js

## 08 Add EntryList With Filtering

1. Add EntryList tag to App.js
    * `<EntryList date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />`
2. Add deleteEntry function to App.js
3. Import EntryList into App.js
4. Dupe Summary.js to create EntryList.js
5. Import EntryListItem into EntryList.js
6. Dupe EntryList.js to create EntryListItem.js
7. Remove useless imports from EntryListItem.js
8. Rename component and the default export in EntryListItem.js
9. Paste in handleClick and render functions
10. Change tr tags to View tags
11. Change td tags to Text tags
12. Delete className attrs from Text tags
13. Replace delete link with TouchableHighlight from Controls
14. Point TouchableHighlight at this.handleClick
15. Rename handleClick as handlePress
16. Delete preventDefault() from handlePress
17. Import TouchableHighlight at top of EntryListItem.js
18. Paste in button and label styles from Controls.js in EntryListItem.js
19. Add row styles to outmost View in EntryListItem.js thusly
    ```
    const styles = StyleSheet.create({
        center: {
            alignItems: 'center',
        },
        large: {
            fontSize: 40,
        },
        button: {
            borderRadius: 6,
            borderStyle: 'solid',
            borderWidth: 1,
            margin: 3,
        },
        label: {
            padding: 10,
        },
        row: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
        },
    });
    ```
20. Update styles to outmost View in EntryList.js thusly:
    ```
    const styles = StyleSheet.create({
        center: {
            alignItems: 'center',
        },
        large: {
            fontSize: 40,
        },
        column: {
            alignItems: 'flex-end',
            flexDirection: 'column',
            marginTop: 10,
        }
    });
    ```

## 09 Add New Entry Form

1. Dupe Summary.js to create FoodForm.js
2. Rename class and export
3. Paste in `handleSubmit` function
4. Paste in `render` function
5. Import FoodForm into App.js
6. Add FoodForm tag to `render` function in App.js
7. Add currDate/Time vars to `render` function in App.js
8. Add `addEntry` function in App.js
9. Go back to FoodForm.js
10. Gut pretty much everything but imports
11. Change `Summary` to `FoodForm` in class def and export

## 10 Submit To App Store

* Add App Icons
* Update Launch view
* [Exporting Your App for Testing](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/TestingYouriOSApp/TestingYouriOSApp.html#//apple_ref/doc/uid/TP40012582-CH8-SW1)
* [Distributing Your App Using TestFlight](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/DistributingYourAppUsingTestFlight/DistributingYourAppUsingTestFlight.html#//apple_ref/doc/uid/TP40012582-CH37-SW1)
* [Package for Distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html#//apple_ref/doc/uid/TP40012582-CH28-SW1)
* [Submit to iTunes Connect](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html)




