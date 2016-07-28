// sidebar
$('.selected-meeting, .overlay, .meetings-col li').on('click', function(){
    $('.meetings-col').toggleClass('off');
    $( ".overlay" ).fadeToggle( "fast" );
});

// settings dropdown
$('#settings-dropdown-toggle').on('click', function(){
    $('#settings-dropdown').fadeToggle("fast");
});

$('.page-body').on('click', function(){
    $('#settings-dropdown').fadeOut();
    $('#settings-dropdown, #settings-dropdown-toggle').on('click', function(e) {  
    e.stopPropagation();
	});
});


// organisation-dropdown
$('#organisation-dropdown-toggle').on('click', function(){
    $('#organisation-dropdown').fadeToggle();
});

$('.page-body').on('click', function(){
    $('#organisation-dropdown').fadeOut("fast");
    $('#organisation-dropdown, #organisation-dropdown-toggle').on('click', function(e) {  
    e.stopPropagation();
	});
});


// toggle fullscreen
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}