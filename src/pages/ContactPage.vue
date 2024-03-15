<script >
import axios from 'axios';

    export default {
        data() {
            return {
                name: '',
                email: '',
                message: '',
                accepted: false,
                alert: false
            };
        },
        methods: {
            sendMessage() {
                if (this.name != null
                    && 
                    this.name != ''
                    &&
                    this.name.length <= 64
                    &&    
                    this.email != null
                    && 
                    this.email != ''
                    &&
                    this.email.length <= 255
                    &&
                    this.message != null
                    && 
                    this.message != ''
                    &&
                    this.message.length <= 2048
                    &&
                    this.accepted 
                ) {
                    axios.post('http://127.0.0.1:8000/api/contacts', {
                            name: this.name,
                            email: this.email,
                            message: this.message,
                            accepted: this.accepted
                        })
                         .then(res => {
                            console.log('RISPOSTA API', res.data);
                        })
                        .catch(err => {
                            console.log('ERRORE AXIOS', err);

                            this.alert = true;
                        })
                }
                else {
                    this.alert = true; 
                }
            }
        },
        created() {
        }

    }
</script>

<template>

    <div class="container">
        <div v-if="alert == false"  id="form-container">
            <form method="POST" @submit.prevent="sendMessage()">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input v-model="name" type="text" class="form-control" id="name" name="name" placeholder="Inserisci il tuo nome.." required maxlength="64">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" required maxlength="255">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Scrivi un messaggio</label>
                    <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" required maxlength="2048"></textarea>
                </div>

                <div class="mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="accepted">
                    <label class="form-check-label ms-1" for="flexCheckChecked" required>
                        Accetto i <a href="#nogo">Termini e le Condizioni</a>
                    </label>                
                </div>

                <button type="submit" class="btn btn-primary">
                    Invia
                </button>
            </form>
        </div>
        <div v-else class="card">
            <div class="card-body">
                Dati inseriti non correttamente
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    #form-container, .card {
        margin: 100px 0;
    }
</style>
