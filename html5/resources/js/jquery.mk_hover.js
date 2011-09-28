/*!
 * jquery.mk_hover.js
 *
 * Copyright (c) 2011 Skill Partners Inc. All Rights Reserved.
 * 
 * $.fn.mk_hoverSwap
 * $.fn.mk_hoverBlink
 * $.fn.mk_hoverLight
 */

;(function($){


/**
 * $.fn.mk_hoverSwap
 * 
 * @varsion : 0.2
 * @author  : http://www.makinokobo.com - kobo@makinokobo.com
 * @update  : 2011-09-28 - oosugi@skillpartners.co.jp
 *
 *
 * 
 * マウスオーバーで画像差し替え。
 * デフォルトでは、同ディレクトリに「[同名]_on.[同拡張子]」を付けたファイルを置いて使う。
 
$('SELECTOR').mk_hoverSwap({
	on: '_on',  // suffix of mouseon image
	off: '_off', // suffix of mouseout image
	parent: false // 親要素をオーバーしたときにスワップしたい場合はtrueにする
});


$(function(){
	//通常タイプ
	//画像とinput:imageに.hoverSwapを付けたものだけ差し替え
	$('img.hoverSwap, input[type="image"].hoverSwap').mk_hoverSwap();
	
	
	//すべての画像に対し、class属性を付与することなく、
	//「[ファイル名]_off.[拡張子]」の画像だけ「[ファイル名]_ov.[拡張子]」と差し替えるようにする
	$('img,input[type="image"]').mk_hoverSwap({
		on: '_ov',
		off: '_off'
	});
	
	
	
	//親要素（通常はa要素）をオーバーしたときに切り替えたい場合
	//下記設定であれば、a要素にhoverSwapとつけると、a要素をオーバーしたときに内包しているimg要素が切り替わる
	$('a.hoverSwap img').mk_hoverSwap({
		parent: true
	});
	
});
 *
 *
 */

$.fn.mk_hoverSwap = function(options){
	//default options
	var defaults = {
		on: '_on',
		off: '',
		parent: false
	};
	
	var o = $.extend(defaults, options);
	
	this.each(function(){
		var $this = $(this),
			$target = (o.parent) ? $this.parent() : $this,
			img_src = $this.attr('src'),
			dotI = img_src.lastIndexOf('.'),
			ext = img_src.substr(dotI),
			off = o.off + ext,
			on = o.on + ext,
			img_srcOn,
			$img_pre;
		
		if (img_src.match(off)){
			img_srcOn = img_src.replace(off, on);
			
			//preload
			$img_pre = $('<img/>',{ 'src': img_srcOn });
			
			//action
			$target
				.bind('mk_hoverSwapEnter', function(){ $this.attr('src',img_srcOn); })
				.bind('mk_hoverSwapLeave', function(){ $this.attr('src',img_src); })
				.mouseenter(function(){ $(this).trigger('mk_hoverSwapEnter'); })
				.mouseleave(function(){ $(this).trigger('mk_hoverSwapLeave'); });
		}
	});
	
	return this;
};


/**
 * $.fn.mk_hoverBlink
 *
 *
 * @varsion : 0.1
 * @author  : http://www.makinokobo.com - kobo@makinokobo.com
 * @update  : 2011.06.06 - oosugi@skillpartners.co.jp
 *
 *
 * 	usage:
 * 	
 * 	$('SELECTOR').mk_hoverBlink({
 * 		opacity: 0, // set opacity
 * 		speed: 300    // set speed
 * 	});
 *
 */

$.fn.mk_hoverBlink = function(options){
	//default options
	var defaults = {
		opacity: .3,
		speed: 1000
	};
	
	var o = $.extend(defaults, options);
	
	this.bind('mk_hoverBlink', function(){
		var $this = $(this);
		$this.css({ 'opacity': o.opacity });
		$this.stop(true,false).animate({
			'opacity': 1
		}, o.speed);
	});
	
	this.mouseenter(function(){
		$(this).trigger('mk_hoverBlink');
	});
	
	return this;
};



/**
 * $.fn.hoverLight
 *
 * @varsion : 0.1
 * @author  : http://www.makinokobo.com - kobo@makinokobo.com
 * @update  : 2011.06.02 - oosugi@skillpartners.co.jp
 *
 * ・オンマウス時に透明度が変更されるアニメーション機能
 * ・classを付記すると動作するように準備。枠線は不要。
 * ・「明るくなる」のではなく、あくまで「透明度」が変わるため、背景が暗い、例えば黒の場合は、オンマウス要素は暗くなる。
 *
 * Usage:
 * $(SELECTOR).mk_hoverLight({
 * 	opacity: .6,
 * 	speed: 200
 * });
 *
 */


$.fn.mk_hoverLight = function(options){
	//default options
	var defaults = {
		opacity: .6,
		speed: 200
	};
	
	var o = $.extend(defaults, options);
	
	//mouseenter
	this.mouseenter(function(){
		$(this).stop(true, false).animate({ 'opacity': o.opacity }, o.speed);
	});
	
	//mouseleave
	this.mouseleave(function(){
		$(this).stop(true, false).animate({ 'opacity': 1 }, o.speed/2);
	});
	
	return this;
};


})(jQuery);
