import React from 'react'

const FaceAuthentication = () => {
    // Instantiate a new faceIO object with your application's Public ID
    const faceio = new faceIO("app-public-id");
    function enrollNewUser() {
        // Start the facial enrollment process
        faceio.enroll({
            "locale": "auto", // Default user locale
            "payload": {
                /* The payload we want to associate with this particular user which is forwarded back to us upon future authentication of this user.*/
                "whoami": 123456, // Dummy ID linked to this particular user
                "email": "john.doe@example.com"
            }
        }).then(userInfo => {
            // User Successfully Enrolled! 
            alert(
                `User Successfully Enrolled! Details:
                Unique Facial ID: ${userInfo.facialId}
                Enrollment Date: ${userInfo.timestamp}
                Gender: ${userInfo.details.gender}
                Age Approximation: ${userInfo.details.age}`
            );
            console.log(userInfo);
            // handle success, save the facial ID (userInfo.facialId), redirect to the dashboard...
        }).catch(errCode => {
            // Something went wrong during enrollment, log the failure
            handleError(errCode);
        })
    }
    return (
        <div className='h-full w-full '>

        </div>
    )
}

export default FaceAuthentication