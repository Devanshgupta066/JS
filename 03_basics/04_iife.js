//Immediately invoked Function Expression (IIFE)

(function tarantino(){
    console.log("DB connected");
    
})();
( (name) => {
    console.log(`DB connected Two ${name}`);
    
})("Dev");
