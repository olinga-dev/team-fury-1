var profile = {
    fullname: "Micheal Ayeni",
    hng_id: "HNG-05908",
    language: "Javascript",
    email: "ekiminfomedia@gmail.com"
}

function myProfile() {
    let output = `Hello World, this is ${profile.fullname} with HNGi7 ID ${profile.hng_id} using ${profile.language} for stage 2 task`;
    return console.log(output)  
}

myProfile()