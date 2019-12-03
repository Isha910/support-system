var parsedObj = JSON.stringify(obj);
var newObj = JSON.parse(parsedObj);

var i = 0;
var html = [];

function createList(arr) {

    if (i == 0) {
        html.push('<ul>');
    } else {
        html.push('<ul class="nested">');
    }
    i++;
    $.each(arr, function (i, val) {
        if (!val.type) {
            console.error("error type not found in", val.name)
        }
        else if (val.type === "box") {
            console.log(" box type found", val.name)
            html.push('<li><span class="caret">' + val.name + '</span>');

        } else if (val.type === "ques") {
            console.log("ques type found", val.name)
            html.push('<li><span class="type">' + val.name + '</span>');
        }

        else {
            html.push('<li>' + val.name);
        }


        if (val.items) {
            createList(val.items)
        }

        html.push('</li>');
    });
    html.push('</ul>');


}


createList(obj);


function getData(...params) {

    var res = newObj[params[0]];

    for (i = 1; i < params.length; i++) {
        res = res.items[params[i]]
    }

    console.log(res.name);
    console.log('type', res.type)
}
getData(0, 0, 0);

$(document).ready(function () {

    $('.mainbox').click(function () {
        var getUrl = window.location.href;
        document.write(getUrl);
        
    // var rest = newObj[parm[0]];
    
    // for (i = 1; i < parm.length; i++) {
    //     rest = rest.items[par[i]]
    // }
    // console.log(rest.name);

        // let divs = document.getElementsById("mailbox").innerHTML;
        // document.write(divs);
        
    
    });

});


// $('#navigation a').click(function(event){
//     event.preventDefault();
//     url = $(this).attr('href');
//     history.pushState({key:home.html}, '',url);
//     });
//     window.onpopstate = function(event){
//         event.preventDefault();
//         hash=location.pathname;
            
//         loadPage(hash.replace('/webdesign/pushstate/', ''));
//      }
     

// var hash = window.location.href.split('#')[1] || '';
// console.log(hash);



// let url = new URL('http://127.0.0.1:5500/home.html');

// url.searchParams.set('', 'realtimetesting/'); // added parameter with a space and !

// alert(url);






















// let url = new URL('http://127.0.0.1:5500/home.html');
// let newUrl = new URL('RealtimeTesting', url);

// document.write(newUrl); 


// var x = location.href;
// // document.write(x);
// var y = x.split("/");
// let z =[y];
// // document.write(z);
// for (let i = 0; i < z.length; i++) {

//     console.log(z[i]);
// }


// var getUrl = window.location.href;
// console.log(getUrl);
// var result = getUrl.split(" ");
// console.log(result);



// function getQueryVariable(variable)
// {
//     var getUrl = window.location.href;
//     console.log(getUrl);


// }

// console.log(newObj);
// window.onload = function () {
//     document.getElementById("catg").innerHTML = newObj[0].items[0].name;
//     document.getElementById("que").innerHTML = newObj[0].items[1].name;

// };


// console.log('',obj)
// // console.log(obj[0].items[1])
// const key = "type";
// const value= "box";
// const result = obj[0].items.filter(d=>d[key]==value);

// console.log('my rw', result);

// function getData(...params) {
//     console.log("**********")
//     // console.log(params[0]);
//     // console.log(obj[params[0].items[params[1]]])
//     // console.log(newObj)
//     var selector = '';
//     var temp;
//     for (i= 1; i < params.length; i++){
//         // obj[0].items[0].items.filter(d=>d[key]==value);
//         //console.log(params[i]);


//         selector += `[${params[i]}].items`
//          //console.log({selector});



//     }







