/* =====================================================
   Batticaloa Museum — Gallery Data
   Trilingual (English / Tamil / Sinhala) content for all
   eleven permanent galleries.
   ===================================================== */

const GALLERIES = [
  {
    id: 0, slug: "tamil-heritage", cat: "culture",
    img: "https://picsum.photos/seed/tamil-temple-batti/900/650",
    title: { en:"Tamil Culture & Hindu Heritage", ta:"தமிழ் கலாச்சாரம் & இந்து பாரம்பரியம்", si:"දෙමළ සංස්කෘතිය සහ හින්දු උරුමය" },
    desc: {
      en:"Explore the rich tapestry of Tamil settlements, Hindu temples, Saiva Siddhanta philosophy, and vibrant festival traditions of Batticaloa.",
      ta:"பட்டிக்கலோவின் தமிழ் குடியேற்றங்கள், இந்து கோவில்கள், சைவ சித்தாந்த தத்துவம் மற்றும் துடிப்பான திருவிழா பாரம்பரியங்களை ஆராயுங்கள்.",
      si:"බට්තිකාලෝවේ දෙමළ පදිංචියන්, හින්දු දේවාල, සෛව සිද්ධාන්ත දර්ශනය සහ සජීවී උත්සව සම්ප්‍රදායන් ගවේෂණය කරන්න."
    },
    items: [
      { en:"History of Tamil settlements in Batticaloa", ta:"பட்டிக்கலோவில் தமிழ் குடியேற்றங்களின் வரலாறு", si:"බට්තිකාලෝවේ දෙමළ පදිංචියන්ගේ ඉතිහාසය" },
      { en:"Hindu temples and religious traditions", ta:"இந்து கோவில்கள் மற்றும் மத பாரம்பரியங்கள்", si:"හින්දු දේවාල සහ ආගමික සම්ප්‍රදායන්" },
      { en:"Saiva Siddhanta heritage", ta:"சைவ சித்தாந்த பாரம்பரியம்", si:"සෛව සිද්ධාන්ත උරුමය" },
      { en:"Annual festivals and rituals", ta:"ஆண்டு திருவிழாக்கள் மற்றும் சடங்குகள்", si:"වාර්ෂික උත්සව සහ චාරිත්‍ර" },
      { en:"Siru Theiva Valipadu — Kannaki Amman, Mariamman, Ayyanar worship", ta:"சிறு தெய்வ வழிபாடு — கண்ணகி அம்மன், மாரியம்மன், ஐயனார் வழிபாடு", si:"සිරු තේව වලිපාදු — කන්නකි අම්මාන්, මාරියම්මාන්, අය්යනාර් වන්දනාව" },
      { en:"Village guardian deities & folk rituals", ta:"கிராம காவல் தெய்வங்கள் & நாட்டுப்புற சடங்குகள்", si:"ගම් ආරක්ෂක දෙවිවරුන් සහ ජන චාරිත්‍ර" },
      { en:"Koothu (Traditional Drama) & folk dances", ta:"கூத்து (பாரம்பரிய நாடகம்) & நாட்டுப்புற நடனங்கள்", si:"කූතු (සම්ප්‍රදායික නාට්‍ය) සහ ජන නැටුම්" },
      { en:"Traditional music instruments", ta:"பாரம்பரிய இசைக் கருவிகள்", si:"සම්ප්‍රදායික සංගීත භාණ්ඩ" },
      { en:"Traditional clothing & marriage customs", ta:"பாரம்பரிய உடைகள் & திருமண சடங்குகள்", si:"සම්ප්‍රදායික ඇඳුම් සහ විවාහ චාරිත්‍ර" },
      { en:"Palm leaf manuscripts", ta:"ஓலைச்சுவடிகள்", si:"පොල් අතු අත්පොත්" }
    ]
  },
  {
    id: 1, slug: "muslim-heritage", cat: "culture",
    img: "https://picsum.photos/seed/mosque-heritage-batti/900/650",
    title: { en:"Muslim Culture & Islamic Heritage", ta:"முஸ்லிம் கலாச்சாரம் & இஸ்லாமிய பாரம்பரியம்", si:"මුස්ලිම් සංස්කෘතිය සහ ඉස්ලාමීය උරුමය" },
    desc: {
      en:"Discover the history of Muslim communities, Islamic architecture, Arwi literary heritage, and the traditional occupations that shaped Batticaloa's Muslim identity.",
      ta:"முஸ்லிம் சமூகங்களின் வரலாறு, இஸ்லாமிய கட்டிடக்கலை, அர்வி இலக்கிய பாரம்பரியம் மற்றும் பட்டிக்கலோவின் முஸ்லிம் அடையாளத்தை வடிவமைத்த பாரம்பரிய தொழில்களைக் கண்டறியுங்கள்.",
      si:"මුස්ලිම් ප්‍රජාවන්ගේ ඉතිහාසය, ඉස්ලාමීය ගෘහනිර්මාණ ශිල්පය, අර්වි සාහිත්‍ය උරුමය සහ බට්තිකාලෝවේ මුස්ලිම් අනන්‍යතාව සෑදූ සම්ප්‍රදායික රැකියාවලින් සොයා ගන්න."
    },
    items: [
      { en:"History of Muslim communities in Batticaloa", ta:"பட்டிக்கலோவில் முஸ்லிம் சமூகங்களின் வரலாறு", si:"බට්තිකාලෝවේ මුස්ලිම් ප්‍රජාවන්ගේ ඉතිහාසය" },
      { en:"Arrival and development of Muslim settlements", ta:"முஸ்லிம் குடியேற்றங்களின் வருகை மற்றும் வளர்ச்சி", si:"මුස්ලිම් පදිංචියන්ගේ පැමිණීම සහ සංවර්ධනය" },
      { en:"Islamic religious practices & mosque architecture", ta:"இஸ்லாமிய மத நடைமுறைகள் & பள்ளிவாசல் கட்டிடக்கலை", si:"ඉස්ලාමීය ආගමික පුරුදු සහ මස්ජිඩ් ගෘහනිර්මාණ ශිල්පය" },
      { en:"Arabic-Tamil (Arwi) heritage", ta:"அரபு-தமிழ் (அர்வி) பாரம்பரியம்", si:"අරාබි-දෙමළ (අර්වි) උරුමය" },
      { en:"Traditional Muslim clothing & marriage customs", ta:"பாரம்பரிய முஸ்லிம் உடைகள் & திருமண சடங்குகள்", si:"සම්ප්‍රදායික මුස්ලිම් ඇඳුම් සහ විවාහ චාරිත්‍ර" },
      { en:"Traditional occupations: Trading, Fishing, Agriculture, Handicrafts", ta:"பாரம்பரிய தொழில்கள்: வர்த்தகம், மீன்பிடி, விவசாயம், கைவினை", si:"සම්ප්‍රදායික රැකියා: වෙළඳාම, මසුන් ඇල්ලීම, කෘෂිකර්ම, අත්කම්" },
      { en:"Islamic manuscripts, books, and artifacts", ta:"இஸ்லாமிய கையெழுத்துப் பிரதிகள், புத்தகங்கள், மற்றும் பொருட்கள்", si:"ඉස්ලාමීය හස්තලේඛන, පොත් සහ භාණ්ඩ" }
    ]
  },
  {
    id: 2, slug: "burgher-heritage", cat: "culture",
    img: "https://picsum.photos/seed/colonial-church-batti/900/650",
    title: { en:"Burgher Culture & Christian Heritage", ta:"பர்கர் கலாச்சாரம் & கிறிஸ்தவ பாரம்பரியம்", si:"බර්ගර් සංස්කෘතිය සහ ක්‍රිස්තියානි උරුමය" },
    desc: {
      en:"Trace the Portuguese, Dutch, and British colonial legacy through Burgher community heritage, Christian traditions, and the lasting European influence on Batticaloa.",
      ta:"போர்த்துகீசிய, டச்சு மற்றும் பிரிட்டிஷ் குடியேற்ற மரபுகளை பர்கர் சமூக பாரம்பரியம், கிறிஸ்தவ பாரம்பரியங்கள் மற்றும் பட்டிக்கலோவின் ஐரோப்பிய செல்வாக்கு வழியாக கண்டறியுங்கள்.",
      si:"බර්ගර් ප්‍රජා උරුමය, ක්‍රිස්තියානි සම්ප්‍රදායන් සහ බට්තිකාලෝවේ යුරෝපීය බලපෑම හරහා පෘතුගීසි, ලන්දේසි සහ බ්‍රිතාන්‍ය ජනපද උරුමය සොයා ගන්න."
    },
    items: [
      { en:"Portuguese, Dutch, and British colonial influence", ta:"போர்த்துகீசிய, டச்சு மற்றும் பிரிட்டிஷ் குடியேற்ற செல்வாக்கு", si:"පෘතුගීසි, ලන්දේසි සහ බ්‍රිතාන්‍ය ජනපද බලපෑම" },
      { en:"Burgher community heritage", ta:"பர்கர் சமூக பாரம்பரியம்", si:"බර්ගර් ප්‍රජා උරුමය" },
      { en:"Christian traditions: Protestant, Methodist, Catholic", ta:"கிறிஸ்தவ பாரம்பரியங்கள்: புரோட்டஸ்தாந்து, மெதடிஸ்டு, கத்தோலிக்கு", si:"ක්‍රිස්තියානි සම්ප්‍රදායන්: ප්‍රොතෙස්තන්ත්‍ර, මෙතෝදිස්ත්, කතෝලික" },
      { en:"Colonial architecture", ta:"குடியேற்ற கட்டிடக்கலை", si:"ජනපද ගෘහනිර්මාණ ශිල්පය" },
      { en:"Missionary education history", ta:"மிஷனரி கல்வி வரலாறு", si:"මිෂනාරි අධ්‍යාපන ඉතිහාසය" },
      { en:"European influence on language, food, music, clothing, lifestyle", ta:"மொழி, உணவு, இசை, உடை, வாழ்க்கை முறை மீதான ஐரோப்பிய செல்வாக்கு", si:"භාෂාව, ආහාර, සංගීතය, ඇඳුම්, ජීවන රටාව මත යුරෝපීය බලපෑම" },
      { en:"Old photographs and documents", ta:"பழைய புகைப்படங்கள் மற்றும் ஆவணங்கள்", si:"පැරණි ඡායාරූප සහ ලේඛන" }
    ]
  },
  {
    id: 3, slug: "sinhala-heritage", cat: "culture",
    img: "https://picsum.photos/seed/buddhist-temple-east/900/650",
    title: { en:"Sinhala Culture & Buddhist Heritage", ta:"சிங்கள கலாச்சாரம் & பௌத்த பாரம்பரியம்", si:"සිංහල සංස්කෘතිය සහ බෞද්ධ උරුමය" },
    desc: {
      en:"Learn about Sinhala communities in the Eastern Province, Buddhist heritage, ancient inscriptions, and the cultural exchange between communities.",
      ta:"கிழக்கு மாகாணத்தில் சிங்கள சமூகங்கள், பௌத்த பாரம்பரியம், பண்டைய கல்வெட்டுகள் மற்றும் சமூகங்களுக்கு இடையேயான கலாச்சார பரிமாற்றம் பற்றி அறியுங்கள்.",
      si:"නැගෙනහිර පළාතේ සිංහල ප්‍රජාවන්, බෞද්ධ උරුමය, පුරාණ සෙල්ලිපි සහ ප්‍රජාවන් අතර සංස්කෘතික හුවමාරුව ගැන ඉගෙන ගන්න."
    },
    items: [
      { en:"Sinhala communities in the Eastern Province", ta:"கிழக்கு மாகாணத்தில் சிங்கள சமூகங்கள்", si:"නැගෙනහිර පළාතේ සිංහල ප්‍රජාවන්" },
      { en:"Buddhist heritage & temples", ta:"பௌத்த பாரம்பரியம் & கோவில்கள்", si:"බෞද්ධ උරුමය සහ විහාරයන්" },
      { en:"Buddhist festivals", ta:"பௌத்த திருவிழாக்கள்", si:"බෞද්ධ උත්සව" },
      { en:"Traditional art and crafts", ta:"பாரம்பரிய கலை மற்றும் கைவினை", si:"සම්ප්‍රදායික කලා සහ හස්තකර්ම" },
      { en:"Ancient inscriptions and historical links", ta:"பண்டைய கல்வெட்டுகள் மற்றும் வரலாற்று தொடர்புகள்", si:"පුරාණ සෙල්ලිපි සහ ඓතිහාසික සබඳතා" },
      { en:"Cultural exchange between communities", ta:"சமூகங்களுக்கு இடையேயான கலாச்சார பரிமாற்றம்", si:"ප්‍රජාවන් අතර සංස්කෘතික හුවමාරුව" }
    ]
  },
  {
    id: 4, slug: "traditional-livelihood", cat: "heritage",
    img: "https://picsum.photos/seed/fishing-lagoon-batti/900/650",
    title: { en:"Traditional Livelihood", ta:"பாரம்பரிய வாழ்வாதாரம்", si:"සම්ප්‍රදායික ජීවනෝපාය" },
    desc: {
      en:"From lagoon fishing with traditional vallam boats to paddy cultivation and traditional industries like coir production, pottery, and weaving — the backbone of Batticaloa's economy.",
      ta:"பாரம்பரிய வல்லம் படகுகளுடன் கடல் மீன்பிடி முதல் நெல் சாகுபடி மற்றும் நார் உற்பத்தி, மட்பாண்டம், நெசவு போன்ற பாரம்பரிய தொழில்கள் வரை — பட்டிக்கலோவின் பொருளாதாரத்தின் அடித்தளம்.",
      si:"සම්ප්‍රදායික වල්ලම් බෝට්ටු සමඟ කලපු මසුන් ඇල්ලීමේ සිට වී වගාව සහ කොකෝ නිෂ්පාදන, මැටි බඩු, රෙදි විවීම වැනි සම්ප්‍රදායික නිෂ්පාදන දක්වා."
    },
    items: [
      { en:"Traditional fishing methods & lagoon culture", ta:"பாரம்பரிய மீன்பிடி முறைகள் & கடல் கலாச்சாரம்", si:"සම්ප්‍රදායික මසුන් ඇල්ලීමේ ක්‍රම සහ කලපු සංස්කෘතිය" },
      { en:"Fishing boats: Vallam, traditional canoes", ta:"மீன்பிடி படகுகள்: வல்லம், பாரம்பரிய படவுகள்", si:"මසුන් ඇල්ලූ බෝට්ටු: වල්ලම්, සම්ප්‍රදායික කැනෝ" },
      { en:"Fishing tools: Nets, hooks, traps", ta:"மீன்பிடி கருவிகள்: வலைகள், கொக்கி, பிடி கருவிகள்", si:"මසුන් ඇල්ලීමේ මෙවලම්: ජාල, කොක්කු, බාරු" },
      { en:"Fishermen lifestyle & lagoon ecosystem", ta:"மீனவர்களின் வாழ்க்கை முறை & கடல் சூழல் அமைப்பு", si:"මාලු ඇල්ලූවන්ගේ ජීවන රටාව සහ කලපු පරිසර පද්ධතිය" },
      { en:"Traditional paddy cultivation methods", ta:"பாரம்பரிய நெல் சாகுபடி முறைகள்", si:"සම්ප්‍රදායික වී වගා ක්‍රම" },
      { en:"Ancient farming tools & paddy varieties", ta:"பண்டைய விவசாய கருவிகள் & நெல் வகைகள்", si:"පුරාණ ගොවිතැන් මෙවලම් සහ වී වර්ග" },
      { en:"Traditional irrigation systems", ta:"பாரம்பரிய பாசன அமைப்புகள்", si:"සම්ප්‍රදායික වාරිමාර්ග පද්ධති" },
      { en:"Coir production, pottery, weaving, carpentry, blacksmith work, mat production", ta:"நார் உற்பத்தி, மட்பாண்டம், நெசவு, தச்சு, குயவர் வேலை, பாய் உற்பத்தி", si:"කොකෝ නිෂ්පාදන, මැටි බඩු, රෙදි විවීම, ලී කර්මාන්ත, යකඩ කර්මාන්ත, පටු නිෂ්පාදන" }
    ]
  },
  {
    id: 5, slug: "traditional-kitchen-food", cat: "heritage",
    img: "https://picsum.photos/seed/traditional-food-srilanka/900/650",
    title: { en:"Traditional Kitchen, Food & Household", ta:"பாரம்பரிய சமையலறை, உணவு & வீட்டு உபயோகப் பொருட்கள்", si:"සම්ප්‍රදායික මුළුතැන්ගෙය, ආහාර සහ ගෘහස්ථ" },
    desc: {
      en:"Experience the flavors of Batticaloa through traditional cooking equipment, diverse food heritage of all four communities, and recreated traditional kitchens.",
      ta:"பாரம்பரிய சமையல் உபகரணங்கள், நான்கு சமூகங்களின் பன்முக உணவு பாரம்பரியம் மற்றும் மீண்டும் உருவாக்கப்பட்ட பாரம்பரிய சமையலறைகள் வழியாக பட்டிக்கலோவின் சுவைகளை அனுபவியுங்கள்.",
      si:"සම්ප්‍රදායික පිසීමේ උපකරණ, සියලුම ප්‍රජාවන්ගේ විවිධ ආහාර උරුමය සහ නැවත නිර්මාණය කළ සම්ප්‍රදායික මුළුතැන්ගෙය හරහා බට්තිකාලෝවේ රස අත්දැකීම."
    },
    items: [
      { en:"Clay pots, grinding stones, wooden tools", ta:"மண் பாத்திரங்கள், அரைக்கும் கற்கள், மர கருவிகள்", si:"මැටි බඳුන්, ගර්මික ගල්, ලී මෙවලම්" },
      { en:"Traditional ovens & coconut scrapers", ta:"பாரம்பரிய அடுப்புகள் & தேங்காய் கிழிப்பான்கள்", si:"සම්ප්‍රදායික උදුන් සහ පොල් පොරෝක්කු" },
      { en:"Tamil Food: Pittu, String hoppers, Palmyrah products", ta:"தமிழ் உணவு: பிட்டு, இடியப்பம், பனை பொருட்கள்", si:"දෙමළ ආහාර: පිට්ටු, ඉදිආප්ප, තල් නිෂ්පාදන" },
      { en:"Muslim Food: Biriyani traditions, sweets", ta:"முஸ்லிம் உணவு: பிரியாணி பாரம்பரியம், இனிப்புகள்", si:"මුස්ලිම් ආහාර: බිරියානි සම්ප්‍රදායන්, රසකැවිලි" },
      { en:"Burgher Food: Colonial influenced dishes", ta:"பர்கர் உணவு: குடியேற்ற செல்வாக்குள்ள உணவுகள்", si:"බර්ගර් ආහාර: ජනපද බලපෑම් සහිත ආහාර" },
      { en:"Sinhala Food: Traditional rice and curry", ta:"சிங்கள உணவு: பாரம்பரிய அரிசி மற்றும் கறி", si:"සිංහල ආහාර: සම්ප්‍රදායික බත් සහ කරි" },
      { en:"Live cooking demonstrations & traditional kitchen recreation", ta:"நேரடி சமையல் நிகழ்ச்சிகள் & பாரம்பரிய சமையலறை மறுஉருவாக்கம்", si:"සජීවී පිසීමේ ප්‍රදර්ශන සහ සම්ප්‍රදායික මුළුතැන්ගෙය නැවත නිර්මාණය" }
    ]
  },
  {
    id: 6, slug: "education-knowledge", cat: "modern",
    img: "https://picsum.photos/seed/old-school-batticaloa/900/650",
    title: { en:"Education & Knowledge", ta:"கல்வி & அறிவு", si:"අධ්‍යාපනය සහ දැනුම" },
    desc: {
      en:"Trace the evolution of education in Batticaloa from palm leaf books to modern schools, featuring old textbooks, printing history, and audio stories from elders.",
      ta:"ஓலைச்சுவடி புத்தகங்கள் முதல் நவீன பள்ளிகள் வரை பட்டிக்கலோவில் கல்வியின் பரிணாமத்தை கண்டறியுங்கள்.",
      si:"පොල් අතු පොත් සිට නවීන පාසල් දක්වා බට්තිකාලෝවේ අධ්‍යාපනයේ පරිණාමය සොයා ගන්න."
    },
    items: [
      { en:"Evolution of education in Batticaloa", ta:"பட்டிக்கலோவில் கல்வியின் பரிணாமம்", si:"බට්තිකාලෝවේ අධ්‍යාපනයේ පරිණාමය" },
      { en:"Historical schools & old textbooks", ta:"வரலாற்று பள்ளிகள் & பழைய பாடப்புத்தகங்கள்", si:"ඓතිහාසික පාසල් සහ පැරණි පාඨමාලා" },
      { en:"Palm leaf books & printing history", ta:"ஓலைச்சுவடி புத்தகங்கள் & அச்சு வரலாறு", si:"පොල් අතු පොත් සහ මුද්‍රණ ඉතිහාසය" },
      { en:"Digital library, online archive, e-books, audio stories from elders", ta:"டிஜிட்டல் நூலகம், ஆன்லைன் ஆவணகாப்பகம், மின் புத்தகங்கள், மூதாதையரின் ஆடியோ கதைகள்", si:"ඩිජිටල් පුස්තකාලය, මාර්ගගත ලේඛනාගාරය, ඊ-පොත්, වැඩිහිටියන්ගේ ශ්‍රව්‍ය කතා" }
    ]
  },
  {
    id: 7, slug: "transport-heritage", cat: "heritage",
    img: "https://picsum.photos/seed/bullock-cart-srilanka/900/650",
    title: { en:"Transport & Vehicle Heritage", ta:"போக்குவரத்து & வாகன பாரம்பரியம்", si:"ප්‍රවාහන සහ වාහන උරුමය" },
    desc: {
      en:"Journey through the evolution of transport in Batticaloa — from bullock carts and wooden boats to the railway development that connected the East.",
      ta:"பட்டிக்கலோவில் போக்குவரத்தின் பரிணாமத்தின் வழியாக பயணியுங்கள் — எருது வண்டிகள் மற்றும் மர படவுகள் முதல் கிழக்கை இணைத்த ரயில் வளர்ச்சி வரை.",
      si:"බට්තිකාලෝවේ ප්‍රවාහනයේ පරිණාමය හරහා ගමන් කරන්න — ගව කරත්ත සහ ලී බෝට්ටු සිට නැගෙනහිරය සම්බන්ධ කළ දුම්රිය සංවර්ධනය දක්වා."
    },
    items: [
      { en:"Bullock carts & wooden carts", ta:"எருது வண்டிகள் & மர வண்டிகள்", si:"ගව කරත්ත සහ ලී කරත්ත" },
      { en:"Traditional boats & bicycles", ta:"பாரம்பரிய படவுகள் & மிதிவண்டிகள்", si:"සම්ප්‍රදායික බෝට්ටු සහ බයිසිකල්" },
      { en:"Old motorcycles, cars, buses", ta:"பழைய மோட்டார் சைக்கிள்கள், கார்கள், பேருந்துகள்", si:"පැරණි මෝටර්සයිකල්, කාර්, බස්" },
      { en:"Railway history & Batticaloa railway development", ta:"ரயில் வரலாறு & பட்டிக்கலோவ ரயில் வளர்ச்சி", si:"දුම්රිය ඉතිහාසය සහ බට්තිකාලෝ දුම්රිය සංවර්ධනය" },
      { en:"3D vehicle models & virtual driving experience", ta:"3D வாகன மாதிரிகள் & மெய்நிகர் ஓட்டுநர் அனுபவம்", si:"3D වාහන ආදර්ශ සහ අත්‍යාවශ්‍ය ධාවන අත්දැකීම" }
    ]
  },
  {
    id: 8, slug: "currency-economic-heritage", cat: "heritage",
    img: "https://picsum.photos/seed/ancient-coins-collection/900/650",
    title: { en:"Currency & Economic Heritage", ta:"நாணயம் & பொருளாதார பாரம்பரியம்", si:"මුදල් සහ ආර්ථික උරුමය" },
    desc: {
      en:"Explore centuries of economic history through ancient coins, colonial currency, Sri Lankan currency evolution, and the trade networks that made Batticaloa a commercial hub.",
      ta:"பண்டைய நாணயங்கள், குடியேற்ற நாணயங்கள், இலங்கை நாணய பரிணாமம் மற்றும் பட்டிக்கலோவை வர்த்தக மையமாக ஆக்கிய வர்த்தக நெட்வொர்க்குகள் வழியாக நூற்றாண்டுகளின் பொருளாதார வரலாற்றை ஆராயுங்கள்.",
      si:"පුරාණ මුදල්, ජනපද මුදල්, ශ්‍රී ලංකා මුදල් පරිණාමය සහ බට්තිකාලෝව වාණිජ මධ්‍යස්ථානයක් බවට පත් කළ වෙළඳ ජාල හරහා ශතවර්ෂ ගණනක ආර්ථික ඉතිහාසය ගවේෂණය කරන්න."
    },
    items: [
      { en:"Ancient coins collection", ta:"பண்டைய நாணய சேகரிப்பு", si:"පුරාණ මුදල් එකතුව" },
      { en:"Colonial coins & foreign currencies", ta:"குடியேற்ற நாணயங்கள் & வெளிநாட்டு நாணயங்கள்", si:"ජනපද මුදල් සහ විදේශීය මුදල්" },
      { en:"Sri Lankan currency evolution", ta:"இலங்கை நாணய பரிணாமம்", si:"ශ්‍රී ලංකා මුදල් පරිණාමය" },
      { en:"Trade history & traditional markets", ta:"வர்த்தக வரலாறு & பாரம்பரிய சந்தைகள்", si:"වෙළඳ ඉතිහාසය සහ සම්ප්‍රදායික වෙළඳපොළවල්" },
      { en:"Old business documents", ta:"பழைய வணிக ஆவணங்கள்", si:"පැරණි ව්‍යාපාර ලේඛන" },
      { en:"Digital magnification system & interactive currency timeline", ta:"டிஜிட்டல் பெரிதாக்கும் அமைப்பு & ஊடாடும் நாணய காலக்கோடு", si:"ඩිජිටල් විශාලන පද්ධතිය සහ අන්තර්ක්‍රියාකාරක මුදල් කාලරේඛාව" }
    ]
  },
  {
    id: 9, slug: "postal-communication-heritage", cat: "modern",
    img: "https://picsum.photos/seed/vintage-stamps-postal/900/650",
    title: { en:"Postal & Communication Heritage", ta:"அஞ்சல் & தகவல் தொடர்பு பாரம்பரியம்", si:"තැපැල් සහ සන්නිවේදන උරුමය" },
    desc: {
      en:"From the first postal markings to telegraph systems and telephone evolution — discover how communication shaped Batticaloa's connection to the world.",
      ta:"முதல் அஞ்சல் குறியீடுகள் முதல் தந்திரிக்கை அமைப்புகள் மற்றும் தொலைபேசி பரிணாமம் வரை — தகவல் தொடர்பு பட்டிக்கலோவின் உலகளாவிய இணைப்பை எவ்வாறு வடிவமைத்தது என்பதைக் கண்டறியுங்கள்.",
      si:"පළමු තැපැල් සලකුණු සිට ටෙලිග්‍රාෆ් පද්ධති සහ දුරකථන පරිණාමය දක්වා — සන්නිවේදනය බට්තිකාලෝවේ ලෝක සම්බන්ධතාව කෙසේ සෑදුවේද සොයා ගන්න."
    },
    items: [
      { en:"Historical stamps & first-day covers", ta:"வரலாற்று முத்திரைகள் & முதல் நாள் அட்டைகள்", si:"ඓතිහාසික මුද්දර සහ පළමු දින කවර" },
      { en:"Old postal equipment", ta:"பழைய அஞ்சல் உபகரணங்கள்", si:"පැරණි තැපැල් උපකරණ" },
      { en:"Telegraph history & telephone evolution", ta:"தந்திரிக்கை வரலாறு & தொலைபேசி பரிணாமம்", si:"ටෙලිග්‍රාෆ් ඉතිහාසය සහ දුරකථන පරිණාමය" },
      { en:"Communication methods through the ages", ta:"காலங்களில் தகவல் தொடர்பு முறைகள்", si:"යුග අනුව සන්නිවේදන ක්‍රම" }
    ]
  },
  {
    id: 10, slug: "general-heritage-collection", cat: "modern",
    img: "https://picsum.photos/seed/heritage-collection-museum/900/650",
    title: { en:"General Heritage Collection", ta:"பொது பாரம்பரிய சேகரிப்பு", si:"සාමාන්‍ය උරුම එකතුව" },
    desc: {
      en:"A diverse collection of personal items, traditional clothes, jewellery, musical instruments, toys, furniture, photographs, maps, old newspapers, and government documents that paint a vivid picture of daily life in Batticaloa.",
      ta:"தனிப்பட்ட பொருட்கள், பாரம்பரிய உடைகள், நகைகள், இசைக் கருவிகள், பொம்மைகள், படுக்கை பொருட்கள், புகைப்படங்கள், வரைபடங்கள், பழைய செய்தித்தாள்கள் மற்றும் அரசு ஆவணங்களின் பன்முக சேகரிப்பு.",
      si:"පෞද්ගලික භාණ්ඩ, සම්ප්‍රදායික ඇඳුම්, ආභරණ, සංගීත භාණ්ඩ, බෝම්බු, ගෘහාභරණ, ඡායාරූප, සිතියම්, පැරණි පුවත්පත් සහ රාජ්‍ය ලේඛන ඇතුළත් විවිධ එකතුවක්."
    },
    items: [
      { en:"Traditional clothes & jewellery", ta:"பாரம்பரிய உடைகள் & நகைகள்", si:"සම්ප්‍රදායික ඇඳුම් සහ ආභරණ" },
      { en:"Musical instruments & toys", ta:"இசைக் கருவிகள் & பொம்மைகள்", si:"සංගීත භාණ්ඩ සහ බෝම්බු" },
      { en:"Furniture & household items", ta:"படுக்கை பொருட்கள் & வீட்டு பொருட்கள்", si:"ගෘහාභරණ සහ ගෘහස්ථ භාණ්ඩ" },
      { en:"Photographs, maps, old newspapers", ta:"புகைப்படங்கள், வரைபடங்கள், பழைய செய்தித்தாள்கள்", si:"ඡායාරූප, සිතියම්, පැරණි පුවත්පත්" },
      { en:"Government documents & religious items", ta:"அரசு ஆவணங்கள் & மத பொருட்கள்", si:"රාජ්‍ය ලේඛන සහ ආගමික භාණ්ඩ" },
      { en:"Sculptures & paintings", ta:"சிலைகள் & ஓவியங்கள்", si:"මූර්ති සහ චිත්‍ර" },
      { en:"Music documents & video history", ta:"இசை ஆவணங்கள் & வீடியோ வரலாறு", si:"සංගීත ලේඛන සහ වීඩියෝ ඉතිහාසය" }
    ]
  }
];

if (typeof window !== "undefined") window.GALLERIES = GALLERIES;

/* =====================================================
   Upcoming Events — reflects the four communities' calendars
   ===================================================== */
const EVENTS = [
  { id:0, date:{en:"14 Jan",ta:"ஜன. 14",si:"ජන. 14"}, img:"https://picsum.photos/seed/event-thai-pongal/700/500",
    title:{en:"Thai Pongal Harvest Morning",ta:"தைப்பொங்கல் அறுவடை காலை",si:"තෛ පොංගල් අස්වනු උදෑසන"},
    desc:{en:"Live pongal cooking demonstration and paddy-heritage gallery tour.",ta:"நேரடி பொங்கல் சமையல் நிகழ்ச்சி மற்றும் நெல் பாரம்பரிய காட்சியக சுற்றுப்பயணம்.",si:"සජීවී පොංගල් පිසීමේ ප්‍රදර්ශනය සහ වී උරුම ගැලරි සංචාරය."} },
  { id:1, date:{en:"02 Mar",ta:"மார். 02",si:"මාර්. 02"}, img:"https://picsum.photos/seed/event-ramadan-heritage/700/500",
    title:{en:"Ramadan Heritage Nights",ta:"ரமலான் பாரம்பரிய இரவுகள்",si:"රාමසාන් උරුම රාත්‍රී"},
    desc:{en:"Evening iftar stories, Arwi manuscript readings, and mosque architecture walk.",ta:"மாலை இப்தார் கதைகள், அர்வி கையெழுத்துப் பிரதி வாசிப்புகள் மற்றும் பள்ளிவாசல் கட்டிடக்கலை நடை.",si:"සන්ධ්‍යා ඉෆ්තාර් කථා, අර්වි හස්තලේඛන කියවීම් සහ මස්ජිඩ් ගෘහනිර්මාණ ඇවිදීම."} },
  { id:2, date:{en:"18 Apr",ta:"ஏப். 18",si:"අප්‍රේ. 18"}, img:"https://picsum.photos/seed/event-easter-burgher/700/500",
    title:{en:"Burgher Easter Table",ta:"பர்கர் ஈஸ்டர் மேசை",si:"බර්ගර් ඊස්ටර් මේසය"},
    desc:{en:"Colonial-era recipes, hymn recordings, and a guided look at 19th-century photographs.",ta:"குடியேற்ற கால சமையல் குறிப்புகள், பாடல் பதிவுகள் மற்றும் 19ஆம் நூற்றாண்டு புகைப்படங்களின் வழிகாட்டப்பட்ட பார்வை.",si:"ජනපද යුගයේ වට්ටෝරු, ගීතිකා පටිගත කිරීම් සහ 19 වන සියවසේ ඡායාරූප දෙස මාර්ගෝපදේශිත බැල්මක්."} },
  { id:3, date:{en:"22 May",ta:"மே 22",si:"මැයි 22"}, img:"https://picsum.photos/seed/event-vesak-lanterns/700/500",
    title:{en:"Vesak Lantern Evening",ta:"வெசாக் விளக்கு மாலை",si:"වෙසක් කූඩු සන්ධ්‍යාව"},
    desc:{en:"Lantern-making workshop and a candlelit walk through the Sinhala & Buddhist Heritage gallery.",ta:"விளக்கு தயாரிக்கும் பயிலரங்கு மற்றும் சிங்கள & பௌத்த பாரம்பரிய காட்சியகத்தின் மெழுகுவர்த்தி நடை.",si:"කූඩු සෑදීමේ වැඩමුළුව සහ සිංහල සහ බෞද්ධ උරුම ගැලරිය හරහා ඉටිපන්දම් ඇවිදීම."} }
];

/* =====================================================
   Curatorial & community-liaison team
   ===================================================== */
const TEAM = [
  { initials:"RS", role:{en:"Museum Director",ta:"அருங்காட்சியக இயக்குநர்",si:"කෞතුකාගාර අධ්‍යක්ෂ"}, name:"Ranjini S." },
  { initials:"MF", role:{en:"Chief Curator",ta:"தலைமை பாதுகாவலர்",si:"ප්‍රධාන භාරකරු"}, name:"Mohamed F." },
  { initials:"TL", role:{en:"Tamil Heritage Liaison",ta:"தமிழ் பாரம்பரிய தொடர்பாளர்",si:"දෙමළ උරුම සම්බන්ධීකාරක"}, name:"Thavam L." },
  { initials:"AH", role:{en:"Muslim Heritage Liaison",ta:"முஸ்லிம் பாரம்பரிய தொடர்பாளர்",si:"මුස්ලිම් උරුම සම්බන්ධීකාරක"}, name:"Ayesha H." },
  { initials:"CB", role:{en:"Burgher Heritage Liaison",ta:"பர்கர் பாரம்பரிய தொடர்பாளர்",si:"බර්ගර් උරුම සම්බන්ධීකාරක"}, name:"Claire B." },
  { initials:"SP", role:{en:"Sinhala Heritage Liaison",ta:"சிங்கள பாரம்பரிய தொடர்பாளர்",si:"සිංහල උරුම සම්බන්ධීකාරක"}, name:"Sunil P." }
];

/* =====================================================
   Visitor voices (illustrative, non-attributed to real people)
   ===================================================== */
const TESTIMONIALS = [
  { name:"Nadia", place:{en:"Colombo",ta:"கொழும்பு",si:"කොළඹ"},
    quote:{en:"I grew up hearing about the singing fish but never understood the lagoon culture behind it until this visit.",ta:"பாடும் மீன்களைப் பற்றி கேட்டு வளர்ந்தேன், ஆனால் இந்த வருகைக்கு முன் அதன் பின்னணியில் உள்ள கடல் கலாச்சாரத்தை புரிந்து கொள்ளவில்லை.",si:"ගී ගයන මසුන් ගැන අසමින් හැදුණත් මේ සංචාරයට පෙර එහි ඇති කලපු සංස්කෘතිය තේරුම් ගත්තේ නැහැ."} },
  { name:"Farhan", place:{en:"Kattankudy",ta:"கட்டான்குடி",si:"කත්තන්කුඩි"},
    quote:{en:"The Arwi manuscript room alone is worth the trip — I had no idea this script existed.",ta:"அர்வி கையெழுத்துப் பிரதி அறை மட்டும் இந்த பயணத்திற்கு தகுதியானது — இந்த எழுத்து இருந்தது எனக்குத் தெரியாது.",si:"අර්වි හස්තලේඛන කාමරය පමණක් මෙම ගමනට වටිනවා — මේ අකුරු පවතින බව මට හිතුනේවත් නැහැ."} },
  { name:"Ishara", place:{en:"Batticaloa",ta:"பட்டிக்கலோவ",si:"බට්තිකාලෝව"},
    quote:{en:"Seeing my grandmother's kind of clay pot behind glass, labelled and dated, was strangely moving.",ta:"கண்ணாடிக்குப் பின்னால், லேபிள் செய்யப்பட்டு, தேதியிடப்பட்ட எனது பாட்டியின் மண் பாத்திரத்தைப் பார்த்தது வித்தியாசமாக உணர்வுபூர்வமாக இருந்தது.",si:"වීදුරු පිටුපස ලේබල් කර දිනය සටහන් කර තිබූ මගේ ආච්චිගේ වගේ මැටි බඳුනක් දැකීම අමුතු ලෙස හදවතට කාවැදුණා."} }
];

/* =====================================================
   Photo & video gallery
   ===================================================== */
const MEDIA_PHOTOS = [
  { seed:"gallery-photo-temple", cat:"culture" }, { seed:"gallery-photo-mosque", cat:"culture" },
  { seed:"gallery-photo-church", cat:"culture" }, { seed:"gallery-photo-boats", cat:"heritage" },
  { seed:"gallery-photo-coins", cat:"heritage" }, { seed:"gallery-photo-textile", cat:"heritage" },
  { seed:"gallery-photo-kitchen", cat:"heritage" }, { seed:"gallery-photo-manuscripts", cat:"culture" },
  { seed:"gallery-photo-lagoon-sunset", cat:"heritage" }, { seed:"gallery-photo-festival", cat:"culture" },
  { seed:"gallery-photo-railway", cat:"modern" }, { seed:"gallery-photo-stamps", cat:"modern" }
].map((p,i) => ({ id:i, cat:p.cat, src:`https://picsum.photos/seed/${p.seed}/700/${520 + (i % 3) * 40}` }));

const MEDIA_VIDEOS = [
  { id:0, seed:"video-lagoon-fishing", duration:"3:12",
    title:{en:"Lagoon Fishing at Dawn",ta:"விடியலில் கடல் மீன்பிடி",si:"අලුයම කලපු මසුන් ඇල්ලීම"} },
  { id:1, seed:"video-koothu-drama", duration:"4:45",
    title:{en:"Koothu — Traditional Drama Excerpt",ta:"கூத்து — பாரம்பரிய நாடக பகுதி",si:"කූතු — සම්ප්‍රදායික නාට්‍ය කොටසක්"} },
  { id:2, seed:"video-elders-oral-history", duration:"6:08",
    title:{en:"Elders' Oral History Recordings",ta:"மூத்தோரின் வாய்மொழி வரலாறு பதிவுகள்",si:"වැඩිහිටියන්ගේ වාචික ඉතිහාස පටිගත කිරීම්"} },
  { id:3, seed:"video-3d-gallery-walkthrough", duration:"2:30",
    title:{en:"3D Gallery Walkthrough Preview",ta:"3D காட்சியக வழிநடத்தல் முன்னோட்டம்",si:"3D ගැලරි ඇවිදින පෙරදසුන"} }
];

if (typeof window !== "undefined") {
  window.EVENTS = EVENTS;
  window.TEAM = TEAM;
  window.TESTIMONIALS = TESTIMONIALS;
  window.MEDIA_PHOTOS = MEDIA_PHOTOS;
  window.MEDIA_VIDEOS = MEDIA_VIDEOS;
}

/* =====================================================
   Museum Assistant — a small rule-based FAQ helper.
   NOTE: this is a scripted keyword matcher, not a live AI
   model. It ships fully client-side with no external calls.
   ===================================================== */
const CHATBOT_QA = [
  { keys:["hour","time","open","close"], a:{ en:"We're open Tuesday–Sunday, 9:00 AM–5:00 PM. Closed Mondays and public holidays.",
    ta:"நாங்கள் செவ்வாய்–ஞாயிறு, காலை 9:00–மாலை 5:00 வரை திறந்திருக்கிறோம். திங்கட்கிழமைகள் மற்றும் பொது விடுமுறை நாட்களில் மூடப்பட்டிருக்கும்.",
    si:"අපි අඟහරුවාදා–ඉරිදා, පෙ.ව. 9:00–ප.ව. 5:00 විවෘතව සිටිමු. සඳුදා සහ පොහොය දිනවල වසා ඇත." } },
  { keys:["ticket","price","cost","fee","admission"], a:{ en:"Admission is free for local visitors and students with ID, $5 for foreign visitors, and $3/person for group tours of 10+.",
    ta:"உள்ளூர் பார்வையாளர்கள் மற்றும் அடையாள அட்டையுடன் கூடிய மாணவர்களுக்கு நுழைவு இலவசம், வெளிநாட்டு பார்வையாளர்களுக்கு $5, 10+ குழு சுற்றுப்பயணங்களுக்கு நபருக்கு $3.",
    si:"දේශීය ආගන්තුකයින් සහ හැඳුනුම්පත් සහිත සිසුන්ට ඇතුළත් වීම නොමිලේ, විදේශීය ආගන්තුකයින්ට $5, 10+ සමූහ සංචාරවලට පුද්ගලයෙකුට $3." } },
  { keys:["where","location","address","direction","map"], a:{ en:"We're on Bar Road, Batticaloa — walking distance from the Fort and Kallady Bridge. See the map on our Visit page.",
    ta:"நாங்கள் பட்டிக்கலோவ பார் வீதியில் உள்ளோம் — கோட்டை மற்றும் கல்லடி பாலத்திலிருந்து நடைதூரம். எங்கள் வருகை பக்கத்தில் வரைபடத்தைப் பார்க்கவும்.",
    si:"අපි බට්තිකාලෝ බාර් මාර්ගයේ සිටිමු — කොටුව සහ කල්ලඩි පාලමට ඇවිදින දුරින්. අපගේ පැමිණීම පිටුවේ සිතියම බලන්න." } },
  { keys:["gallery","galleries","exhibit","collection"], a:{ en:"We have 11 permanent galleries covering Tamil, Muslim, Burgher & Sinhala heritage, livelihoods, food, education, transport, currency and postal history. See the Galleries page for all of them.",
    ta:"தமிழ், முஸ்லிம், பர்கர் & சிங்கள பாரம்பரியம், வாழ்வாதாரம், உணவு, கல்வி, போக்குவரத்து, நாணயம் மற்றும் அஞ்சல் வரலாறு ஆகியவற்றை உள்ளடக்கிய 11 நிரந்தர காட்சியகங்கள் எங்களிடம் உள்ளன.",
    si:"දෙමළ, මුස්ලිම්, බර්ගර් සහ සිංහල උරුමය, ජීවනෝපාය, ආහාර, අධ්‍යාපනය, ප්‍රවාහන, මුදල් සහ තැපැල් ඉතිහාසය ආවරණය කරන ස්ථිර ගැලරි 11ක් අප සතුව ඇත." } },
  { keys:["contact", "phone", "email", "call"], a:{ en:"You can reach us at +94 65 222 3456 or info@batticaloamuseum.lk — or use the form on our Contact page.",
    ta:"+94 65 222 3456 அல்லது info@batticaloamuseum.lk மூலம் எங்களை தொடர்பு கொள்ளலாம் — அல்லது எங்கள் தொடர்பு பக்கத்தில் உள்ள படிவத்தைப் பயன்படுத்தவும்.",
    si:"+94 65 222 3456 හෝ info@batticaloamuseum.lk හරහා අප අමතන්න — නැතහොත් අපගේ සම්බන්ධතා පිටුවේ ෆෝරමය භාවිතා කරන්න." } },
  { keys:["language", "tamil", "sinhala", "translate"], a:{ en:"Everything on this site is available in English, Tamil, and Sinhala — use the language switch in the top menu.",
    ta:"இந்த தளத்தில் உள்ள அனைத்தும் ஆங்கிலம், தமிழ் மற்றும் சிங்களத்தில் கிடைக்கும் — மேல் மெனுவில் உள்ள மொழி மாற்றத்தைப் பயன்படுத்தவும்.",
    si:"මෙම වෙබ් අඩවියේ සියල්ල ඉංග්‍රීසි, දෙමළ සහ සිංහල භාෂාවෙන් ලබා ගත හැක — ඉහළ මෙනුවේ භාෂා මාරුව භාවිතා කරන්න." } },
  { keys:["parking", "wheelchair", "accessible", "child", "kids"], a:{ en:"Free parking and wheelchair access are available, and there's a dedicated Children's Learning Zone.",
    ta:"இலவச பார்க்கிங் மற்றும் சக்கர நாற்காலி அணுகல் கிடைக்கும், மேலும் ஒரு குழந்தைகள் கற்றல் மண்டபம் உள்ளது.",
    si:"නොමිලේ පාර්කින්ග් සහ රෝද පුටු ප්‍රවේශය ලබා ගත හැකි අතර, කැපවූ ළමා ඉගෙනුම් කලාපයක්ද ඇත." } }
];
const CHATBOT_FALLBACK = {
  en:"I'm not able to answer that one yet — try asking about hours, tickets, location, galleries, or contact details, or use the Contact page to reach our team directly.",
  ta:"அதற்கு இன்னும் பதிலளிக்க முடியவில்லை — நேரம், சீட்டு, இடம், காட்சியகங்கள் அல்லது தொடர்பு விவரங்கள் பற்றி கேளுங்கள், அல்லது எங்கள் குழுவை நேரடியாக அடைய தொடர்பு பக்கத்தைப் பயன்படுத்தவும்.",
  si:"මට තවම ඊට පිළිතුරු දිය නොහැක — වේලාව, ප්‍රවේශ පත්‍ර, ස්ථානය, ගැලරි හෝ සම්බන්ධතා විස්තර ගැන අසන්න, නැතහොත් අපගේ කණ්ඩායමට සෘජුවම ළඟාවීමට සම්බන්ධතා පිටුව භාවිතා කරන්න."
};
if (typeof window !== "undefined") { window.CHATBOT_QA = CHATBOT_QA; window.CHATBOT_FALLBACK = CHATBOT_FALLBACK; }
