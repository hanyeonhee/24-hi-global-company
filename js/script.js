$(function() {
    // 1. 메뉴 효과 [cite: 2750, 2751]
    $('.main-menu > li').mouseover(function() {
        $(this).find('.sub-menu').stop().slideDown();
    }).mouseout(function() {
        $(this).find('.sub-menu').stop().slideUp();
    });

    // 2. 슬라이드 애니메이션 (위-아래) [cite: 2760, 2761, 2762]
    var slideIdx = 0;
    setInterval(function() {
        slideIdx++;
        if(slideIdx > 2) slideIdx = 0;
        
        var topPos = slideIdx * -300;
        $('.slide-list').animate({ top: topPos + 'px' }, 500);
    }, 3000);

    // 3. 탭 기능 [cite: 2743]
    $('.tab-menu li a').click(function(e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        
        $('.tab-menu li').removeClass('active');
        $(this).parent().addClass('active');
        
        $('.tab-content').hide();
        $('.tab-content').eq(idx).show();
    });

    // 4. 레이어 팝업 열기/닫기 [cite: 2766]
    $('.pop-open').click(function(e) {
        e.preventDefault();
        $('#modal').fadeIn();
    });
    
    $('.pop-close').click(function() {
        $('#modal').fadeOut();
    });
});