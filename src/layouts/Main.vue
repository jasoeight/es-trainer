<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title>
                <router-link :to="{name: 'home' }">{{ title }}</router-link>
            </v-toolbar-title>
            <v-spacer />
            <v-btn v-if="!loggedIn" icon @click="onLogin">
                <v-icon>input</v-icon>
            </v-btn>
            <v-btn v-else icon @click="onLogout">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
            <login-form :show.sync="showLoginForm" />
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <v-layout
                        :row="row"
                        :column="column"
                        :wrap="wrap"
                        :align-center="alignCenter"
                        :justify-center="justifyCenter"
                    >
                        <v-flex xs12>
                            <slot />
                        </v-flex>
                    </v-layout>
                </v-slide-y-transition>
            </v-container>
        </v-content>
        <v-footer fixed app>
            <span>&copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
import LoginForm from '@/components/Login.vue';
export default {
    components: {
        LoginForm
    },
    props: {
        row: {
            type: Boolean,
            default: false
        },
        column: {
            type: Boolean,
            default: false
        },
        wrap: {
            type: Boolean,
            default: false
        },
        alignCenter: {
            type: Boolean,
            default: false
        },
        justifyCenter: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            title: 'ES Trainer',
            showLoginForm: false
        };
    },
    computed: {
        loggedIn() {
            return this.$store.getters['user/isLoggedIn'];
        }
    },
    methods: {
        onLogin() {
            this.showLoginForm = true;
        },
        onLogout() {
            this.$store.dispatch('user/logOut');
            this.$router.push({ name: 'home' });
        },
    }
};
</script>
