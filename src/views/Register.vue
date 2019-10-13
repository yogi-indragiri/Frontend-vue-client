<template>
    <div>
        <navbar></navbar>
        <b-container fluid>
            <!-- Content here -->
            <div class="formulir">
                <b-row>
                    <b-col cols="12" md="12">
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
                            <b-form-group
                                    id="input-group-1"
                                    label="Mobile Number:"
                                    label-for="input-1"
                            >
                                <b-form-input
                                        id="input-1"
                                        v-model="form.mobileNumber"
                                        type="number"
                                        :state="validation.mobileNumber"
                                        required
                                        placeholder="Enter Mobile Number"
                                        :disabled=isDisabled
                                ></b-form-input>
                                <b-form-invalid-feedback :state="validation.mobileNumber">
                                    Your user ID must be 1 - 12 characters long.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-2"
                                    label="First Name:"
                                    label-for="input-2"
                            >
                                <b-form-input
                                        id="input-2"
                                        v-model="form.firstName"
                                        required
                                        placeholder="Enter First Name"
                                        :disabled=isDisabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-3"
                                    label="Last Name:"
                                    label-for="input-3"
                            >
                                <b-form-input
                                        id="input-3"
                                        v-model="form.lastName"
                                        required
                                        placeholder="Enter Last Name"
                                        :disabled=isDisabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    id="input-group-4"
                                    label="Date of Birth:"
                                    label-for="input-4"
                            >
                                <b-form-input
                                        id="input-4"
                                        v-model="form.dateBirth"
                                        type="date"
                                        required
                                        :disabled=isDisabled
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group label="Gender:">
                                <b-form-radio-group v-model="form.gender" :options="options" :disabled=isDisabled
                                                    name="gender"></b-form-radio-group>
                                <!--<b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>-->
                            </b-form-group>
                            <div class="mt-3">Selected: <strong>{{ form.gender }}</strong></div>

                            <b-form-group
                                    id="input-group-5"
                                    label="Email address:"
                                    label-for="input-5"
                                    description="We'll never share your email with anyone else."
                            >
                                <b-form-input
                                        id="input-5"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Enter email"
                                        :disabled=isDisabled
                                ></b-form-input>

                            </b-form-group>

                            <b-form-group
                                    id="input-group-6"
                                    label="Password:"
                                    label-for="input-6"
                                    description="We'll never share your password with anyone else."
                                    :disabled=isDisabled
                            >
                                <b-form-input
                                        id="input-6"
                                        v-model="form.password"
                                        type="password"
                                        required
                                        placeholder="Enter Password"
                                        :disabled=isDisabled
                                ></b-form-input>

                            </b-form-group>

                            <b-form-group
                                    id="input-group-7"
                                    label="Confirmation Password:"
                                    label-for="input-7"
                            >
                                <b-form-input
                                        id="input-7"
                                        v-model="form.cPassword"
                                        type="password"
                                        required
                                        placeholder="Enter Confirmation Password"
                                        :disabled=isDisabled
                                        :state="validation.cPassword"
                                ></b-form-input>
                                <b-form-invalid-feedback :state="validation.cPassword">
                                    Your confirmation password should be the same.
                                </b-form-invalid-feedback>

                            </b-form-group>

                            <b-button block type="submit" variant="primary" :disabled=isDisabled>Register</b-button>
                            <br>
                            <b-button type="reset" variant="danger" :disabled=isDisabled>Reset</b-button>
                        </b-form>
                    </b-col>
                </b-row>

                <b-card class="mt-3" v-if="showLogin">
                    <div>
                        <b-button :to="{ path: 'login' }" block variant="primary">Login</b-button>
                    </div>
                </b-card>


                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card>

            </div>
        </b-container>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default {
        name: "Register",
        components: {
            Navbar
        },
        data() {
            return {
                options: [
                    {text: 'Male', value: 'male'},
                    {text: 'Female', value: 'female'}
                ],
                form: {
                    mobileNumber: '',
                    firstName: '',
                    lastName: '',
                    dateBirth: '',
                    gender: 'male',
                    email: '',
                    password: '',
                    cPassword: '',
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true,
                showLogin: false,
                isDisabled: false
            }
        },
        computed: {
            validation() {
                return {
                    mobileNumber: this.form.mobileNumber.length >= 0 && this.form.mobileNumber.length <= 12,
                    cPassword: this.form.password === this.form.cPassword
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.showLogin = true
                this.isDisabled = true
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.mobileNumber = ''
                this.form.firstName = ''
                this.form.lastName = ''
                this.form.dateBirth = ''
                this.form.gender = ''
                this.form.email = ''
                this.form.password = ''
                this.form.cPassword = ''
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
    }
</style>