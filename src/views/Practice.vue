<template>
    <layout-main alignCenter justify-center>
        <practice-form
            v-if="showForm"
            @practice="startPractice"
        />
        <apollo-query
            v-else
            :query="require('@/graphql/Practice.gql')"
            :variables="{ filter: practiceFilter }"
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
                    <practice-cards
                        v-else-if="data && data.practice"
                        :language="language"
                        :items="data.practice"
                    />
                </v-flex>
            </template>
        </apollo-query>
    </layout-main>
</template>

<script>
import PracticeForm from '@/components/practice/Form.vue';
export default {
    components: {
        PracticeForm,
        PracticeCards: () => import('@/components/practice/Cards.vue')
    },
    data() {
        return {
            showForm: true,
            practiceFilter: {},
            language: ''
        }
    },
    methods: {
        startPractice(data) {
            this.language = data.language;
            delete data.language;
            this.practiceFilter = data;
            this.showForm = false;
        }
    }
};
</script>
