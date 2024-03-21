// Self-Runnning user profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var userName = "mubashir";
    var userAge = 24;
    return {
        profileDetails: function () {
            console.log("Name: ".concat(userName, ", Age:").concat(userAge));
        }
    };
})();
userProfile.profileDetails();
