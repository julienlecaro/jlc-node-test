const fs = require('fs')
const sourceDir = 'source'
const destinationDir = 'destination'

if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir)
}
copyFiles()

function copyFiles () {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      throw err
    }
    files.forEach(fileName => {
      copyFile(sourceDir + '/' + fileName, destinationDir + '/' + fileName)
    })
  })
}

function copyFile (source, destination) {
  console.log('Copie de ' + source + ' vers ' + destination)
  fs.copyFile(source, destination, (err) => {
    if (err) {
      throw err
    }
    console.log('Fichier copié !')
  })
}
