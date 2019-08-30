'use strict';
chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
  chrome.windows.getAll ({populate: true}, function (windows) {
    var urls = '';
    for (let window of windows) {
      for (let tab of window.tabs) {
        urls += tab.url + '</br>';
      }
    }
    sendResponse ({
      urls: urls,
    });
  });
  return true;
});
