// Function to load the XML file
function loadXMLFile(file, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        callback(this.responseXML);
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }
  
  // Function to display questions and answers
  function displayQuestions(xml) {
    var questions = xml.getElementsByTagName("question");
    var container = document.getElementById("questions-container");
  
    for (var i = 0; i < questions.length; i++) {
      var question = questions[i].getElementsByTagName("text")[0].textContent;
      var answer = questions[i].getElementsByTagName("answer")[0].textContent;
  
      var questionElement = document.createElement("div");
      questionElement.innerHTML = "<h2>" + question + "</h2>" + "<p>" + answer + "</p>";
  
      container.appendChild(questionElement);
    }
  }
  
  // Load the XML file and display the questions and answers
  loadXMLFile("questions.xml", displayQuestions);
  