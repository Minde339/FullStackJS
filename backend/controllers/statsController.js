const Company = require('../models/Companies');

exports.getCompaniesByQuery = async (req, res) => {
    try {
        const queredCompanies = await Company.find(req.query);
        res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        })
    }
}

exports.getCompaniesByIncome = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        if (queryObj.salesIncome <= 10) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(10);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } 
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        })
    }
}

exports.getCompaniesByMonthlyPayment= async (req, res) => {
    try {
        const queryObj = { ...req.query };
                if (queryObj.monthlyPayment <= 10) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(10);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else if ( 20 >= queryObj.monthlyPayment && queryObj.monthlyPayment > 10) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(20)
                .gt(10);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else if ( 50 >= queryObj.monthlyPayment && queryObj.monthlyPayment > 20) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(50)
                .gt(20);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else if ( 100 >= queryObj.monthlyPayment && queryObj.monthlyPayment > 50) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(100)
                .gt(50);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else if ( 200 >= queryObj.monthlyPayment && queryObj.monthlyPayment > 100) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(200)
                .gt(100);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else if ( 250 >= queryObj.monthlyPayment && queryObj.monthlyPayment > 200) {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .lte(250)
                .gt(200);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
        } else {
            const queredCompanies = await Company.find(queryObj)
                .where('monthlyPayment')
                .gt(250);
            res.json({
            requestedAt: req.requestTime,
            results: queredCompanies.length,
        })
     }
        
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        })
    }
}