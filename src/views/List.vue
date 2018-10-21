<template>
    <layout-main alignCenter justify-center>
        <apollo-query
            :query="require('@/graphql/Items.gql')"
            :variables="{
                filter: {
                    pagination,
                    search
                }
            }"
            fetchPolicy="no-cache"
        >
            <template slot-scope="{ query, result: { loading, error, data }, refetch }">
                <list-search @search="onSearch" />
                <v-toolbar flat color="white">
                    <v-spacer />
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        @click="newItem"
                    >Neuer Eintrag</v-btn>
                    <list-form
                        :show.sync="showDialog"
                        :item="editedItem"
                        @saved="onSave(query)"
                    />
                </v-toolbar>
                <v-data-table
                    :headers="headers"
                    :items="data && data.list ? data.list.rows : []"
                    :loading="loading"
                    class="elevation-1"
                    :pagination.sync="pagination"
                    :total-items="data && data.list ? data.list.count : 0"
                >
                    <v-progress-linear
                        slot="progress"
                        color="blue"
                        indeterminate
                    />
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.id }}</td>
                        <td>{{ props.item.lesson }}</td>
                        <td>{{ props.item.type }}</td>
                        <td v-html="transformText(props.item.de)" />
                        <td v-html="transformText(props.item.es)" />
                        <td v-html="transformText(props.item.info)" />
                        <td v-html="transformCheck(props.item.check)" />
                        <td class="text-xs-right">
                            <apollo-mutation
                                v-if="props.item.check !== 0"
                                tag=""
                                :mutation="require('@/graphql/checkItem.gql')"
                                :variables="{
                                    id: props.item.id,
                                    check: 0
                                }"
                                @done="reloadTable(query)"
                            >
                                <template slot-scope="{ mutate, loading, error }">
                                    <v-icon @click="mutate">done_all</v-icon>
                                </template>
                            </apollo-mutation>
                            <v-icon
                                class="mr-2"
                                @click="editItem(props.item)"
                            >edit</v-icon>
                            <apollo-mutation
                                tag=""
                                :mutation="require('@/graphql/deleteItem.gql')"
                                :variables="{ id: props.item.id }"
                                @done="reloadTable(query)"
                            >
                                <template slot-scope="{ mutate, loading, error }">
                                    <v-icon @click="doDelete(mutate)">delete</v-icon>
                                </template>
                            </apollo-mutation>
                        </td>
                    </template>
                </v-data-table>
            </template>
        </apollo-query>
    </layout-main>
</template>

<script>
import ListForm from '@/components/list/Form.vue';
import ListSearch from '@/components/list/Search.vue';
export default {
    components: {
        ListForm,
        ListSearch
    },
    data() {
        return {
            pagination: {
                rowsPerPage: 25
            },
            search: {},
            headers: [
                { text: 'Id', value: 'id' },
                { text: 'Lektion', value: 'lesson' },
                { text: 'Typ', value: 'type' },
                { text: 'Deutsch', value: 'de' },
                { text: 'Spanisch', value: 'es' },
                { text: 'Info', value: 'info' },
                { text: 'Prüfen', value: 'check' },
                { text: 'Aktionen', value: 'id', sortable: false }
            ],
            showDialog: false,
            editedItem: null
        };
    },
    methods: {
        transformText(text) {
            if (text === null) {
                return '';
            }
            return text.replace(/\n/g, '<br>');
        },
        transformCheck(value) {
            switch (value) {
                case 1:
                    return 'Doppelt?';
                case 2:
                    return 'Fehler?';
                default:
                    return '';
            }
        },
        newItem() {
            this.editedItem = null;
            this.showDialog = true;
        },
        editItem (item) {
            this.editedItem = Object.assign({}, item);
            this.showDialog = true;
        },
        onSave(query) {
            this.reloadTable(query);
            this.editedItem = null;
        },
        onSearch(search) {
            this.pagination.page = 1;
            this.search = search;
        },
        doDelete(mutate) {
            this.$vuetifyConfirmDialog.open(
                'Eintrag löschen',
                'Wollen Sie den Eintrag wirklich löschen?',
                'Abbrechen',
                'Löschen'
            ).then(state => {
                if (state) {
                    mutate();
                }
            })
                .catch(() => {});
        },
        reloadTable(query) {
            query.refetch();
        }
    }
};
</script>
