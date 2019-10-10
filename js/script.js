var obj = [
    {
        "name": "Realtime Testing",
        "type": "box",
        "items": [
            {
                "name": "Category",
                "type": "box",
                "items": [
                    {
                        "name": "Mobile",
                        "type": "box",
                        "items": [
                            {
                                "name": "Android",
                                "type": "box",
                                "items": []
                            }
                        ]
                    },
                    {
                        "name": "Browser",
                        "items": []
                    },
                    {
                        "name": "Desktop",
                        "items": []
                    }
                ]
            },
            {
                "name": "Questions",
                "type": "ques",
                "items": []
            }
        ]
    }, {
        "name": "Automation Testing",
        "type": "box",
        "items": [
            {
                "name": "Category",
                "type": "box",
                "items": [
                    {
                        "name": "Mobile",
                        "items": []
                    },
                    {
                        "name": "Browser",
                        "items": []
                    },
                    {
                        "name": "Desktop",
                        "items": []
                    }
                ]
            },
            {
                "name": "Questions"
            }
        ]
    }
];

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

    for(i=1; i<params.length;i++)
    {
        res = res.items[params[i]]
    }

    console.log(res.name);
    console.log('type',res.type)
 }
 getData(0,0,0);
 

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
    
    // console.log(selector)

    // y.filter(d=>d[key]==value);

//     var seletedArr = 'obj'+`${selector}`







