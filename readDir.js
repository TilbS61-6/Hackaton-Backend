const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const dot = "."


try {
    let newArray = [];

    fs.readdir("./", (err, files)=> {
        if (err) {
            console.log(err.message);
        } else {
            newArray = files.filter((file, index, object) => {
                return !file.includes(dot) && !file.includes("_");
            });
            newArray.filter((file) => {
                isDirEmpty(file).then(log => {
                    console.log(log);
                })
                console.log(file + " " + fs.statSync(file).isDirectory());
            }).then(i => {
                    core.setOutput("directorys", newArray);

            });
        }
    });

    function isDirEmpty(dirname) {
        return fs.promises.readdir(dirname).then(files => {
            return files.length > 0;
        })

    }
} catch (e) {
    core.setFailed(e.message);
}



