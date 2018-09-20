<template>
    <v-dialog :value="show" @input="close" max-width="600px">
        <apollo-mutation
            :mutation="require('@/graphql/login.gql')"
            :variables="{ username, password }"
            @done="onDone"
        >
            <v-card slot-scope="{ mutate, loading, error }">
                <v-card-title>
                    <span class="headline">Anmelden</span>
                </v-card-title>

                <v-card-text>
                    <v-alert
                        v-if="error"
                        :value="true"
                        color="error"
                    >{{ error.message }}</v-alert>
                    <v-form ref="form" :valid="valid">
                        <v-text-field
                            prepend-icon="person"
                            v-model="username"
                            label="Benutzer"
                            :rules="[requiredRules]"
                        />
                        <v-text-field
                            prepend-icon="lock"
                            v-model="password"
                            label="Password"
                            type="password"
                            :rules="[requiredRules]"
                        />
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        large
                        @click="close"
                    >Schließen</v-btn>
                    <v-btn
                        color="primary"
                        large
                        @click="login(mutate)"
                    >Anmelden</v-btn>
                </v-card-actions>
            </v-card>
        </apollo-mutation>
    </v-dialog>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            valid: true,
            username: '',
            password: '',
            requiredRules: v => !!v || 'Pflichtfeld'
        };
    },
    methods: {
        login(mutate) {
            if (this.$refs.form.validate()) {
                mutate();
            }
        },
        close () {
            this.username = '';
            this.password = '';
            this.$refs.form.reset();
            this.$emit('update:show', false);
        },
        onDone(data) {
            this.$store.dispatch('user/logIn', data.data.user);
            this.close();
        }
    }
};
</script>
