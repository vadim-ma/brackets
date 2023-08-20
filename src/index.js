module.exports = function check(str, bracketsConfig) {
  // your solution
    let i = 0;
    let wasReducted = true;
    while(str.length > 0 && wasReducted){
        wasReducted = false;
        while(str.length > 0 && i + 1 < str.length){
            const curChar = str[i];
            const nextChar = str[i + 1];
            const pair = bracketsConfig.find(pair => pair[0] === curChar);
            if(pair && nextChar === pair[1]){
                str = str.substring(0, i) + str.substring(i+2);
                if(i > 0){
                    i--;
                }
                wasReducted = true;
            }else{
                i++;
            }
        }
    }
    return str.length === 0;
}
