// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert([
        {vin: 123456789, make: "Toyota", model: "Camry", mileage: 20000, title: "Mr. Smith", transmission: "yes"},
        {vin: 111111111, make: "Honda", model: "Accord", mileage: 1, title: "Mrs. Allen", transmission: "yes"},
        {vin: 444444444, make: "Hummer", model: "H3", mileage: 50000, title: "Mr. Dean", transmission: "no"},
        {vin: 999999999, make: "Jeep", model: "Wrangler", mileage: 100000, title: "Mrs. O'Brien", transmission: "no"},
        {vin: 534564566, make: "Mazda", model: "RX8", mileage: 30000, title: "Mr. Angelo", transmission: "yes"}
    ]);
};