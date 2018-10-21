<template>
    <v-form>
        <v-layout align-start row fill-height>
            <v-flex>
                <v-container
                    grid-list-md
                    class="pa-0 ma-0"
                >
                    <v-layout align-center wrap fill-height>
                        <v-flex>
                            <v-text-field
                                label="Id"
                                v-model.number="model.id"
                                @keyup.enter="search"
                            />
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Lektion"
                                v-model="model.lesson"
                                @keyup.enter="search"
                            />
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Typ"
                                v-model="model.type"
                                @keyup.enter="search"
                            />
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Deutsch"
                                v-model="model.de"
                                @keyup.enter="search"
                            />
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Spanisch"
                                v-model="model.es"
                                @keyup.enter="search"
                            />
                        </v-flex>
                        <v-flex>
                            <v-checkbox
                                label="Zu prüfen?"
                                v-model="model.check"
                                value="1,2"
                            />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <div class="text-xs-center pl-4">
                <v-btn
                    color="secondary"
                    large
                    @click="reset"
                >
                    <v-icon>cancel</v-icon>
                </v-btn>
                <v-btn
                    color="primary"
                    large
                    @click="search"
                >
                    <v-icon>search</v-icon>
                </v-btn>
            </div>
        </v-layout>
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
                es: '',
                check: ''
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
            this.model.check = '';
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
