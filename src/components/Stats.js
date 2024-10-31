const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Item Into You Packing List</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've Got Everything Ready To Go ✈️"
          : `💼You have ${numItems} items on your list, and you've already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
