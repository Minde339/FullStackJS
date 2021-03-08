const express = require('express');
const companiesController = require('../../controllers/companiesController');
const authController = require('../../controllers/authController');


const router = express();

router.route('/')
    .get(authController.protect, companiesController.getAllCompanies)
    .post(companiesController.createCompany)

router.
    route('/:id')
    .get(companiesController.getOneCompany)
    .patch( companiesController.updateOneCompany)
    .delete(companiesController.deleteCompany)
   
module.exports = router;