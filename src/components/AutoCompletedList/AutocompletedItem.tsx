interface AutoCompletedItemProps {
  keyword: string;
  completedWord: string;
}

const AutoCompletedItem = ({ completedWord }: AutoCompletedItemProps) => {
  return <span>{completedWord}</span>;
};

export default AutoCompletedItem;
