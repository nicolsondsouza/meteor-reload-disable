Package.describe({
    summary: "Disables reload on client side."
});

Package.on_use(function (api) {
    api.add_files('common.js', ["client","server"]);
    api.add_files('server.js', ["server"]);
    api.add_files('client.js', ["client"]);
    if(api.export){
        
    }
});
