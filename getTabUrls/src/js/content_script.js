var getTabUrlsButton =
  '<button type="button" class="get_tab_urls_button">ブラウザのタブのURL取得</button>';
$ ('.getTabsUrlsButton').append (getTabUrlsButton);
$ ('.get_tab_urls_button').click (function (e) {
  chrome.runtime.sendMessage ({}, function (response) {
    if (response) {
      $ ('.getTabUrlText').html (response.urls);
    }
  });
});
