
function appendToResult(value) {
    var result = document.getElementById("result");
    if(value!="DE"){result.value += value;}
    if(value=="DE"){result.value = result.value.slice(0, -1);}
  }
  
  function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.value;
    var calculatedResult = eval(expression);
  
    result.value = calculatedResult;
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = '';
  }