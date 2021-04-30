Survey
    .StylesManager
    .applyTheme("default");

var surveyjson = { "completedHtml": "Thank you for your participation.", 
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
                 */}] }] }

window.survey = new Survey.Model(surveyjson);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({ model: survey });