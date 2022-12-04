$(function(){
    $(window).on('scroll',function(){
        var height = $(document).scrollTop();
        var codesec = $('.codesection')
        
        if(height>=300){
            codesec.css('visibility','visible')
            codesec.addClass('animate__fadeInUp') 
            codesec.removeClass('animate__fadeOutDown')
        } else {
            // codesec.css('visibility','hidden')
            codesec.removeClass('animate__fadeInUp')
            codesec.addClass('animate__fadeOutDown')
        }
    })

    $('.tab-options').on('click',function(){
        $(this).addClass('tab-option-actived').siblings().removeClass('tab-option-actived');
       if($(this).prop('id')==='about-tab'){
        $('#skill-content').hide();
        $('#about-content').show();
       }else if($(this).prop('id')==='skill-tab'){
        $('#about-content').hide();
        $('#skill-content').show();
       }
    })
    $('img').attr('draggable','false')
})