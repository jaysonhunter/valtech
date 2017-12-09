module.exports = function (grunt) {
    var UPDATE_ASSETS_CMD;

    UPDATE_ASSETS_CMD = "rsync -ru assets build";

    return {
        "updateAssets"                : UPDATE_ASSETS_CMD
    };
};