<template>
    <v-card
        :color="color"
        class="white--text"
    >
        <div class="headline text-xs-center pa-5">{{ text }}</div>
        <v-card-actions>
            <v-btn
                v-if="prev"
                large
                @click="$emit('prev')"
            >{{ prevText }}</v-btn>
            <v-spacer />
            <v-btn
                v-if="next"
                large
                @click="$emit('next')"
            >{{ nextText }}</v-btn>
            <v-btn
                v-else
                large
                color="success"
                :to="{name: 'home'}"
            >Zur Startseite</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'cyan darken-2'
        },
        prev: {
            type: Boolean,
            default: true
        },
        prevText: {
            type: String,
            default: 'Zurück'
        },
        next: {
            type: Boolean,
            default: true
        },
        nextText: {
            type: String,
            default: 'Weiter'
        }
    }
};
</script>
