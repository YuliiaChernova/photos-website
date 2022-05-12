module.exports.textAreaParser = (str) => str.split('\r\n');

module.exports.extractText = (str) => str.split('<p>')[1].split('</p>')[0];

module.exports.createPath = (caption) => caption.toLowerCase().replace(' ', '_');