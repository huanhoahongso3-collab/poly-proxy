export default function handler(req, res) {
  const GITHUB_URL = "https://github.com/huanhoahongso3-collab/myserver/raw/refs/heads/playit-only/polymer/resource_pack.zip";
  
  // 307 tells Minecraft "Go look here instead"
  // This bypasses the 10MB limit entirely
  res.redirect(307, GITHUB_URL);
}
