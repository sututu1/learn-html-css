function myClick(idStr, fun) {
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}

window.onload = function () {
    var btn01 = document.getElementById("btn01");
    btn01.onclick = function () {
        var bj = document.getElementById("bj");
        alert(bj.innerHTML);
    };

    var btn02 = document.getElementById("btn02");
    btn02.onclick = function () {
        var lis = document.getElementsByTagName("li");
        //  alert(lis.length);
        for (var i = 0; i < lis.length; i++) {
            alert(lis[i].innerHTML);
        };
    }

    var btn03 = document.getElementById("btn03");
    btn03.onclick = function () {
        var inputs = document.getElementsByName("gender");
        //alert(inputs.length);
        for (var i = 0; i < inputs.length; i++) {
            alert(inputs[i].className);
        }
    };

    var btn04 = document.getElementById("btn04");
    btn04.onclick = function () {
        var city = document.getElementById("city");
        var lis = city.getElementsByTagName("li");
        for (var i = 0; i < lis.length; i++) {
            alert(lis[i].innerHTML);
        }
    };

    var btn05 = document.getElementById("btn05");
    btn05.onclick = function () {
        var city = document.getElementById("city");
        var cns = city.childNodes;
        //alert(cns.length);
        /*for (var i = 0; i < cns.length; i++) {
             alert(cns[i]);
         }*/
        var cns2 = city.children;
        alert(cns2.length);
    };

    var btn06 = document.getElementById("btn06");
    btn06.onclick = function () {
        var phone = document.getElementById("phone");
        var fir = phone.firstChild;
        // fir = phone.firstElementChild;
        alert(fir);
    };
    myClick("btn07", function () {
        var bj = document.getElementById("bj");
        var pn = bj.parentNode;
        alert(pn.innerText);
    });
    myClick("btn08", function () {
        var and = document.getElementById("android");
        var ps = and.previousSibling
        //var pe = and.previousElementSibling;
        alert(ps);
    })
    myClick('btn09', function () {
        var um = document.getElementById("username");
        alert(um.value);
    })
    myClick('btn10', function () {
        var um = document.getElementById("username");
        um.value = "今天天气真不错!";
    });
    myClick('btn11', function () {
        var bj = document.getElementById("bj");
        // alert(bj.innerText);
        /*var fc = bj.firstChild;
        alert(fc.nodeValue);*/
        alert(bj.firstChild.nodeValue);
    });
};