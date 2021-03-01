const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const dot = "."


try {
    let newArray = [];

    fs.readdir("./", (err, files)=> {
        let _arr = [];
        if (err) {
            console.log(err.message);
        } else {
            _arr = files.filter((file, index, object) => {
                return !file.includes(dot) && !file.includes("_");
            });
            newArray = _arr;
        }
        core.setOutput("directorys", newArray);

    });

    function isDirEmpty(dirname) {
        return fs.promises.readdir(dirname).then(files => {
            return files.length === 0;
        });
    }
} catch (e) {
    core.setFailed(e.message);
}



