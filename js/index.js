$(function(){
    $(".qr").on({mouseover:function(){
        $(".img").slideDown();
        return false;
    },mouseout:function(){
        $(".img").slideUp();
        return false;
    }})
});