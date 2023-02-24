const users = [ 
    { name: 'Anna', grade: 11, gender: 'F' }, 
    { name: 'John', grade: 12, gender: 'M' },
    { name: 'Mary', grade: 11, gender: 'F' },
    { name: 'Joe',  grade: 11, gender: 'M' },
    { name: 'Rose', grade: 11, gender: 'F' }, 
    { name: 'Ron', grade: 12, gender: 'M' },
    { name: 'Sarah', grade: 11, gender: 'F' },
    { name: 'Summer',  grade: 12, gender: 'F' } 
]

const main = document.createElement('main')
document.body.append(main)

document.querySelector('select').onchange = (event) => {
    main.textContent = ''
    users.filter(x => {
       return event.target.value != ''? (x.grade == event.target.value ? true : false) : true
    }).forEach(user => {
        const div = document.createElement('div')
        div.textContent = `${user.name} ${user.grade} ${user.gender}`
        main.append(div)
    })
}

users.forEach(user => {
    const div = document.createElement('div')
    div.textContent = `${user.name} ${user.grade} ${user.gender}`
    main.append(div)
})

