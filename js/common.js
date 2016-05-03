$(document).ready(function(){
	$('#menu').slicknav();

 

        var btn_up = document.getElementById('btn_up')
       window.onscroll = function () { // при скролле показывать и прятать блок
        if ( window.pageYOffset > 0 ) {
            btn_up.style.display = 'block';
        } else {
            btn_up.style.display = 'none';
        }
    };
	
});