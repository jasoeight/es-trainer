<template>
    <div>
        <template v-for="(item, index) in items" v-if="index === currentIndex">
            <v-card
                color="grey lighten-4"
                :key="`practice_${item.id}`"
            >
                <v-card-title>
                    <strong v-if="currentLanguage !== language">{{ `ID: ${item.id} | Lektion: ${item.lesson}` }}</strong>
                    <v-spacer />
                    <v-toolbar-title>{{ currentIndex + 1 }} / {{ items.length }}</v-toolbar-title>
                </v-card-title>
                <v-card-text
                    class="headline text-xs-center pa-5 primary white--text"
                    v-html="formatText(item[language])"
                />
                <v-card-text
                    v-if="currentLanguage !== language"
                    class="headline text-xs-center pa-5 purple white--text"
                    v-html="formatText(item[practiceLanguage])"
                />
                <v-card-text
                    v-if="currentLanguage !== language && item.info"
                    class="headline text-xs-center pa-5 teal white--text"
                    v-html="formatText(item.info)"
                />
                <v-card-actions>
                    <v-btn
                        v-if="currentIndex !== 0"
                        large
                        @click="previous"
                    >Zurück</v-btn>
                    <v-spacer />
                    <v-btn
                        v-if="currentLanguage !== language"
                        large
                        @click="showCheckForm = true"
                        class="mr-3"
                    >
                        <v-icon
                            v-if="checked"
                            color="success"
                            class="mr-2"
                        >done_outline</v-icon>
                        Prüfen
                    </v-btn>
                    <check-form
                        :id="item.id"
                        :show.sync="showCheckForm"
                        @checked="checked = true"
                    />
                    <v-btn
                        v-if="!isLast"
                        large
                        @click="next"
                    >{{ currentLanguage === language ? 'Übersetzen' : 'Weiter' }}</v-btn>
                    <v-btn
                        v-if="isLast"
                        large
                        color="success"
                        :to="{name: 'home'}"
                    >Zur Startseite</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </div>
</template>

<script>
import CheckForm from './CheckForm';
export default {
    components: {
        CheckForm
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
            checked: false,
            showCheckForm: false,
            currentIndex: 0,
            currentLanguage: this.language
        };
    },
    computed: {
        practiceLanguage() {
            return this.language === 'de' ? 'es' : 'de';
        },
        isLast() {
            return this.currentLanguage !== this.language &&
                this.currentIndex + 1 === this.items.length;
        }
    },
    methods: {
        formatText(text) {
            if (text === null) {
                return '';
            }
            return text.replace(/\n/g, '<br>');
        },
        translate() {
            this.currentLanguage = this.practiceLanguage;
        },
        previous() {
            if (this.currentLanguage === this.language) {
                this.currentIndex--;
            }
            this.currentLanguage = this.language;
            this.checked = false;
        },
        next() {
            if (this.currentLanguage === this.language) {
                return this.translate();
            }
            this.currentIndex++;
            this.currentLanguage = this.language;
            this.checked = false;
        }
    }
};
</script>
