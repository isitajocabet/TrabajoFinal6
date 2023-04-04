import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';          

    //Extra Points add select the following behavior
    private colorButtonDropdown: string = "//button[@class='color_dropdown_toggle form_field_control']"; 
    //*private favoritesToggle: string = '//*[@id=":ri:"]/form/div/div/div[4]/label/div/span';
      //*private optionList1: string = '//*[@id="project_list_view_style_option"]/div[2]/span/button';
      //*private optionList:2 string = '//*[@id="project_list_view_style_option"]/div[2]/span/button';
      //*private optionList:2 string = '//div[normalize-space()="List"]';
    //*private optionBoardView: string = '//*[@id="project_list_board_style_option"]/div[2]/span/button';

    constructor(){
        super();
    }

    
    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    // async setProjectColor() {
        
    //     await ElementActions.selectColorOption(this.colorDropdown);

    async ClickButtonDropdown(projectColor: string) {     
        projectColor = `//span[normalize-space()='${projectColor}']`;
        console.log(projectColor);
      
        await ElementActions.setColor(this.colorButtonDropdown, projectColor);   
    } 
    
    // async setProjectfavoritestoggle() {
    //     await ElementActions.click(this.favoritesToggle);
    // }

    // async setProjectOptionList1() {
    //     await ElementActions.click(this.optionListView);
    // }

    // async setProjectOptionBoardView() {
    //     await ElementActions.click(this.optionBoardView);
    // }

   
    async ClickTextOption(textName: string){        
        textName = `//div[normalize-space()="${textName}"]`;  
        console.log(textName);
        await ElementActions.click(textName);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
       
    }
}

export const addProjectPane = new AddProject();