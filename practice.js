// // var x = [1,3,5,7]
// // x[x.length-3] = x[x.length/2 + x.length/4]
// // console.log(x)

// // var x = [1,3,5,7]
// // x[x.length-3] = x[x.length/2 + x.length/4]
// // console.log(x
  
// //   var x = [1,3,5,8,2,-5,-8]
// //   // var y = [2,4,6]
// //   var temp = x[x.length-1]
// //   console.log(temp)
// //   x[x.length-1] = x[0]
// // x[0] = temp;
// // console.log(x)

// // function a()
// // {
// // return 25;
// // return 50;
// // }

// // console.log(a())

// var x=1;
// var y= 48;
// while (x<100)
// {
//   if (x==y)
//   {
//     break;
//   }
//   x++;
// }

// console.log(x)

// var arr = [1,2,5]

function iterArr(arr) {
  var sum=0;
  for(i=0;i<arr.length;i++){
      sum=sum+arr[i];
  } 
  console.log(sum)
  return sum; 
}

iterArr([1,2,5]);

