export default async function handler(req, res) {
  const GITHUB_URL = "https://github.com/huanhoahongso3-collab/myserver/releases/download/v20260414/resource_pack.zip";

  try {
    const response = await fetch(GITHUB_URL);

    if (!response.ok) {
      return res.status(response.status).send(`Failed to fetch pack: ${response.statusText}`);
    }

    // Set headers so Minecraft treats this as a downloadable zip file
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="music_rp+pack.zip"');
    
    // Transfer the Content-Length so the client shows a progress bar
    const contentLength = response.headers.get('content-length');
    if (contentLength) {
      res.setHeader('Content-Length', contentLength);
    }

    // Stream the body from GitHub to the User
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));

  } catch (error) {
    res.status(500).send("Proxy error: " + error.message);
  }
}
