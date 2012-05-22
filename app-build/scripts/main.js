
define('app',[],function () {

        

        return 'bar';
    
});
//set up config
require.config({
});

require(['app'], function (app) {
        //do some stuff
        alert('foo' + app);
    }
);

define("main", function(){});
