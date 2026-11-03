// /shorts/ を開いたらホームへ。SPA遷移(yt-navigate-start)も拾う
const check = () => { if (location.pathname.startsWith("/shorts")) location.replace("/"); };
check();
document.addEventListener("yt-navigate-start", check);
document.addEventListener("yt-navigate-finish", check);

// 検索フィルタの「ショート」項目を消す (文言で判定: 英/日)
const hideFilter = () => document.querySelectorAll("ytd-search-filter-renderer").forEach(e => {
  if (/^\s*(shorts?|ショート)\s*$/i.test(e.innerText)) e.style.display = "none";
});
new MutationObserver(hideFilter).observe(document, { childList: true, subtree: true });
