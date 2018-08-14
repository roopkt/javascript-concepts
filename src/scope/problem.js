

$(function () {
    var list = $('#list-problem');

    function printNumbersProblem() {
        for (var i = 0; i < 11; i++) {
            list.append($('<button/>', { class:"btn btn-danger", html: i, click: function () { alert(i) } }));
            list.append($('<br/>'));
        }
    }

    printNumbersProblem();
});
