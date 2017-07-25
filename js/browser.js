(function(){

  if (/not_remind=1/.test(document.cookie)) {
    return;
  }

  var html = [
    '<div class="browser-mask">',
      '<div class="browser-dialog" id="browser-dialog">',
        '<div class="browser-text">',
          '<h1 class="browser-title">建议您使用 Chrome 浏览器访问该网站！</h1>',
          '<p class="browser-para">',
            '赏吧Sunbar 嗨现场 使用了 CSS3、Canvas 等诸多动画特效。为了提升您的使用体验，建议使用 Chrome 浏览器。',
          '</p>',
          '<p class="browser-para">',
            '如果您正在使用',
            '<a href="http://ie.sogou.com/"   target="_blank">搜狗浏览器</a>，',
            '<a href="http://browser.qq.com/" target="_blank">QQ浏览器</a>，',
            '<a href="http://www.liebao.cn/"  target="_blank">猎豹浏览器</a>，',
            '<a href="http://chrome.360.cn/"  target="_blank">360极速浏览器</a>',
            '等国产浏览器，您也可尝试将其切换到高速/极速模式。',
          '</p>',
        '</div>',
        '<div class="browser-btn-ctnr">',
          '<input type="checkbox" id="browser-remind"><label for="browser-remind">30天内不再提醒我</label>&nbsp;&nbsp;',
          '<a class="browser-btn browser-btn-cancel" id="browser-keep" href="javascript:void(0);">暂不使用</a>&nbsp;&nbsp;',
          '<a class="browser-btn" id="browser-try-new" href="http://www.google.com/chrome" target="_blank">下载 Chrome 试试</a>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  var cssNode = document.createElement('link'),

      cust_option = window.anti_ie_config || {},
      script_path = '',
      option = {
        cssPath: 'css/',
        html: html
      },
      key, i, match;

  for (key in cust_option) {
    if (cust_option[key] !== undefined) {
      option[key] = cust_option[key]
    }
  }

  for (i = 0; i < document.scripts.length; i++) {
    if (match = document.scripts[i].src.match(/(.*)browser\.js/)) {
      script_path = match[1];
      break;
    }
  }
  option.cssPath = option.cssPath;

  cssNode.addEventListener('load', function(){
    var 
    divNode = document.createElement('div'),
    dialogNode,
    remindChk,
    cancelBtn,
    okBtn,
    i, match;

    divNode.innerHTML = option.html;
    document.body.appendChild(divNode);

    dialogNode = document.getElementById('browser-dialog');
    dialogNode.style.top =
      (document.documentElement.clientHeight - dialogNode.clientHeight) / 2;

    remindChk = document.getElementById('browser-remind');
    cancelBtn = document.getElementById('browser-keep');

    cancelBtn.addEventListener('click', function(){
      var isRemindChecked = !!remindChk.checked;
      if (isRemindChecked) {
        var date = new Date();
        date.setDate(date.getDate() + 30);
        document.cookie = 'not_remind=1;expires=' + date.toGMTString();
      }
      divNode.style.display = 'none';
    });
    document.cookie = 'not_remind=1';
  });

  cssNode.setAttribute('rel' , 'stylesheet');
  cssNode.setAttribute('type', 'text/css');
  cssNode.setAttribute('href', option.cssPath + 'browser.css');
  document.body.appendChild(cssNode);

})();