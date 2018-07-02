var fs = require('fs');
const cheerio = require('cheerio')

fs.readFile(__dirname + '/template/template.html', 'utf8', function(err, html){
    //console.log(html);
    const $ = cheerio.load(html);
    var h1Text = $('h1').text();
    console.log(h1Text);
});