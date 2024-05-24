//calculate the demerit points
function calculateDemeritPoints(speed) {
    let speedLimit = 70; 
    let demeritPoints = 0; 
    // Check if the speed exceeds the speed limit
    if (speed > speedLimit) {
    // Calculate demerit points
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
    return demeritPoints; 
    }
    function detect() {
    // Prompt the user to enter the speed of the car
    let speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
    // Calculate the demerit points based on the entered speed
    let demeritPoints = calculateDemeritPoints(speed);
    if (demeritPoints > 0) {
    console.log("Points:", demeritPoints);
    // Check if the demerit points exceed 12
    if (demeritPoints > 12) {
    console.log("License suspended");
    }
    } else {
    console.log("Ok");
    }
    }
    // Call the detect function to run the program
    detect();
    