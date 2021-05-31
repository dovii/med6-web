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

var surveyjson = { completedHtml: "Thank you for your participation.", pages: [{ name: "Demographic", elements: [{ type: "radiogroup", name: "Do you currenlty have an active WoW subscription?", description: "If your subscription expired up to 3 months ago, you can still answer \"Yes\"", isRequired: true, choices: ["Yes", "No"] }] }, { name: "Likert", elements: [{ type: "matrix", name: "question1", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }, { type: "matrix", name: "question2", title: "I could approach the game in my own way.", isRequired: true, columns: ["Strongy disagree", "Disagree", "Neutral", "Agree", "Strongly agree"] }], title: "Questionnaire" }] };

window.survey = new Survey.Model(surveyjson);


survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);           
    })



function sendDataToServer() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            result.data = this.responseText;
        }
    };
    xmlhttp.open("POST", "http://localhost:3000");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(result.data, null, 3));

}



function sendDataToServer1(survey) {
    alert("The results are:" + JSON.stringify(survey.data) + ". The results can be sent to a API server and save to a database.");

    var data = {
        "request": "Demographic",
        sdata: survey.data
    };

    $.ajax({
        headers: {},
        type: "POST",
        url: "127.0.0.1:27017/wow-survey.results",
        contentType: "application/json",
        charset: "utf-8",
        dataType: "json",
        error: function (jqXHR, error, errorThrown) {
            if (jqXHR.status) {
                alert(jqXHR.responseText);
            } else {
                alert("Something went wrong");
            }
        },
        data: JSON.stringify(data),
        success: function (c, textStatus, request) {
        },
    })
}



function sendDataToServer() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            result.data = this.responseText;
        }
    };
    xmlhttp.open("POST", "http://localhost:3000");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(result.data, null, 3));

}


