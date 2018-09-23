<template>
    <v-dialog :value="show" @input="close" max-width="600px">
        <apollo-mutation
            :mutation="require('@/graphql/saveItem.gql')"
            :variables="{ item: model }"
            @done="onDone"
        >
            <v-card slot-scope="{ mutate, loading, error }">
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-alert
                        v-if="error"
                        :value="true"
                        color="error"
                    >
                        Es ist ein Fehler aufgetreten:<br>
                        {{ error.message }}
                    </v-alert>
                    <v-form  ref="form" v-model="valid" lazy-validation>
                        <apollo-query :query="require('@/graphql/Lessons.gql')">
                            <template slot-scope="{ result: { data } }">
                                <v-combobox
                                    v-model="model.lesson"
                                    item-value="name"
                                    item-text="name"
                                    :items="data ? data.lessons : []"
                                    label="Lektion"
                                    :return-object="false"
                                    required
                                    :rules="[requiredRules]"
                                />
                            </template>
                        </apollo-query>
                        <v-select
                            v-model="model.type"
                            :items="types"
                            label="Typ"
                            :rules="[requiredRules]"
                            required
                        />
                        <v-textarea
                            v-model="model.de"
                            label="Deutsch"
                            :rules="[requiredRules]"
                            required
                        />
                        <v-textarea
                            v-model="model.es"
                            label="Spanisch"
                            :rules="[requiredRules]"
                            required
                        />
                        <v-textarea
                            v-model="model.info"
                            label="Info"
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
                        @click="save(mutate, true)"
                    >Speichern</v-btn>
                    <v-btn
                        color="info"
                        large
                        @click="save(mutate, false)"
                    >Speichern und Nächster</v-btn>
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
        },
        item: {
            type: Object
        }
    },
    data() {
        return {
            closeOnDone: true,
            valid: true,
            model: {
                id: null,
                lesson: '',
                type: 'word',
                de: '',
                es: '',
                info: ''
            },
            types: [
                { text: 'Vokabel', value: 'word' },
                { text: 'Zahl', value: 'number' },
                { text: 'Text', value: 'text' }
            ],
            created: false,
            requiredRules: v => !!v || 'Pflichtfeld',
        };
    },
    computed: {
        formTitle() {
            if (this.item === null) {
                return 'Neuer Eintrag';
            }

            return 'Eintrag bearbeiten';
        }
    },
    methods: {
        close () {
            this.closeOnDone = true;
            this.reset();
            this.$emit('update:show', false);
        },
        reset() {
            const lesson = this.model.lesson;
            const type = this.model.type;
            this.$refs.form.reset();
            this.model.id = null;
            this.$nextTick(() => {
                if (!this.closeOnDone) {
                    this.model.lesson = lesson;
                    this.model.type = type;
                } else {
                    this.model.type = 'word';
                }
            });
        },
        save(mutate, closeOnDone = true) {
            this.closeOnDone = closeOnDone;
            if (this.$refs.form.validate()) {
                mutate();
            }
        },
        onDone() {
            this.$emit('saved');
            if (this.closeOnDone) {
                this.close();
            } else {
                this.reset();
            }
        }
    },
    watch: {
        item(newValue) {
            if (newValue !== null) {
                this.model.id = newValue.id;
                this.model.lesson = newValue.lesson;
                this.model.type = newValue.type;
                this.model.de = newValue.de;
                this.model.es = newValue.es;
                this.model.info = newValue.info;
            }
        }
    }
};
</script>
