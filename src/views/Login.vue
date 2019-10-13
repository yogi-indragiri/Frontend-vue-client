<template>
    <div>
        <navbar></navbar>
        <b-container fluid>
            <!-- Content here -->
            <b-card class="mt-3 formulir">
                <b-row>
                    <b-col cols="12" md="12">
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                            >
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                                <b-form-input
                                        id="input-2"
                                        v-model="form.password"
                                        type="password"
                                        required
                                        placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>

                            <b-button type="submit" block variant="primary">Submit</b-button>
                            <br>
                            <br>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </b-card>

        </b-container>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default {
        name: "Login",
        components: {
            Navbar
        },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                // alert(JSON.stringify(this.form))
                this.$store
                    .dispatch("signIn", {
                        username: this.username,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.replace(this.$route.query.redirect || "/");
                    })
                    .catch(error => {
                        this.error = error;
                    });
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.password = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style scoped>
    .formulir {
        padding: 2rem 5rem 2rem 5rem;
        margin: 100rem 20rem 10rem 20rem;
    }
</style>