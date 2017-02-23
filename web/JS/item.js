//【 index.html】
$(function(){
//搜索输入判断
	$(".header .logo input").focus(function(){
        var $value = $(this).val();
        if(this.defaultValue==$value){
        	$(this).val("");
        }
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val()==""){
			$(this).val(this.defaultValue)
		}
	})
//【登陆/注册页面】搜索输入判断
    $("#logo input").focus(function(){
        $value = $(this).val();
        if(this.defaultValue==$value){
            $(this).val("");
        }
    }).blur(function(){
        $(this).removeClass("focus")
        alert($value)
        // alert(this.defaultValue)
        if($value==""){ 
            alert(this.defaultValue)
            $(this).val("this.defaultValue");
        }
    })
//导航条效果
    $('.header .bug .nav li').hover(function(){
        // $(this).find('ul').show("slow");
    	$(this).find('ul').slideDown(500);
    },function(){
        // $(this).find('ul').hide();
    	$(this).find('ul').slideUp(500);
    })
//banner条效果
    var $len = $('.show .banner li').length;
    var adTime;
    var index = 0;
    var $width = $('.show').width();
// 增加滑动圆圈
      var btn = "<div class='btn'>";
      for(var i=0;i<4;i++){
        btn += "<span>&bull;</span>";
      }
      btn += "</div>";
      $(".show").append(btn);
// 鼠标经过滑动圆圈时显示相应的图片【手动轮播】
      $(".show>.btn>span").mouseover(function(){
         index = $(".show>.btn>span").index(this);
         showImg(index);
      }).eq(0).mouseover();
// 图片自动轮播
    $('.show').hover(function(){
        clearInterval(adTime)
    },function(){
        adTime = setInterval(function(){
            showImg();
            index++;
            if(index==$len){index=0;}
        },3000)
   }).trigger("mouseleave")
// showImg函数
    function showImg(){

        $('.banner').animate({left:-$width*index},900);
        $(".show .btn span").removeClass("on").eq(index).addClass("on")
     }
// banner条下面的图片和文字的变化    
     $('.main-top>.ul-img>ul').hover(function(){
        $(this).removeClass('ti').siblings().addClass('ti');
        a = $('.main-top>.ul-img>ul').index(this);

        $('.info-left>.h-fruit>.hf>h1').eq(a).removeClass('hide').siblings().addClass('hide')
        $('.info-right>.intro_r>.hr').eq(a).removeClass('hidden').siblings().addClass('hidden')
     },function(){
        $(this).addClass('ti')
        $('.info-left>.h-fruit>.hf>h1').eq(a).addClass('hide');
        $('.info-right>.intro_r>.hr').eq(a).addClass('hidden');
        $('.main-top>.ul-img>ul').eq(0).removeClass('ti').siblings().addClass('ti');
        $('.info-left>.h-fruit>.hf>h1').eq(0).removeClass('hide').siblings().addClass('hide');
        $('.info-right>.intro_r>.hr').eq(0).removeClass('hidden').siblings().addClass('hidden');
     })
//购物车自增  
    var offset = $(".aside>p").offset();
    $(".shopcar").click(function(event){
		var $text = $(".aside>p").text();
		//$text++;
     	$text = Number($text) + 1 ;
     	$(".aside>p").text("+"+$text);
		var flyer = $('<div class="u-flyer"></div>');
//		var $wid = $(".u-flyer").width();
//		alert($wid)
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: offset.left+10,
				top: offset.top,
				width: 0,
				height: 0
			},onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
				$(this).css("cursor","default").removeClass('orange').unbind('click');
				this.destory();
			}
		})
	})
// title值改变1
     $('.co>.coo>p.shopcar').mouseover(function(e){
         this.myTitle = this.title;
         this.title = "";
         var tip = "<div id='tip'>"+this.myTitle+"<\/div>";
         $('body').append(tip);
         $('#tip').css({top:(e.pageY+20)+"px",
                      left:(e.pageX+20)+"px"}).show(500);
     }).mouseout(function(){
         this.title = this.myTitle;
         $('#tip').remove();
     }).mousemove(function(){
         $('#tip').css({top:(e.pageY+10)+"px",
                        left:(e.pageX+10)+"px"})
     })

})
