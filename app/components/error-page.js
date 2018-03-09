import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.errorList = ['undefined']
    },

    actions: {
        getErrorList() {
            return this.get('errorList')
        }
    }
});
