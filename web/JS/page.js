//【single-product.html】
//浏览小图出现大图
//window.onload=function(){
//  var page = document.getElementById('jd').getElementsByTagName("a");
//  var tupian=document.createElement("img");
//  for(i=0; i<page.length; i++){
//      page[i].onmouseover = function(event){
//      this.appendChild(tupian);
//      tupian.id="tid";
//      tupian.src=this.href;
//      tupian.style.position="absolute";
//      tupian.style.display = "block";     
//      document.getElementById("tid").style.left=(event.clientX)+"px";
//      document.getElementById("tid").style.top=(event.clientY)+ "px";
//    }
//    page[i].onmouseout = function(){       
//      tupian.style.display = "none";
//    }
//    page[i].onmousemove = function(){
//      document.getElementById("tid").style.left=(event.clientX)+"px";
//      document.getElementById("tid").style.top=(event.clientY) + "px";
//    }
//  }
//  
//}
$(function(){
	   	var x = 10;
   	    var y = 10;
   	    $("#jd a").mouseover(function(e){
   	  	 this.myTitle = this.title;
   	  	 this.title = ""; 
   	  	 this.myHref = this.href;
//创建节点
   	     var tooltip = "<div id='tooltip'><img src='"+this.myHref+"'>"+this.myTitle+"<\/div>"
//插入节点
         $("body").append(tooltip)
         $("#tooltip").css({left:(e.pageY+y)+"px",
                           top:(e.pageX+x)+"px"}).show("slow")
   	  }).mouseout(function(){
   	  	 this.title = this.myTitle;
         $("#tooltip").remove();
   	  }).mousemove(function(e){
   	  	 $("#tooltip").css({left:(e.pageX+x)+"px",
                           top:(e.pageY+y)+"px"})
   	  })
})

  