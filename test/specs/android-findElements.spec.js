

xdescribe('Android ELements tests', ()=> {
    xit('Find Element by accessibility id', async () => {
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
    
    xit('Find Element by class name', async () => {           
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");
    })

    xit('Find Elements by xpath', async () => {           
        const allertDialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await allertDialog.click();
        const listWiev = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
        await listWiev.click();

        const commandTwo = await $('//android.widget.TextView[@text="Command two"]');
        await commandTwo.click();

        const finalLabel = await $('//android.widget.TextView');
        await expect(finalLabel).toHaveText('You selected: 1 , Command two');
    })

    xit('Find Elements by UIAutomator', async () => {           

        await $('android=new UiSelector().textContains("Alert")').click();
    })

    xit('Find many Elements', async () => {           
        const expectedNameList = [
            "API Demos","Access'ibility","Accessibility",
        "Animation","App","Content","Graphics","Media",
        "NFC","OS","Preference","Text","Views"];

        const classNames = await $$('android.widget.TextView');
        const namesList = [];
        for (const element of classNames) {
            namesList.push(await element.getText());
        }
        await expect(expectedNameList).toEqual(namesList);
    })

    it('Type text to input', async () => {           
        const country = 'Canada';
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();
        const textField = await $('android.widget.AutoCompleteTextView');
        await textField.addValue(country);
        await expect(textField).toHaveText(country);

    })

    });