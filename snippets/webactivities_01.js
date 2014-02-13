if (typeof MozActivity == "function") {
  ...
} else {
  console.log("FALLBACK: call WebActivity" +
              " 'pick image'");
  return;
}
