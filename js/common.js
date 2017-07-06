
$(function(){
    //µ×²¿µ¼º½
    function footNav(parm){
        var liL = $(parm).size();
        for(var i = 0; i < liL; i++){
            if( $(parm).eq(i).hasClass('cur')){
                $(parm).eq(i).find('span').addClass('blue');
                var chP1 =  $(parm).eq(i).find('img').attr('src');
                var chP2 =  $(parm).eq(i).find('img').attr('rel');
                var temp = '';
                temp = chP1;
                chP1 = chP2;
                chP2 = temp;
                $(parm).eq(i).find('img').attr('src', chP1);
                $(parm).eq(i).find('img').attr('rel', chP2);
            }
        };
    };
    footNav('.footer .nav ul li');

});



