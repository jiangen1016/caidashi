
$(function(){

    //主页背景图
    (function bgimgauto(){
        var timer=null;
        var index = 0;
        console.log(index)
        $(".btn1").on("click",function(){
            //if(index<=0){
            //    index=3
            //}else{
            index<=0 ? index=2 :  index--;
           // }

            change(index);
            console.log(index);
        });
        $(".btn2").on("click",function(){
            //if(index>2){
            //    index=0;
            //}else{
            index>=2 ? index=0 : index++;
            //}
            change(index);
            console.log(index)
        });
        //改变body背景图
        function change(index){
            $(".img").find("img").eq(index+1).addClass("nohi").siblings("img").removeClass("nohi")
        }
        //function back () {
        //    index <= 0 ? index = 2 : index--;
        //    index >= 2 ? index = 0 : index++;
        //    change(index);
        //}

    })();
    (function imganimate(){
       //logo滑出
       $("#top .logo").delay(500).slideDown();
       //主页的图片
       $("#main .auto .text").delay(1000).animate({opacity:1});
       //官方微信二维码
       $(".qr").on({mouseover:function(){
           $(".img").slideDown();
           return false;
       },mouseout:function(){
           $(".img").slideUp();
           return false;
       }});
   })();
    //切换城市
    (function citychange(){
       $(".citytop a").on("click",function(){
           $(".citytop .citys").slideDown();
           return false;
       });
       $(".citytop .citys li").on("click",function(){
           $(".citytop span").html($(this).html());
           $(this).parent().hide();
       });
   })();
    //菜单列表滑动事件
    (function listmouseover(){
        var oLi=$("#main ul .li");
        var oLitext=$("#main .auto .right .right_t");
        var oLine=$("#main ul li[class=line]");
        oLi.attr("index","60"*$(this).index()).on("mouseover",function(){
            var num=$(this).index();
            $(this).siblings(".line").css("top",((num-1)*50+25)+"px");
            oLitext.eq(num-1).addClass("show").siblings().removeClass("show");
        }).on("mouseover",function() {
            oLine.css("top","attr('index')");
        })
    })();

    //新闻中心数据请求
    $.ajax({
        type:"GET",
        url:"data/news.json",
        dataType: "json",
        success:function(data){
            var content=$(".newsjson");
            //请求所有的新闻 并添加到页面当中
            for(var i=0;i<data.length;i++){
                //DOM结构
                var div=$("<div class='item clear'></div>");
                var title=$("<h3></h3>").text(data[i].title);
                var text=$("<p></p>").text(data[i].text);
                var timer=$("<span></span>").text(data[i].date);
                var right=$("<div class='rightext'></div>").append(title,text,timer);
                var img=$("<img />").attr("src",data[i].img);
                //右边浮动的样式
                if(i%3==1){
                    div.addClass("rr");
                }
                div.append(img,right);
                div.appendTo(content);
            }
        }
    })
})

