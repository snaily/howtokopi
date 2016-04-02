var TRANSLATIONS = {
	"coffee": "kopi",
	"tea": "teh",
	"evaporated": "C",
	"nomilk": "O",
	"nosugar": "kosong",
	"iced": "peng"
};

function makeTranslation(tokens) {
	var output = "";

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token in TRANSLATIONS) {
			if (output != "") {
				output = output + " ";
			}
			output = output + TRANSLATIONS[token];
		}
	}

	return output;
}

function updateOutput() {
	var checked = document.querySelectorAll("input:checked");

	tokens = [];
	for (var i = 0; i < checked.length; i++) {
		tokens.push(checked[i].value);
	}

	document.getElementById("output").innerText = makeTranslation(tokens);
}

var checkboxes = document.querySelectorAll("input[type=radio]");
for (var i = 0; i < checkboxes.length; i++) {
	var element = checkboxes[i];

	element.onchange = updateOutput;
}

updateOutput();
