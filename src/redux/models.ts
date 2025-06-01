export interface State {
  showScreen: boolean;
}

interface ShowScreenAction {
  type: string;
}

export type Action = ShowScreenAction;
