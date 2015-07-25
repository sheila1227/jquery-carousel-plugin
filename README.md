# how to use

##CSS


    *{padding:0;margin:0;}
    .clearfix{overflow: hidden;_zoom:1;}
    .carousel-container{width: 500px;margin:30px auto;position: relative;}
    .carousel-container li{float: left;list-style:none;}
    .content-container{width: 500px;height: 250px;overflow: hidden;}
    .carousel-container .content{position: absolute;}
    .carousel-container .content img{width: 500px;height: 250px;}
    .carousel-container .quick-nav a{display: block;width: 8px;height: 8px;border-radius: 50%;background-color: #e5e5e5;opacity: .5;margin: 4px 5px;}
    .carousel-container .quick-nav a.active{background: rgba(0,0,0,.8);}
    .carousel-container .quick-nav{position: absolute;right: 10px;bottom: 10px;background: rgba(0,0,0,.5);border-radius: 4px;}
    .carousel-container .circle-button{display: block;width: 32px;height: 32px;border-radius: 50%;background: rgba(0,0,0,.5);line-height: 32px;text-align: center;}
    .carousel-container .prev,.carousel-container .next{position: absolute;top:50%;margin-top: -16px;color: #fff;cursor: pointer;font-size: 15px;font-weight: bold;z-index: 100;}
    .carousel-container .prev{left: 10px;}
    .carousel-container .next{right: 10px;left: auto;}

##HTML

        <div class="carousel-container clearfix">
    	<div><span class="circle-button prev"><</span><span class="circle-button next">></span></div>
    	<div class="content-container">
    		<ul class="content clearfix">
    			<li data-index=0><a href="http://www.baidu.com"><img src="http://eimg.smzdm.com/201507/15/55a5b751922d57497.jpg" alt=""></a></li>
    			<li data-index=1><a href="http://www.baidu.com"><img src="http://eimg.smzdm.com/201507/14/55a46c4f1ce3a8296.png" alt=""></a></li>
    			<li data-index=2><a href="http://www.baidu.com"><img src="http://eimg.smzdm.com/201507/15/55a5b4bd1ddb69497.png" alt=""></a></li>
    			<li data-index=3><a href="http://www.baidu.com"><img src="http://eimg.smzdm.com/201507/15/55a5c47c4a7c12930.png" alt=""></a></li>
    			<li data-index=4><a href="http://www.baidu.com"><img src="http://eimg.smzdm.com/201507/15/55a5c33f188bf9070.png" alt=""></a></li>
    		</ul>
    	</div>
    	<ul class="quick-nav clearfix">
    		<li><a href="javascript:void(0)"></a></li>
    		<li><a href="javascript:void(0)"></a></li>
    		<li><a href="javascript:void(0)"></a></li>
    		<li><a href="javascript:void(0)"></a></li>
    		<li><a href="javascript:void(0)"></a></li>
    	</ul>
    </div>

##JS

    $('.carousel-container').carousel({duration:1000,effect:'fade'});
    
##参数列表及默认值

        nextNavClassName: "next", //'next'  class name
		prevNavClassName: "prev", //'prev'  class name
		quickNavClassName: "quick-nav", //小圆点容器  class name
		contentClassName: "content", //滑动对象 class name
		activeClassName: 'active', //当前页圆点样式
		indexName: 'data-index', //index属性名
		autoplay: true, //是否自动播放
		duration: 1000, //切换一次耗时
		interval: 3000, //自动播放间隔时长
		effect: 'slide' //切换效果，支持'slide'和'fade'两种
		
##效果预览

###slide
![slide effect](https://raw.githubusercontent.com/sheila1227/jquery-carousel-plugin/master/screenshots/e3.gif)



###fade
![fade effect](https://raw.githubusercontent.com/sheila1227/jquery-carousel-plugin/master/screenshots/e5.gif)

