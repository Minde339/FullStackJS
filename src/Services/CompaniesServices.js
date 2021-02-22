import axios from 'axios';

const url = 'http://localhost:5000/companies/'

const getList = (setList) => {
    axios.get(url).then((response) => {
        const list = response.data.data.allCompanies;
        setList(list);
    }).catch((error) => {
        console.log(error);
    })
}

const createCompany = (Company) => {
    axios.post(url, Company).then((response) => {
        console.log(response); 
    }).catch((error) => {
        console.log(error);
    })
}

const getCompany = (id,setCompany) => {
    axios.get(url + id).then((response) => {
        const company = response.data.data.oneCompany;
        setCompany(company);
    }).catch((error) => {
        console.log(error);
    })
}

const updateCompany = (id, newCompany) => {
    axios.patch(url + id, newCompany).then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

const deleteCompany = (id) => {
    axios.delete(url + id).then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export { getList, createCompany, getCompany, updateCompany, deleteCompany };