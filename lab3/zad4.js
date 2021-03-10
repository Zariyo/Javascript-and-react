(function longest(words){
    words = words.split(' ');
    longestword=words[0]
    for (i=0; i<words.length; i++) {
        if (words[i].length>longestword.length){
            longestword=words[i]
        }
    }
    console.log(longestword);
    return longestword
}("Ala ma kota"))
