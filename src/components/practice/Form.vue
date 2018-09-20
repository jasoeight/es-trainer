<template>
    <v-card>
        <v-card-text>
            <v-form>
                <apollo-query :query="require('@/graphql/Lessons.gql')">
                    <template slot-scope="{ result: { data } }">
                        <v-select
                            v-model="model.lesson"
                            item-value="name"
                            item-text="name"
                            :items="getLessonItems(data)"
                            label="Lektion"
                        />
                    </template>
                </apollo-query>
                <v-select
                    v-model="model.type"
                    :items="types"
                    label="Typ"
                />
                <v-select
                    v-model="model.language"
                    :items="language"
                    label="Sprache"
                />
                <v-select
                    v-model="model.limit"
                    :items="limits"
                    label="Limit"
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
                lesson: 'Alle',
                type: 'all',
                language: 'de',
                limit: 25
            },
            types: [
                { text: 'Alle', value: 'all' },
                { text: 'Vokabel', value: 'word' },
                { text: 'Text', value: 'text' }
            ],
            language: [
                { text: 'DE -> ES', value: 'de' },
                { text: 'ES -> DE', value: 'es' }
            ],
            limits: [
                { text: 'Alle', value: -1 },
                { text: '25', value: 25 },
                { text: '50', value: 50 },
                { text: '75', value: 75 },
                { text: '100', value: 100 }
            ]
        };
    },
    methods: {
        getLessonItems(data) {
            let items = [{ name: 'Alle' }];

            if (data) {
                items = items.concat(data.lessons);
            }

            return items;
        },
        practice() {
            this.$emit('practice', Object.assign({}, this.model));
        }
    }
};
</script>
