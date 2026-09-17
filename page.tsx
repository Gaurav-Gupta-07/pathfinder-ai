"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  Headphones,
  MapPin,
  Mic,
  Network,
  Play,
  Search,
  Sparkles,
  Target,
  Volume2,
  Zap
} from "lucide-react";

type Tab = "home" | "student" | "worker" | "interview";

const jobs = [
  { title: "Junior AI/ML Intern", company: "TechNova Labs", location: "Vijayawada", salary: "₹18k–25k/mo", match: 94 },
  { title: "Python Developer Intern", company: "CloudBridge", location: "Guntur", salary: "₹12k–18k/mo", match: 89 },
  { title: "Data Analyst Intern", company: "DataNest", location: "Remote", salary: "₹15k–22k/mo", match: 84 }
];

const workerJobs = [
  { title: "Electrician Helper", location: "Guntur", salary: "₹15k–18k/mo", tag: "Live" },
  { title: "Maintenance Technician", location: "Vijayawada", salary: "₹18k–22k/mo", tag: "Live" },
  { title: "Solar Installation Assistant", location: "Mangalagiri", salary: "₹16k–20k/mo", tag: "New" }
];

export default function Home() {
  const [tab, setTab] = useState<Tab>("home");
  const [mlSkill, setMlSkill] = useState(28);
  const [listening, setListening] = useState(false);
  const [showInterview, setShowInterview] = useState(false);

  const roadmap = useMemo(() => {
    if (mlSkill < 60) {
      return [
        ["Python", "done"],
        ["Statistics", "done"],
        ["ML Fundamentals", "active"],
        ["Deep Learning", "locked"],
        ["AI Project", "locked"],
        ["Interview", "locked"]
      ];
    }
    return [
      ["Python", "done"],
      ["Statistics", "done"],
      ["ML Fundamentals", "done"],
      ["NLP / Computer Vision", "active"],
      ["AI Project", "active"],
      ["Interview", "next"]
    ];
  }, [mlSkill]);

  const nav = (next: Tab) => {
    setTab(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => nav("home")} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black">
              <Network size={21} />
            </div>
            <div className="text-left">
              <div className="font-semibold tracking-tight">Pathfinder AI</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Career intelligence</div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <button onClick={() => nav("home")} className="hover:text-white">Home</button>
            <button onClick={() => nav("student")} className="hover:text-white">Student</button>
            <button onClick={() => nav("worker")} className="hover:text-white">Opportunities</button>
            <button onClick={() => nav("interview")} className="hover:text-white">Mock Interview</button>
          </nav>

          <button onClick={() => nav("student")} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
            Open platform
          </button>
        </div>
      </header>

      {tab === "home" && (
        <>
          <section className="relative overflow-hidden">
            <div className="absolute left-1/2 top-[-220px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pt-28">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65">
                  <Sparkles size={14} /> One intelligence engine. Two pathways to opportunity.
                </div>
                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                  Find your path.
                  <br />
                  <span className="text-white/35">Build your future.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
                  Pathfinder AI connects skills, learning paths, live opportunities and local-language guidance through a shared career intelligence engine.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => nav("student")} className="group flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 font-medium text-black transition hover:scale-[1.01]">
                    <GraduationCap size={19} /> I&apos;m a Student <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </button>
                  <button onClick={() => nav("worker")} className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 font-medium hover:bg-white/[0.08]">
                    <BriefcaseBusiness size={19} /> Find Local Opportunities
                  </button>
                </div>
              </div>

              <div className="mt-20 grid gap-4 md:grid-cols-3">
                {[
                  ["01", "Skill Intelligence", "Understand what you know, what you are missing and what to learn next.", Target],
                  ["02", "Adaptive Roadmaps", "Your career graph reroutes when your skills and goals change.", Network],
                  ["03", "Live Opportunity Matching", "Connect skills to current jobs and relevant public schemes.", Zap]
                ].map(([n, title, desc, Icon]) => {
                  const I = Icon as typeof Target;
                  return (
                    <div key={String(n)} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">{n}</span>
                        <I size={18} className="text-white/45" />
                      </div>
                      <h3 className="mt-10 text-lg font-medium">{String(title)}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/45">{String(desc)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-white/[0.02]">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">Shared architecture</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Different interfaces.<br />One intelligence engine.</h2>
                <p className="mt-5 max-w-lg leading-7 text-white/50">
                  The student web app and the rural voice interface use the same matching, retrieval and personalization layer.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0b0e13] p-6">
                <div className="grid gap-3">
                  <div className="rounded-xl border border-white/10 p-4 text-center text-sm">Student Web App</div>
                  <div className="mx-auto h-6 w-px bg-white/15" />
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 text-center">
                    <Bot className="mx-auto mb-2" size={24} />
                    <div className="font-medium">Shared Pathfinder Engine</div>
                    <div className="mt-2 text-xs text-white/40">Skill Graph · RAG · Matching · Personalization</div>
                  </div>
                  <div className="mx-auto h-6 w-px bg-white/15" />
                  <div className="rounded-xl border border-white/10 p-4 text-center text-sm">WhatsApp / Voice Interface</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {tab === "student" && (
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">Student workspace</p>
            <h1 className="mt-2 text-3xl font-semibold">Your career dashboard</h1>
            <p className="mt-2 text-white/45">AI/ML Engineer pathway · personalized from your current skill profile.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              {[
                ["Dashboard", Target],
                ["Skill Assessment", CircleHelp],
                ["My Roadmap", Network],
                ["Mock Interview", Headphones],
                ["Job Opportunities", BriefcaseBusiness]
              ].map(([name, Icon]) => {
                const I = Icon as typeof Target;
                return (
                  <button key={String(name)} onClick={() => String(name) === "Mock Interview" ? setShowInterview(true) : undefined} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white/55 hover:bg-white/5 hover:text-white">
                    <I size={17} /> {String(name)}
                  </button>
                );
              })}
            </aside>

            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-3">
                <Stat title="Career readiness" value="68%" sub="↑ 8% this month" />
                <Stat title="Skills assessed" value="6/8" sub="2 skills to assess" />
                <Stat title="Job matches" value="12" sub="Updated just now" />
              </div>

              <div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-medium">Skill profile</h2>
                      <p className="mt-1 text-xs text-white/40">Use the slider to simulate a skill update.</p>
                    </div>
                    <Sparkles size={18} className="text-white/35" />
                  </div>
                  <div className="mt-7 space-y-5">
                    <Skill name="Python" value={72} />
                    <Skill name="Mathematics" value={61} />
                    <Skill name="Statistics" value={43} />
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Machine Learning</span><span className="text-white/45">{mlSkill}%</span>
                      </div>
                      <input aria-label="Machine Learning skill" type="range" min="0" max="100" value={mlSkill} onChange={(e) => setMlSkill(Number(e.target.value))} className="w-full accent-white" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-2 text-sm font-medium"><Zap size={17} /> Next recommendation</div>
                  <h3 className="mt-8 text-2xl font-semibold">{mlSkill < 60 ? "Machine Learning Fundamentals" : "NLP / Computer Vision"}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {mlSkill < 60 ? "Build your ML foundation before moving into specialized AI tracks." : "Your updated profile unlocks specialized AI tracks and project work."}
                  </p>
                  <button className="mt-7 flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black">Start learning <ArrowRight size={16} /></button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="font-medium">Adaptive career roadmap</h2>
                    <p className="mt-1 text-xs text-white/40">Move the ML slider above to reroute the graph.</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">AI/ML Engineer</span>
                </div>

                <div className="mt-9 overflow-x-auto pb-3">
                  <div className="flex min-w-[760px] items-center gap-3">
                    {roadmap.map(([name, state], i) => (
                      <div key={name} className="flex items-center gap-3">
                        <div className={`min-w-[120px] rounded-xl border p-4 ${state === "done" ? "border-white/15 bg-white/10" : state === "active" || state === "next" ? "border-cyan-300/25 bg-cyan-300/[0.06]" : "border-white/8 bg-white/[0.02] opacity-45"}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/40">{state === "done" ? "Completed" : state === "active" ? "Recommended" : state === "next" ? "Next" : "Locked"}</span>
                            {state === "done" && <Check size={14} />}
                          </div>
                          <div className="mt-3 text-sm font-medium">{name}</div>
                        </div>
                        {i < roadmap.length - 1 && <ChevronRight size={16} className="shrink-0 text-white/20" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="font-medium">Matched opportunities</h2>
                    <p className="text-xs text-white/40">Demo data — connect a live job API for the hackathon.</p>
                  </div>
                  <button className="text-sm text-white/55 hover:text-white">View all</button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {jobs.map((job) => <JobCard key={job.title} job={job} />)}
                </div>
              </div>

              <button onClick={() => setShowInterview(true)} className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left hover:bg-white/[0.05]">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-black"><Headphones size={21} /></div>
                  <div><div className="font-medium">Ready for a mock interview?</div><div className="mt-1 text-sm text-white/40">Get granular AI feedback instead of generic praise.</div></div>
                </div>
                <ArrowRight className="text-white/40 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      )}

      {tab === "worker" && (
        <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">Local opportunity assistant</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">Find work in your language.</h1>
            <p className="mt-4 leading-7 text-white/45">Speak naturally. Pathfinder converts your request into skills, location and opportunity preferences, then searches live sources.</p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
            <div className="flex items-center gap-3 text-sm text-white/45"><MapPin size={17} /> Guntur, Andhra Pradesh</div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm text-white/45">Try a voice request</div>
              <div className="mt-3 text-xl">“Mere aas paas electrician ka kaam chahiye.”</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setListening(!listening)} className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${listening ? "bg-white text-black" : "border border-white/15 bg-white/5"}`}>
                  {listening ? <Volume2 size={18} /> : <Mic size={18} />} {listening ? "Listening..." : "Speak"}
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm"><Search size={17} /> Search opportunities</button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-end justify-between">
              <div><h2 className="text-xl font-medium">Relevant opportunities</h2><p className="mt-1 text-xs text-white/40">Demo results — replace with Adzuna/live API data.</p></div>
              <span className="text-xs text-white/35">3 matches</span>
            </div>
            <div className="space-y-3">
              {workerJobs.map((job) => (
                <div key={job.title} className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5"><BriefcaseBusiness size={19} /></div>
                    <div><h3 className="font-medium">{job.title}</h3><p className="mt-1 text-sm text-white/40">{job.location} · {job.salary}</p></div>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{job.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3"><Bot size={19} /><h2 className="font-medium">Government scheme assistant</h2></div>
            <p className="mt-3 text-sm leading-6 text-white/45">Ask about eligibility, benefits and required documents. In production, this section should use RAG over official government sources and show source dates.</p>
            <button className="mt-5 rounded-lg border border-white/15 px-4 py-2.5 text-sm hover:bg-white/5">Ask about a scheme <ArrowRight className="ml-1 inline" size={15} /></button>
          </div>
        </section>
      )}

      {tab === "interview" && (
        <section className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">AI mock interview</p>
            <h1 className="mt-3 text-4xl font-semibold">Practice like the real thing.</h1>
            <p className="mx-auto mt-4 max-w-xl text-white/45">Two-pass evaluation turns your answer into specific, actionable coaching.</p>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div className="flex items-center justify-between text-xs text-white/35"><span>AI/ML Interview</span><span>Question 3 / 10</span></div>
            <h2 className="mt-8 text-2xl font-medium">What is overfitting in machine learning?</h2>
            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/55">
              Overfitting happens when a model learns the training data too closely and performs poorly on unseen data...
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setListening(!listening)} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"><Mic size={18} /> {listening ? "Recording..." : "Record answer"}</button>
              <button className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm"><Play size={17} /> Submit answer</button>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Score title="Technical accuracy" value="78%" />
            <Score title="Answer structure" value="62%" />
            <Score title="Specificity" value="51%" />
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 font-medium"><Sparkles size={17} /> Actionable feedback</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4"><div className="text-xs uppercase tracking-wider text-white/35">Technical gap</div><p className="mt-2 text-sm leading-6 text-white/65">You explained the concept but did not mention how to detect overfitting.</p></div>
              <div className="rounded-xl border border-white/10 p-4"><div className="text-xs uppercase tracking-wider text-white/35">Improve</div><p className="mt-2 text-sm leading-6 text-white/65">Add validation loss or cross-validation and give one concrete example.</p></div>
            </div>
          </div>
        </section>
      )}

      {showInterview && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5 backdrop-blur-sm" onClick={() => setShowInterview(false)}>
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0d1117] p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between"><div><div className="text-xs uppercase tracking-widest text-white/35">Mock interview</div><h2 className="mt-1 text-2xl font-semibold">Ready to practice?</h2></div><button onClick={() => setShowInterview(false)} className="text-white/40 hover:text-white">✕</button></div>
            <p className="mt-4 text-sm leading-6 text-white/45">Start a simulated AI/ML interview and receive technical gaps, structure feedback and exact improvement suggestions.</p>
            <button onClick={() => { setShowInterview(false); nav("interview"); }} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-black">Start interview <ArrowRight size={17} /></button>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Pathfinder AI · Hackathon Prototype</span>
          <span>Shared Graph · RAG · Matching · Voice</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ title, value, sub }: { title: string; value: string; sub: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="text-xs text-white/40">{title}</div><div className="mt-3 text-3xl font-semibold">{value}</div><div className="mt-1 text-xs text-white/30">{sub}</div></div>;
}

function Skill({ name, value }: { name: string; value: number }) {
  return <div><div className="mb-2 flex justify-between text-sm"><span>{name}</span><span className="text-white/45">{value}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-white" style={{ width: `${value}%` }} /></div></div>;
}

function JobCard({ job }: { job: (typeof jobs)[number] }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex items-start justify-between gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5"><BriefcaseBusiness size={17} /></div><span className="text-xs text-white/45">{job.match}% match</span></div><h3 className="mt-5 font-medium">{job.title}</h3><p className="mt-1 text-sm text-white/40">{job.company}</p><p className="mt-4 text-xs text-white/35">{job.location} · {job.salary}</p></div>;
}

function Score({ title, value }: { title: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="text-xs text-white/40">{title}</div><div className="mt-2 text-2xl font-semibold">{value}</div></div>;
}