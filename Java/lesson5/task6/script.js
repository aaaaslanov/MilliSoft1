let offsetMenu = document.getElementById('offset-menu').style;
let nav = document.getElementsByTagName('nav')[0].style;
let navList = document.getElementById('nav').style;
offsetMenu.transition = '.4s'; nav.transition = '.4s';
function offsetMenuOpen() {
    offsetMenu.left = '0'; nav.width = '265px';
    navList.opacity = '0'; offsetMenu.opacity = '1';
    nav.backgroundColor = '#061647';navList.alignItems = 'flex-end';
}
function offsetMenuClose() {
    offsetMenu.left = '-265px'; nav.width = '75px';
    navList.opacity = '1'; offsetMenu.opacity = '0';
    nav.backgroundColor = '#5C6784'; navList.alignItems = 'center';
}