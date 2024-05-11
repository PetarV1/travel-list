export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Starting packing! 👕</em>
      </p>
    );

  const length = items.length;
  const packed = items.filter((items) => items.packed).length;
  const percentage = Math.round((packed / length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <p>You packed everything! Ready to go! 🧭</p>
        ) : (
          `You have ${length} items on your list, and you already packed ${packed} (
        ${percentage}%) 🎒`
        )}
      </em>
    </footer>
  );
}
