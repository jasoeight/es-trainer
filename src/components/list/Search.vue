<template>
    <v-form>
        <v-container>
            <v-layout row no-wrap>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                        label="Id"
                        v-model="model.id"
                    />
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                        label="Lektion"
                        v-model="model.lesson"
                    />
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                        label="Typ"
                        v-model="model.type"
                    />
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                        label="Deutsch"
                        v-model="model.de"
                    />
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                        label="Spanisch"
                        v-model="model.es"
                    />
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-btn
                        color="blue darken-1"
                        flat
                        @click="reset"
                    >Reset</v-btn>
                    <v-btn
                        color="blue darken-1"
                        flat
                        @click="search"
                    >Suchen</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                id: '',
                type: '',
                lesson: '',
                de: '',
                es: ''
            }
        };
    },
    methods: {
        reset() {
            this.model.id = '';
            this.model.type = '';
            this.model.lesson = '';
            this.model.de = '';
            this.model.es = '';
            this.$emit('search', {});
        },
        search() {
            const search = {};

            Object.keys(this.model).forEach(key => {
                if (this.model[key] === '') {
                    return;
                }
                search[key] = this.model[key];
            });

            this.$emit('search', search);
        }
    }
};
</script>
