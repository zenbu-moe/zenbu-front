# Zenbu - a modern anime, manga, and light novel database and tracking platform.

Thank you for checking out Zenbu. This repository contains all front-end source code for __zenbu.moe__.
The website is accessible through [`zenbu.moe`](https://zenbu.moe)

Join our [Discord](https://discord.gg/mVpKe4y)

## Table of contents

- What is it about?
- GitHub repositories
- Front-end changelog

## What is it about?

Zenbu is a new, completely open-source database and tracking platform for all sorts of Japanese, Korean, and Chinese media, including but not limited to anime, manga, light novels, etc. We started as a team working on a project for AniList, but then had an idea of making an entire platform based around that project idea.

## Other GitHub repositories

Development of Zenbu is split into 2 separate parts: front-end and back-end. The development happens in separate repositories

- [`zenbu-front`](https://github.com/zenbu-moe/zenbu-front/) - front-end development repo for __zenbu.moe__
- [`zenbu-back`](https://github.com/zenbu-moe/zenbu-back/) - back-end development repo for __zenbu.moe__

Each repository contains a `main` branch for stable version deployment, as well as `dev-max` and `dev-kex` branches for development and testing. `zenbu-front` also has `landing` branch which houses the source code of the splash page that is currently (as of April 4, 2021) accessible through [`zenbu.moe`](https://zenbu.moe).

## Changelog

### 0.1.5 - April 3, 2021

April Fools' - Got'em

- UI updated on splash page

### 0.1.4 - April 1, 2021

- Cancelled Zenbu

### 0.1.3 - March 31, 2021 

- Updated `media` pages
  - Added proper navigation
  - Updated `reviews` tab
  - Updated `relations` tab

### 0.1.2 - March 26, 2021

- `home` and `browse` page updates
- webfonts are no more - svg is the way
  - removed all webfonts
  - developed svg-icon framework for Vue.js
  - replaced all `<i>` occurences with `<svg>`

### 0.1.1 - March 25, 2021 

- Splash page update

### 0.1.0 - January 21, 2021

Major update

- __The application was converted from multi-page to single-page, vue-router was configured__
- Added `browse` page
- Added site-wide search bar
- Minor UI improvements

### 0.0.5 - January 20, 2021 

- Horizontal navigation bar on `home` page was removed
- Vertical navigation bar on `home` page was added
- `NSFW` and `Spoiler` flags updates

### 0.0.4 - January 5, 2021

Happy New Year

- Site-wide UI changes
  - `border-radius` changed from `20px` to `10px` or `15px` depending on the content
  - UI colors were changed

- `landing` branch was created
- Splash page was deployed on `https://zenbu.moe`

### 0.0.3 - December 29, 2020

- Started working on `gridstack.js` powered dashboard on `about` page
- Finished tabs on `home` page

### 0.0.2 - December 28, 2020

- Added `about` page
- Added `login` page
- Added `media` page

### 0.0.1 - December 11, 2020

Initial commit
- Original HTML idea of the site was rewritten with Vue.js
- Added `home` page

## Copyright

This project is under GNU General Public License v3.0. 
`This project` contains but is not limited to code, graphics, videos, art, etc.
Zenbu is developed and maintaned by [Sigma](https://github.com/dizzyatlovich) and [cakes](https://github.com/Kex1016).
