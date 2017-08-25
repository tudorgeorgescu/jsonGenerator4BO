var fs = require("fs");

//read additional entries to be added to Backoffice
var text = fs.readFileSync("./data.csv").toString('utf-8');
var textByLine = text.split("\n");
console.log(textByLine);

var text = fs.readFileSync("./entries.json").toString('utf-8');
console.log(text);

var text_target = JSON.parse(text);

max = 0;

for (i=0; i<text_target.length; i++) {
  if (text_target[i].id>max) {
    max = text_target[i].id;
  }
}


for (i=0; i<textByLine.length; i++) {
  var max_add = max + i + 1;
  var add = {
    "name": textByLine[i],
    "id": max_add
  }
  text_target.push(add);
};

console.log(JSON.stringify(text_target));

fs.writeFile("./entries.json", JSON.stringify(text_target, null, 4), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


