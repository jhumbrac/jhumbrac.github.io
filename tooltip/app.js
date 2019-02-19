// Add mouseenter on each = and show text inside help-text
// on mouseleave remove text (empty string)
// for loop - event handler

document.addEventListener('DOMContentLoaded', ()=>{

    const helpTextList = [
        {
            id: 'home',
            text: 'You are already home'
        },
        {
            id: 'about',
            text: 'Get info about us'
        },
        {
            id: 'contact',
            text: 'Connect with us'
        }
    ]
    const helpTextElem = document.querySelector('.help-text');
    // using let instead of var negates need for closures here as each i is block-scoped
    for(let i=0; i < helpTextList.length; i++ ) {
        // using backticks ` removes need for concatenation in text
        let btn = document.querySelector(`#${helpTextList[i].id}`);
        console.log(btn);
        // const helpTextMaker = (j)=>{
        //     return ()=>{
        //         helpTextElem.textContent = helpTextList[j].text
        //     }
        // }
        //btn.addEventListener('mouseenter', helpTextMaker(i))
        btn.addEventListener('mouseenter', ()=>{
            helpTextElem.textContent = helpTextList[i].text
        })
        btn.addEventListener('mouseleave', ()=>{
            helpTextElem.textContent = '';
        })
    }



})
