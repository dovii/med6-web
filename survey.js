Survey
    .StylesManager
    .applyTheme("default");

/*var surveyjson = { "completedHtml": "Thank you for your participation.", 
                "pages": [{ "name": "page1", "elements": [{   
                                     
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "id": "Q1", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "id": "Q2", "valueName": "Q2", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
 /*              "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                "type": "matrix", "name": "I was free to decide how I wanted to play.", "valueName": "Q1", "isRequired": true, "columns": ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, {
                 }] }] }*/

var surveyjson = { completedHtml: "Thank you for your participation.", pages: [{ name: "Demographic", elements: [{ type: "radiogroup", name: "Do you currenlty have an active WoW subscription?", description: "If your subscription expired up to 3 months ago, you can still answer \"Yes\"", isRequired: true, choices: ["Yes", "No"] }] }, { name: "Likert", elements: [{ type: "matrix", name: "question1", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { type: "matrix", name: "question2", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }], title: "Questionnaire" }] }

window.survey = new Survey.Model(surveyjson);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
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
    alert("The results are:" + survey + ". The results can be sent to a API server and save to a database.");


  //  const url = "https://wow-survey.herokuapp.com/";
 //   const data = survey;

  /*  var data = {
        "request": "Demographic",
        sdata: survey.data
    }; */

/*var settings = {
        'cache': false,
        'dataType': "jsonp",
        "async": true,
        "crossDomain": true,
        "url": "https://wow-survey.herokuapp.com/",
        "method": "post",
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }


    $.ajax(settings).done(function (response) {
        console.log(response);
    });*/



    $.ajax({
        headers: { "Access-Control-Allow-Origin": "*",
                    'Accept': 'application/json'},
        type: "post",
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
        console.log('We are sorry but our servers are having an issue right now');
    }, */
        
    
       success: function (c, textStatus, request) {
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

    }) 

/*    $.post(url, data, function (data, status) {
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