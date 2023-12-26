//создает на
var hrefs=[], counter=0;
for (var i=0;i<100 ;i++)
{   var j=jQuery(`div.founded_number input:eq(${i})`).data('number')
    if(j=== undefined){break}
    else {hrefs.push(`window.open('https://yandex.ru/search?text=${j}', '_wnd${j}')`);console.log(j)}; counter++};
jQuery('#mask').replaceWith(`<button id="mask">Нажми на меня (${counter} вкладок)</button>`);
jQuery('#mask').attr('onclick', hrefs)


jQuery('#mask').after('<input id="openvars" value="" placeholder="Номер" type="text">')

function open_Allvars(){
    var ov=document.getElementById('openvars').value
    if (ov[0]==='+'&&ov.length===13){
        ov=ov.slice(1)
    }
    if (ov.length===12){
        window.open('https://yandex.ru/search?text='+ov,'_wnd1')
    }
}

jQuery("#openvars").after('<button onclick="open_Allvars()" id="openvars_btn">Все вариации</button>')

