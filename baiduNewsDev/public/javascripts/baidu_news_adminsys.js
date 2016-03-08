$(document).ready(function() {
    // alert("test is ok")

    $.ajax({
        url: "/select",
        type: "POST",
        data: {},
        success: function(data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                url = data[i].url;
                pic = data[i].pic;
                title = data[i].title;
                content = data[i].content;
                time = data[i].time;
                topic = data[i].topic;
                id = data[i].id; //id 在数据库中是自增且unique的，不应该由前台人员来进行操作。
                $("<tr></tr>").appendTo("tbody");
                var mytr = $("tbody tr").eq(i);
                $("<td></td>").text(url).appendTo(mytr);
                $("<td></td>").text(pic).appendTo(mytr);
                $("<td></td>").text(title).appendTo(mytr);
                $("<td></td>").text(content).appendTo(mytr);
                $("<td></td>").text(time).appendTo(mytr);
                $("<td></td>").text(topic).appendTo(mytr);
                $("<td></td>").text(id).appendTo(mytr);
                $("<td></td>").text(i + 1).appendTo(mytr);
                $("<td></td>").html('<button type="submit" class="deletbtn btn btn-warning">删除</button><button type="submit" class="updatebtn btn btn-warning">修改</button>').appendTo(mytr);
            };
        },
        error: function() {
            alert("error!")
        }
    }); //load ajax end

    //增
    $("#insertbtn").click(function(e) {
        var inputurl = $("input#url").val();
        var inputpic = $("input#pic").val();
        var inputtitle = $("input#title").val();
        var inputcontent = $("textarea#content").val();
        var inputtime = $("input#time").val();
        var inputtopic = $("input#topic").val();
        e.preventDefault();
        $.ajax({
            url: "/insert",
            type: "POST",
            data: {
                "url": inputurl,
                "pic": inputpic,
                "title": inputtitle,
                "content": inputcontent,
                "time": inputtime,
                "topic": inputtopic
            },
            success: function(data) {
                if (data == "success") {
                    alert("录入成功!");
                } else {
                    alert("录入失败，请联系后台人员")
                };
                window.location.href = window.location.href;
            },
            error: function() {
                alert("error!")
            }
        }); //insert ajax end
    }); //insert function end
    /*删
    !!!!这里有个小坑，就是由于button.deletbtn是新生成的元素，所以无法直接通过$('.deletbtn').click(fn)来实现点击事件的绑定，
    必须要通过on方法，且后面放置三个参数，网上有详细的说明，搜索关键词‘jquery无法给新生成的元素绑定事件’!!!!*/
    $("body").on("click", '.deletbtn', function() {
        var inputidstr = $(this).parent().siblings().eq(6).text();
        var inputid = parseInt(inputidstr);
        $.ajax({
            url: "/delete",
            type: "POST",
            data: {
                "id": inputid
            },
            success: function(data) {
                if (data == "DELETE success!") {
                    alert("删除成功!");
                    window.location.href = window.location.href;
                } else {
                    alert("删除失败，请联系后台人员");
                };
            },
            error: function() {
                alert("error!")
            }
        });
    }); //delete end

    //改
    $("body").on('click', '.updatebtn', function(e) {
        e.preventDefault();
        var siblingeles = $(this).parent().siblings();
        $('#url').val(siblingeles.eq(0).text());
        $('#pic').val(siblingeles.eq(1).text());
        $('#title').val(siblingeles.eq(2).text());
        $('#content').val(siblingeles.eq(3).text());
        $('#topic').val(siblingeles.eq(4).text());
        $('#time').val(siblingeles.eq(5).val());
        $('#id').val(parseInt(siblingeles.eq(6).text()));
        $('html,body').animate({ scrollTop: $('#url').offset().top }, 1000);
    }); //update function end

    $('#updatebtnfml').click(function(e) {
        e.preventDefault();
        var inputurl = $('#url').val();
        var inputpic = $('#pic').val();
        var inputtitle = $('#title').val();
        var inputcontent = $('#content').val();
        var inputtopic = $('#topic').val();
        var inputtime = $('#time').val();
        var inputid = $('#id').val();
        $.ajax({
            url: "/update",
            type: "POST",
            data: {
                "url": inputurl,
                "pic": inputpic,
                "title": inputtitle,
                "content": inputcontent,
                "topic": inputtopic,
                "time": inputtime,
                "id": inputid
            },
            success: function(data) {
                if (data == "UPDATE success!") {
                    alert("修改成功!");
                    window.location.href = window.location.href;
                } else {
                    alert("修改失败，请联系后台人员")
                };
            },
            error: function() {
                alert("error!")
            }
        });
    }); //updatebtnfml function end

}); //ready function end
