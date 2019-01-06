var essentialScripts = ["Renderer.js"];

loadExternalScripts(essentialScripts, 0, function() {
    $.when($.ready).then(function() {
        console.log("Document is ready");
    });
});

function loadExternalScripts(loadScripts, scriptId, callback) {
    if(scriptId < loadScripts.length && scriptId >= 0) {
        $.getScript(loadScripts[scriptId], function(script, textStatus, jqXHR) {
            if(jqXHR.status != 200) {
                console.log("Could not load " + loadScripts[scriptId] + ": " + jqXHR.status);
            }
            else {
                console.log("Loaded " + loadScripts[scriptId]);
            }
            loadExternalScripts(loadScripts, ++scriptId, callback);
        });
    }
    else {
        console.log("Finished loading all scripts");
        callback();
    }
}