import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="miguelito">
        Miguelito
      </TwitterFollowCard>
    </section>
  );
}
