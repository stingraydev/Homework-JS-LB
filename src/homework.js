function returnArgumentsArray() {
    let secondArr = [];
    for ( let i = 0; i < arguments.length; i++ ) {
        secondArr[i] = arguments[i];
    };
    console.log(secondArr);
};

returnArgumentsArray(1, 2, 3);