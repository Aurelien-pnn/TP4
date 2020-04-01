function sumTest(){
    let tab = [6, 8, 43, 9];
    let result = sum(tab);
    let result2 = sum2(tab);
    console.log("result :" + result);
    console.log("result2 :" + result2);
}

function longestWordTest(){
    let fruit = ["banane", "kiwi", "ananas", "clementine"];
    let meilleurFruit = longestWord(fruit);
    console.log(meilleurFruit);
}

function rangeTest(){
    let tab = range(30, 78, 2);
    console.log(tab);
}

function nbOccurencesTest(){
    let text = "foo bar foo gue foo for"
    console.log(nbOccurences(text, foo));
}

function flatten2DTest(){
    let matrix = [[1, 6, 8], [3, 9, 4], [2, 8, 4]];
    console.log(flatten2D(matrix));
    console.log(flatten2DTwo(matrix));
}

function nameTest(){
    let nameTab = ["Roger", "Robert", "Fred"];
    name(nameTab);
}

function multiplicationTableTest(){
    multiplicationTable();
}