(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
let userChatId;
function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
document.addEventListener('DOMContentLoaded', () => {
  let app = window.Telegram.WebApp;
  let query = app.initData;
  let user_data_str = parseQuery(query).user;
  let user_data = JSON.parse(user_data_str);
  app.expand();
  app.ready();
  userChatId = user_data["id"];
  document.getElementById('buttonStory').addEventListener("click", () => {
    app.shareToStory('./istockphoto.jpg', {text: 'example text', widget_link: {
      url: 'https://t.me/biesse_bot/telegramStory',
      name: '@nameWidgetLink'
    }})
  })
});