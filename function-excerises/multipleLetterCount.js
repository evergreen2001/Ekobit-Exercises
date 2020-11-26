function multipleLetterCount(str) {

    
    let finalObj = {};
    for(let i =0; i< str.length; i++){
        if (!(str[i] in finalObj)){
          finalObj[str[i]] = 1;
        } else {
          finalObj[str[i]]++;
        }
    }

    
    return finalObj;
}