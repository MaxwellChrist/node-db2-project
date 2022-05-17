const db = require('../../data/db-config');

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where({'id': id}).first()
}

const create = (car) => {
  return db('cars').insert(car)
  .then(result => {
    return getById(result[0])
  })
}

const vinCheck = (vin) => {
  return db('cars').where(vin)
}

module.exports = {
  getAll,
  getById,
  create,
  vinCheck 
};