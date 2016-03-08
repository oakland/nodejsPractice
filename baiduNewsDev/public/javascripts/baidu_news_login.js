$(document).ready(function() {
    $("input#loginbtn").unbind('click').click(function(e) {
        // alert("test is ok");
        e.preventDefault();
        var account = $("input#account").val();
        var password = $("input#password").val();
        // console.log(account,password);
        if (!account) {
            alert("请输入用户名！")
        };
        $.ajax({
            url: '/loginact',
            type: 'POST',
            data: {
                account: account,
                password: password,
                state: "1"
            },
            success: function(data) {
                // console.log(data);
                if (data == 1) {
                    // window.open('baidu_news_adminsys.html', '_self'); //若后台验证成功，跳转到管理页面
                    // location.href = 'http://www.baidu.com'; //若后台验证成功，跳转到管理页面 
                    console.log('connection ok by j');
                } else {
                    if (!password) {
                        alert("请输入密码！")
                    } else {
                        alert('密码或账号错误!');
                    };
                };
            },
            error: function(XMLHttpRequest) {
                alert("发生错误！\n " + "XMLHttpRequest.status： " + XMLHttpRequest.status + "。\n XMLHttpRequest.readyState： " + XMLHttpRequest.readyState);
            }
        }); //ajax end
    }); //btn click function end
}); //document ready function
