const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis anda'],
        unique: true,
    },
    nomor_hp: {
        type: String,
        required: [true, 'Silahkan isikan nomor hp anda'],
        unique: true,
        
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: false,
    },
    usia: {
        type: String,
        required: [true, 'Silahkan isikan usia anda anda'],
        unique: false,
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat anda'],
        unique: false,
    }
});

module.exports = mongoose.model('siswa', SiswaSchema);