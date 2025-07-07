// components/character-guides.tsx - คอมโพเนนต์แนะนำตัวละครมาสคอต

import { characterData } from "../data/characters";

const CharacterGuides = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">พบกับเพื่อนรู้ใจในการเรียนรู้</h2>
          <p className="text-xl max-w-2xl mx-auto">
            เหล่าตัวละครแสนน่ารักของเราจะช่วยพาเด็กๆ เรียนรู้อย่างสนุกสนาน
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characterData.map((character, index) => (
            <div key={index} className={`${character.color} rounded-3xl p-6 text-center transform transition-transform hover:scale-105 shadow-md`}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-4xl">
                {character.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2">{character.name}</h3>
              <p className="text-sm font-medium mb-2">{character.role}</p>
              <p className="text-sm">{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterGuides;