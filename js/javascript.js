document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML ='Call_to_Action3';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset','utf-8');

let lang = document.createElement('lang');
lang.setAttribute('lang','en,ru');

document.head.appendChild(metaUtf8);
document.head.appendChild(title);

let h1 = document.createElement('h1');
h1.innerHTML='Choose Your Option';
document.body.appendChild(h1);

let h2 = document.createElement('h2');
h2.innerHTML='But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(h2);


let div1 = document.createElement('div');  // гл. див
div1.classList.add('block');
document.body.appendChild(div1);


let div2 = document.createElement('div');    //1 див
div2.classList.add('sub_block1');
div1.appendChild(div2);

let p = document.createElement('p');
p.innerHTML='FREELANCER';
div2.appendChild(p);


let h1_2 = document.createElement('h1');
h1_2.innerHTML='Initially designed to';
div2.appendChild(h1_2);

let p1 = document.createElement('p');
p1.innerHTML='But I must explain to you how all this mistaken idea of denouncing';
div2.appendChild(p1);



let div4 = document.createElement('div');
div4.innerHTML='START HERE';
div2.appendChild(div4);


let div3 = document.createElement('div');    //2 див
div3.classList.add('sub_block2');
div1.appendChild(div3);

let p2 = document.createElement('p');
p2.innerHTML='STUDIO';
div3.appendChild(p2);


let h1_3 = document.createElement('h1');
h1_3.innerHTML='Initially designed to';
div3.appendChild(h1_3);

let p3 = document.createElement('p');
p3.innerHTML='But I must explain to you how all this mistaken idea of denouncing';
div3.appendChild(p3);

let div5 = document.createElement('div');
div5.innerHTML='START HERE';
div3.appendChild(div5);

//стили
h1.style.fontFamily='Arvo';
h1.style.textAlign='center';
h1.style.fontSize='36px';
h1.style.fontWeight='regular';
h2.style.fontFamily='OpenSans';
h2.style.textAlign='center';
h2.style.fontSize='26px';
h2.style.fontWeight='regular';
h2.style.color='#9FA3A7';
p.style.color='#9FA3A7';
p1.style.color='#9FA3A7';
p2.style.color='#FFC80A';
h1_3.style.color='#FFFFFF';
p3.style.color='#FFFFFF';

div1.style.textAlign='center';
div1.style.width='800px';
div1.style.marginLeft='28%';

div2.style.textalign='center';
div2.style.width="400px";
div2.style.height="480px";
div3.style.width="400px";
div3.style.height="480px";
div1.style.display="block";
div2.style.float="left";
div3.style.float="left";
div3.style.backgroundColor='#8F75BE';

div4.style.margin="auto";
div4.style.width = "147px";
div4.style.height = "46px";
div4.style.border = "3px solid #FFC80A";
div4.style.borderTopLeftRadius = "46px";
div4.style.borderTopRightRadius = "46px";
div4.style.borderBottomLeftRadius = "46px";
div4.style.borderBottomRightRadius = "46px";

div5.style.margin="auto";
div5.style.color="#FFFFFF";
div5.style.width = "147px";
div5.style.height = "46px";
div5.style.border = "3px solid #FFC80A";
div5.style.borderTopLeftRadius = "46px";
div5.style.borderTopRightRadius = "46px";
div5.style.borderBottomLeftRadius = "46px";
div5.style.borderBottomRightRadius = "46px";