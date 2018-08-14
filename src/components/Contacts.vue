<template>
    <div>
        <h1>Contact list</h1>
        <ul>
            <li v-for="(contact, index) in contacts" :key="index" @click="deleteContact(contact.id)">
                {{contact.id}} {{contact.first_name}} {{ contact.last_name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { contacts } from '../services/Contacts'

export default {
    data() {
        return {
            contacts: []
        }
    },
    methods: {
        deleteContact(id) {
            let contactIndex = this.contacts.findIndex(contact => contact.id === id)
            //this.contacts.splice(this.contacts[contactIndex], 1)
            // console.log(contactIndex)
            // console.log(this.contacts[contactIndex])
            //this.contacts.splice(this.contacts[contactIndex], 1)
            contacts.delete(id)
            // let contactIndexAfter = this.contacts.findIndex(contact => contact.id === id)
            // console.log(this.contacts[contactIndexAfter])
            // console.log(contactIndexAfter)
        }
    },
    created() {
        contacts.getAll()
        .then((response) => {
            this.contacts = response.data
        })
    },
}
</script>
