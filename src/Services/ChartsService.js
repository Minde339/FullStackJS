import axios from 'axios';

const url = "http://localhost:5000/stats?"
const urlIncome = "http://localhost:5000/stats/income?"
const urlMonthly = "http://localhost:5000/stats/monthlypayment?"

const getSegments = async (param1, param2, param3, param4,
    param5, param6, setValue) => {
    try {
        const res1 = await axios.get(url + param1)
        const res2 = await axios.get(url + param2)
        const res3 = await axios.get(url + param3)
        const res4 = await axios.get(url + param4)
        const res5 = await axios.get(url + param5)
        const res6 = await axios.get(url + param6)
        const diagram = [res1.data.results, res2.data.results,
        res3.data.results, res4.data.results,
        res5.data.results, res6.data.results]
        setValue(diagram)
    } catch (error) {
        console.log(error);
    }
};

    const getSalesIncome = async (param1, param2, param3,
        param4, param5, param6, setValue) => {
    try {
        const res1 = await axios.get(urlIncome + param1)
        const res2 = await axios.get(urlIncome + param2)
        const res3 = await axios.get(urlIncome + param3)
        const res4 = await axios.get(urlIncome + param4)
        const res5 = await axios.get(urlIncome + param5)
        const res6 = await axios.get(urlIncome + param6)
        const diagram = [res1.data.results, res2.data.results,
            res3.data.results, res4.data.results,
            res5.data.results, res6.data.results]
        setValue(diagram)
    } catch (error) {
        console.log(error);
    }
};

    const getMonthlyPayments = async (param1, param2, param3,
        param4, param5, param6, setValue) => {
        try {
            const res1 = await axios.get(urlMonthly + param1)
            const res2 = await axios.get(urlMonthly + param2)
            const res3 = await axios.get(urlMonthly + param3)
            const res4 = await axios.get(urlMonthly + param4)
            const res5 = await axios.get(urlMonthly + param5)
            const res6 = await axios.get(urlMonthly + param6)
            const diagram = [res1.data.results, res2.data.results,
            res3.data.results, res4.data.results,
            res5.data.results, res6.data.results]
            setValue(diagram)
        } catch (error) {
            console.log(error);
        }
    }

const getClientServices = async (param1,
    param2, param3, param4, param5, setValue) => {
    try {
        const res1 = await axios.get(url + param1)
        const res2 = await axios.get(url + param2)
        const res3 = await axios.get(url + param3)
        const res4 = await axios.get(url + param4)
        const res5 = await axios.get(url + param5)
        const diagram = [res1.data.results, res2.data.results, res3.data.results,
        res4.data.results, res5.data.results]
        setValue(diagram)
    } catch (error) {
        console.log(error);
    }
}

const getSizeofCompany = async (param1, param2, param3, setValue) => {
    try {
        const res1 = await axios.get(url + param1)
        const res2 = await axios.get(url + param2)
        const res3 = await axios.get(url + param3)
        const diagram = [res1.data.results, res2.data.results, res3.data.results]
        setValue(diagram);
    } catch (error) {
        console.log(error);
    }
    
}

export { getSegments, getSalesIncome, getMonthlyPayments, getClientServices, getSizeofCompany};