function checkQuiz() {
    let score = 0;
    const correctAnswers = {
      q1: "b",
      q2: "b",
      q3: "a"
    };
  
    const form = document.forms["quiz-form"];
    for (let key in correctAnswers) {
      if (form[key].value === correctAnswers[key]) {
        score++;
      }
    }
  
    const result = document.getElementById("quiz-result");
    if (score === 3) {
      result.textContent = "🔥 You're unstoppable, Full score!";
    } else if (score === 2) {
      result.textContent = "👏 Almost there! Review a little and you’ll ace it.";
    } else {
      result.textContent = "💡 Let’s go over the topics again – you got this!";
    }
  }
  