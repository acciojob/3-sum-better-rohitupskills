function threeSum(arr, target) {
// write your code here
  let n = arr.length;
	for(int i = 0; i < n; i++){
		for(let j = i+1; j < n - 1; j++){
			for(let k = j+1 ; k < n-2; k++){
				let sum = arr[i]+arr[j]+arr[k];
				return diff = Math.abs(sum-target);
			}
		}
	}
	return 
}

module.exports = threeSum;
