/*!
 * $.fn.mk_smoothScroll
 *
 * Copyright (c) 2011 Skill Partners Inc. All Rights Reserved.
 *
 * @varsion: 1.3.2
 * @require: jquery.js, jquery.effects.core.js
 * @create : unknown date [oosugi@skillpartners.co.jp]
 * @modify : 2011-08-29 [oosugi@skillpartners.co.jp]
 */

(function($){//start jquery

$.fn.mk_smoothScroll = function(options){
	//default options
	var defaults = {
		speed: 1000,
		shift: 0,
		easing: 'easeOutQuart',
		eventName: 'mk_smoothScroll'
	};
	var o = $.extend(defaults, options);
	
	this.bind(o.eventName, function(){
		var href = $(this).attr('href');
		var hash= this.hash;
		var page = href.substr(0,href.indexOf('#'));
		
		// リンク先が同一ページ内でなければ飛ばす
		if(window.location.pathname != page && !href.match(/^#/)) {
			window.location = href;
		}
		else {
			// リンク先が同一ページ内だったらアンカーリンクがあるページでだけ実行
			var $target = $(hash == '#_top' ? 'body' : hash);
			if ($target.length){
				var top = $target.offset().top;
				$($.browser.safari ? 'body' : 'html').animate({scrollTop:top+o.shift}, o.speed, o.easing);
			}
		}
	});
	
	this.click(function(e){
		$(this).trigger(o.eventName);
		e.preventDefault();
		e.stopPropagation();
	});
	
	return this;
};

})(jQuery);//end jquery



/*
 * Release Notes:
 *
 * 2011-08-29 [oosugi@skillpartners.co.jp]
 *   @modify: 同一ページ外で return していたのを window.location = hrefするのに修正
 *
 * 2011-08-09 [oosugi@skillpartners.co.jp]
 *   @modify: 微調整
 */