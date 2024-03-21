// Self-Runnning user profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

 let userProfile=(function ():{profileDetails:()=>void} {
  let userName = "mubashir";
  let userAge = 24;
  return {
    profileDetails: function ():void{
        console.log(`Name: ${userName}, Age:${userAge}`);
    }
  }
})()

userProfile.profileDetails()
