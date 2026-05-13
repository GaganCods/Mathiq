import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, CheckCircle2, Dumbbell, 
  Flame, HeartPulse, Leaf, Moon, Settings2, Target, 
  UtensilsCrossed, Settings, RefreshCcw
} from "lucide-react";

// --- DATASETS ---
const healthAnalysis = {
  underweight: {
    summary: "Your BMI indicates you are underweight. This may lead to weakened immunity, fragile bones, and feeling tired. Gradual weight gain through nutrient-dense foods and resistance training is recommended.",
    calorieOffset: +500,
    idealWeightRangeStr: (h: number) => `${(18.5 * h * h).toFixed(1)}kg - ${(24.9 * h * h).toFixed(1)}kg`,
    risks: ["Nutritional deficiencies", "Osteoporosis", "Decreased immune function"],
  },
  normal: {
    summary: "Great job! Your BMI is in the healthy range. Maintaining your current lifestyle with a balanced diet and regular exercise will help you sustain your health and energy levels long-term.",
    calorieOffset: 0,
    idealWeightRangeStr: (h: number) => `${(18.5 * h * h).toFixed(1)}kg - ${(24.9 * h * h).toFixed(1)}kg`,
    risks: ["None (Low risk of weight-related issues)"],
  },
  overweight: {
    summary: "Your BMI suggests excess body weight, which may increase the risk of fatigue, high blood pressure, and metabolic issues. Improving your daily activity and nutrition habits can significantly improve overall health.",
    calorieOffset: -500,
    idealWeightRangeStr: (h: number) => `${(18.5 * h * h).toFixed(1)}kg - ${(24.9 * h * h).toFixed(1)}kg`,
    risks: ["High blood pressure", "Type 2 diabetes", "Heart disease"],
  },
  obese: {
    summary: "Your BMI falls into the obese category. Exploring a structured weight loss plan with medical or nutritional guidance is highly recommended to improve cardiovascular and metabolic health.",
    calorieOffset: -750,
    idealWeightRangeStr: (h: number) => `${(18.5 * h * h).toFixed(1)}kg - ${(24.9 * h * h).toFixed(1)}kg`,
    risks: ["Severe cardiovascular issues", "Sleep apnea", "Joint problems", "Type 2 diabetes"],
  }
};

const dietPlans: Record<string, any> = {
  "Balanced": {
    breakfast: "Oatmeal with berries and a scoop of protein powder, or 2 scrambled eggs with whole wheat toast.",
    lunch: "Grilled chicken breast or tofu, quinoa, and a large mixed greens salad.",
    dinner: "Baked salmon or tempeh, roasted sweet potato, and steamed broccoli.",
    snacks: "Greek yogurt with almonds, or an apple with peanut butter."
  },
  "Low Carb": {
    breakfast: "3-egg omelet with spinach, mushrooms, and cheese.",
    lunch: "Large Caesar salad with grilled chicken (no croutons).",
    dinner: "Steak or grilled paneer with roasted asparagus and cauliflower mash.",
    snacks: "Handful of walnuts, string cheese, or avocado slices."
  },
  "High Protein": {
    breakfast: "Protein smoothie (whey, banana, spinach, almond milk) + turkey sausage.",
    lunch: "Tuna salad sandwich on whole grain bread or lentil pasta with chicken.",
    dinner: "Lean beef stir-fry or double-portion tofu with mixed veggies.",
    snacks: "Cottage cheese, edamame, or a protein bar."
  },
  "Vegetarian": {
    breakfast: "Greek yogurt with chia seeds, honey, and mixed fruit.",
    lunch: "Chickpea and quinoa salad with tahini dressing.",
    dinner: "Lentil curry with brown rice and roasted vegetables.",
    snacks: "Hummus with carrot sticks, or roasted chickpeas."
  },
  "Vegan": {
    breakfast: "Tofu scramble with bell peppers and nutritional yeast over sourdough.",
    lunch: "Black bean and corn bowl with avocado and quinoa.",
    dinner: "Chickpea pasta with marinara and vegan meatballs.",
    snacks: "Mixed nuts, edamame, or a vegan protein shake."
  },
  "Indian Diet": {
    breakfast: "Poha with peanuts or moong dal chilla with mint chutney.",
    lunch: "2 Roti, dal tadka, mixed veg sabzi, and a side of cucumber salad.",
    dinner: "Paneer bhurji or grilled chicken tikka with 1 roti and salad.",
    snacks: "Roasted makhana, buttermilk (chaas), or sprouts salad."
  }
};

const workouts: Record<string, any> = {
  "Lose Weight": {
    "Gym": ["30 min Treadmill intervals", "Weight training (circuit style)", "15 min Stairmaster", "Core workout (3 sets)"],
    "Home (No Equipment)": ["30 min HIIT bodyweight circuit", "Jump rope", "Brisk walking or jogging", "Burpees & Mountain climbers"],
    "Home (Basic Equipment)": ["Dumbbell thrusters", "Kettlebell swings", "Resistance band rows", "Jump rope intervals"]
  },
  "Build Muscle": {
    "Gym": ["Barbell Squats (4x8)", "Bench Press (4x8)", "Deadlifts (4x6)", "Pull-ups and Rows"],
    "Home (No Equipment)": ["Pike pushups", "Elevated pushups", "Bulgarian split squats", "Pull-ups (if bar available)"],
    "Home (Basic Equipment)": ["Dumbbell bench press", "Goblet squats", "Dumbbell deadlifts", "Overhead press"]
  },
  "Maintain": {
    "Gym": ["Full body workout 3x a week", "20 min moderate cardio", "Mobility work", "Core strengthening"],
    "Home (No Equipment)": ["Yoga / Pilates", "Bodyweight squats and pushups", "Jogging 3x a week", "Stretching"],
    "Home (Basic Equipment)": ["Light dumbbell circuits", "Resistance band exercises", "Brisk walking", "Planks"]
  }
};

const motivationalQuotes = [
  "Consistency beats intensity.",
  "Small daily improvements create long-term results.",
  "Healthy habits matter more than quick fixes.",
  "Your body hears everything your mind says. Stay positive.",
  "Strive for progress, not perfection."
];

// --- MAIN COMPONENT ---
const BMICalculator = () => {
  // --- FORM STATE ---
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0 = Basic, 1 = Simple Result, 2 = Advanced Report
  const [activeTab, setActiveTab] = useState("overview");

  // Basic Inputs
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("70");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");

  // Advanced Inputs
  const [activityLevel, setActivityLevel] = useState("1.55"); // multiplier
  const [goal, setGoal] = useState("Maintain");
  const [dietPref, setDietPref] = useState("Balanced");
  const [workoutAccess, setWorkoutAccess] = useState("Home (No Equipment)");
  const [sleep, setSleep] = useState("7");
  const [water, setWater] = useState("2.5");

  // --- DERIVED STATE ---
  const [result, setResult] = useState<any>(null);
  const [quote, setQuote] = useState("");

  const calculateBasic = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const a = parseInt(age);

    if (h > 0 && w > 0 && a > 0) {
      const bmi = w / (h * h);
      let category = "";
      let color = "";
      let catKey = "";

      if (bmi < 18.5) {
        category = "Underweight";
        color = "text-blue-400";
        catKey = "underweight";
      } else if (bmi < 24.9) {
        category = "Normal Weight";
        color = "text-green-400";
        catKey = "normal";
      } else if (bmi < 29.9) {
        category = "Overweight";
        color = "text-orange-400";
        catKey = "overweight";
      } else {
        category = "Obese";
        color = "text-red-500";
        catKey = "obese";
      }

      // Basic BMR calculation (Mifflin-St Jeor)
      const bmr = gender === "male"
        ? 10 * w + 6.25 * (h * 100) - 5 * a + 5
        : 10 * w + 6.25 * (h * 100) - 5 * a - 161;

      setResult({
        bmi, category, color, catKey, bmr, h, w
      });
      setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
      setPhase(1);
    }
  };

  const calculateAdvanced = () => {
    setPhase(2);
  };

  // --- RENDER HELPERS ---
  const getTDEE = () => {
    if (!result) return 0;
    return Math.round(result.bmr * parseFloat(activityLevel));
  };

  const getTargetCalories = () => {
    if (!result) return 0;
    const tdee = getTDEE();
    const offset = goal === "Lose Weight" ? -500 : goal === "Build Muscle" ? 300 : 0;
    return tdee + offset;
  };

  const tdee = getTDEE();
  const targetCals = getTargetCalories();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* PHASE 0: Basic Calculator */}
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div
            key="basic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xl mx-auto bg-[#121212]/90 backdrop-blur-xl rounded-[28px] p-8 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl font-display font-semibold text-white mb-2">Smart BMI Calculator</h2>
              <p className="text-zinc-400 text-sm">Enter your basic details to get started.</p>
            </div>

            <div className="space-y-5 relative z-10">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Height (cm)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors font-mono text-lg" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Weight (kg)</label>
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors font-mono text-lg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Age</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors font-mono text-lg" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Gender</label>
                  <div className="grid grid-cols-2 gap-2 h-[52px]">
                    <button 
                      onClick={() => setGender("male")}
                      className={`rounded-xl text-sm font-medium transition-colors ${gender === "male" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-[#1a1a24] text-zinc-400 border border-[#2f2f3e] hover:bg-[#20202a]"}`}
                    >Male</button>
                    <button 
                      onClick={() => setGender("female")}
                      className={`rounded-xl text-sm font-medium transition-colors ${gender === "female" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-[#1a1a24] text-zinc-400 border border-[#2f2f3e] hover:bg-[#20202a]"}`}
                    >Female</button>
                  </div>
                </div>
              </div>
              <button onClick={calculateBasic} className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(249,115,22,0.2)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)]">
                Calculate BMI
              </button>
            </div>
          </motion.div>
        )}

        {/* PHASE 1 & 2: Results & Dashboard */}
        {(phase === 1 || phase === 2) && result && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full font-sans"
          >
            {/* TOP BAR ACTION */}
            <div className="flex justify-between items-center mb-6 px-2">
               <button onClick={() => setPhase(0)} className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                 <RefreshCcw className="w-4 h-4" /> Recalculate
               </button>
               {phase === 1 && (
                 <button onClick={calculateAdvanced} className="text-orange-400 hover:text-orange-300 flex items-center gap-2 text-sm font-medium transition-colors bg-orange-500/10 px-4 py-2 rounded-lg border border-orange-500/20">
                   <Settings2 className="w-4 h-4" /> Get Personalized Plan
                 </button>
               )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Main Score Card */}
              <div className="md:col-span-1 bg-[#121212]/90 backdrop-blur-xl rounded-[28px] p-8 border border-white/5 shadow-xl relative overflow-hidden group">
                 <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none transition-colors duration-1000 ${result.catKey === 'normal' ? 'bg-green-500/10' : result.catKey === 'underweight' ? 'bg-blue-500/10' : result.catKey === 'overweight' ? 'bg-orange-500/10' : 'bg-red-500/10'}`}></div>
                 
                 <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-6">Your BMI Score</p>
                 <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-7xl font-mono text-white font-light tracking-tighter">{result.bmi.toFixed(1)}</span>
                 </div>
                 <p className={`text-lg font-bold uppercase tracking-wide mb-6 ${result.color}`}>
                   {result.category}
                 </p>

                 <div className="bg-[#1a1a24] rounded-xl p-4 border border-[#2f2f3e]">
                    <p className="text-[11px] text-zinc-500 uppercase font-bold mb-1">Ideal Weight Range</p>
                    <p className="text-white font-mono text-lg">{healthAnalysis[result.catKey as keyof typeof healthAnalysis].idealWeightRangeStr(result.h)}</p>
                 </div>
              </div>

              {/* Quick Health Insight / Advanced Form */}
              <div className="md:col-span-2 bg-[#121212]/90 backdrop-blur-xl rounded-[28px] p-8 border border-white/5 shadow-xl flex flex-col justify-center">
                 {phase === 1 ? (
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <Activity className="w-5 h-5" />
                         </div>
                         <h3 className="text-xl font-bold text-white tracking-tight">Health Status Insight</h3>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-lg font-light">
                        {healthAnalysis[result.catKey as keyof typeof healthAnalysis].summary}
                      </p>
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-sm text-zinc-500 italic">"{quote}"</p>
                      </div>
                   </div>
                 ) : (
                   <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-orange-400" /> Customize Your Plan</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Activity Level</label>
                          <select value={activityLevel} onChange={e=>setActivityLevel(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 appearance-none">
                            <option value="1.2">Sedentary (Little/no exercise)</option>
                            <option value="1.375">Lightly Active (1-3 days/week)</option>
                            <option value="1.55">Moderately Active (3-5 days/week)</option>
                            <option value="1.725">Very Active (6-7 days/week)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Goal</label>
                          <select value={goal} onChange={e=>setGoal(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 appearance-none">
                            <option value="Lose Weight">Lose Weight</option>
                            <option value="Maintain">Maintain</option>
                            <option value="Build Muscle">Build Muscle</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Diet Type</label>
                          <select value={dietPref} onChange={e=>setDietPref(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 appearance-none">
                            {Object.keys(dietPlans).map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Workout Config</label>
                          <select value={workoutAccess} onChange={e=>setWorkoutAccess(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 appearance-none">
                            <option value="Gym">Gym Access</option>
                            <option value="Home (Basic Equipment)">Home (Dumbbells/Bands)</option>
                            <option value="Home (No Equipment)">Home (Bodyweight)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Sleep (Hours)</label>
                          <input type="number" value={sleep} onChange={e=>setSleep(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500" />
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">Water (Liters)</label>
                          <input type="number" value={water} step="0.1" onChange={e=>setWater(e.target.value)} className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500" />
                        </div>
                      </div>
                   </div>
                 )}
              </div>
            </div>

            {/* Smart Expandable Dashboard (Only visible in Phase 2) */}
            {phase === 2 && (
              <div className="bg-[#121212]/90 backdrop-blur-xl rounded-[28px] border border-white/5 shadow-xl overflow-hidden">
                <div className="flex border-b border-white/5 px-2 overflow-x-auto hide-scrollbar">
                  {[
                    { id: "overview", icon: Activity, label: "Overview" },
                    { id: "diet", icon: UtensilsCrossed, label: "Diet Plan" },
                    { id: "workout", icon: Dumbbell, label: "Workout" },
                    { id: "habits", icon: CheckCircle2, label: "Habits" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? "border-orange-500 text-orange-400" : "border-transparent text-zinc-400 hover:text-white"}`}
                    >
                      <tab.icon className="w-4 h-4" /> {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-8 min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div key="overview" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="grid md:grid-cols-3 gap-6">
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e]">
                            <div className="flex items-center gap-3 mb-4"><Flame className="text-orange-400" /><h4 className="font-bold text-white">Calorie Target</h4></div>
                            <div className="text-4xl font-mono text-white mb-2">{targetCals} <span className="text-sm text-zinc-500 font-sans">kcal/day</span></div>
                            <p className="text-xs text-zinc-400">Based on your BMR ({Math.round(result.bmr)}) and goal to {goal}.</p>
                         </div>
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e]">
                            <div className="flex items-center gap-3 mb-4"><Target className="text-green-400" /><h4 className="font-bold text-white">Timeline</h4></div>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                              {goal === "Maintain" ? "Focus on establishing long-term consistency." : `A safe progression rate is approx 0.25 - 0.5 kg per week. Stay consistent.`}
                            </p>
                         </div>
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e]">
                            <div className="flex items-center gap-3 mb-4"><HeartPulse className="text-red-400" /><h4 className="font-bold text-white">Health Risks</h4></div>
                            <ul className="text-sm text-zinc-400 space-y-2 list-disc pl-4">
                               {healthAnalysis[result.catKey as keyof typeof healthAnalysis].risks.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                         </div>
                      </motion.div>
                    )}

                    {activeTab === "diet" && (
                      <motion.div key="diet" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="space-y-6">
                         <div className="flex justify-between items-center"><h4 className="text-white font-bold text-xl">{dietPref} Diet Suggestions</h4> <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold border border-orange-500/20">{targetCals} kcal target</span></div>
                         <div className="grid md:grid-cols-2 gap-4">
                            {Object.entries(dietPlans[dietPref] || dietPlans["Balanced"]).map(([meal, desc]) => (
                               <div key={meal} className="bg-[#1a1a24] rounded-xl p-5 border border-[#2f2f3e]">
                                  <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{meal}</h5>
                                  <p className="text-zinc-300 text-sm leading-relaxed">{desc as string}</p>
                               </div>
                            ))}
                         </div>
                         <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-4 text-sm text-orange-200/70">
                            <strong>To Avoid:</strong> Sugary drinks, highly processed foods, excess sodium, and refined carbs.
                         </div>
                      </motion.div>
                    )}

                    {activeTab === "workout" && (
                      <motion.div key="workout" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
                         <div className="flex items-center gap-3 mb-6"><Dumbbell className="text-orange-400" /><h4 className="font-bold text-white text-xl">{workoutAccess} Plan</h4></div>
                         <div className="bg-[#1a1a24] rounded-2xl border border-[#2f2f3e] overflow-hidden">
                            {(workouts[goal] ? workouts[goal][workoutAccess] : workouts["Maintain"][workoutAccess]).map((ex: string, idx: number) => (
                               <div key={idx} className="flex items-center gap-4 p-4 border-b border-[#2f2f3e] last:border-0 hover:bg-white/[0.02] transition-colors">
                                  <div className="w-8 h-8 rounded-full bg-[#20202a] flex items-center justify-center text-zinc-500 text-xs font-mono">{idx+1}</div>
                                  <p className="text-zinc-300 font-medium">{ex}</p>
                               </div>
                            ))}
                         </div>
                      </motion.div>
                    )}

                    {activeTab === "habits" && (
                      <motion.div key="habits" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="grid md:grid-cols-2 gap-6">
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><Moon /></div>
                            <div>
                               <h5 className="font-bold text-white mb-1">Sleep Adjustments</h5>
                               <p className="text-sm text-zinc-400">You are currently sleeping {sleep} hours. {parseFloat(sleep) < 7 ? "Try to aim for 7-8 hours for optimal recovery and hormone balance." : "Great job hitting the recommended sleep target!"}</p>
                            </div>
                         </div>
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0"><CheckCircle2 /></div>
                            <div>
                               <h5 className="font-bold text-white mb-1">Hydration Strategy</h5>
                               <p className="text-sm text-zinc-400">You log {water}L of water daily. {parseFloat(water) < 2.5 ? "Increase intake to at least 2.5L - 3L, especially surrounding your workouts." : "Your hydration levels look perfect for metabolic function."}</p>
                            </div>
                         </div>
                         <div className="bg-[#1a1a24] rounded-2xl p-6 border border-[#2f2f3e] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 shrink-0"><Leaf /></div>
                            <div>
                               <h5 className="font-bold text-white mb-1">Daily Steps</h5>
                               <p className="text-sm text-zinc-400">Aim for 8,000 to 10,000 steps daily. Use walking as a tool for active recovery and maintaining cardiovascular health.</p>
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* SEO Content & Educational Block */}
            <div className="mt-16 bg-[#0a0a0f] rounded-3xl p-8 md:p-12 border border-[#1f1f2e] text-left relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-white text-center md:text-left">
                Complete Guide to BMI (Body Mass Index)
              </h2>
              <div className="flex flex-col gap-8 text-zinc-400 leading-relaxed text-[15px] font-light">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What is a BMI Calculator?</h3>
                  <p>
                    A <strong className="text-white">BMI Calculator</strong> (Body Mass Index Calculator) is a simple, internationally recognized tool used to estimate human body fat based on an individual's height and weight. While it does not directly measure body fat percentage, it provides a reliable indicator of whether you fall into a healthy weight category. Men and women can use the <strong className="text-white">BMI for men</strong> and <strong className="text-white">BMI for women</strong> interpretations to adjust their wellness routines.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">How is the Body Mass Index Calculated?</h3>
                  <p>
                    The classical BMI formula divides your weight in kilograms by the square of your height in meters (kg/m²). Mathiq's <strong className="text-white">smart healthy weight calculator</strong> automates this math, offering instantaneous results. It’s important to note that athletes with high muscle mass may present a high BMI despite having low body fat, which is why BMI should be used as a baseline overview rather than an absolute diagnostic tool.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 bg-[#121218] rounded-2xl p-6 border border-[#2f2f3e]">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Healthy BMI Ranges</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Under 18.5:</strong> Underweight</li>
                      <li><strong>18.5 to 24.9:</strong> Normal (Healthy Weight)</li>
                      <li><strong>25.0 to 29.9:</strong> Overweight</li>
                      <li><strong>30.0 and above:</strong> Obese</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Limitations of BMI</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Does not distinguish between muscle & fat</li>
                      <li>Does not account for bone density</li>
                      <li>Age and gender variations apply</li>
                      <li>Not accurate for pregnant women</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                     <div>
                        <strong className="text-white block mb-1">Is BMI accurate tracking for fitness?</strong>
                        <p>It's a great starting point for the general population. However, if you resistance train frequently, tracking waist circumference and body fat percentage provides a more complete picture.</p>
                     </div>
                     <div>
                        <strong className="text-white block mb-1">How can I quickly reduce my BMI?</strong>
                        <p>BMI reduction is achieved by lowering your overall body weight. Utilize our customized Insights panel above to generate a slight caloric deficit paired with our workout plans. Avoid crash dieting.</p>
                     </div>
                     <div>
                        <strong className="text-white block mb-1">Do men and women use different BMI charts?</strong>
                        <p>The standard adult BMI chart is same for men and women. However, women organically carry slightly more body fat than men. The health risk thresholds remain identical for both genders above age 20.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BMICalculator;
