pick.onsuccess = function () {
  var img = document.createElement("img");
  img.src = window.URL.
    createObjectURL(this.result.blob);
  var viewer = document.
    querySelector("#image-viewer");
  viewer.appendChild(img);
};

pick.onerror = function () { ... };
