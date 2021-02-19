import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createCompany } from '../../Services/CompaniesServices';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
        },
      '& > *': {
          margin: theme.spacing(1),
          alignItems: 'center'
    },
  },
}));

export default function AddCompanyForm() {
    const classes = useStyles();
    const [company, setCompany] = useState({
        network: 'KTV',
        city: 'Klaipėda',
        settlement: 'Klaipėda',
        street: '',
        houseNumber: 0,
        flatNumber: 0,
        name: 'UAB Balticum TV',
        identityCode: 0,
        servicesPlan: 'SBI1V/STA/DTV',
        services: 'Internetas + TV',
        monthlyPayment: 0,
        customerCode: 0,
        segment: 'Telekomunikacijų bendrovė',
        activityType: 'Telekomunikacijos',
        employees: 195,
        salesIncome: '5-10mil',
        sizeOfCompany: 'vidutinė',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCompany({ ...company,[name]:value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (company.network && company.city && company.settlement && company.street &&
            company.houseNumber && company.flatNumber && company.name && company.identityCode &&
            company.servicesPlan && company.services && company.monthlyPayment && company.customerCode &&
            company.segment && company.activityType && company.employees && company.salesIncome &&
            company.sizeOfCompany) {
            console.log(company)
            createCompany(company);
        }
    }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="newtork-required"
          label="Tinklas"
            name="network"
                  value={company.network}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          required
          id="city-required"
            label="Miestas"
            name="city"
                  value={company.city}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          required
          id="settlement-required"
                  label="Gyvenvietė"
                  name="settlement"
                  value={company.settlement}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          required
          id="street-required"
                  label="Gatvė"
                  name="street"
                  value={company.street}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          required
          id="houseNumber-required"
                  label="Namas"
                  type="number"
                  name="houseNumber"
                  value={company.houseNumber}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="flatNumber-required"
                  label="Butas"
                  type="number"
                  name="flatNumber"
                  value={company.flatNumber}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="name-required"
                  label="Kliento pavadinimas"
                  name="name"
                  value={company.name}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="identityCode-required"
                  label="As/Įmonės kodas"
                  type="number"
                  name="identityCode"
                  value={company.identityCode}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="servicesPlan-required"
          label="Paslaugų planas"
                  name="servicesPlan"
                  value={company.servicesPlan}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="services-required"
          label="Paslaugos"
                  name="services"
                  value={company.services}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="monthlyPayment-required"
                  label="Mėnesinis mokestis ~"
                  type="Number"
                  name="monthlyPayment"
                  value={company.monthlyPayment}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="customerCode-required"
          label="Abonento kodas"
                  type="Number"
                  name="customerCode"
                  value={company.customerCode}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="activityType-required"
          label="Veiklos sritis"
                  name="activityType"
                  value={company.activityType}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="segment-required"
                  label="Segmentas"
                  name="segment"
                  value={company.segment}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="employees-required"
                  label="Darbuotojų kiekis"
                  type="number"
                  name="employees"
                  value={company.employees}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="salesIncome-required"
                  label="Pardavimo pajamos"
                  name="salesIncome"
                  value={company.salesIncome}
                  onChange={handleChange}
          variant="outlined"
              />
        <TextField
          id="sizeOfCompany-required"
                  label="Įmonės dydis"
                  name="sizeOfCompany"
                  value={company.sizeOfCompany}
                  onChange={handleChange}
          variant="outlined"
        />      
          </div>
    <div>
              <Button variant="contained"
                  color="primary"
              onClick={handleSubmit}>
        Save
      </Button>
    </div>
    </form>
  );
}

