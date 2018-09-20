<template>
    <layout-main alignCenter justify-center>
        <v-card>
            <v-card-text>
                <v-btn
                    large
                    block
                    color="primary"
                    class="my-3"
                    @click="updateLanguage"
                >{{ languageDirectionText }}</v-btn>
                <v-text-field
                    clearable
                    v-model="text"
                    label="Suchtext"
                    append-outer-icon="search"
                    @keyup.enter="doSearch"
                    @click:append-outer="doSearch"
                    class="my-3"
                />
                <apollo-query
                    v-if="search.length > 0"
                    :query="require('@/graphql/Translate.gql')"
                    :variables="{ search, language }"
                >
                    <template slot-scope="{ result: { loading, error, data } }">
                        <v-flex xs12>
                            <v-progress-circular
                                v-if="loading"
                                :size="70"
                                :width="7"
                                color="purple"
                                indeterminate
                            />
                            <v-card
                                v-else-if="data && data.translations"
                                v-for="(translation, index) in data.translations"
                                :key="translation.id"
                                :color="index%2 === 0 ? 'primary' : 'info'"
                                class="my-3"
                                hover
                                dark
                            >
                                <v-card-text class="px-0 py-0">
                                    <v-container grid-list-xs class="px-0 mx-3 my-0 py-2">
                                        <v-layout
                                            row
                                            wrap
                                        >
                                            <v-flex xs6>
                                                <h3 v-html="getText(translation.searchText)" />
                                            </v-flex>
                                            <v-flex xs6>
                                                <h3 v-html="translation.matchedText" />
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </template>
                </apollo-query>
            </v-card-text>
        </v-card>
    </layout-main>
</template>

<script>
export default {
    data() {
        return {
            language: 'de',
            text: '',
            search: ''
        };
    },
    computed: {
        languageDirectionText() {
            if (this.language === 'de') {
                return 'DE -> ES';
            }

            return 'ES -> DE';
        }
    },
    methods: {
        updateLanguage() {
            this.language = this.language === 'de' ? 'es' : 'de';
        },
        doSearch() {
            this.search = this.text || '';
        },
        getText(searchText) {
            return searchText.replace(this.text, `<strong style="text-decoration: underline;">${this.text}</strong>`);
        }
    }
};
</script>
