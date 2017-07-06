$(function(){
/*proDet.html*/
    //���ƺ������
    var imgWid=  $('.banner img').width();
    $('.banner img').height(imgWid);
    //tab��
    function tabSwitch(hd,bd){
        $(bd).eq(0).show().siblings().hide();
        $(hd).hover(function(event) {
            $(this).addClass('cur').siblings().removeClass('cur');
            var index = $(this).index();
            $(bd).eq(index).show().siblings().hide();
        });
    }
    tabSwitch('.proDetail .mid>ol>li','.proDetail .mid>ul>li');
    //�ղ�
    $('.proBot .inL a.sc').click(function(){
        $(this).toggleClass('hover');
    })
    //������ʾ
    function addTip(btn,pop){
        $(btn).click(function(){
            var timeNum =2;
            var myTimer = null;
            $(pop).fadeIn(200);
            myTimer = setInterval(function(){
                timeNum--;
                if(timeNum == 0){
                    clearInterval(myTimer);
                    $(pop).fadeOut(200);
                }
            },1000)
        })
    }
    addTip('.proBot .addList','.addListTip');

    //选择类型
    $('.proDet .amount .sel>span').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
    })

/*subOrder.html*/
    //ʹ�û���
    $('.subOrd .integrate .use i').click(function(){
        $(this).toggleClass('hover');
    })

/*order.html*/
    tabSwitch('.order .tab>ol>li','.order .list>ul>li');



})