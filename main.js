$(function(){

    //「:not()」が否定疑似クラスで、最初の画像以外を非表示指定。
    //「.hide()」が要素を非表示にする命令。
    //「setInterval()」で、一定間隔繰り返し処理命令。タイマー処理とも言います。
    //この場合、最初に表示された画像をフェードアウト。次の画像をフェードイン処理の繰り返し。
    //3000ミリ秒と設定、3秒かけて画像が切り替え。
    //「.appendTo()」で、フェードアウト画像をボックス内の一番後ろに移動処理。
    //これにより、繰り返し画像が切り替わるように動きます。
    $(function(){
        $(".mainvisual img:not(:first-child)").hide();
        setInterval(function() {
            $(".mainvisual img:first-child").fadeOut(0).next("img").fadeIn(3000).end().appendTo(".mainvisual");
        },3000);
    });

    //section "style"の"splide"処理
    //768px以下はスライド１枚。以外はスライド２枚。
    var splide = new Splide( '.splide', {
        perPage: 2,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
        type: "loop",
    } );
    splide.mount();
    //ここまで。
    
    //ウィンドウ高さ700pxから処理開始
    // 変数にクラスを入れる
    var btn = $('.top-btn');
    //スクロールしてページトップから700pxに達したらボタンを表示
    $(window).on('load scroll', function(){
        if($(this).scrollTop() > 700) {
            btn.addClass('jump');
        }else{
            btn.removeClass('jump');
        }
    });
    //スクロールしてトップへ戻る
    btn.on('click',function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });
    
    //nav画面表示
    $('.hamburger').click(function () {
        $('.hamburger, #nav').
        toggleClass('active');
    });

    //ハンバーガーメニュー内,リンクへ移動
    //リンク先をクリックでハンバーガーメニューを閉じ、リンク先へスクロール
    $('#nav a').on('click', function() {
        $('.hamburger, #nav').removeClass('active');
    });
    $('a[href^="#"]').click(function(){
        var speed = 500;
        //var speed = 500;でスクロールの速さ調整
        var href= $(this).attr("href");
        //var href= $(this).attr(“href”); でリンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //空白or#のみだったらリンク先を「html」に設定
        var position = target.offset().top;
        //リンク先の座標を取得する
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;//スムーズスクロールを実行
    });

    // ウインドウをスクロールしたら、item画面ふわっと表示。
	$(window).scroll(function (){
        // .js-fadeのクラスを持つ要素（それぞれに対して）
		$('.js-fade').each(function(){
            // この要素のスクロール位置（上から）
			var pos = $(this).offset().top;
            // ウインドウのスクロール量（上から）
			var scroll = $(window).scrollTop();
            // ウインドウの縦幅
			var windowHeight = $(window).height();
            // ウインドウのスクロール量（上から）が
            // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
			if (scroll > pos - windowHeight + 100){
                // .scrollというクラス.js-fadeに付与する
				$(this).addClass('scroll');
			}
		});
	});
    
});
