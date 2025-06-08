import Image from "next/image";
import ProfileTabs from "@/components/ProfileTabs";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-slate-900 to-indigo-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-extrabold mb-10 tracking-tight">STREAMFIX.</h1>
          <nav className="space-y-4">
            <button className="w-full text-left py-2 px-3 rounded-lg bg-slate-800 mb-2">New Feed</button>
            <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800">Trending</button>
            <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800">Following</button>
            <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800">Your Videos</button>
            <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800">Playlist</button>
          </nav>
        </div>
        <div>
          <div className="text-slate-400 text-xs mb-3">Following</div>
          <ul>
            <li>
              <button className="flex items-center gap-2 w-full py-2 px-3 bg-indigo-700 rounded-lg mb-1">
                <Image src="/avatar.jpg" alt="Dylan Hodges" width={32} height={32} className="w-8 h-8 rounded-full" />
                Dylan Hodges
              </button>
            </li>
            {/* More users... */}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-10">
        {/* Hero Banner */}
        <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg mb-8" style={{ height: "18rem" }}>
          <Image
            src="/hero-banner.jpg"
            alt="Sky Children of The Light"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
          {/* Profile Card */}
          <div className="absolute left-8 bottom-8 flex items-center bg-slate-900/90 px-8 py-4 rounded-2xl backdrop-blur-md gap-6 shadow-xl">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-4 border-indigo-400"
            />
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                Dylan Hodges
                <span className="inline-block bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900" title="Verified"></span>
              </h2>
              <div className="flex gap-5 mt-2 text-slate-300">
                <span>536K followers</span>
                <span>120 videos</span>
              </div>
            </div>
            <button className="ml-10 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl font-semibold">
              Message
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <ProfileTabs />
      </main>
    </div>
  );
}
