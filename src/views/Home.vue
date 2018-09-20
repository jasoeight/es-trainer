<template>
    <layout-main alignCenter justify-center>
        <v-btn 
            v-for="route in routes"
            v-if="!route.secure || (route.secure && loggedIn) "
            class="my-5"
            :key="route.name"
            :to="{name: route.name}"
            :color="route.color"
            large
            block
            dark
        >
            <v-icon class="mr-3">{{ route.icon }}</v-icon>
            {{ route.label }}
        </v-btn>
    </layout-main>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                {
                    name: 'list',
                    label: 'Verwaltung',
                    icon: 'list',
                    color: 'primary',
                    secure: true
                },
                {
                    name: 'translate',
                    label: 'Übersetzen',
                    icon: 'translate',
                    color: 'pink',
                    secure: false
                },
                {
                    name: 'practice',
                    label: 'Üben',
                    icon: 'school',
                    color: 'purple',
                    secure: false
                }
            ]
        };
    },
    computed: {
        loggedIn() {
            return this.$store.getters['user/isLoggedIn'];
        }
    }
};
</script>
