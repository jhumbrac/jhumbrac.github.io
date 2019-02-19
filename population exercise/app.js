// click on select and have population displayed on right
    // when the select option changes
        // make another call to get info
        // print info on screen
            //create element 'p'
            //insert textContent
            //append div
        // remove info when new option is selected
// print all population over 90  - loop

document.addEventListener('DOMContentLoaded', ()=>{
    const selectElem = document.querySelector('select#countries');
    const population = document.querySelector('.population');
    selectElem.addEventListener('change', (event)=>{
        getPopulation(event.target.selectedOptions[0].innerText);

    })


    fetch('http://api.population.io:80/1.0/countries', {
        headers: {
            accept: 'application/json; charset=utf=8'
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        printCountries(json.countries)
    }) 
    function printCountries(list){
        list.forEach((item)=> {
            const elem = document.createElement('option')
            elem.textContent = item;
            selectElem.appendChild(elem);
        });
    }

    function getPopulation(country){
        fetch(`http://api.population.io:80/1.0/population/2000/${country}`, {
            headers: {
                accept: 'application/json; charset=utf=8'
            }
        })
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            const total = json.reduce((acc, item)=>{
                if(item.age > 90){
                    return acc + item.total;
                } else {
                    return acc;
                }
            }, 0)
            population.textContent = total;
        })
            
    }
})



