<div align="center">
<h1> Web UI Automation project 🤖 </h1>

Web UI Automation project for site `Random Calendar Dates generator` using Playwright tool.

</div>


## 📦 Installation
- Project requires NodeJs and npm installed as pre-requisite.

 To install and run this project, follow these steps:
```bash
git clone <repo_path>
npm install
```

## 🎮 Run
 To run the tests using `npm` scripts (added in scripts section in package.json file)
 - To run in headed UI mode :
    ```bash
    npm run test:ui
    ```
    which runs all tests in playwright UI runner and shows the results as:

    ![alt text](UI-mode.png)

 
 - To run in headless mode
   ```bash
   npm run test:headless
   ```
   which shows result in console as:

   ![alt text](headless-mode.png)



  - After executing your Playwright test suite, a detailed HTML report is generated, providing a structured view of test execution.
  To open this report locally in your browser : 
    ```bash
    npm run show:report
    ```

  which opens the html report in browser as :
  ![alt text](html-report.png)

  Detailed info for the steps: 
  ![alt text](<detailed-html report.png>)
