document.addEventListener('DOMContentLoaded', () =>{
    // 윈도우 시작할때, 캐릭터 화살표 보이게 하기
    $('.fa-angle-right').addClass('on');

    // 윈도우 시작하면 화면 맨 위로 이동
    $('body,html').stop().animate({"scrollTop":0},1500,'swing');

    var wt = $(window).width();
    $('#container > div').width(wt);

    // container 가로크기 만큼 body의 높이값 지정
    var Length = $('#container > div').length; //10
    var containerWid = wt * Length;
    $('body').height(containerWid);

    var start = setInterval(function(){ //맨처음 시작
        $('.content1 > section').addClass("on");
    },500);
    console.log(containerWid);

    var lastScrollTop = 0; //마지막 스크롤값

    //스크롤 움직일때
    $(window).scroll(function(){
        // var scroll = $(window).scrollTop(); //현재 스크롤 위치값
        // $('#container').css({"transform":"translateX(-" + scroll + "px)"});

        var winW = $(window).width();
        var winH = $(window).height();

        var H = containerWid - winH;
        var W = containerWid - winW;
        var R = W / H ; //가로세로 비율

        var scrollTop = $(window).scrollTop(); //현재 스크롤 위치
        var scrollR = scrollTop * R;

        $('#container').css({"transform":"translateX(-" + scrollR + "px)"}) //가로세로 비율만큼 스크롤 이동


        //캐릭터 움직이기
        if(scrollTop > lastScrollTop){
            //스크롤 내릴때
            //현재 스크롤 값이 이전 스크롤 보다 크다
            $('.character').removeClass('left')
            $('.character').addClass('on')

        }else{
            //스크롤 올릴때
            //현재 스크롤 값이 이전 스크롤 보다 작다
            $('.character').addClass('left')
            $('.character').addClass('on')
        }

        lastScrollTop = scrollTop;


        //스크롤이 멈추면 0.5초 뒤에 애니메이션 멈춰라
        clearTimeout( $.data(this,"scrollCheck"));

        $.data(this,"scrollCheck", setTimeout(function(){
            $('.character').removeClass('on');
        },500));

        // 캐릭터 움직이기 시작하면 화살표 사라지게 만들기
        if (scrollTop == 0) $(".fa-angle-right").addClass('on');
        else $(".fa-angle-right").removeClass('on');

        //1
        if(scrollTop>= wt*0 && scrollTop<wt*1){
            //내용물 움직임 시작
            $(".content1 > section").addClass('on');
        }else{//움직임 취소
            $(".content1 > section").removeClass('on');
        }
        //2
        if(scrollTop>= wt*1 && scrollTop<wt*2){
            $(".content2 > section").addClass('on');
        }else{
            $(".content2 > section").removeClass('on');
        }
        //3
        if(scrollTop>= wt*2 && scrollTop<wt*3){
            $(".content3 > section").addClass('on');
        }else{
            $(".content3 > section").removeClass('on');
        }
        //4
        if(scrollTop>= wt*3 && scrollTop<wt*4){
            $(".content4 > section").addClass('on');
        }else{
            $(".content4 > section").removeClass('on');
        }
        //5
        if(scrollTop>= wt*4 && scrollTop<wt*5){
            $(".content5 > section").addClass('on');
        }else{
            $(".content5 > section").removeClass('on');
        }
        //6
        if(scrollTop>= wt*5 && scrollTop<wt*6){
            $(".content6 > section").addClass('on');
        }else{
            $(".content6 > section").removeClass('on');
        }
        //7
        if(scrollTop>= wt*6 && scrollTop<wt*7){
            $(".content7 > section").addClass('on');
        }else{
            $(".content7 > section").removeClass('on');
        }
        //8
        if(scrollTop>= wt*7 && scrollTop<wt*8){
            $(".content8 > section").addClass('on');
        }else{
            $(".content8 > section").removeClass('on');
        }
        //9
        if(scrollTop>= wt*8 && scrollTop<wt*9){
            $(".content9 > section").addClass('on');
        }else{
            $(".content9 > section").removeClass('on');
        }
        //10
        if(scrollTop>= wt*9 && scrollTop<wt*10){
            $(".content10 > section").addClass('on');
        }else{
            $(".content10 > section").removeClass('on');
        }
    });


    //키보드로
    $(document).keydown(function(e){//이벤트객체
        if(e.keyCode == 39){//오른쪽 방향 키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow + 50);
        }

        if(e.keyCode == 37){//왼쪽 방향 키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow - 50);
        }
    });

    // 이모티콘 관련
    const emoji_list = document.getElementsByClassName('emoji');
    const emoji_left_btn = document.getElementsByClassName('fa-chevron-left')[0];
    const emoji_right_btn = document.getElementsByClassName('fa-chevron-right')[0];
    let current_emoji = 0;
    
    emoji_left_btn.addEventListener('click', ()=>{
        if (current_emoji == 0) {
            current_emoji = emoji_list.length - 1;
        }
        else current_emoji--;

        for (let i = 0; i < emoji_list.length; i++) {
            if (current_emoji == i) emoji_list[i].style.setProperty('display', 'block');
            else emoji_list[i].style.setProperty('display', 'none');
        }
    })

    emoji_right_btn.addEventListener('click', ()=>{
        if (current_emoji == emoji_list.length - 1) {
            current_emoji = 0;
        }
        else current_emoji++;

        for (let i = 0; i < emoji_list.length; i++) {
            if (current_emoji == i) emoji_list[i].style.setProperty('display', 'block');
            else emoji_list[i].style.setProperty('display', 'none');
        }
    });


    // 설명 팝업창
    $('div.btnall span').click(function(){
        $('.pop').fadeIn();
    })
    $('button').click(function(){
        $('.pop').fadeOut();
    })
});