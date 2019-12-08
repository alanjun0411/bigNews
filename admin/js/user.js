$(function () {
    let getUser = function () {
        $.ajax({
            url: URL.user_detail,
            type: 'get',
            success: function (res) {
                $('#inputEmail1').val(res.data.username);
                $('#inputEmail2').val(res.data.nickname);
                $('#inputEmail3').val(res.data.email);
                $('.user_pic').attr('src', res.data.userPic);
                $('#inputEmail4').val(res.data.password);
            }
        })
    }

    
    AMS.doLogin(getUser);
//提示框函数
function Tips(msg) {
    $('.modal-body').text(msg);
    $('#exampleModal').modal();
}
$('#inputEmail1').on('blur', function () {
    $('#inputEmail1').val().trim() || Tips('用户名不能为空！');
});
$('#inputEmail2').on('blur', function () {
    $('#inputEmail2').val().trim() || Tips('用户姓名不能为空！');
});
$('#inputEmail3').on('blur', function () {
    $('#inputEmail3').val().trim() || Tips('邮箱不能为空！');
});
$('#inputEmail4').on('blur', function () {
    $('#inputEmail4').val().trim() || Tips('密码不能为空！');
});

$('.btn-edit').on('click', function (e) {
    e.preventDefault();
    let user = {
        username: $('#inputEmail1').val(),
        nickname: $('#inputEmail2').val(),
        email: $('#inputEmail3').val(),
        password: $('#inputEmail4').val(),
    }

    for (let key in user) {
        if (user[key] == '') {
            Tips('请把信息填充完整！');
            return;
        }
    }
    //将表单存入FormData数据中
    let fd = new FormData(form);

    $.ajax({
        url: URL.user_edit,
        type: 'post',

        contentType: false,
        processData: false,

        data: fd,
        success: function (res) {
            if (res.code !== 200) {
                return;
            };
            Tips(res.msg);
            AMS.doLogin(getUser);
        }
    })
})


})