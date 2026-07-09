// si-didy-memory-api · Express HTTP wrapper around si-didy-memory-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'si-didy-memory', version: '1.0.0' }));

app.post('/refreshMetrics', async (req, res) => {
  try {
    const { refreshMetrics } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof refreshMetrics === 'function' ? await refreshMetrics(req.body) : { error: 'refreshMetrics not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/stamp', async (req, res) => {
  try {
    const { stamp } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof stamp === 'function' ? await stamp(req.body) : { error: 'stamp not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/pushLog', async (req, res) => {
  try {
    const { pushLog } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof pushLog === 'function' ? await pushLog(req.body) : { error: 'pushLog not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/doWarm', async (req, res) => {
  try {
    const { doWarm } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof doWarm === 'function' ? await doWarm(req.body) : { error: 'doWarm not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderTopK', async (req, res) => {
  try {
    const { renderTopK } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof renderTopK === 'function' ? await renderTopK(req.body) : { error: 'renderTopK not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/escapeHtml', async (req, res) => {
  try {
    const { escapeHtml } = await import('@ai-native-solutions/si-didy-memory-sdk');
    const out = typeof escapeHtml === 'function' ? await escapeHtml(req.body) : { error: 'escapeHtml not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('si-didy-memory-api listening on :' + PORT));
