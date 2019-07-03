import QuestionsContainer from '../QuestionCard';
import LeaderBoard from '../LeaderBoard';
import NewQuestion from '../NewQuestion';

export const routerArray = [
  {
    component: QuestionsContainer,
    exact: false,
    path: 'home'
  },
  {
    component: LeaderBoard,
    exact: false,
    path: '/Leader-Board'
  },
  {
    component: NewQuestion,
    exact: false,
    path: '/new'
  }
].filter(x => x);
