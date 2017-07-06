
$(function(){
/*categoryLisr.html*/
    function tabSwitch(parm){
        $(parm).click(function(){
           $(this).addClass('cur').siblings().removeClass('cur');
        });
    }
    tabSwitch('.cateTab .hd .tabUl li');
    function toglle(arr,hd,cancle){
        var speed = 200;
        var bl = true;
        $(arr).click(function(){
            if(bl==true){
                $('html').css('overflow','hidden');
                $(this).addClass('arrow');
               /* $(hd).slideDown(speed);*/
                $(hd).addClass('open');
                bl=false;
            }else{
                $('html').css('overflow','visible');
                $(this).removeClass('arrow');
               /* $(hd).slideUp(speed);*/
                $(hd).removeClass('open');
                bl=true;
            }
        })
        $(cancle).click(function(){
            if(bl==false){
                $('html').css('overflow','visible');
                $(arr).removeClass('arrow');
                $(hd).removeClass('open');
                bl=true;
            }
        })
    }
    toglle('.cateTab .hd .ico','.cateTabHd','.cateTabHd .btn .cancle');
    tabSwitch('.allList .con ul li');

    tabSwitch('.sorting .tab ul li');
    toglle('.sorting .tab ol .all','.brand','.brand .btn .cancle');

    //返回顶部
    $('.backTop').hide();
    $(window).scroll(function(e) {
        var win_h = $(window).height()/2;
        var win_s = $(window).scrollTop();
        if( win_h < win_s ){
            $('.backTop ').fadeIn(500);
        }else{
            $('.backTop ').fadeOut(500);
        }
    });
    $('.backTop ').click(function(e) {
        $('html,body').animate({ scrollTop:0 },200);
    });

/*careShop.html*/
    //店铺关注
    function care(btn,wrap,cancle){
        var speed = 200;
        $(wrap).hide();
        $(btn).click(function(e){
            e.preventDefault();
            $(wrap).fadeIn(speed);
        })
        $(cancle).click(function(e){
            $(wrap).fadeOut(speed);
        })
    }
    care('.careBtn','.careWrap','.careWrap .cancle');

/*cityList.html*/
    //热门地址
    tabSwitch('.hotCity .list ul li');

/*shopInSearch.html*/
    function seachTog(btn,down){
        $(down).hide();
        var spe = 100;
        var bbl = true;
        $(btn).click(function() {
            if(bbl==true){
                $(this).children('i').addClass('arrTop');
                $(down).slideDown(spe);
                bbl=false;
            }else{
                $(this).children('i').removeClass('arrTop');
                $(down).slideUp(spe);
                bbl=true;
            }
        })
    }
    seachTog('.inSer .in .cen .mid .nr','.inSer .in .cen .nrDown');
    var myInp = new Array();
    myInp  = ["输入商品","输入货号","输入品牌"];
    function selTex(parm,_parm,inp,del){
        $(parm).click(function(){
            $(this).addClass('cur').siblings().removeClass('cur');
            $(_parm).children('em').html( $(this).children('span').html());
            var index = $(this).index();
            $(inp).val( myInp[index]);
        })
        $(del).click(function(){
            $(inp).val('');
        })
    }
    selTex('.nrDown .down ul li','.mid .nr','.mid .inp input','.mid .inp .del');

    //删除历史记录
    function delHis(del){
        $(del).click(function(){
            $(this).parent('li').remove();
        })
    }
    delHis('.hisTxt ul li .del');

/*shopInSerRes.html*/
    //收藏
    function collect(parm){
        $(parm).click(function(){
            $(this).toggleClass('hover');
        })
    }
    collect('.serPro ul li .collect');













});