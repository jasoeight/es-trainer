<template>
    <div>
        <template v-for="(item, index) in items" v-if="index === currentIndex">
            <v-toolbar :key="`count_${item.id}`">
                <v-spacer />
                <v-toolbar-title>{{ currentIndex + 1 }} / {{ items.length }}</v-toolbar-title>
            </v-toolbar>
            <practice-card
                v-if="currentLanguage === language"
                :next-text="practiceLanguage"
                :prev="currentIndex !== 0"
                :key="`current_${item.id}`"
                :text="item[language]"
                @prev="previous"
                @next="translate(practiceLanguage)"
            />
            <practice-card
                v-else
                color="purple"
                :prev-text="language"
                :next="!isLast"
                :key="`practice_${item.id}`"
                :text="item[practiceLanguage]"
                @prev="translate(language)"
                @next="next"
            />
        </template>
    </div>
</template>

<script>
import PracticeCard from './Card';
export default {
    components: {
        PracticeCard
    },
    props: {
        language: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            currentLanguage: this.language
        };
    },
    computed: {
        practiceLanguage() {
            return this.language === 'de' ? 'es' : 'de';
        },
        isLast() {
            return this.currentIndex + 1 === this.items.length;
        }
    },
    methods: {
        translate(language) {
            this.currentLanguage = language;
        },
        previous() {
            this.currentIndex--;
        },
        next() {
            this.currentIndex++;
            this.currentLanguage = this.language;
        }
    }
};
</script>
