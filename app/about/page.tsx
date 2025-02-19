
export default function About() {

  return (
        // <div className="p-5 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <div className="mt-10 flex flex-col md:flex-row gap-10 container mx-auto max-w-screen-lg w-4/5 font-[family-name:var(--font-geist-sans)]">
          <div className="w-full md:w-2/5">
            <img 
              src="/images/ben_traje_profile.jpg" 
              alt="Ben Traje Profile" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:flex-1 text-2xl leading-relaxed">
            <p><span style={{ fontVariant: 'small-caps' }}>Ben Traje</span> is a 3D artist specializing in rigging stylized characters, based in the Philippines.</p>
            <p className="mt-8">Able to play around in Blender, Houdini, Cinema 4D, and Maya. I'm available for remote freelance work. Keep in touch!</p>
          </div>
        </div>
  )};        