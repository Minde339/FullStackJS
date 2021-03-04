const Company = require('../models/Companies');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');
const AppError = require('../utils/appError');

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

exports.getOneCompany = catchAsync(async (req, res, next) => {
    const oneCompany = await Company.findById(req.params.id);
    if (!oneCompany) {
        return next(new appError('No company found with that ID', 404));
    } else {
        res.status(200).json({
        requestedAt: req.requestTime,
        data: {
            oneCompany
        }
    })
    }
    
}); 


exports.updateOneCompany = catchAsync( async (req, res, next) => {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
    });
    if (!updatedCompany) {
        return next(new AppError('ID of this company is not existing'), 404)
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                company: updatedCompany
            }
        });
    }
        
})


exports.deleteCompany = catchAsync(async (req, res, next) => {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
        return next(new appError('This company ID is not existing'));
    } else {
        res.status(200).json({
            message: 'Succesfully deleted Item'
        });
    }
        
})
