import axios from 'axios'
// importujem axios

export default class Contacts {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('contacts')
    }
    delete(id) {
        //myArray.findIndex(x => x.id === '45');
        //myArray.find(x => x.id === '45')
        // var mycontact = contacts.findIndex(contact => contact.id === id)
        // console.log(id)
        return axios.delete(`contacts/${id}`)
    }

}

export const contacts = new Contacts()