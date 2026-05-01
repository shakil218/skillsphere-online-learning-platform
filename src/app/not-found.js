import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Animation video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-80 md:w-100 bg-white"
        src="https://video-previews.elements.envatousercontent.com/bb14aebc-05a6-45d0-8710-25cfbe752d86/watermarked_preview/watermarked_preview.mp4"
      />

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-900 ">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
