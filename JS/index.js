$('#InputSubmit').click(function(){
    let textVal = $('#InputText').val();
    // we should clear out the text
    if(textVal !== ''){
        $('#InputText').val('');
        $('.OutputTable').append(
        `<tr>
        <td>${textVal}</td>
        <td>
        <input type="button" value="Done" class="DoneButton">
        <input type="button" value="Undone" class="UnDoneButton">
        <input type="button" value="Delete" class="DeleteButton">
        </td>
        <td id="Ticks"></td>
        </tr>`)
    }

    $('.DoneButton').click(function(){
        $(this).parent().siblings('#Ticks').html('');  // to clear out any previous ticks
        $(this).parent().siblings('#Ticks').html('&#9989;');
    });

    $('.UnDoneButton').click(function(){
        $(this).parent().siblings('#Ticks').html('');  // to clear out any previous ticks
        $(this).parent().siblings('#Ticks').html('&#x274C');
    });
    $('.DeleteButton').click(function(){
        let table_length = $('.OutputTable tr').length;
        // the tabel length shluld be atleast 2 and also if someone clicks on undone and then done then it should not delete
        // so to prevent that we will add the conditon that the tick column should contain ❌ i.e. it is in undone state
        if (table_length > 1 && $(this).parent().siblings('#Ticks').html() === '❌' ){
            $(this).parent().parent().remove();
        }
    });
});