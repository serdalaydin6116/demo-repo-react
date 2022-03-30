




let array = [10, -2, 4, -8, -5, 7, 3, 9, -13];
let k = 3;
let n = array.length;

let j, maxNum;

function slidingWindowMax(array, n, k){
	result = [];

	for (let i = 0; i < n-k+1; i++) {
		maxNum = array[i];
        // console.log(maxNum);


		for (let j = i; j < i+k; j++) {

			if(array[j] > maxNum)
			   maxNum = array[j]			
		};
		result.push(maxNum);
        // console.log(result);
		
	};
	return result
  
};
slidingWindowMax(array, n, k);
console.log(result);