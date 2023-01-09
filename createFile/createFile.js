const fs = require("fs");
const path = require("path");






const createFile = (input) => {
    const filePath = path.join(process.cwd(__dirname), "public");
    const filePath3 = `${filePath}/${input[3]}`;
    console.log(filePath3);
    if (input[2] == "add") {
    return fs.writeFileSync(input[3], input[4])
    } else if (input[2] == "remove") {
        return fs.unlinkSync(input[3])
    }
};




exports.createFile = createFile;


