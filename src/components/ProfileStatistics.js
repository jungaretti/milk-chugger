export default function ProfileStatistics({ gallons }) {
  const halfGallons = gallons / 2;

  return (
    <div>
      <p>{halfGallons} half gallons!</p>
    </div>
  );
}
