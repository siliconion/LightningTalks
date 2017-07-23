$(document).ready(function () {
    function get_data_update_div(url, target_div) {
        var settings = {
            "url": url,
            "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            console.log("btn")
            $(target_div + " .result").text(response)
        }).fail(function (jqXHR, textStatus, errorThrown) {
            $(target_div + " .result").text(textStatus)
        });
        ;
    }

    $('#same_origin button').click(function () {
        get_data_update_div("http://localhost:8000/get_server_info", "#same_origin")
    })

    $('#non_cors_api button').click(function () {
        get_data_update_div("http://localhost:8001/get_server_info", "#non_cors_api")
    })

    $('#cors_api button').click(function () {
        get_data_update_div("http://localhost:8002/get_server_info", "#cors_api")
    })
})
