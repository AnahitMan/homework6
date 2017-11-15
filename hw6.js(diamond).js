const diamondRec = function (num, char){
	if (num % 2 === 0){
		num = num+1;
	}

	const number = function(n, character){
		if(n <= 0){
			return "";
		}
		else {
			return character + number(n - 1, character);
		}
	};
	const row = function(line, spaceN, charN) {
		if (line === num+1) {
			return;
		}
		console.log(number(spaceN, " ") + number(charN, char));
		if(line > num/2) {
			row(line+1, spaceN+1, charN-2);
		} else {
			row(line+1, spaceN-1, charN+2);
		}
	};
	row(1, (num-1)/2, 1)
};

diamondRec(6, "@");

//2nd

const diamondFor = function (num, char){
	if (num % 2 === 0){
		num = num+1;
	}

	const number = function(n, character){
		let final = "";
		for(let i = 0; i < n; i++)	{
			final = final + character;
		}
		return final;
	};
	let spaceN = (num-1)/2;
	let strN = 1	
	for (let a = 1; a <= num; a++){
		console.log(number(spaceN, " ") + number(strN, char));
		if (a < num/2){
			spaceN = spaceN - 1;
			strN = strN + 2;
		}
		else{
			spaceN = spaceN + 1;
			strN = strN - 2;
		}

	};
};
diamondFor(5, '$');