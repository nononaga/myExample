## 開いているブラウザのタブのＵＲＬを取得する

### 作成目的
これは以下の三つを調査・検証するために、作成されたものである。  
そのため、それ以外のことに関しては考慮外とする。

* ブラウザのタブのURLをすべて取得する方法
* content_script.jsからbackgroundで通信する方法
* Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.というエラーが発生する理由



### 詳細
test.htmを開いた際に、このChrome拡張をいれていると  
ブラウザのタブのURL取得ボタンが表示される。

ボタンをクリックすると、現在開いているブラウザのタブのページのＵＲＬが  
すべて表示される。
