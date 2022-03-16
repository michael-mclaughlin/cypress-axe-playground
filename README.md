# CYPRESS-AXE-PLAYGROUND

This is a playground to become familiar with the automation possibilities using AXE-Core/ Cypress/ Pa11y/ Pa11y-axe.

## Webapp Automation using Cypress

Cypress is a JavaScript-based end-to-end testing framework that uses Mocha, Chai, Chai-signon, jQuery-signon within the JavaScript testing framework.

Running cypress spins up a browser and executes the tests defined in the cypress/integration/ folder

More documentation [here.](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## What you need to do before you start...

### You must have a GitHub, GitLab, or an Indeed personal GitHub account in order to use this repo.

Permissions will only be granted to those who have one of account types specified above.

If you need to set up a `GitHub account`, you can quickly set one up with the link to this documentation

```
https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git
```

### Pa11y

Pa11y is your automated accessibility testing pal.
It runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process:
Go to `https://pa11y.org/` to get more info, go to the GitHub `https://github.com/pa11y/pa11y` to learn more about the repo itself (You will need node.js so if you don't have node...run this command to install node `$brew install node` before you continue. If you don't have Homebrew installed...go to `https://docs.brew.sh/Installation` to install then run the `$brew install node` command and follow the steps accordingly...)

### AXE-CORE

Axe is an accessibility testing engine for websites and other HTML-based user interfaces. It's fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing. To get more info, go to `https://github.com/dequelabs/axe-core`

### Cypress

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications. To learn more, go to: `https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell`

We make it possible to:

```
Set up tests
Write tests
Run tests
Debug Tests
```

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium. This enables you to write faster, easier and more reliable tests.

## Steps to get up and running

You will also need to be added as a member to the repo. (Default member access: developer)
Contact Mike Mclaughlin through:

```
email: mjmjr@fastmail.com
```

to receive your member access. (Default member access: developer)

Clone the repo...then, save it somewhere on your computer where you'll remember its location. (I use my Documents folder):

```
git clone https://github.com/michael-mclaughlin/cypress-axe-playground.git
```

Open your editor/IDE and bring the whole project into your editor.
After that, use these commands (in order they are listed) to change directories into the project folder and install the node_modules with NPM.
These 2 commands will provide you with all the necessary dependencies .etc that are needed to run the project. (See the `package.json` at the root level of the application to learn what packages are being used for this projects. See more about `npm install` here: `https://docs.npmjs.com/cli/v6/commands/npm-install`)

```
cd <directory where you stored the repo>/cypress-axe-playground
```

```
npm install

(you must have set up your member access first. Contact Mike Mclaughlin through options above to receive member access.)
```

## NPM script Commands - (After following the above steps...)

### In your FIRST terminal window (one of two terminal windows needed):

`The following command is great for folks that are not quite so technical - Designers, UX designers, QA's that are functional testers`

To start your the application, run the pa11y tests automatically within the console/terminal window AND see the application within the browser run:

```
npm run start
```

After starting the application, you should see logs that look similar to this:

```

> cypress-playground@1.0.0 start /Users/<your user name goes here>/indeed/cypress-playground
> webpack serve --config ./webpack.config.js --mode development

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from undefined
ℹ ｢wds｣: Content not from webpack is served from /Users/<username>/indeed/cypress-playground/dist
ℹ ｢atl｣: Using typescript@4.1.2 from typescript
ℹ ｢atl｣: Using tsconfig.json from /Users/<username>/indeed/cypress-playground/tsconfig.json
ℹ ｢atl｣: Checking started in a separate process...
ℹ ｢atl｣: Time: 27ms

```

-   The project will run on `http://localhost:8080`

(The Webpage that loads within the browser will look like this image below...)

[![npm-run-start.png](https://i.postimg.cc/rwskth9R/npm-run-start.png)](https://postimg.cc/svk8k4q3)

```
(you may need to scroll up within the console window to see pa11y error results)
```

Now you are ready to start playing with Cypress/ AXE-Core/ PA11Y!
The next commands show you how to play with each on your own. Happy Learning!

## Cypress/AXE-Core/Pa11y commands

#### Command to run all tests within a SECOND terminal window, (Pa11y, Cypress, Axe-core) all together at once `(PREFERRED METHOD)`:

`The following command is great for folks that ARE more technical - Engineers, UX Devs, Automation Engineers`

This command: `starts the application` running in localhost, opens a `new browser window` and renders the application, `opens and runs the cypress tests with axe core` AND `runs the pa11y tests` all concurrently.
`pa11y errors will show within the terminal window so user needs to scroll up within the terminal window to see errors from pa11y`
`cypress errors will show within the GUI`

```
npm run start:test
```

A `Cypress GUI` will appear within the web browser where a person can choose which tests to run based off of their naming convention. To use the `Cypress GUI` to run the cypress tests, just pick a test with a `.spec.js` file name and click on that specific test link within the `Cypress GUI`. Another window will pop up within the browser that shows the progress AND results for the tests in question.

(The image below shows what everything looks like within the browser after the webpage loads...)

[![npm-run-start-test.png](https://i.postimg.cc/nc2tw8LP/npm-run-start-test.png)](https://postimg.cc/4mYMmSV6)

```
(you may need to scroll up within the console window to see pa11y error results)
```

## How to use the Cypress GUI

Once the test readouts are complete within the `Cypress GUI`, you can now go into a more detailed overview of the errors by pinning the test failure in question and inspecting the `Cypress GUI` after you pin the failure.

(Below is an image of what this will look like on successful completion of this workflow:)
[![how-to-use-gui.png](https://i.postimg.cc/6qQ3wkpY/how-to-use-gui.png)](https://postimg.cc/Q9RsJn5T)

### Steps to use Cypress GUI

```
1: Pin the error within the Cypress GUI (Once pinned the information will be copied to the GUI console...see above image)
2: Inspect the image of the app that is WITHIN the Cypress GUI (Once you inspect, you will see a more detailed view within the console...see above image)
3: The error information will surface this information:
    - Error information itself
    - Which nodes the errors are being detected on
    - What the error means with a link provided to go to information on how to fix and what the error means
    - Severity of error
    - Which WCAG levels the errors are related to
    - More information related to the errors in question that might be usable later
```

### Cypress Individual commands

To open the cypress gui use a SECOND terminal window:

```
npm run cy:open
```

To run the cypress gui in DEBUG mode run:

```
npm run cy:debug
```

To run the cypress with AXE in the gui run:

```
npm run cy:axe
```

To run the cypress reporter to save the webpage results:

```
npm run cy:reporter
```

### PA11Y Individual commands

#### PA11Y is browser based so results will present in the terminal/console

To run PA11Y on the app use a SECOND terminal window:

```
npm run pa11y
```

To run PA11Y with section 508 rules (fallback...not preferred):

```
npm run pa11y:508
```

To run PA11Y with AXE rules (wcag and 508 rules - preferred):

```
npm run pa11y:axe
```

To run PA11Y with AXE rules and report it to a .json file:

```
npm run pa11y:reporter
```

### If you need some help:

```
Mike Mclaughlin
email: mjmjr@fastmail.com
```
