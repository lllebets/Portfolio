$('nav>a').click(function () {
    const ID = $(this).attr('href');
    const OFFSET = $(ID).offset().top;
    $('html').animate({
        scrollTop: OFFSET
    }, 1000);
    if (ID === "#about") {
        $("article").css({"right": "0", "transition": "2s"});   
    }
    else{
        $("article").css({"right": "300px", "transition": "2s"});
    }
    if (ID === "#skills") {
        $(".wraper-html").css({"right": "0", "transition": "2s"});   
        $(".wraper-js").css({"left": "0", "transition": "2s"});   
        $(".wraper-css").css({"transform": "rotate(0deg)", "transition": "2s"});   
    }
    else{
        $(".wraper-html").css({"right": "200px", "transition": "2s"});
        $(".wraper-js").css({"left": "200px", "transition": "2s"});
        $(".wraper-css").css({"transform": "rotate(30deg)", "transition": "2s"});
    }

})