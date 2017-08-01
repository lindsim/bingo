(function makePhrases (size){
    var database = firebase.database();
    getData(size)

    function getIndexes (){
        var numSet = new Set();
            while (numSet.size < (size * size)){
                numSet.add(Math.floor(Math.random() * 65));
            }  
        return numSet;
        }

    function getData(){
        var phrases = []
        var numSet = getIndexes(size);
        for (var x = 0; x < (size * size); x++){
            var currentPhrase = firebase.database().ref('phrases').equalTo(numSet[x]);
            console.log(currentPhrase);
            phrases.push(currentPhrase);

        }
        return phrases;
    }
    return;
})();