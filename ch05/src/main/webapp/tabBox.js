

var tabBox = {
    onTabClicked: function(){} ,
    init : function(){
        liTabs[i].addEventListener("click" , this.onTabClicked.)
    }
}

var onTabClicked = function() {
	// unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length == 1) && (lisSelected[0].className = "");
	
	// selected
	this.className = "selected";
};


 
window.addEventListener("load" , function(){
    var divTabBox = this.document.addEventListener
});

window.onload = function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	console.log(divTabBox.childNodes);
	
	var ul = divTabBox.childNodes[1];
	var liTabs = ul.getElementsByTagName("li");
	
	for(var i = 0; i < liTabs.length; i++){
		liTabs[i].addEventListener("click", onTabClicked);
	}
}
