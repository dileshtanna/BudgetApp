$(document).ready(function () {

    var next = 1;
    $("#add-more").click(function(e){
        if(next<5){
            e.preventDefault();
            var addto = "#bankInfo" + next;
            var addRemove = "#bankInfo" + (next);
            next = next + 1;
            var newIn = ' <div id="bankInfo'+ next +'" name="bankInfo'+ next +'"><div class="form-group"> <label for="bankInfo">Enter Your Bank Details Below:</label> <input type="text" class="form-control" id="bank'+next+'Name" aria-describedby="bank1" placeholder=" Enter Bank Name:" required><input type="number" class="form-control" id="bank'+next+'Amt" aria-describedby="bankAmt" placeholder=" Enter Bank Amount:" required ></div></div>';
            var newInput = $(newIn);
            var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="bankInfo">';
            var removeButton = $(removeBtn);
            $(addto).after(newInput);
            $(addRemove).after(removeButton);
            $("#bankInfo" + next).attr('data-source',$(addto).attr('data-source'));
            $("#count").val(next);  

                $('.remove-me').click(function(e){
                    e.preventDefault();
                    var bankInfoNum = this.id.charAt(this.id.length-1);
                    var bankInfoID = "#bankInfo" + bankInfoNum;
                    $(this).remove();
                    $(bankInfoID).remove();
                    next = next - 1;
                });
        }
        else{
            alert("Cannot add more than 5 banks");
        }
    });

});





