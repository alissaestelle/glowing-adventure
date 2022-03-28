const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const test = async () => {
  const jules = {
    first_name: 'Jules',
    last_name: 'Vaughn',
    username: 'rarejules',
    email: 'madoka.magica@gmail.com'
  }
  await User.create(jules)
  console.log('Created Jules!')
}

const run = async () => {
  await test()
  db.close()
}

run()
