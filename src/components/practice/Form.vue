<template>
    <v-card>
        <v-card-text>
            <v-form>
                <apollo-query :query="require('@/graphql/Lessons.gql')">
                    <template slot-scope="{ result: { data } }">
                        <v-select
                            v-model="model.lessons"
                            multiple
                            clearable
                            item-value="name"
                            item-text="name"
                            :items="data ? data.lessons : []"
                            label="Lektion"
                            hint="Für alle Lektion leer lassen"
                            persistent-hint
                            class="mb-4"
                        />
                    </template>
                </apollo-query>
                <v-select
                    v-model="model.type"
                    :items="types"
                    label="Typ"
                    clearable
                    hint="Für alle Typen leer lassen"
                    persistent-hint
                    class="mb-4"
                />
                <v-select
                    v-model="model.language"
                    :items="language"
                    label="Sprache"
                    hint="Lege die Ausgangssprache fest"
                    persistent-hint
                    class="mb-4"
                />
                <v-select
                    v-model="model.limit"
                    :items="limits"
                    label="Limit"
                    class="mb-4"
                />
                <v-btn
                    color="primary"
                    large
                    @click="practice"
                >Übung starten</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            model: {
                lessons: [],
                type: '',
                language: 'de',
                limit: -1
            },
            types: [
                { text: 'Vokabel', value: 'word' },
                { text: 'Zahl', value: 'number' },
                { text: 'Text', value: 'text' }
            ],
            language: [
                { text: 'DE -> ES', value: 'de' },
                { text: 'ES -> DE', value: 'es' }
            ],
            limits: [
                { text: 'Alle', value: -1 },
                { text: '10', value: 10 },
                { text: '25', value: 25 },
                { text: '50', value: 50 },
                { text: '75', value: 75 },
                { text: '100', value: 100 }
            ]
        };
    },
    methods: {
        practice() {
            this.$emit('practice', Object.assign({}, this.model));
        }
    }
};
</script>
