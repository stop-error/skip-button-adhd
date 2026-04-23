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
        

    

    // const theme = {
    //     "themeName": "plain",
    //     "colorPalette": "light",
    //     "isPanelless": false,
    //     "backgroundImage": "",
    //     "backgroundImageFit": "cover",
    //     "backgroundImageAttachment": "scroll",
    //     "backgroundOpacity": 1,
    //     "cssVariables": {
    //         "--sjs-font-family": "Open Sans",
    //         "--sjs-font-size": "16px",
    //         "--sjs-corner-radius": "4px",
    //         "--sjs-base-unit": "8px",
    //         "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    //         "--sjs-shadow-inner": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    //         "--sjs-border-default": "rgba(0, 0, 0, 0.15)",
    //         "--sjs-border-light": "rgba(0, 0, 0, 0.15)",
    //         "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
    //         "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
    //         "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
    //         "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    //         "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    //         "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    //         "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    //         "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    //         "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    //         "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    //         "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    //         "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    //         "--sjs-shadow-medium": "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
    //         "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
    //         "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    //         "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    //         "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-special-green": "rgba(25, 179, 148, 1)",
    //         "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    //         "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    //         "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    //         "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    //         "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    //         "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-article-font-xx-large-textDecoration": "none",
    //         "--sjs-article-font-xx-large-fontWeight": "700",
    //         "--sjs-article-font-xx-large-fontStyle": "normal",
    //         "--sjs-article-font-xx-large-fontStretch": "normal",
    //         "--sjs-article-font-xx-large-letterSpacing": "0",
    //         "--sjs-article-font-xx-large-lineHeight": "64px",
    //         "--sjs-article-font-xx-large-paragraphIndent": "0px",
    //         "--sjs-article-font-xx-large-textCase": "none",
    //         "--sjs-article-font-x-large-textDecoration": "none",
    //         "--sjs-article-font-x-large-fontWeight": "700",
    //         "--sjs-article-font-x-large-fontStyle": "normal",
    //         "--sjs-article-font-x-large-fontStretch": "normal",
    //         "--sjs-article-font-x-large-letterSpacing": "0",
    //         "--sjs-article-font-x-large-lineHeight": "56px",
    //         "--sjs-article-font-x-large-paragraphIndent": "0px",
    //         "--sjs-article-font-x-large-textCase": "none",
    //         "--sjs-article-font-large-textDecoration": "none",
    //         "--sjs-article-font-large-fontWeight": "700",
    //         "--sjs-article-font-large-fontStyle": "normal",
    //         "--sjs-article-font-large-fontStretch": "normal",
    //         "--sjs-article-font-large-letterSpacing": "0",
    //         "--sjs-article-font-large-lineHeight": "40px",
    //         "--sjs-article-font-large-paragraphIndent": "0px",
    //         "--sjs-article-font-large-textCase": "none",
    //         "--sjs-article-font-medium-textDecoration": "none",
    //         "--sjs-article-font-medium-fontWeight": "700",
    //         "--sjs-article-font-medium-fontStyle": "normal",
    //         "--sjs-article-font-medium-fontStretch": "normal",
    //         "--sjs-article-font-medium-letterSpacing": "0",
    //         "--sjs-article-font-medium-lineHeight": "32px",
    //         "--sjs-article-font-medium-paragraphIndent": "0px",
    //         "--sjs-article-font-medium-textCase": "none",
    //         "--sjs-article-font-default-textDecoration": "none",
    //         "--sjs-article-font-default-fontWeight": "400",
    //         "--sjs-article-font-default-fontStyle": "normal",
    //         "--sjs-article-font-default-fontStretch": "normal",
    //         "--sjs-article-font-default-letterSpacing": "0",
    //         "--sjs-article-font-default-lineHeight": "28px",
    //         "--sjs-article-font-default-paragraphIndent": "0px",
    //         "--sjs-article-font-default-textCase": "none",
    //         "--sjs-general-backcolor-dim": "rgba(255, 255, 255, 1)",
    //         "--sjs-primary-backcolor": "rgba(37, 137, 229, 1)",
    //         "--sjs-primary-backcolor-dark": "rgba(21, 119, 209, 1)",
    //         "--sjs-primary-backcolor-light": "rgba(37, 137, 229, 0.1)",
    //         "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    //         "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    //         "--sjs-special-red": "rgba(229, 10, 62, 1)",
    //         "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    //         "--sjs-header-backcolor": "var(--sjs-primary-backcolor)"
    //     },
    //     "header": {
    //         "height": 0,
    //         "mobileHeight": 0,
    //         "inheritWidthFrom": "survey",
    //         "textAreaWidth": 0,
    //         "backgroundImageFit": "cover",
    //         "backgroundImageOpacity": 100,
    //         "overlapEnabled": false,
    //         "logoPositionX": "left",
    //         "logoPositionY": "top",
    //         "titlePositionX": "left",
    //         "titlePositionY": "bottom",
    //         "descriptionPositionX": "left",
    //         "descriptionPositionY": "bottom"
    //     },
    //     "headerView": "advanced"
    // }


    const jsPsych = initJsPsych({
        //on_finish: function() {
           // window.top.postMessage({ type: 'success' }, '*');
    })

        
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
        stimulus: "<script src='success.js'></script><style>.white-box{height:500px;line-height: 2.0;margin-left:20px;margin-right:20px;margin-bottom:20px;background-color: white;}</style><div class='white-box'><h2>Your Results</h2><h4>Based off your survey results, you are experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h4><a href='https://www.mayoclinic.org/diseases-conditions/adult-adhd/symptoms-causes/syc-20350878' target='_blank'>Learn more about Adult ADHD from the Mayo Clinic</a></h4><h5>Thank you for participating in this computer-aided enrichment activity.</h5><button type='button' onclick='adSuccess()'>End Survey</button></div>",
        //trial_duration: 15000
    }

    const adhdNotLikely = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<script src='success.js'></script><style>.white-box{height:500px;line-height: 2.0;margin-left:20px;margin-right:20px;margin-bottom:20px;background-color: white;}</style><div class='white-box'><h2>Your Results</h2><h4>Based off your survey results, you are not experiencing symptoms indicative of adult ADHD. Please note this survey is not a diagnostic tool and does not replace the advice of a licensed medical professional.</h4><h5>Thank you for participating in this computer-aided enrichment activity.</h5><button type='button' onclick=''</button></div>",
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
