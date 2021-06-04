var fs = require('fs')

var filePath = 'writemonkey3_sheets';

var fileContent = fs.readFileSync(filePath, 'utf8');
var data = fileContent.split("\n");
var documents = {};
for (var i in data)
{
	if (!data[i]) continue;

	var file = JSON.parse(data[i]);
	if (file.nam && file.txt && !file.del)
	{
		if (!documents[file.nam] || documents[file.nam].dtm < file.dtm)
		{
			documents[file.nam] = file;
		} 
	}
}

for (var i in documents)
{
	fs.writeFileSync(documents[i].nam + '.md', documents[i].txt, 'utf8');
}