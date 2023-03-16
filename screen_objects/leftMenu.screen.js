class LeftMenuScreen {
get menuBtn() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']");
}
get trashCanBtn() {
        return $("//*[@text='Trash Can']");
}
}
export default new LeftMenuScreen();