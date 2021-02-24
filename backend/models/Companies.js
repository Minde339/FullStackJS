const mongoose = require('mongoose');

const CompaniesSchema = mongoose.Schema({
    district: String,
    network: String,
    city: String,
    settlement: String,
    street: String,
    houseNumber: Number,
    flatNumber: Number,
    name: {
        type: String,
        required: true
    },
    identityCode: Number,
    servicesPlan: String,
    services: String,
    monthlyPayment: Number,
    customerCode: Number,
    segment: String,
    activityType: String,
    employees: Number,
    salesIncome: String,
    sizeOfCompany: String,
    numberOfOffices: Number
})

module.exports = mongoose.model('Companies', CompaniesSchema);