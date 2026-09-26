# Max's Learning Lab — Explorer Edition

A static website for an iPad, with five featured places, fifty surprise places, a world map, an explorer passport, four games, and four Big Ideas profiles. No paid service, account for Max, build step, or npm installation is needed.

## Put it on GitHub

1. Unzip **Max-Learning-Lab-Explorer-Edition.zip** on your computer.
2. Create a **public** GitHub repository named `max-learning-lab` (or use a different new name if you already have a learning lab you want to keep).
3. Open the repository. Choose **Add file → Upload files**.
4. Upload the **contents** of the unzipped folder: `index.html`, the CSS and JavaScript files, and the entire `assets`, `data`, and `games` folders. Keep those folder names and their contents together. Upload the extracted files, not the ZIP itself. `index.html` must be at the top level of the repository.
5. Commit to **main**. Open **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
6. Check **Actions** for “pages build and deployment.” After a successful deployment, use **Settings → Pages → Visit site**. For repository `max-learning-lab` under `rrolfe`, the usual address is `https://rrolfe.github.io/max-learning-lab/`.

If no publishing run appears, make a small change to the README and commit it directly to main. If a run fails, read the error in Actions. A missing image generally means its file or folder was not uploaded at the expected path.

GitHub Pages is free with public repositories ([GitHub’s setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)). Public means the files and family connections can be read by anyone. This package uses first names/relationships and public city locations, not home addresses. Review the family wording before sharing the link widely.

## Open on the iPad

Open the published website in Safari. Use **Share → Add to Home Screen**. If your iPad offers **Open as Web App**, turn it on. Launch from that new icon. The page includes standalone web-app metadata.

Portrait and landscape are supported. Buttons work by touch, mouse, or keyboard. For a child who needs help reading, use each profile's **Listen** button. Read-aloud depends on Safari's speech support and available device voices. It stops when you change pages.

For a kiosk, use the iPad's own Guided Access feature. The website does not lock the device or change its settings.

## How it belongs to Max

- Tap the badge at top right to change the explorer name and choose a badge.
- Guayaquil, Kirkland and family stops, Exuma, Hawaiʻi, and Antarctica are the five featured places.
- Family wording comes from the parent's descriptions. Photos show destinations, not family members.
- Surprise Me uses a shuffled deck of 50 destinations. It avoids repeats until every card has been drawn, and avoids an immediate repeat between decks. This order survives a refresh on the same browser and device.
- Opening a destination adds it to My Passport. Stamping it is a separate optional action. Max can revisit discovered places from his passport.
- Quiz answers are gentle practice: an incorrect answer offers another try. Stretch questions invite discussion and have no score.

## Games and activities

**Home Run Hero:** choose Practice or a three-out game. Tap Pitch, then Swing at the gold timing zone. Runs, strikes, outs, runners, and best score are shown. This is a simplified batting game, not a complete baseball rules simulation.

**Block Lab:** an original falling-block puzzle with large Left, Right, Turn, Drop, and Pause controls. Fit pieces into complete rows. Moscow's lesson links to it after the Tetris fact. This is not an official Tetris product.

**Pattern Studio:** paint a pixel picture, try mirror mode, undo a move, and save your design on this device.

**Ocean Detective:** compare six ocean animals. Measurements are approximate examples, not a claim that all members of a species have one size.

**Big Ideas:** Albert Einstein, Katherine Johnson, Jacques Cousteau, and Frida Kahlo, each with short facts, a question, and an activity.

## Keep progress

Progress stays in local browser storage. There are no accounts, analytics, trackers, ads, external game libraries, or cloud syncing. Photos and map geometry are included in the package. A fresh page load still needs the hosted files; this version does not install a full offline cache.

Deleting browser data, changing devices, or using another browser can give Max a fresh passport. In **Grown-up corner**, choose **Save a progress backup** to download a small JSON file. **Restore a backup** imports it later and replaces this browser's current progress.

## Add or change content

**Simplest:** keep the ZIP and ask for the next module. Describe what you want; upload the revised files into the same repository. GitHub Pages keeps the same address.

**To edit yourself:**

- `data/config.js`: name, home message, badge choices, and home-screen activity cards.
- `data/family.js`: the five featured places and personal family connections.
- `data/places-a.js` and `data/places-b.js`: the surprise destination records.
- `data/people.js`: Big Ideas profiles.
- `data/photos.js`: image paths and photographer/license credits.
- `assets/places/`: the actual photo files. Keep photo filenames matched to `data/photos.js`.
- `CONTENT-TEMPLATE.txt`: examples for a new place and person.

Use a unique lowercase ID with hyphens. Keep the data fields intact and write three short facts, three quiz choices, and one stretch question. The quiz answer is a number: 0 means first choice, 1 second, 2 third. Use verified sources, real locations, and properly licensed images. Adding a place to either surprise array automatically adds it to the map, destination count, and next fresh surprise deck. Existing partly used decks finish before the expanded deck is shuffled.

Replacing these content files does not erase progress as long as existing destination IDs stay the same. A new module needs a working renderer in `app.js` or `games/games.js`, not only a new home-screen card.

## Photo and fact sources

Open `credits.html` for individual photo credits and original sources. Images are resized from their originals. Any crop displayed on cards is only a layout crop; the downloaded photo files retain their aspect ratio. Natural Earth map data is public domain. Facts were reviewed using parent, second-grade teacher, and developer perspectives with AI agents; this is not a claim of certification by a human teacher.

## Files to upload

Upload all the extracted contents together. The explanatory Markdown/text files can stay in the repository; they do not affect the site. There are no installation secrets, API keys, or credentials in this package.
