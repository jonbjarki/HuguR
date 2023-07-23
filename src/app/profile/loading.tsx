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
      <p>Hold on, were getting your profile...</p>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}
