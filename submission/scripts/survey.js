var firstRun = true
score = 0

function init() {

    if (firstRun === true) {
        firstRun = false
        window.top.postMessage({ type: 'pause' }, '*')
        startSurvey()
    } else {
        console.log("skip button clicked after first run, nothing will happen")
        return
    }
}

function startSurvey() {

    const adSurveyJson = {
        "title": "Advertiser Survey",
        "completedHtml": "<h4>You should not see this!</h4>",
        "completedHtmlOnCondition": [
            {
            "expression": "{correctAnswers} >= 4",
            "html": "<style>h1,h2,h3,h4,h5,h6{line-height: 0.4;}</style><h2>Your Results</h2><h4>Based off your survey results, you are experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h6>Thank you for participating in this computer-aided enrichment activity.</h6>"
            },
            {
            "expression": "{correctAnswers} <= 3",
            "html": "<style>h1,h2,h3,h4,h5,h6{line-height: 0.4;}</style><h2>Your Results</h2><h4>Based off your survey results, you are <strong>not</strong> experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h6>Thank you for participating in this computer-aided enrichment activity.</h6>"
            }
        ],
        "pages": [
            {
            "name": "intro",
            "elements": [
                {
                "type": "html",
                "name": "intro-text",
                "html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Advertiser Survey</title>\n    <style>\n        ul {\n            list-style-type: disc;\n            padding-left: 10px;\n        }\n    </style>\n</head>\n<body> \n<p style=\"margin-top: 1em; text-align: justify;\">\n  <strong>Advertiser Survey</strong>\n</p>\n<p style=\"margin-top: 1em; text-align: justify;\">Before you continue, please complete this short survey:\n<br>\n<br>\Please answer the questions below, rating yourself on each of the criteria shown using a 1-5 scale. As you answer each question, click on the box that best describes how you have felt and conducted yourself over the past 6 months.</p>"
                },
            ]
            },
            {
            "name": "first-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            },
            {
            "name": "second-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            },
            {
            "name": "third-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "How often do you have problems remembering appointments or obligations?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            },
            {
            "name": "fourth-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            },
            {
            "name": "fifth-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            },
            {
            "name": "sixth-page",
            "elements": [
                {
                "type": "radiogroup",
                "title": "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
                "choices": [
                    "1) Never",
                    "2) Rarely",
                    "3) Sometimes",
                    "4) Often",
                    "5) Very Often"
                ],
                "colCount": 2
                }
            ]
            }
        ],
        "showProgressBar": true,
        "progressBarLocation": "belowHeader",
        "progressBarType": "questions",
        "autoAdvanceAllowComplete": false,
        "startSurveyText": "Start Survey",
        "firstPageIsStartPage": true,
        "questionsOnPageMode": "questionPerPage",
        "headerView": "advanced"
    };
        


    const jsPsych = initJsPsych({})

        
    const survey_trial = {
    type: jsPsychSurvey,
    survey_json: adSurveyJson,
    on_finish: function() {
        data = jsPsych.data.get()
        responses = data.trials[0].response

        for (let [key, value] of Object.entries(responses)) {
            if (key === "question1" ||
                key === "question2" ||
                key === "question3"){
                    if (value === "3) Sometimes" ||
                        value === "4) Often" ||
                        value === "5) Very Often"
                    ) {
                        score++
                        console.log(score)
                    }
                }
            if (key === "question4" ||
                key === "question5" ||
                key === "question6"){
                    if (value === "4) Often" ||
                        value === "5) Very Often"
                    ) {
                        score++
                        console.log(score)
                    }
                }
        }

        }
    };

    const adhdLikely = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<style>.white-box{height:500px;line-height: 2.0;margin-left:20px;margin-right:20px;margin-bottom:20px;background-color: white;}</style><div class=\"white-box\"><h2>Your Results</h2><h4>Based off your survey results, you are experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h4><a href=\"https://www.mayoclinic.org/diseases-conditions/adult-adhd/symptoms-causes/syc-20350878\" target=\"_blank\">Learn more about Adult ADHD from the Mayo Clinic</a></h4><h5>Thank you for participating in this computer-aided enrichment activity.</h5><button type=\"button\" onclick=\"window.top.postMessage({ type: &quot;success&quot; }, &quot;*&quot;)\">End Survey</button></div>",
        //trial_duration: 15000
    }

    const adhdNotLikely = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<style>.white-box{height:500px;line-height: 2.0;margin-left:20px;margin-right:20px;margin-bottom:20px;background-color: white;}</style><div class=\"white-box\"><h2>Your Results</h2><h4>Based off your survey results, you are not experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h5>Thank you for participating in this computer-aided enrichment activity.</h5><button type=\"button\" onclick=\"window.top.postMessage({ type: &quot;success&quot; }, &quot;*&quot;)\">End Survey</button></div>",
        //trial_duration: 15000
    }

    const if_adhdLikely = {
    timeline: [adhdLikely],
    conditional_function: function(){
        if(score >= 4){
            return true;
        } else {
            return false;
        }
    }}

    const if_adhdNotLikely = {
    timeline: [adhdNotLikely],
    conditional_function: function(){
        if(score <= 3){
            return true;
        } else {
            return false;
        }
    }}

    jsPsych.run([survey_trial, if_adhdLikely, if_adhdNotLikely])


}
