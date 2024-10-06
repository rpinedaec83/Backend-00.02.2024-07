function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    setTimeout(function() {
    let sum = num1 + num2;
    myCallback(sum);
    },5000)
}

myCalculator(5, 5, myDisplayer);


let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
         myResolve("I love You !!"); 
        }, 3000);
  });

myPromise.then(data=>{
    console.log(data);
});

function myDisplayer2(some) {
    document.getElementById("demo2").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://randomuser.me/api/");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer2);


  let myPromise3 = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://randomuser.me/api/");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise3.then(
    function(value) {
        console.log(typeof value)
        let objValue = JSON.parse(value);
        let html = `<img src="${objValue.results[0].picture.large}" alt="" srcset="">`
        myDisplayer(html);
    },
    function(error) {
        myDisplayer(error);
    }
  );



  async function myDisplay() {
    let myPromise3 = new Promise(function(myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://randomuser.me/api/");
        req.onload = function() {
          if (req.status == 200) {
          console.log(  req.response);
            myResolve(req.response);
          } else {
            myReject("File not Found");
          }
        };
        req.send();
      });
    document.getElementById("demo").innerHTML = await myPromise3;
  }
  
 //  myDisplay();

console.log("Fin")