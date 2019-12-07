$(function () {
    $('.input_sub').on('click', function (e) {
        e.preventDefault();
        let userName = $('.input_txt').val().trim();
        let userPass = $('.input_pass').val().trim();
        if (userName == '' || userPass == '') {
            $('.modal-body').text('用户名和密码不能为空！！')
            $('.modal').modal();
            return;
        }
        $.ajax({
            url: URL.user_login,
            type: 'post',
            data: {
                username: userName,
                password: userPass,
            },
            success: function (res) {
                $('.modal-body').text(res.msg);
                $('.modal').modal();
                if (res.code == 200) {
                    localStorage.setItem('token',res.token);
                    $('.modal').on('hidden.bs.modal',function(){
                        location.href = './index.html';
                    })
                }

            }

        })
    })
})