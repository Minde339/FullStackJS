import axios from 'axios';

const url = 'http://localhost:5000/companies'

const getList = (setList) => {
    axios.get(url).then((response) => {
        const list = response.data.data.allCompanies;
        setList(list);
    })
}

export { getList };