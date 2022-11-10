export interface InputProps {
  isSearchMode: boolean;
  handleSearchMode: (mode: string) => void;
  handleKeyArrow: (e: React.KeyboardEvent) => void;
  inputData: string;
  handleChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ResultProps {
  autoRef: any;
  currentIndex: number;
  handleClickItem: (target: string) => void;
  inputData: string;
}
