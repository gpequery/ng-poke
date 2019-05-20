const classNames = ['Pokemon'];
const classes = {};

classNames.forEach(name => {
    classes[name] = require('./' + name);
});

module.exports = classes;
