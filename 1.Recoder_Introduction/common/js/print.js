//*************************************************************************************************
function openPrintWindow(){
//*************************************************************************************************
    window.open(window.location.href,"printWindow");
}

$(document).ready(function(){
	if(window.name == "printWindow"){
		try{
			document.getElementById("print_css").media = "all";
			document.getElementById("header").style.height = "62px";
		}catch(e){
		}
	}
});

$(window).load(function() {
	if(window.name == "printWindow"){
		setTimeout("window.print()", 100);
	}
});
