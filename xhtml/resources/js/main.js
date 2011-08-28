/*!
 * main.js
 * 各種スクリプト実行用ファイル
 */

(function($){//start jquery


/**
 * 画像のマウスオーバー設定
 *
 * @require: jquery.js, jquery.mk_hover.js
 * @create: 2011-08-20 [oosugi@skillpartners.co.jp]
 * @modify: not yet
 */

$(function(){
	// set $.fn.mk_hoverSwap - オーバーで「_on」付きの画像と差し替える
	$('img.js-hoverSwap, input[type="image"].js-hoverSwap').mk_hoverSwap();
	
	// set $.fn.mk_hoverLight - オーバーで明るくする
	$('img.js-hoverLight, input[type="image"].js-hoverLight').mk_hoverLight();
	
	// set $.fn.mk_hoverBlink - オーバーで一瞬光る
	$('img.js-hoverBlink, input[type="image"].js-hoverBlink').mk_hoverBlink();
});



/**
 * スムーススクロール設定
 *
 * @require: jquery.js, jquery.regex.js, jquery.mk_smoothScroll
 * @create: 2011-08-20 [oosugi@skillpartners.co.jp]
 * @modify: not yet
 */

$(function(){
	// set $.fn.mk_smoothScroll
	// ページ内アンカーリンクをすべてスムーススクロールにする。
	$('a:regex(href,.*?#):not(a[href=#]):not(a[target])').mk_smoothScroll();
});



})(jQuery);//end jquery


/*
 * Release Notes:
 *
 * 2011-08-19 [oosugi@skillpartners.co.jp]
 *   # スムーススクロール設定作成
 *   # 画像のマウスオーバー設定作成
 */