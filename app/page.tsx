"use client";

import { useEffect, useMemo, useState } from "react";

type Item = { id: string; title: string; body: string; status: string; createdAt: number };

const SEED: Item[] = [
  { id: "1", title: "Open source docs", body: "Write guides together", status: "Open", createdAt: Date.now() - 86400000 },
  { id: "2", title: "Field notes exchange", body: "Share a research pass", status: "Draft", createdAt: Date.now() - 3 * 86400000 },
];

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw) as T);
    } catch { /* keep the seed */ }
    setReady(true);
  }, [key]);
  useEffect(() => {
    if (ready) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, ready]);
  return [value, setValue] as const;
}

export default function Home() {
  const [items, setItems] = useLocalStorage<Item[]>("collabs-v1", SEED);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState({ title: "", body: "", status: "Draft" });
  const filtered = useMemo(
    () => items.filter((item) => `${item.title} ${item.body} ${item.status}`.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  );
  const addItem = () => {
    if (!draft.title.trim()) return;
    setItems((current) => [{ ...draft, id: crypto.randomUUID(), createdAt: Date.now() }, ...current]);
    setDraft({ title: "", body: "", status: "Draft" });
  };
  const openCount = items.filter((item) => item.status === "Open" || item.status === "Active").length;

  return (
    <main className="folio-shell">
      <header className="folio-header">
        <div className="folio-mark" aria-hidden="true"><span>✳</span><span>✿</span><span>✳</span></div>
        <div>
          <p className="folio-kicker">COLLABORATIONS / FIELD FOLIO</p>
          <h1>Grow the right work<br /><em>with the right people.</em></h1>
          <p className="folio-intro">A small, local notebook for ideas that want another set of hands. Keep the request, the context, and its living status in one place.</p>
        </div>
        <div className="folio-index"><span>PLATE</span><strong>06</strong><small>local / private</small></div>
      </header>

      <section className="folio-stage" aria-labelledby="stage-title">
        <div className="stem" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="stage-copy"><p className="section-label">CURRENT GARDEN</p><h2 id="stage-title">{openCount || "No"} living {openCount === 1 ? "thread" : "threads"}</h2><p>Each entry is a seed. Give it enough detail to know whether it should grow.</p></div>
        <div className="stage-stats"><span><b>{items.length}</b> total notes</span><span><b>{filtered.length}</b> in view</span></div>
      </section>

      <section className="folio-workbench" aria-labelledby="new-note-title">
        <div className="workbench-label"><span className="pin" /><p className="section-label">PLANT A NEW NOTE</p><p>Local browser storage only.</p></div>
        <div className="workbench-form">
          <label><span>Title</span><input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} placeholder="What wants to happen?" /></label>
          <label><span>Details</span><textarea value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} placeholder="The useful context for a collaborator…" /></label>
          <label><span>Status</span><select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value })}><option>Draft</option><option>Open</option><option>Active</option><option>Done</option></select></label>
          <button id="new-note-title" className="seed-button" onClick={addItem}>Plant note <span>→</span></button>
        </div>
      </section>

      <section className="folio-list" aria-labelledby="notes-title">
        <div className="list-heading"><div><p className="section-label">THE SPECIMENS</p><h2 id="notes-title">Collaboration notes</h2></div><label className="search-field"><span>Search the folio</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="title, detail, status" /></label></div>
        {filtered.length === 0 ? <p className="empty-note">Nothing in this patch. Try a different search or plant a new note above.</p> : <ol className="note-list">{filtered.map((item, index) => <li key={item.id} className="note-row"><span className="row-number">{String(index + 1).padStart(2, "0")}</span><div className="note-copy"><h3>{item.title}</h3><p>{item.body || "No detail recorded yet."}</p></div><span className={`status status-${item.status.toLowerCase()}`}>{item.status}</span><button className="remove-button" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}>Remove</button></li>)}</ol>}
      </section>

      <footer className="folio-footer"><span>COLLABORATIONS / 2026</span><span>State stays in this browser. No backend is implied.</span></footer>
    </main>
  );
}
