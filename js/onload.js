window.addEventListener("load" , function(){

    //更新履歴の
    if ( $("#history").length ){
        $.ajaxSetup({ cache: false });
        
        $.getJSON("/data/history.json" , function(data) {

            var history_elem    = $("#history");
            var history_content = "";
            
            for (let i=0; i<data["history"].length ;i++) {

                history_content += '<div class="history_list"><div class="history_date">' + data["history"][i]["date"] + '</div><div class="history_content">';
                for (let j=0; j<data["history"][i]["content"].length ;j++){
                    history_content += '' + data["history"][i]["content"][j] + '<br>';
                }
                history_content += "</div></div>";
            }
            history_elem.html(history_content);
        });
    }

    //経験年数
    if ( $("#exp_year").length ){
        var start_year      = 2011;
        var dt              = new Date;
        var now_year        = dt.getFullYear();
        var exp_year_str    = "約" + String(now_year - start_year) + "年 ( " + String(start_year) + "年〜 )";

        $("#exp_year").html(exp_year_str);
    }


    $(".thumb_frame").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        arrows:false,
        dots: true,
    });

});

