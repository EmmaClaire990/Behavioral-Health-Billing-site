// Form submissions are handled client-side for now. When a backend is added,
// replace the body of this function with a real request (e.g. fetch("/api/inquiry")).
export type FormKind = "consultation" | "quick-consultation" | "newsletter";

export async function submitForm(kind: FormKind, data: Record<string, FormDataEntryValue | FormDataEntryValue[]>) {
  await new Promise((r) => setTimeout(r, 700));
  if (process.env.NODE_ENV !== "production") console.info(`[${kind}]`, data);
  return { ok: true as const };
}

export function formToObject(form: HTMLFormElement) {
  const fd = new FormData(form);
  const out: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
  for (const key of new Set(fd.keys())) {
    const all = fd.getAll(key);
    out[key] = all.length > 1 ? all : all[0];
  }
  return out;
}
