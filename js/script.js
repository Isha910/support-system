var parsedObj = JSON.stringify(obj);
var newObj = JSON.parse(parsedObj);
console.log(newObj);

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
    return res;

    console.log(res.name);
    console.log('type', res.type)
}
getData(0, 0, 0);

function dataHandler(url){

    if(url==''){

    var real = getData(0);
    var auto = getData(1);
    document.getElementById('realtime').innerHTML ='<img src="images/realimg.png" style="width: 100px; text-align: center; display: block; margin: 0 auto">'+ real.name;
      document.getElementById('automation').innerHTML ='<img src="images/realimg.png" style="width: 100px; text-align: center; display: block; margin: 0 auto">'+ auto.name;
    
    }else if(url == 'realtime'){
  
    var rCatg = getData(0, 0);
    var rQues = getData(0,1);
    console.log(rCatg);
    console.log(rQues);
    document.getElementById('category').innerHTML = rCatg.name;
    document.getElementById('questions').innerHTML= rQues.name;   
  
    }else if(url =='automation'){
    var aCatg = getData(1,0); 
    var aQues = getData(1,1);
              console.log(aCatg);
              console.log(aQues);
              document.getElementById('category').innerHTML = aCatg.name;
              document.getElementById('questions').innerHTML= aQues.name; 
  
  }else{
    document.write("page not matched");
  }
    

}

$(document).ready(function() {
    var loc = window.location.href;
    console.log('location', loc);
    var x = loc.split('/');
    let url = x[x.length-1];
     console.log(x);
   dataHandler(url);
   
  });

  function myFunction(para){
      setTimeout(function(){
        dataHandler(para);   
      } ,500)
    
}

function createQuestions(questions, appendedParent) {
    for(j=0; j<questions.length; j++) {

        var li = document.createElement("li");
        var div = document.createElement("div");
        var a = document.createElement("a");
        var i = document.createElement("i");

        i.classList.add("fa", "fa-angle-right", "myrightfa");
        a.classList.add("item");
        a.appendChild(i);
        a.innerHTML += questions[j].question;
        div.classList.add("answer");
        div.innerText = questions[j].answer;

        li.appendChild(a)
        li.appendChild(div)

        appendedParent.appendChild(li)
    }
}

function serveQuestions() {

    var currentPath = window.location.pathname;

    console.log(currentPath);

    var quesTemp = document.getElementById("questions-template");

    var parDiv = document.createElement("div");
    var parDivUl = document.createElement("ul");
    parDiv.classList.add("question", "myquestions");
    parDivUl.classList.add("item-list");

    parDiv.appendChild(parDivUl);
    quesTemp.appendChild(parDiv);

    var questionsList = document.getElementById("questionsList");
    
    if (currentPath === "/realtime") {
        var rCatg = getData(0, 0);
        var rQues = getData(0,1);

        var questions = rQues.items;
        
        createQuestions(questions, parDivUl);    
    }
    if (currentPath === "/automation") {
        var aCatg = getData(1,0); 
        var aQues = getData(1,1);

        var questions = aQues.items;
        
        createQuestions(questions, parDivUl);
        
    }

}

function serveBox(){
    var currentPath = window.location.pathname;
    console.log(currentPath);
    var li 
    

}
   


// $(document).ready(function() {
//         var home1 = getData(0);
//         var home2 = getData(1);
//         // var home3 = getData(0, 0);
    
//         document.getElementById('realtime').innerHTML ='<img src="images/realimg.png" style="width: 100px; text-align: center; display: block; margin: 0 auto">'+ home1.name;
//         document.getElementById('automation').innerHTML ='<img src="images/realimg.png" style="width: 100px; text-align: center; display: block; margin: 0 auto">'+ home2.name;
        
//     });
    
//     function myFunction(type){
//         setTimeout(function(){
//             if(type == "realtime"){
//                 var home3 = getData(0, 0);
//                 var home4 = getData(0,1);
//                 console.log(home3);
//                 console.log(home4);
//                 document.getElementById('category').innerHTML = home3.name;
//                 document.getElementById('questions').innerHTML= home4.name;   
//             }
//             else{
//                 var home5 = getData(1,0); 
//                 var home6 = getData(1,1);
//                 console.log(home5);
//                 console.log(home6);
//                 document.getElementById('category').innerHTML = home5.name;
//                 document.getElementById('questions').innerHTML= home6.name;   
//             }
//         },500);
//     }
        



