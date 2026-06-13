# Adding Videos

1. Place your video files here, e.g. `heart-attack-signs.mp4`
   - Recommended format: MP4 (H.264), 1080p or 720p, under ~50MB each for fast loading
2. (Optional) Place a thumbnail image in `thumbnails/`, e.g. `thumbnails/heart-attack-signs.jpg`
   - Recommended: 16:9 ratio, e.g. 1280x720px
3. Open `lib/data.ts`, find the `videos` array, and update each entry:

```ts
{
  id: "heart-attack-signs",
  title: "Recognising Heart Attack Warning Signs",
  description: "...",
  src: "/videos/heart-attack-signs.mp4",
  poster: "/videos/thumbnails/heart-attack-signs.jpg",
}
```

Leave `src: ""` to show a "Coming Soon" placeholder card instead.
