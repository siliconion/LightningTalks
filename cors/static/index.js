$(document).ready(function () {
    function get_data_update_div(url, target_div) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                response = "Status: " + this.status + ", Response: " + this.responseText
                $(target_div + " .result").text(response)
                console.log(this.responseText);
                console.log(this);
            }
        });

        xhr.open("GET", url);

        xhr.send();

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
