const express = require('express');
const companiesController = require('../../controllers/companiesController');


const router = express();

router.route('/')
    .get(companiesController.getAllCompanies)
    .post(companiesController.createCompany)

router.
    route('/:id')
    .get(companiesController.getOneCompany)
    .patch( companiesController.updateOneCompany)
    .delete( companiesController. deleteCompany)
    
module.exports = router;