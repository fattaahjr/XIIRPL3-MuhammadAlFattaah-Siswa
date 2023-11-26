const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/db_sekolah');
  console.log('DB tersambung')
}

module.exports = mongoDB