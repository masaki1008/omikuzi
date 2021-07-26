'use strict';

{
  //ボタンに対してイベントを設定したいから、まずはボタン要素を取得する
  //ここでボタン要素を取得しないと、どれに対してイベントを起こせばいいのかが、分からなくなるから
  const btn = document.getElementById('btn');
  
  //ここでaddEventListenerを使いボタンをクリックしたら〜〜の処理をしろと命令している
  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '凶', '末吉'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
 });
}