export default rangeSlider;

// условное выражение if, чтобы код выполнялся только в том случае, если элемент с таким id существует на текущей странице:
if (document.getElementById('filter-price')) {
	const rangeSlider = document.getElementById('filter-price');

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [0, 999],
			connect: true,
			step: 1,
			range: {
				'min': [0],
				'max': [999]
			}
		});
	
		const input0 = document.getElementById('input-0');
		const input1 = document.getElementById('input-1');
		const inputs = [input0, input1];
	
		rangeSlider.noUiSlider.on('update', function(values, handle){
			inputs[handle].value = Math.round(values[handle]);
		});
	
		const setRangeSlider = (i, value) => {
			let arr = [null, null];
			arr[i] = value;
	
			console.log(arr);
	
			rangeSlider.noUiSlider.set(arr);
		};
	
		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				console.log(index);
				setRangeSlider(index, e.currentTarget.value);
			});
		});
	}	
}

