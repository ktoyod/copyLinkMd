var title = document.title;
var url = window.location.href;
var mdLink = `[${title}](${url})`

navigator.clipboard.writeText(mdLink);