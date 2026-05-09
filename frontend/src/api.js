const BASE_URL = 'http://127.0.0.1:8000'

export async function runTask(task, text) {
  const response = await fetch(`${BASE_URL}/${task}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.detail || `Request failed with status ${response.status}`)
  }
  return response.json()
}
