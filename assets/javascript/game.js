// Initialize Variables
let wins = 0;
let losses = 0;
let sum;
let target;

reset();

$('.diamond').on('click', function(){
    sum += parseInt($(this).attr('value'));
    $('#score').text(sum)

    if (sum === target){
        nextGame();
        wins++;
        $('#score').text(sum);
        $('#wins').text('Wins: ' + wins);
        $('#message').text('You Won!');
        setTimeout(function(){
            $('#message').text('');
        }, 3000)
    } else if (sum >= target){
        nextGame();
        losses++;
        $('#score').text(sum);
        $('#losses').text('Losses ' + losses);
        $('#message').text('You Lost!');
        setTimeout(function(){
            $('#message').text('');
        }, 3000)
    }
})

function nextGame() {

    target = Math.floor(Math.random() * 100);
    sum = 0;
    
    // Adding Random Values to Crystals
    $('.diamond').each(function(){
        $(this).attr('value', Math.floor((Math.random() * 10) + 1));
    });
    
    $('#wins').text('Wins: ' + wins);
    $('#losses').text('Losses ' + losses);
    $('#target').text(target);
    $('#score').text(sum);
}

function reset(){
    wins = 0;
    losses = 0;
    nextGame();
}