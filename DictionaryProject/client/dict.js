var SERVER_URL = "http://localhost:3000/";

$(document).ready(function() {





    $("#btnLookup").click(btnLookupClicked);
    $('#term').on('keypress', function(e) {
        if (e.which === 13) {
            btnLookupClicked();
        }
    });

    function btnLookupClicked() {
        const inputTerm = $("#term").val();
        $.post(SERVER_URL + 'search', { searchTerm: inputTerm }, result => {
            loadResults(result.data)

        });
    }



    function loadResults(data) {

        const resultDiv = $(".result-div");
        resultDiv.empty();
        if (data.length === 0) {
            const resultPargraph = $("<p></p>").addClass("no-results").html("No Results!");
            resultDiv.append(resultPargraph);
        } else {

            data.forEach((item, i) => {
                const preparedResult = (i + 1) + '(' + item.wordtype + ')' + ' :: ' + item.definition;

                const resultPargraph = $("<p></p>").html(preparedResult);
                resultDiv.append(resultPargraph);

            });

        }

    }

});