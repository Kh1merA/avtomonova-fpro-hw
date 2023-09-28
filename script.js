function checkHref(href){
    if(href.startsWith('http://') || href.startsWith('https://')) return href;
    else return `http://${href}`;
}

document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        let href = item.getAttribute('href');
        href = checkHref(href);
        item.setAttribute('href', href);
    })
})
