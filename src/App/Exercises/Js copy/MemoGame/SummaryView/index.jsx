export const SummaryView = ({ score, time }) => {
  return (
    <div>
      {score > 0 && `Gratulację! Twój wynik to 8 w czasie 0:56`}
      {score === 0 && `Spróbuj jeszcze raz!`}
    </div>
  );
};
