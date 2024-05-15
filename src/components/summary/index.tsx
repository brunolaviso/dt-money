import { Card } from '../card'

import "./summary.css";

export function Summary() {
  return (
    <div className="summary">
      <div className="container summary-content">
        <Card variant="deposit" amount={8234} />
        <Card variant="withdraw" amount={4565} />
        <Card variant="total" amount={8234 - 4565} />
      </div>
    </div>
  );
}
