'use strict';
chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
  //此方の方法でもできるが、chrome.tabs.queryの方が楽だし、見やすいので
  //.windows.getAllの方法はコメントアウト
  /*
  chrome.windows.getAll ({populate: true}, function (windows) {
    var urls = '';
    for (let window of windows) {
      for (let tab of window.tabs) {
        urls += tab.url + '</br>';
      }
    }
    console.log ('call');
    sendResponse ({
      urls: urls,
    });
  });
  */
  chrome.tabs.query ({}, function (tabs) {
    var urls = '';
    tabs.map (tab => {
      urls += tab.url + '</br>';
    });
    sendResponse ({
      urls: urls,
    });
  });
  return true;
});
