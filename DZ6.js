//DZ 1

//First approach

function drawTriangle (rowsNumber, symbol) {

        for (i = 0; i <= rowsNumber; i++) {
            var row = " ";
            for (x = 0; x < rowsNumber - i; x++) {
            }

            for (j = 1; j <= i; j++) { 
                
                row += symbol; 
            }
            console.log(row);
        }
    }
    
//Second approach

    function drawTriangle(rowsNumber, symbol) {

        for (let i = 1; i <= height; i++) {
            let row = symbol.repeat(i);
            console.log(row);
        }
    }
    
//DZ 2

var sum = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 3 !== 0) {
        sum += i;
    }

}

console.log(sum);

//DZ 3

function pow(x, y) {

    var result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    console.log(result);

}


