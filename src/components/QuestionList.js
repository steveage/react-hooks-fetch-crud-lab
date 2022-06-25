import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onSelectionChange}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onSelectionChange={onSelectionChange}/>)}</ul>
    </section>
  );
}

export default QuestionList;
