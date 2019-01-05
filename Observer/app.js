function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You re now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(function(item){
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire : function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

//event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
 click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds);
});
   
document.querySelector('.unsub-s').addEventListener('click', function() {
       click.unsubscribe(getCurrSeconds);
});
   


document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

//click handler

const getCurrMilliseconds = function() {
    console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function() {
    console.log(`Current Seconds ${new Date().getSeconds()}`);
}