const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);


const printProfileData = profileDataArr => {

    profileDataArr.forEach(profileItem => console.log(profileItem));

    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i]);
    // }
};

printProfileData(profileDataArgs);