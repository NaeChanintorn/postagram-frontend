export default function Loading() {
  return (
    <button type="button" className="bg-blue-500" disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  );
}
