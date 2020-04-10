// 改变浏览器窗口获取不同图片
$(function () {
  function resize() {
    // 获取浏览器宽度
    var windowWidth = $(window).width();

    var isSmallScreen = windowWidth < 768;

    // 根据isSmallScreen的值来切换图片
    var ida = $('.carousel-inner > .item');
    ida.each(function (i, item) {
      // 把DOM对象转换为jq对象
      $item = $(item);
      var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
      $item.html('<img src="' + imgSrc + '"/>');
    })

    // tab选项卡
    var $ulContainer = $('.nav-tabs');
    var width = 0;
    $ulContainer.children().each(function (index, element) {
      // 元素的宽度
      width += element.clientWidth;
    })

    //  解决在pc端出现滚动条
    if (width > $(window).width()) {
      $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
    } else {
      $ulContainer.css('width', "auto").parent().css('overflow', 'hidden');
    }
  }

  $(window).on('resize', resize).trigger('resize');


  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $('#news #u1 a').on('click',function () {
    $this = $(this);
    var title = $(this).data('title');
    $(".newsList").text(title);
  })



})