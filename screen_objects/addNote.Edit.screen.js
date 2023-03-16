class AddNoteEditScreen {
get editingLabel() {
        return $("//*[@text='Editing']");
}
get titleInput() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']");
}
get bodyInput() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']");
}
// get backBtn() {
//         return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/back_btn']");
// }
get editBtn() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']");
}
get viewNoteLabel() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']");
}
get menuBtn() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']");
}
noteLabel(title) {
        return $("//*[@text='"+title+"']");
}
}

export default new AddNoteEditScreen();