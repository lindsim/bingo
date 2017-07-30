(function makePhrases (){
    var database = firebase.database();
    new Firebase("https://bingo-5a162.firebaseio.com/");
    

    function getIndexes (){
        var numSet = new Set();
            while (numSet.size < (size * size)){
                numSet.add(Math.floor(Math.random() * 65));
            }  
        return numSet;
        }

    function getData(){
        var phrases = []
        var numSet = getIndexes;
        for (var x = 0; x < (size * size)){
            //get a phrase from firebase corresponding to numSet[x]
           //dbref.
            //phrases.push(database.ref('phrases/' equalTo(numSet[x]));
            //database.ref('phrases/').once('value') then (function(snapshot) {
             // var username = snapshot.val().x;

        }
    }
})();