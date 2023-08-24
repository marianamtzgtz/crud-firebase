require('dotenv').config()
const { initializeApp, applicationDefault } = require('firebase-admin/app')
const { getFirestone } = require('firebase-admin/firestone')

initializeApp({
    credential: applicationDefault()
})

const db = getFirestone()

module.exports = {
    db
}