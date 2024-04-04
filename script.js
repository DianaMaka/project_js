let arr1 = [3,6,1,8,3,6,3,6,3,6];
let arr2 = [1,4,2,4];
let arr3 = [6,3,2,8,1];
let numArr = []; 

const funArr = function(arr1, arr2, arr3) {
	for(let i = 0; i < arr1.length; i++) {
		for(let j = 0; j < arr2.length; j++) {
			for(let g = 0; g < arr3.length; g++) {
				if(arr1[i] === arr2[j] && arr1[i] === arr3[g]) {
					numArr.push(arr1[i]);
				}
			}
		}
	}
}
funArr(arr1, arr2, arr3);
// console.log(arr);

let arr = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
let arrText = ['text', 'education', 'part', 'Text'];

// по методу filter
let removeDuplicates = function(arr, arrText) {
	let array = arr.filter((item, index) => {
		return arr.indexOf(item) === index
	});
	// console.log(array);

	let arrayText = arrText.filter((item, index) => {
		return arrText.indexOf(item.toLowerCase()) === index
	});
	// console.log(arrayText);
};
removeDuplicates(arr, arrText);

// только метод indexOf
let removeDuplicate = function (arr, arrText) {
	let array = [];
	for(let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if(array.indexOf(num) === -1) {
			array.push(num);
		}
	}
	// console.log(array);
	return array;
}
removeDuplicate(arr, arrText);
