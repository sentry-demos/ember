import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.errorList = getErrorList();
    },

    actions: {
        getErrorList() {
            return this.get('errorList');
        }
    }
});


function getErrorList() {
    return [
        {
            title: 'TypeError',
            description: 'obj.attributeInvalid is not a function',
            action: notAFunctionError
        }, {
            title: 'URIError',
            description: 'URI malformed',
            action: uriError
        }, {
            title: 'Uncaught TypeError',
            description: 'Cannot read property \'f\' of null',
            action: typeError
        }, {
            title: 'SyntaxError',
            description: 'Unexpected identifier',
            action: syntaxError
        }, {
            title: 'ReferenceError',
            description: 'undefinedVariable is not defined',
            action: referenceError
        }, {
            title: 'RangeError',
            description: 'Parameter must be between 1 and 100',
            action: rangeError
        }, {
            title: 'EvalError',
            description: 'Hello',
            action: evalError
        }
    ]
}

// error functions
function notAFunctionError() {
    var obj = {};
    obj.invalidFunction();
}

function uriError() {
    decodeURIComponent('%');
}

function typeError() {
    null.f();
}

function syntaxError() {
    eval('foo bar');
}

function referenceError() {
    var a = undefinedVariable;
}

function rangeError() {
    throw new RangeError('Parameter must be between 1 and 100');
}

function evalError() {
    setTimeout(() => {
        throw new EvalError('Hello', 'someFile.js', 10);
    }, 1000);
}