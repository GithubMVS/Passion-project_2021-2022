/*!
 * @uiw/copy-to-clipboard v1.0.12
 * Copy to clipboard.
 * 
 * Copyright (c) 2021 Kenny Wang
 * https://github.com/uiwjs/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */
function copyTextToClipboard(text, cb) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-9999px"
  };
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  let isCopy = false;
  try {
    const successful = document.execCommand("copy");
    isCopy = !!successful;
  } catch (err) {
    isCopy = false;
  }
  document.body.removeChild(el);
  if (selected && document.getSelection) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
  cb && cb(isCopy);
}
export default copyTextToClipboard;
