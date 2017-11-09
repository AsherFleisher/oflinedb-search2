function ajax(a) {

    var action = a.getAttribute('name');

    if (document.getElementById("catalogPath")) {
        var catalogPath = document.getElementById("catalogPath").value;
    }
    if (document.getElementById("catalogName")) {
        var catalogName = document.getElementById("catalogName").value;
    }

    var data = new FormData();
    data.append("action", action);
    data.append("catalogPath", catalogPath);
    data.append("catalogName", catalogName);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajax").innerHTML = this.responseText;
        }
    };

    xhttp.open("POST", "CreateDB.php", true);
    xhttp.send(data);
}

function open(link) {
    window.open(link, '_blank');
}
