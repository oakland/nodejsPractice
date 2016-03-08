$(document).ready(function() {
    // alert("test");

    $.ajax({
        url: '/select',
        type: 'POST',
        data: {
            "state": 0
        },
        success: function(data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                url = data[i].url;
                pic = data[i].pic;
                title = data[i].title;
                content = data[i].content;
                topic = data[i].topic;
                time = data[i].time;
                $("img.news-img").eq(i).attr({
                    'src': pic,
                });
                $("h4.news-title a").eq(i).text(title);
                $("span.date").eq(i).text(time);
                $("span.topic-classify").eq(i).text(topic);
            };
        },
        error: function() {
            alert("error!")
        }
    }); //ajax function end

    $('#baijia').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: '/selectspc',
            type: 'POST',
            data: {
                "topic": '百家'
            },
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    url = data[i].url;
                    pic = data[i].pic;
                    title = data[i].title;
                    content = data[i].content;
                    topic = data[i].topic;
                    time = data[i].time;
                    $("img.news-img").eq(i).attr({
                        'src': pic,
                    });
                    $("h4.news-title a").eq(i).text(title);
                    $("span.date").eq(i).text(time);
                    $("span.topic-classify").eq(i).text(topic);
                };
            },
            error: function() {
                alert("error!")
            }
        });
    }); //baijia ajax end

    $('#local').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: '/selectspc',
            type: 'POST',
            data: {
                "topic": '本地'
            },
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    url = data[i].url;
                    pic = data[i].pic;
                    title = data[i].title;
                    content = data[i].content;
                    topic = data[i].topic;
                    time = data[i].time;
                    $("img.news-img").eq(i).attr({
                        'src': pic,
                    });
                    $("h4.news-title a").eq(i).text(title);
                    $("span.date").eq(i).text(time);
                    $("span.topic-classify").eq(i).text(topic);
                };
            },
            error: function() {
                alert("error!")
            }
        });
    }); //local ajax end

    $('#recommend').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: '/selectspc',
            type: 'POST',
            data: {
                "topic": '推荐'
            },
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    url = data[i].url;
                    pic = data[i].pic;
                    title = data[i].title;
                    content = data[i].content;
                    topic = data[i].topic;
                    time = data[i].time;
                    $("img.news-img").eq(i).attr({
                        'src': pic,
                    });
                    $("h4.news-title a").eq(i).text(title);
                    $("span.date").eq(i).text(time);
                    $("span.topic-classify").eq(i).text(topic);
                };
            },
            error: function() {
                alert("error!")
            }
        });
    }); //recommend ajax end

}); //document ready function
