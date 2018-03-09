import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.errorList = [{text: 'decodeURIComponent error', action: uriError}]
    },

    actions: {
        getErrorList() {
            return this.get('errorList')
        }
    }

});

function uriError() {
    decodeURIComponent('%');
}