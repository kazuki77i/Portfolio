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

/* ページ上部に戻るボタンをクリックしたときの処理 */
backToTopButton.addEventListener("click", function () {

  // ユーザーがアニメーションを減らす設定を有効にしているか確認
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // 設定に応じてスクロール方法を切り替える
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "instant" : "smooth"
  });

});
