$(function() {
    // 1. 네비게이션: 메인 메뉴 호버 시 서브 메뉴 슬라이드
    $('.main-menu > li').mouseenter(function() {
        $(this).find('.sub-menu').stop().slideDown(300);
    }).mouseleave(function() {
        $(this).find('.sub-menu').stop().slideUp(300);
    });

    // 2. 슬라이드: 3초마다 위쪽으로 이동하는 무한 루프
    setInterval(function() {
        $('.slide-list').animate({ top: '-350px' }, 500, function() {
            // 첫 번째 아이템을 리스트 끝으로 보내고 top 위치 초기화
            $(this).append($('.slide-item').first());
            $(this).css('top', '0');
        });
    }, 3000);

    // 3. 탭 메뉴: 공지사항/갤러리 전환
    $('.tab-menu li').click(function() {
        $('.tab-menu li').removeClass('active');
        $(this).addClass('active');

        var idx = $(this).index();
        $('.tab-content').removeClass('active');
        $('.tab-content').eq(idx).addClass('active');
        return false; // 클릭 이벤트 버블링 방지
    });

    // 4. 모달 팝업: 첫 번째 공지사항 클릭 시 열기
    $('.pop-open').click(function() {
        $('#modal').fadeIn();
        return false;
    });

    $('.pop-close').click(function() {
        $('#modal').fadeOut();
    });
});