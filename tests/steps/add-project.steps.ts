import { Given, When } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { addProjectPane } from "../../src/pages/components/add-project.page";

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});

Given('the user selects the {string} color on the Add Project popup', async function (this: Context, projectColor: string) {
    this.scenarioContext['COLOR'] = projectColor;
    await addProjectPane.ClickButtonDropdown(projectColor);
});

Given('the user select the {string} Toggle on the Add Project popup', async function (this: Context, textNameOption: string) {
    this.scenarioContext['NAMEOPTION'] = textNameOption;
    await addProjectPane.ClickTextOption(textNameOption);
})

Given('the user select the {string} view option on the Add Project popup', async function (this: Context, textNameOption: string) {
    this.scenarioContext['VIEWOPTION'] = textNameOption;
    await addProjectPane.ClickTextOption(textNameOption);
})

When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
});
