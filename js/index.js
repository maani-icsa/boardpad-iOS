// sidebar
$('.selected-meeting, .overlay, .meetings-col li').on('click', function(){
    $('.meetings-col').toggleClass('off');
    $( ".overlay" ).fadeToggle( "slow" );
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
