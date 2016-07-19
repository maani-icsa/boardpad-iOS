$('.selected-meeting, .overlay, .meetings-col li').on('click', function(){
    $('.meetings-col').toggleClass('off');
    $( ".overlay" ).fadeToggle( "slow" );
});