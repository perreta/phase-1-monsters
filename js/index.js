document.addEventListener('DOMContentLoaded', () => {
    let totalPages = 20
    let currentPage = 1
    let nextBtn = document.getElementById('forward')
    let backBtn = document.getElementById('back')
    
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${currentPage}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            let div = document.createElement('div')
            let h2 = document.createElement('h2')
            let h4 = document.createElement('h4')
            let p = document.createElement('p') 

            h2.textContent = element.name
            h4.textContent = element.age
            p.textContent = 'Bio:' + ' ' + element.description

            document.querySelector('#monster-container').append(div)
            div.append(h2, h4, p)
        });
        



    })
    
    nextBtn.addEventListener('click', () => {
        document.querySelector('#monster-container').innerHTML = ''
        let nextPage = currentPage ++;
        fetch(`http://localhost:3000/monsters/?_limit=50&_page=${nextPage}`)
        .then(resp => resp.json())
        .then(data2 => {
            console.log(data2)
            data2.forEach(element => {
                let div = document.createElement('div')
                let h2 = document.createElement('h2')
                let h4 = document.createElement('h4')
                let p = document.createElement('p') 

                h2.textContent = element.name
                h4.textContent = element.age
                p.textContent = 'Bio:' + ' ' + element.description

                document.querySelector('#monster-container').append(div)
                div.append(h2, h4, p)
            }
        )})


    })
    backBtn.addEventListener('click', () => {
        document.querySelector('#monster-container').innerHTML = ''
        let lastPage = currentPage --;
        fetch(`http://localhost:3000/monsters/?_limit=50&_page=${lastPage}`)
        .then(resp => resp.json())
        .then(data2 => {
            console.log(data2)
            data2.forEach(element => {
                let div = document.createElement('div')
                let h2 = document.createElement('h2')
                let h4 = document.createElement('h4')
                let p = document.createElement('p') 

                h2.textContent = element.name
                h4.textContent = element.age
                p.textContent = 'Bio:' + ' ' + element.description

                document.querySelector('#monster-container').append(div)
                div.append(h2, h4, p)
            }
        )})


    })

})
