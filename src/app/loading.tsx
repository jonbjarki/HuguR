export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1 className="text-5xl font-bold mb-4">
        Hold on, were getting things ready for you...
      </h1>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}
