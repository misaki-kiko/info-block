function addInfo(h,ib,bgc = '',tc = '') {
    if (h == undefined || ib == undefined){
        h = '';
        ib = '';
    }
    let body = document.getElementById('ibset');
    let infoblock = document.createElement('div');
    let button = '<div class="ib-x" onclick="ibxh()"><b>x</b></div>\n';
    let head = '<h3>'+h+'</h3>\n' ;
    let ibb = '<p>'+ib+'</p>\n';
    let rand = Math.random();

    infoblock.setAttribute('class','info-block fadenum');
    infoblock.setAttribute('id',rand);
    if (bgc !== ''){
        infoblock.setAttribute('style', 'background-color:'+bgc+'');
    }
    if (tc !== ''){
        infoblock.setAttribute('style', 'color:'+tc+'');
    }
    if (tc !== '' && bgc !== ''){
        infoblock.setAttribute('style', 'color:'+tc+';' + 'background-color:'+bgc+'');
    }
    infoblock.innerHTML = button + head + ibb;
    body.appendChild(infoblock);
    setTimeout("document.getElementById('"+rand+"').classList.add('fadeout');",8300);
    setTimeout("document.getElementById('"+rand+"').parentNode.removeChild(document.getElementById('"+rand+"'))", 10000);

}
function ibxh() {
    let ibx = document.getElementsByClassName('info-block');
    let ibxl = ibx.length;
    ibx[ibxl - 1].classList.add('fadeout');
    setTimeout("document.getElementsByClassName('info-block')[document.getElementsByClassName('info-block').length - 1].parentNode.removeChild(document.getElementsByClassName('info-block')[document.getElementsByClassName('info-block').length - 1])", 2000);
    // ibx[ibxl - 1].parentNode.removeChild(ibx[ibxl - 1]);
}
