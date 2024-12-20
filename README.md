# cypress_sauce_demo

To run the test use following command

**Pipeline/Workflow**
============================

- Navigate to Actions
- Click on Sauce Demo Tests
- Click on latest run
- Click on reload button aligned with cypress-run
- ![image](https://github.com/user-attachments/assets/a6d094ac-4f36-49aa-b8b8-7b79f73103bc)


Docker on Local
============================

- Install the docker desktop
- [Download Page] https://docs.docker.com/desktop/setup/install/windows-install/
- Start the daemon
- Pull the latest cypress docker image
- [Command] docker pull cypress/included:latest
- Clone the repo
- Navigate to DemoSauceLab directory
- Run the below command to run default browser
[Command] docker run -it -v $PWD:/e2e -w /e2e cypress/included:latest --spec cypress/e2e/*.js

**GUI / Headed**
============================

- npx cypress open
- select the desired browser
- select the file checkout.cy.js

**Headless**
============================

- npx cypress run
or
- npx cypress run --browser <browserName>

**Known Issue Running on Mac**
====================================

Follow the video to resolve the for page load

https://www.youtube.com/watch?v=AdcBb6CAofs
