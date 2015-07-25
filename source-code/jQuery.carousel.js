/**
@author sheilasun
*/
(function($) {
	$.fn.carousel = function(options) {
		var opts = $.extend(true, {}, $.fn.carousel.defaults, options);

		/* 向后共翻step页数，step不传值则向后翻一页 */
		function goNext($content, $quickNav, step) {
			step = step || 1;
			if (opts.effect === 'fade') {
				for (var i = 0; i < step; i++) {
					$content.find('li').first().insertAfter($content.find('li').last());
				}
				setCurrentItem($content, $quickNav);
				$content.find('li').first().hide();
				$content.find('li').first().fadeIn(opts.duration);
			} else if (opts.effect === 'slide') {
				$content.animate({
					left: $content.itemWidth * (-1) * step
				}, opts.duration, function() {
					for (var i = 0; i < step; i++) {
						$content.find('li').first().insertAfter($content.find('li').last());
					}
					$content.css('left', 0);
					setCurrentItem($content, $quickNav);
				});
			}

		}

		/* 向前共翻step页数，step不传值则向前翻一页 */
		function goPrev($content, $quickNav, step) {
			step = step || 1;
			for (var i = 0; i < step; i++) {
				$content.find('li').first().before($content.find('li').last());
			}
			if (opts.effect === 'fade') {
				setCurrentItem($content, $quickNav);
				$content.find('li').first().hide();
				$content.find('li').first().fadeIn(opts.duration);
			} else if (opts.effect === 'slide') {
				$content.css('left', $content.itemWidth * step * (-1));
				$content.animate({
					left: 0
				}, opts.duration, function() {
					setCurrentItem($content, $quickNav);
				});
			}
		}

		/* 记下当前页索引，并改变圆点导航样式 */
		function setCurrentItem($content, $quickNav) {
			setContentIndex($content);
			setQuickNavStyle($content, $quickNav);
		}

		/* 记下当前页索引 */
		function setContentIndex($content) {
			$content.index = $content.find('li').first().attr(opts.indexName);
		}

		/* 设置圆点导航样式，标记当前页 */
		function setQuickNavStyle($content, $quickNav) {
			$quickNav.find('li a').removeClass(opts.activeClassName).eq($content.index).addClass(opts.activeClassName);
		}

		return this.each(function() {
			var $this = $(this);
			var timer;
			var $content = $('.' + opts.contentClassName,$this), //滚动对象
				$quickNav = $('.' + opts.quickNavClassName,$this); //圆点导航
			$content.itemWidth = $content.find('li').outerWidth();
			$content.outerWidth($content.itemWidth * $content.find('li').length);
			init();

			/* 初始化 */
			function init() {
				bindEvent();
				setCurrentItem($content, $quickNav);

				if (opts.autoplay) {
					autoPlay();
				}
			}

			/* 自动播放 */
			function autoPlay() {
				timer = setInterval(function() {
					goNext($content, $quickNav);
				}, opts.interval);
			}

			/* 绑定事件 */
			function bindEvent() {
				$('.' + opts.nextNavClassName, $this).on('click', function() {
					goNext($content, $quickNav);
				});
				$('.' + opts.prevNavClassName, $this).on('click', function() {
					goPrev($content, $quickNav);
				});
				$('li', $quickNav).on('click', function() {
					var step = $(this).index() - $content.index;
					if (step > 0) {
						goNext($content, $quickNav, step);
					} else if (step < 0) {
						goPrev($content, $quickNav, Math.abs(step));
					}
				});
				/* 鼠标移入，自动播放暂停，移出则继续自动播放 */
				if (opts.autoplay) {
					$this.hover(function() {
						timer && clearInterval(timer);
					}, function() {
						autoPlay();
					});
				}
			}
		})
	};

	/* 属性默认值*/
	$.fn.carousel.defaults = {
		nextNavClassName: "next", //'next'  class name
		prevNavClassName: "prev", //'prev'  class name
		quickNavClassName: "quick-nav", //小圆点容器  class name
		contentClassName: "content", //滑动对象 class name
		activeClassName: 'active', //当前页圆点样式
		indexName: 'data-index', //index属性名
		autoplay: true, //是否自动播放
		duration: 1000, //切换一次耗时
		interval: 3000, //自动播放间隔时长
		effect: 'slide'
	}
})(jQuery);