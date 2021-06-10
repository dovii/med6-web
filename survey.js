Survey.StylesManager.applyTheme("orange");

var surveyjson = {focusFirstQuestionAutomatic: true, 
                  completedHtml: "Quest completed! Thank you for your help.", 
                  pages: [{ name: "Demographic", elements: [{ 
                        type: "radiogroup", name: "Gender", title: "Please indicate your gender",  hideNumber: true, isRequired: true, choices: ["Male", "Female", "Non-binary", "Other"] }, { 
                        type: "text", name: "Country", title: "Please indicate your country of residence", hideNumber: true, isRequired: true }, { 
                        type: "text", name: "Age", title: "Please indicate your age", hideNumber: true, isRequired: true, inputType: "number", min: "1", max: "100" }] }, { 
                  name: "Likert", elements: [{ 
                        type: "matrix", name: "question1", title: "I was free to decide how I wanted to play.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { 
                        type: "matrix", name: "question2", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { 
                        type: "matrix", name: "question3", title: "The game allowed me to play the way I wanted to.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { 
                        type: "matrix", name: "question4", title: "I had important decisions to make when playing.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }] }, { 
                  name: "Final", elements: [{ 
                        type: "text", name: "Encourages", title: "What encourages you to continue playing the game?", hideNumber: true, isRequired: true }, { 
                        type: "text", name: "Email", title: "Please enter your e-mail", description: "If you would like to participate in the Blizzard balance raffle.", hideNumber: true }, { 
                        type: "text", name: "Feedback", title: "If you have any additional comments about your experience with the game, please write them down here", hideNumber: true }] }]}



window.survey = new Survey.Model(surveyjson);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector("#surveyResult")
            //.textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            console.log(result.data);

        sendDataToServer(result.data);
    })


$("#surveyElement").Survey({ model: survey });



function sendDataToServer(survey) {
    //alert("The results are:" + survey);

    const url = "https://wow-survey.herokuapp.com";
    const surveyResults = survey;

    $.ajaxSetup({
        headers: {
            "Access-Control-Allow-Origin": "*",
        },

        success: function (data) {
               console.log('Success');
               console.log(data);
           },
       
        error: function (jqXHR, error, errorThrown) {
            if (jqXHR.status) {
               // alert(jqXHR.responseText);
                console.log(error);
                console.log(errorThrown);
            } else {
                console.log("Something went wrong");
            }
        },
    });

    $.post(url, surveyResults, function (data, status) {
        console.log("Upload status: " + status + " Data sent: " + data)
    }); 

}

