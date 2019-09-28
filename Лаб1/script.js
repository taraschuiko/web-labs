// 1
var name = "Тарас";
alert(name);

// 2
var a = 16;
var b = 7;
var c = a - b;
var d = 7;
var result = c + d;
alert(result);

// 3
a = +prompt("Номер варіанту");
if (a >= 7) {
  alert("Вірно");
} else {
  alert("Невірно");
}
if (a % 2 === 0) {
  a += 7;
} else {
  a -= 3;
}
alert(a);

// 4
var result4 = document.getElementById("4");

for (var i = 1; i <= 16 + 10; i++) {
  result4.innerHTML += `${i ** 2}<br>`;
}

// 5
var result5 = document.getElementById("5");

var max = 16 + 10;
for (var i = 2; i <= max; i++) {
  testPrime(i) && (result5.innerHTML += `${i}<br>`);
}

function testPrime(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}