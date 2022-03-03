function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//         let headsCount = 0;
//         let attempts = 0;
//         while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         return `It took ${attempts} tries to flip five "heads"`;
//     }
//     console.log( fiveHeadsSync() );
//     console.log( "This is run after the fiveHeadsSync function completes" );
    
    

    function fiveHeads() {
        return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        maxAttempts = 100; //sets condition for reject
        
        //if headsCount is less than 5 AND is less that maxAttempts continue running
        while(headsCount < 5 && attempts <= maxAttempts) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
        } else {
                headsCount = 0;
            }
        }
        //if the condition has been met, code will resolve
        if (attempts <= maxAttempts) {
            resolve(`It took ${attempts} tries to flip five "heads"`);       
            } else { //else it will reject once it reaches 100
            reject("this has run 100 times")
            }
        }
        )
        }
    
        
//runs function
        fiveHeads()
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        console.log( "When does this run now?" );
        //runs before resolve but after coin flipping?
        