const Singleton = (function() {
    let instance;
    function createInstance(){
        const object = new Object({name: 'John Doe'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

//John Doe, John Doe, true
console.log(instanceA, instanceB, instanceA===instanceB);