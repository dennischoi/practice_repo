
$(document).on('ready', function() {


  var turn = 0;
  // var board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  //
  //

    function clickBox(ev) {
        console.log('pressed')
            if (turn % 2 === 0) {
                $(this).html('O').addClass('o');
            }else{
                $(this).html('X').addClass('x');
            }

            //  FUNCTION TO CHECK WINNER
            // checkWinner();
            $(this).off('click')

            turn++
            console.log(turn)
    };

  $('td').on('click', clickBox)




});
