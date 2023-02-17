const addEventListenerOriginal = window.wrappedJSObject.addEventListener;

function addEventListenerWithUnloadDisabled(type, listener, options) {
    if (type !== 'unload' && type !== 'beforeunload') {
    try {
            addEventListenerOriginal(type, listener, options);
        } catch (error) {
            console.log(error);
        }
        return;
    }
    console.log(type + ' listener detected. ' + type + ' listeners are banned and their ' +
            'registration is disabled via monkey patching.');
}

exportFunction(addEventListenerWithUnloadDisabled, window, { defineAs: "addEventListener" });

true;