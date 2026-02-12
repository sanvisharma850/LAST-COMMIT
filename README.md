# LAST COMMIT - Merged Repository

This repository contains the complete LAST COMMIT interactive mystery experience, merging three previously separate repositories into one cohesive project.

## Project Structure

The project is organized into three sequential phases:

### Phase 1: Intro (Root Directory)
- **Entry Point**: `index.html`
- **Description**: The opening cinematic sequence that introduces the mystery of Dr. Uday Goyal's death
- **Key Files**:
  - `index.html` - Main intro page
  - `intro.css` - Styling for the intro sequence
  - `intro.js` - JavaScript for scene progression and audio
  - `assets/` - Audio and image assets for the intro

### Phase 2: Institute Verify (`institute-verify/` directory)
- **Entry Point**: `institute-verify/index.html`
- **Description**: Investigation phase where players examine suspects and explore the repository
- **Key Files**:
  - `index.html` - Suspect selection screen
  - `interview.html` - Interview suspects
  - `repo.html` - Repository investigation
  - `login.html` - Authentication sequence
  - `mail.html` - Email investigation (leads to Phase 3)
  - `assets/` - Images and audio for this phase

### Phase 3: Access Logs (`access-logs/` directory)
- **Entry Point**: `access-logs/index.html`
- **Description**: Final phase examining system access logs and uncovering the truth
- **Key Files**:
  - `index.html` - Access logs entry
  - `logs.html` - Log examination interface
  - `phone/` - Phone unlock puzzle
  - `page_1/`, `page_2/` - Sequential investigation pages
  - `Admin/` - Admin panel access
  - `final.html` - Conclusion

## Navigation Flow

The experience flows sequentially:
1. **Intro** → Click "ENTER CASE FILE" → Navigates to `institute-verify/index.html`
2. **Institute Verify** → Complete investigation → Click delete in email → Navigates to `access-logs/index.html`
3. **Access Logs** → Complete final investigation → Reveals the conclusion

All navigation links have been updated to use relative paths within this merged repository.

## Deployment

This repository is designed to be deployed via GitHub Pages. The root `index.html` serves as the entry point.

To deploy:
1. Enable GitHub Pages in repository settings
2. Set source to the main/master branch
3. The site will be available at `https://[username].github.io/[repo-name]/`

## Development

All three phases can be tested independently by navigating to their respective entry points:
- Root: `index.html`
- Institute Verify: `institute-verify/index.html`
- Access Logs: `access-logs/index.html`

Note: Some features require session storage and may expect certain localStorage values to be set from previous phases.

## Assets

Assets are organized within each phase's directory:
- Root `assets/` - Intro audio and images
- `institute-verify/assets/` - Suspect photos and audio
- `access-logs/assets/` - Investigation media and audio files

## Credits

Created by sanvisharma850
- Original repos: intro, institute-verify, access-logs
- Merged into: LAST-COMMIT (this repository)
