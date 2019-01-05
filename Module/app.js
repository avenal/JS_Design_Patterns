// standard module pattern
const Module = (function(){
    //private variables and functions
    let text = 'Hello World';
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    return{
        //public variables and functions
        callChangeText: function(){
            changeText();
        }
    }
})();

Module.callChangeText();

// revealing module pattern
const RevealingModule = (function(){
    let data = [];
    function add(item){
        data.push(item);
    }
    function get(id){
        return data.find(item=>{
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

RevealingModule.add({id:1, name: 'Fountain Pen'});
console.log(RevealingModule.get(1));