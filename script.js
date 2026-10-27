// JavaScriptファイルが正常に読み込まれたか確認する
console.log("JavaScript loaded");

// ページ上部に戻るボタンを取得する
const backToTopButton = document.getElementById("back-to-top");

// スクロールしたときに実行する処理
window.addEventListener("scroll", function () {

  // 300pxより下にスクロールしたらボタンを表示
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }

});

// ボタンをクリックしたときの処理
backToTopButton.addEventListener("click", function () {

  // ページの一番上に滑らかに戻る
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
