$(function () {
    var list = $('#list-solution');

    function printNumbers() {
        for (var i = 0; i < 11; i++) {
            append(i);
        }
    }
    
    function append(i) {
        list.append($('<button/>', { class:"btn btn-primary", html: i, click: function () { alert(i) } }));
        list.append($('<br/>'));
    }

    printNumbers();
});
