Survey.StylesManager.applyTheme("orange");


//var surveyjson = { completedHtml: "Thank you for your participation.", pages: [{ name: "Demographic", elements: [{ type: "radiogroup", name: "Do you currenlty have an active WoW subscription?", description: "If your subscription expired up to 3 months ago, you can still answer \"Yes\"", isRequired: true, choices: ["Yes", "No"] }] }, { name: "Likert", elements: [{ type: "matrix", name: "question1", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { type: "matrix", name: "question2", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }], title: "Questionnaire" }] }

//focusFirstQuestionAutomatic = false, - to turn off scrolling

//var surveyjson = {focusFirstQuestionAutomatic: true, completedHtml: "Thank you for your participation.",  pages: [{ name: "Demographic", elements: [{ type: "radiogroup", name: "Gender", title: "Please indicate your gender", hideNumber: true, isRequired: true, choices: ["Male", "Female", "Non-binary", "Other"] }, { type: "text", name: "Country", title: "Please indicate your country of residence", hideNumber: true, isRequired: true }, { type: "text", name: "Age", title: "Please indicate your age", hideNumber: true, isRequired: true, inputType: "number", min: "1", max: "100" }] }, { name: "Subscription", elements: [{ type: "radiogroup", name: "Sub", title: "Do you currently have an active World of Warcraft subscription?", hideNumber: true, correctAnswer: "Yes", isRequired: true, choices: ["Yes", "No"] }, { type: "radiogroup", name: "question3", title: "How many hours each week (on average) do you spend playing World of Warcraft: Shadowlands?", hideNumber: true, correctAnswer: "Yes", isRequired: true, choices: [{ value: "<2", text: "Less than 2 hours a week" }, { value: "2-7", text: "2 - 7 hours a week" }, { value: "8-13", text: "8 - 13 hours a week" }, { value: "14-19", text: "14 - 19 hours a week" }, { value: ">20", text: "More than 20 hours a week" }, { value: "No play", text: "I do not play World of Warcraft: Shadowlands" }] }] }, { name: "Likert", elements: [{ type: "matrix", name: "question1", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { type: "matrix", name: "question2", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }] }, { name: "Final", elements: [{ type: "text", name: "Encourages", title: "What encourages you to continue playing the game?", hideNumber: true, isRequired: true }, { type: "text", name: "Feedback", title: "If you have any additional comments about your experience with the game, please write them down here.", hideNumber: true }] }] }


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
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
        console.log(document.querySelector("#surveyResult").textContent.substring("Result JSON:\n".length));

        sendDataToServer(result.data);
    })
//sendDataToServer;

//console.log(document.querySelector("#surveyResult").textContent.substring("Result JSON:\n".length));


$("#surveyElement").Survey({ model: survey });


/*function sendDataToServer2() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            result.data = this.responseText;
        }
    };
    xmlhttp.open("POST", "https://wow-survey.herokuapp.com/server.js");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(document.querySelector("#surveyResult").textContent.substring("Result JSON:\n".length);

} */



function sendDataToServer(survey) {
    //alert("The results are:" + survey + ". The results can be sent to a API server and save to a database.");


    const url = "https://wow-survey.herokuapp.com";
    const surveyResults = survey;

    /*  var data = {
          "request": "Demographic",
          sdata: survey.data
      }; */
//
    var settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "data": survey,
            "url": "https://wow-survey.herokuapp.com/",
            "method": "post",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
    
    
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

/*    $.ajax({
        headers: {
            "Access-Control-Allow-Origin": "*",
         //   "Accept": "application/json",
            "Content-type": "application/json",
        },
     //   type: "POST",
        url: "https://wow-survey.herokuapp.com/",
        contentType: "application/json",
        charset: "utf-8",
        dataType: "json",
        //dataType: "jsonp",
        data: survey,

        
        /*    success: function (data) {
               console.log('Success');
               console.log(data);
       
           },
       
           error: function () {
               console.log('Something went wrong');
           }, */


  /*      success: function (c, textStatus, request) {
            console.log("Upload sucessful")
        },

        error: function (jqXHR, error, errorThrown) {
            if (jqXHR.status) {
                alert(jqXHR.responseText);
                console.log(error);
                console.log(errorThrown);
            } else {
                alert("Something went wrong");
            }
        }, 

    }) */

/*    $.post(url, surveyResults, function (data, status) {
        console.log("Upload status: " + status + " Data sent: " + data)
    }); */

}




function sendDataToDatabaseWithoutFeedback() {
    var mergedObject = {
        consentFormAgreed,
        form1Data,
        form2Data,
        form3Data,
        form4Data,
        game1Data,
        game2Data
    };
    var message = JSON.stringify(mergedObject, null, 2);
    console.log("Sending data: " + message);

    const url = "https://coopgame.herokuapp.com/app.js";
    const data = { say: "sent", to: message }
    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    $.post(url, data, function (data, status) {
        console.log("Upload status: " + status + " Data sent: " + data)
    });
}