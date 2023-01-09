const colors = require("colors");


const rainbow = {};

rainbow.blue = (data) => {
    return colors.blue(data);
};
rainbow.error = (data) => {
    return colors.red(data);
};
rainbow.success = (data) => {
    return colors.green(data);
};
rainbow.gray = (data) => {
    return colors.grey(data);
};

exports.rainbow = rainbow; 