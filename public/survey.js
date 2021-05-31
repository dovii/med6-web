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
    })
    sendDataToServer;

$("#surveyElement").Survey({ model: survey });


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


