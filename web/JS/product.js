// 【product.html】
$(function(){
// 水果滚动
     var time;
     var $li = $('.producter>.showImg>.to>li').length; //12
     $('.producter>.showImg').hover(function(){
        clearInterval(time);
     },function(){
        time = setInterval(function(){
           Img();     
        },3000)
     }).trigger("mouseleave");  
     function Img(){
        $wid = $('.producter>.showImg>.to>li').width(); //257px
        // alert($wid);
        $('.producter>.showImg>.to').animate({"left":-$wid},3000,function()
        {
           $('.producter>.showImg>.to>li:first').
               appendTo($('.producter>.showImg>.to'));
           $('.producter>.showImg>.to').css("left","0")
       })
     
     } 
//水果滚动2
     var timer;
     var $li = $('.product4>.showImg>.to>li').length; //12
     // alert($li)
     $('.product4>.showImg').hover(function(){
        clearInterval(timer);
     },function(){
        timer = setInterval(function(){
           Pic();     
        },3000)
     }).trigger("mouseleave");  
     function Pic(){
        $width = $('.product4>.showImg>.to>li').width(); //257px
        $('.product4>.showImg>.to').animate({"left":-$width},3000,function(){
          $('.product4>.showImg>.to>li:first').appendTo($('.product4>.showImg>.to'));
          $('.product4>.showImg>.to').css("left","0")
       })
     
     } 
//【single-product.html】
//不同形状的火龙果配对相应的大图
     $('.page-left>.imgList>.list>li').click(function(){
         var n = $('.imgList>.list>li').index(this);
        $('.page-left>.to>.img>a').eq(n).removeClass('hi').siblings().addClass('hi');
     })
// 价格相匹配
     $('.page-right>#sel').change(function(){
        var $text = $(':selected').val()
        var sum;
        sum = $text * 66;
        $('.page-right>p>.selprice').text(sum);
     })
//评分
    $(".star-ul>.li01>a").click(function(){
        $(".star-ul>.li01>a").removeClass("pingfen")
        $(this).addClass("pingfen").prevAll().addClass("pingfen");
        $('.one').click(function(){
           $(this).toggleClass("pingfen")
        })
    })
// 加入购物车
     $('#buy').click(function(){
        var n = $('#sel :selected').val();
        var money = $('.page-right .selprice').text();
        alert("您选择了"+n+"件商品\n"+"总计为"+money+"元\n喜欢的话可以提交哦~或关注我们~") 
     })
//【news.html】
//图片滚动
      var count = 0;
      var adTime;
      var $length = $('.news-left>.focus>ul>li').length;
// 增加滑动圆圈
      var btnBg = "<div class='btnBg'>";
      for(var i=0;i<2;i++){
        btnBg += "<span>&bull;</span>";
      }
      btnBg += "</div>";
      $(".focus").append(btnBg); 
//滑过圆圈时相应图片显示
     $('.focus>.btnBg>span').mouseover(function(){
        var count = $('.focus>.btnBg>span').index(this);
        showPic();
     }).eq(0).mouseover();
// 自动
     $('.focus').hover(function(){
         clearInterval(adTime);
     },function(){
         adTime = setInterval(function(){
            showPic();
            count++;
            if(count==$length){count=0;}
         },3000)
     }).trigger("mouseleave")
// 函数showPic()
     function showPic(){
        $wid = $('.news-left>.focus').width();
        $('.news-left>.focus>ul').animate({left:-$wid*count},900);
        $(".focus>.btnBg>span").removeClass("active").eq(count).addClass("active")

     }
// 新闻向上滚动
     var timer;
     $('.hot-news>.note>ul').hover(function(){
         clearInterval(timer)
     },function(){
         timer = setInterval(function(){
            rollWord();
         },3000)
     }).trigger("mouseleave");
     function rollWord(){
        $hei = $('.hot-news>.note>ul>li').height();
        $('.hot-news>.note>ul').animate({"margin-top":-$hei},2000,function(){
            $('.hot-news>.note>ul>li:lt(1)').appendTo($('.hot-news>.note>ul'));
            $('.hot-news>.note>ul').css("margin-top","0");
        })
     }
// 新闻展示与隐藏
   $(".news-fruit>h1").click(function(){
      var $parent = $(this).parents(".news-fruit")
       var $ul = $parent.find(".season")
       if($ul.is(':hidden')){
        $parent.addClass("hover");
       }
       else{
        $parent.removeClass("hover");
       }
      
   })
   $(".benefit-fruit>h1").click(function(){
       var $parent = $(this).parents(".benefit-fruit")
       var $ul = $parent.find("div")
       if($ul.is(':hidden')){
        $parent.addClass("hover");
       }
       else{
        $parent.removeClass("hover");
       }
   })
})
     
    
 