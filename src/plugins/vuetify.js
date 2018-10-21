import Vue from 'vue';
import {
    Vuetify,
    VAlert,
    VApp,
    VBtn,
    VCard,
    VCheckbox,
    VCombobox,
    VDataTable,
    VDialog,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VSelect,
    VTextarea,
    VTextField,
    VToolbar,
    transitions
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import confirmDialog from 'vuetify-vuejs-confirmdialog';

Vue.use(Vuetify, {
    components: {
        VApp,
        VAlert,
        VBtn,
        VCard,
        VCheckbox,
        VCombobox,
        VDataTable,
        VDialog,
        VFooter,
        VForm,
        VGrid,
        VIcon,
        VProgressCircular,
        VProgressLinear,
        VRadioGroup,
        VSelect,
        VTextarea,
        VTextField,
        VToolbar,
        transitions
    }
});

Vue.use(confirmDialog);
