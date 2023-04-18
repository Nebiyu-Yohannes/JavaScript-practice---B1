// declaring the const as a global variable
var count = 0;
var bet_advice = "HOLD-BET";

var msg = "";
// this is the function that's going to count the cards 
function card_counting(card){
    switch(card){
        // case for the lower cards === high count
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        
        // this is for the middle cases === no change in count 
        case 7:
        case 8:
        case 9:
            break;

        // this is for the high cards === lower count       
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    // this is checking the count condition to advice betting or holding your bet
    if (count < 0){
        bet_advice = "BET";
    }

    msg = "THE COUNT IS: " + count + " AND WE ADVICE YOU TO " + bet_advice;
    
    return msg;

}


card_counting(7);
card_counting(6);
card_counting(3);
card_counting("K");
card_counting("A");
card_counting(2);


console.log(card_counting(10));