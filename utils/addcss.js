function addCSS (link) {
    var l = document.createElement('link');
    l.href = link;
    l.type = 'text/css';
    l.rel = 'stylesheet';
    document.head.appendChild(l);
}
