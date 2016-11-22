
$(function(){
    //官方微信二维码
    $(".qr").on({mouseover:function(){
        $(".img").slideDown();
        return false;
    },mouseout:function(){
        $(".img").slideUp();
        return false;
    }});
    //品牌加盟列表点击事件
    $("#main ul li[class!=empty]").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //新闻中心 new分页
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
                var right=$("<div class='rightext'></div>").append(title,text);
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
});

