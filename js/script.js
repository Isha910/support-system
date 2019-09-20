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
                              "name":"Android",
                              "items":[]
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
              "name": "Questions"
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

function runLoop() {
    
    for(let i = 0; i<newObj.length; i++) {
      
      if(newObj[i].type == "") {
        console.log('Cant print this object'); 
        continue;
      }
      console.log(newObj[i].items,newObj[i].name, newObj[i].type);
      
    }
   }
runLoop();


