const FP = require('./utils')
const { log } = FP
const { users } = require('./data')

// list transformation
users.map(a => a.name)

// filter
users.filter(i => i.gender === 'female')

// exclude
users.filter(i => i.gender !== 'female')

// version 1
const mapName = FP.curry(FP.map)(FP.prop('name'))

mapName(users).forEach(name => console.log(name))

// version 2
const logUsersName = users => users.forEach(user => console.log(user.name))

logUsersName(users)
