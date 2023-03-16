const addNoteEditScreen = require("./screen_objects/addNote.Edit.screen");
const addNoteModeSelectorScreen = require("./screen_objects/addNote.ModeSelector.screen");
const addNoteScreen = require("./screen_objects/addNote.screen");
const editNoteMenuScreen = require("./screen_objects/editNote.Menu.screen");
const leftMenuScreen = require("./screen_objects/leftMenu.screen");

describe('Android Notepad Feature Tests 2', ()=> {

    async function skipFunction(){
        await addNoteScreen.skipBtn.click();
    };

    xit('First test 2', async () => {
        await driver.pause(3000);
    })

    it('Skip tutorial 2', async () => {
        await skipFunction();
        await expect(addNoteScreen.addBtn).toBeDisplayed();
    })

    it('add note 2', async () => {
        await addNoteScreen.addCrossBtn.click();
        await addNoteModeSelectorScreen.textBtn.click();
        await expect(addNoteEditScreen.editingLabel).toBeDisplayed();

        await addNoteEditScreen.titleInput.setValue('Test counter Title');
        await addNoteEditScreen.bodyInput.setValue('One\nTwo\nThree\nFour');
        await addNoteEditScreen.backBtn.click();
        await addNoteEditScreen.editBtn;
        await expect(addNoteEditScreen.editBtn).toBeDisplayed();
        await expect(addNoteEditScreen.viewNoteLabel)
        .toHaveText('One\nTwo\nThree\nFour');
        await addNoteEditScreen.backBtn.click();
    })

    async function  addNote(title, content){
        await addNoteScreen.addCrossBtn.click();
        await addNoteModeSelectorScreen.textBtn.click();
        await addNoteEditScreen.titleInput.setValue(title);
        await addNoteEditScreen.bodyInput.setValue(content);
        await addNoteEditScreen.backBtn.click();
        await addNoteEditScreen.editBtn;
        await addNoteEditScreen.backBtn.click();
    };

    it('delete note 2', async () => {
        const title = 'Note to delete title';
        const content = 'Note to delete content';
        await addNote(title, content);
        
        await addNoteScreen.noteLabel(title).click();
        await addNoteEditScreen.menuBtn.click();
        await editNoteMenuScreen.deleteBtn.click();
        await driver.acceptAlert();
        await leftMenuScreen.menuBtn.click();
        await leftMenuScreen.trashCanBtn.click();
        await expect(addNoteEditScreen.noteLabel(title)).toBeDisplayed();
        await addNoteEditScreen.noteLabel(title).click();
        await expect(addNoteEditScreen.noteLabel(title)).toBeDisplayed();
        await expect(addNoteEditScreen.noteLabel(content)).toBeDisplayed();
    })
    });