
$(function () {
    // $.ajax({
    //     url: URL.user_info,
    //     type: 'get',
    //     success: function (res) {
    //         $('.user_info img,.user_center_link img').attr('src', res.data.userPic);
    //         $('.user_info span i').html(res.data.nickname);
    //     }
    // })
    AMS.doLogin(function(res){
        $('.user_info img,.user_center_link img').attr('src', res.data.userPic);
        $('.user_info span i').html(res.data.nickname);
    })
    let SRC = ['./main_count.html',
        ['./article_list.html','./article_release.html', './article_edit.html','./article_category.html'],
        './comment_list.html',
        './user.html'
    ];
    let LIST = '';

    $('.logout').on('click', function () {
        $('.modal-title').text('⚠️警告');
        $('.modal-body').text('你确定退出吗？');
        $('#exampleModal').modal();
        $('.btn-primary').on('click', function () {
            localStorage.removeItem('token');
            location.href = './login.html';
        })
    })
    $('.level01').each(function (i, e) {
        $(e).on('click', function () {
            $('.level01').each(function (i, e) {
                $(e).children('a').removeClass('active');
            })
            $(e).children('a').addClass('active');
            if (e.dataset.type == 'list') {
                $(e).children('.level02').slideToggle();
                LIST = SRC[i];
            } else {
                $('.level02').slideUp();
                $('#into').attr('src',SRC[i]);
            }

        })
    })
    $('.level02 li').each(function (i, e) {
        $(e).on('click', function (event) {
            event.stopPropagation();
            $('.level02 li').each(function (i, e) {
                $(e).removeClass('hove');
            })
            $(e).addClass('hove');
            $('#into').attr('src',LIST[i]);
        })
    })



})