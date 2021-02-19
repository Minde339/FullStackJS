import axios from 'axios';

const url = 'http://localhost:5000/companies'

const getList = (setList) => {
    axios.get(url).then((response) => {
        const list = response.data.data.allCompanies;
        setList(list);
    }).catch((error) => {
        console.log(error);
    })
}

const createCompany = (setPople) => {
    axios.post(url, setPople).then((response) => {
        console.log(response); 
    }).catch((error) => {
        console.log(error);
    })
}

export { getList, createCompany };