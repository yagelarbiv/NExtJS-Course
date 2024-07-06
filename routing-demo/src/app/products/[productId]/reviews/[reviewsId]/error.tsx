"use client";

export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button type="submit" onClick={reset}>Try again</button>
    </div>
  );
}
