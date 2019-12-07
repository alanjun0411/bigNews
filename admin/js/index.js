
$(function(){
    $.ajax({
        url:URL.user_info,
        type:'get',
        success:function(res){
            console.log(res);
            
            $('.user_info img,.user_center_link img').attr('src',res.data.userPic);
            $('.user_info span i').html(res.data.nickname);
        }
    })
})