

class Generete {

    // main function to Generate to list name 
    static hiddenName(name,val) {
        let nameList = name ;
        let ArrayName = [];
        for ( let i = 0 ; i < nameList.length ; i++) {
        if(nameList[i].innerHTML.toLowerCase().includes(val) ||
           nameList[i].innerHTML.includes(val))
           continue ;
           else
           ArrayName.push(nameList[i]);
           }
           ArrayName.forEach((e) => e.style.display = 'none');
        }
}


 




  document.querySelector('input').addEventListener('keyup' , function (event) { 
        const nameS = document.querySelectorAll('ul li');
        const key = event.keyCode ;
        if(this.value === '' || key === 8 || key === 46 )
        nameS.forEach((nm) => nm.style.display = 'block');
        Generete.hiddenName(nameS , this.value );
 });




