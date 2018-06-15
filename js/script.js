function home(){
	$("#login").kendoButton();
};
function perfil(){
    $("#btn_1").kendoButton();
    $("#btn_2").kendoButton();
    $("#1").kendoSplitter({
        orientation: "vertical",
        panes: [
            {collapsible: false}
            ]
    });
};
home();
perfil();