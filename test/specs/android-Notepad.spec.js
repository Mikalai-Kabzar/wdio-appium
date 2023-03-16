import addNoteEditScreen from "../../screen_objects/addNote.Edit.screen";
import addNoteModeSelectorScreen from "../../screen_objects/addNote.ModeSelector.screen";
import addNoteScreen from "../../screen_objects/addNote.screen";
import editNoteMenuScreen from "../../screen_objects/editNote.Menu.screen";
import leftMenuScreen from "../../screen_objects/leftMenu.screen";

describe('Android Notepad Feature Tests', ()=> {

    before('Before hook', async () => {
        console.log('Before hook - log message');
    })
    beforeEach('Before each hook', async () => {
        console.log('Before each hook - log message');
        console.log('After hook - log message');
        //let data = await fetchAsync('http://127.0.0.1:4723/wd/hub/status');
        //console.log('http://127.0.0.1:4723/wd/hub/status response is');
        //console.log(data);

    })

    // async function fetchAsync (url) {
    //     let response = await fetch(url);
    //     let status = await response.status;
    //     return status;
    //   }

    after('After hook', async () => {
        console.log('After hook - log message');
        //let data = await fetchAsync('http://127.0.0.1:4723/wd/hub/status');
        //console.log('http://127.0.0.1:4723/wd/hub/status status is');
    })

    afterEach('After each hook', async () => {
        console.log('After each hook - log message');
    })

    async function skipFunction(){
        await addNoteScreen.skipBtn.click();
    }

    xit('First test', async () => {
        await driver.pause(3000);
    })

    it('Skip tutorial', async () => {
        await skipFunction();
        await expect(addNoteScreen.addBtn).toBeDisplayed();
    })

    it('add note', async () => {
        await addNoteScreen.addCrossBtn.click();
        await addNoteModeSelectorScreen.textBtn.click();
        await expect(addNoteEditScreen.editingLabel).toBeDisplayed();

        await addNoteEditScreen.titleInput.setValue('Test counter Title');
        await addNoteEditScreen.bodyInput.setValue('One\nTwo\nThree\nFour');
        //await addNoteEditScreen.backBtn.click();
        await driver.back();
        await driver.pause(100);
        await driver.back();
        await addNoteEditScreen.editBtn;
        await expect(addNoteEditScreen.editBtn).toBeDisplayed();
        await expect(addNoteEditScreen.viewNoteLabel)
        .toHaveText('One\nTwo\nThree\nFour');
        //await addNoteEditScreen.backBtn.click();
        await driver.back();
    })

    async function  addNote(title, content){
        await addNoteScreen.addCrossBtn.click();
        await addNoteModeSelectorScreen.textBtn.click();
        await addNoteEditScreen.titleInput.setValue(title);
        await addNoteEditScreen.bodyInput.setValue(content);
        await driver.back();
        await driver.pause(100);
        await driver.back();
        //await addNoteEditScreen.backBtn.click();
        await addNoteEditScreen.editBtn;
        await driver.back();
        //await addNoteEditScreen.backBtn.click();
    }

    it('delete note', async () => {
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