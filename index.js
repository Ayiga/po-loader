/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author David Schissler @dschissler
*/
var po2json = require('po2json');
var utils = require('loader-utils');

module.exports = function(source) {
    this.cacheable();

    var options = utils.getOptions(this);
    if (options === null) {
        options = {};
    }

    jsonData = po2json.parse(source, options);

    return 'module.exports = ' + JSON.stringify(jsonData);
}
