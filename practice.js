const noMondays = new Promise( (resolve, reject) => {
        if(new Date().getDay() !== 2) {
            resolve("Good, it's not Tuesday!");
        } else {
            reject("Someone has a case of the Mondays!");
        }
    });
    noMondays
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    