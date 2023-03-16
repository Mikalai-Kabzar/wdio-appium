class AddNoteScreen {
get skipBtn() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
}

get addBtn() {
        return $("//*[@text='Add note']");
}

get addCrossBtn() {
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/main_btn1']");
}

noteLabel(title) {
        return $("//*[@text='"+title+"']");
}

}

export default new AddNoteScreen();