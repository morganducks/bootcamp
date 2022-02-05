function reverse(arr) {
    firstValue = 0;
    lastValue = arr.length - 1; // = 4
    while(firstValue < lastValue) { // false statement ends loop : once first = 3 second = 3
        var storeFirstValue = arr[firstValue];
        arr[firstValue] = arr[lastValue];
        arr[lastValue] = storeFirstValue;
        console.log(firstValue + "test");
        console.log(lastValue + "test");
        firstValue++;
        lastValue--;
        console.log(firstValue);
        console.log(lastValue);
        console.log(arr);
    }


    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



 // start with just one example; and then add one example more; start with simple case.
