/**
 * ボタン押下でアニメーション再生する用のjsファイルです
 * */
window.addEventListener("DOMContentLoaded", () => {
  clickAndPlay("letters", "letters", 5500, true);
});

/** アニメーションを再生させるために付与するクラス名 */
const ACTIVE_CLASS_NAME = "is-active";

/**
 * ボタン押下でアニメーションを再生するためのactiveクラスを付与します
 * @param buttonId {string} data-button-id属性に指定した値
 * @param wrapperId {string} data-wrapper-id属性に指定した値
 * @param animDuration {number} CSSのtransitionプロパティに指定したものと同じduration
 * @param shouldToggle {boolean} activeクラスの付与を切り替えるか？ アニメーション再生後にそのままにしたい場合はtrue
 * */
const clickAndPlay = (buttonId, wrapperId, animDuration, shouldToggle) => {
  const button = document.querySelector(`[data-button-id="${buttonId}"]`);
  const wrapper = document.querySelector(`[data-wrapper-id="${wrapperId}"]`);
  /** 再生中か？ */
  let isPlaying = false;
  /** タイマー */
  let timeoutID = null;

  button.addEventListener("click", () => {
    // アニメーション中はクリックを受け付けない。
    if (isPlaying) {
      return;
    }

    if (wrapper.classList.contains(ACTIVE_CLASS_NAME)) {
      button.innerHTML = "再生する";
      wrapper.classList.remove(ACTIVE_CLASS_NAME);
      clearTimeout(timeoutID);
    } else {
      wrapper.classList.add(ACTIVE_CLASS_NAME);
      isPlaying = true;
      timeoutID = setTimeout(() => {
        isPlaying = false;
        if (!shouldToggle) {
          wrapper.classList.remove(ACTIVE_CLASS_NAME);
        } else {
          button.innerHTML = "リセット";
        }
      }, animDuration);
    }
  });
};

