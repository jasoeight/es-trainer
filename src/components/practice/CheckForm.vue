<template>
    <v-dialog :value="show" @input="close" max-width="600px">
        <apollo-mutation
            :mutation="require('@/graphql/checkItem.gql')"
            :variables="{ id, check: value }"
            @done="onDone"
        >
            <v-card slot-scope="{ mutate, loading, error }">
                <v-card-title>
                    <span class="headline">Bitte prüfen!</span>
                </v-card-title>
                <v-card-text>
                    <v-alert
                        v-if="error"
                        :value="true"
                        color="error"
                    >{{ error.message }}</v-alert>
                    <v-form ref="form">
                        <v-radio-group v-model.number="value" fluid>
                            <v-radio
                                v-for="item in items"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                class="mb-3"
                            />
                        </v-radio-group>
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
                        @click="mutate"
                    >Abschicken</v-btn>
                </v-card-actions>
            </v-card>
        </apollo-mutation>
    </v-dialog>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            value: 1,
            items: [
                {
                    label: 'Doppelt?',
                    value: 1
                },
                {
                    label: 'Fehler?',
                    value: 2
                }
            ]
        };
    },
    methods: {
        close () {
            this.value = 1;
            this.$emit('update:show', false);
        },
        onDone(data) {
            this.close();
            this.$emit('checked');
        }
    }
};
</script>
