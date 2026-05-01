import homeCTA from "@/assets/home-cta-img.png";

const CTA = () => {
  return (
    <div className="relative w-full h-125 flex items-center justify-center rounded-xl overflow-hidden my-12 px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeCTA.src})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* card */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-xl max-w-2xl text-center mx-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Expand your world with SkillSphere
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Unlock your potential with expert-led courses designed for your
          career. Join our community and start building your future with
          SkillSphere today.
        </p>
        <button className="bg-purple-600/75 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transform hover:scale-105 shadow-lg transition-all">
          Explore SkillSphere Courses
        </button>
      </div>
    </div>
  );
};

export default CTA;
