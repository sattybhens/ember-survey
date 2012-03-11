var App = Ember.Application.create();

var SurveyPoints = Ember.Object.create({

  sectionAPoints:   0,
  sectionBPoints: 0,

  totalPoints: function() {
    return this.get('sectionAPoints') + this.get('sectionBPoints');
  }.property('sectionAPoints','sectionBPoints')

});

var technicalView = Ember.View.create({

  templateName: 'section-a-questions', 
  questions:  [
    {text: "This is Q1?", name : "q1"},
    {text: "This is Q2?", name : "q2"},
    {text: "This is Q3?", name : "q3"}
    ],
 
  change: function() {
    var points = 0;

    $("#section-a input:checked").each(function() {
      points += Number($(this).val());
    });

    SurveyPoints.set('sectionAPoints', points);
  }

});

technicalView.appendTo('#section-a-questions');



var environmentView = Ember.View.create({

  templateName: 'section-b-questions', 
  questions: [
    {text: "This is Q1?", name : "q1"},
    {text: "This is Q2?", name : "q2"},
    {text: "This is Q3?", name : "q3"}
    ],

  change: function() {
    var points = 0;

    $("#section-b input:checked").each(function() {
      points += Number($(this).val());
    });

    SurveyPoints.set('sectionBPoints', points);
  }

});

environmentView.appendTo('#section-b-questions');
