var danishPrice = 50;
var butterBreadPrice = 25;
var toastPrice = 10;
var myBudget = 7;
var packedWell = false;

// if(danishPrice < myBudget){
//     console.log('Danish kheye danish jabo');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('Butter bon diye cha khamu');
// }
// else if(toastPrice < myBudget){
//     console.log('toast biscuit khamu')
// }
// else {
//     console.log('Batasha diya cha khamu')
// }

if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('Danish Khabo')
    }
    else {
        console.log('Danish khamu na! karon machi kheyeche')
    }
}