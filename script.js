function stringChop(str, size) {
  // your code here
	size = Number(size)
	if (str.length === 0) return []
	
	let res = []; //["Hello", ", wor", "ld!"] 
	let i = 0; // 10

	while (i < str.length){
		let newStr = str.slice(i, i+size); // 10, 10+5=15
		res.push(newStr);
		i += size;
	}

	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
