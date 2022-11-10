interface AutoCompletedItemProps {
  keyword: string;
  completedWord: string;
}

const AutoCompletedItem = ({ keyword, completedWord }: AutoCompletedItemProps) => {
  return <span>{completedWord}</span>;
};

export default AutoCompletedItem;
