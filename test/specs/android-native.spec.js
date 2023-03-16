describe('Android Native Feature Tests', ()=> {
    xit('Access an Activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    xit('Working with dialog boxes', async () => {
        const dialogAlertCallButton = '//android.widget.Button[@content-desc="OK Cancel dialog with a message"]';
        const alertTitle = '//*[@resource-id="android:id/alertTitle"]';
        const okButton = '//*[@resource-id="android:id/button1"]';
        const cancelButton = '//*[@resource-id="android:id/button2"]';

        await $(dialogAlertCallButton).click();
        await expect($(alertTitle)).toExist();
        console.log('Alert Text -->', await driver.getAlertText());
        await driver.acceptAlert();
        await expect($(alertTitle)).not.toExist();

        await $(dialogAlertCallButton).click();
        await expect($(alertTitle)).toExist();
        await driver.dismissAlert();
        await expect($(alertTitle)).not.toExist();

        await $(dialogAlertCallButton).click();
        await expect($(alertTitle)).toExist();
        await $(okButton).click();
        await expect($(alertTitle)).not.toExist();

        await $(dialogAlertCallButton).click();
        await expect($(alertTitle)).toExist();
        await $(cancelButton).click();
        await expect($(alertTitle)).not.toExist();
    })

    xit('Access an Activity directly', async () => {
        await $('~App').click();
        await $('~Activity').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();
        await expect($('//*[@text="Secure Dialog"]')).toExist();
    })

    xit('Horisontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    })

    it('Scrolling task', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")
        const startDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        //await $('~Next month').click();
        await $('//*[@text="10"]').click();
        await $('//*[@text="OK"]').click();
        const endDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await expect(startDate).not.toEqual(endDate);
    })
    });