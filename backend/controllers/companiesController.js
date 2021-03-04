const Company = require('../models/Companies');
const catchAsync = require('../utils/catchAsync');

exports.createCompany = catchAsync(async (req, res) => {
        const newCompany = new Company({
        district: req.body.title,
        network: req.body.network,
        city: req.body.city,
        settlement: req.body.settlement,
        street: req.body.street,
        houseNumber: req.body.houseNumber,
        flatNumber: req.body.flatNumber,
        name: req.body.name,
        servicesPlan: req.body.servicesPlan,
        services: req.body.services,
        monthlyPayment: req.body.monthlyPayment,
        customerCode: req.body.customerCode,
        segment: req.body.segment,
        activityType: req.body.activityType,
        employees: req.body.employees,
        salesIncome: req.body.salesIncome,
        sizeOfCompany: req.body.sizeOfCompany
    });
        const savedCompany = await newCompany.save();
        res.json(savedCompany);
});

exports.getAllCompanies = async (req, res) => {
    try {
        const allCompanies = await Company.find();
        res.json({
            requestedAt: req.requestTime,
            results: allCompanies.length,
            data: {
                allCompanies
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        }) 
    }
}

exports.getOneCompany = async (req, res) => {
    try {
        const oneCompany = await Company.findById(req.params.id);
        res.status(200).json({
        requestedAt: req.requestTime,
        data: {
            oneCompany
        }
    })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        })
    }
} 


exports.updateOneCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                company: updatedCompany
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    };
}


exports.deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Succesfully deleted Item'
        });
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    };
}
