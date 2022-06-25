import React from "react";

function QuestionItem({ question, onDeleteQuestion, onSelectionChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleSelectionChange(event) {
    question.correctIndex = event.target.value;
    onSelectionChange(question);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleSelectionChange}>{options}</select>
      </label>
      <button onClick={() => onDeleteQuestion(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
