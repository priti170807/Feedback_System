# Quick Start Guide

Get your Feedback & Survey website running in 2 minutes!

## Prerequisites

- VS Code installed
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 5-Minute Setup

### 1. Install Live Server Extension (2 minutes)

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows) or `Cmd+Shift+X` (Mac)
3. Type "Live Server" in the search box
4. Click "Install" on the "Live Server" extension by Ritwick Dey
5. Wait for installation to complete

### 2. Open Project (1 minute)

1. Click File > Open Folder in VS Code
2. Navigate to your project folder
3. Click "Select Folder"

### 3. Start the Website (30 seconds)

1. Find `index.html` in the file list
2. Right-click on it
3. Select "Open with Live Server"
4. Your browser opens automatically with the website!

## Test It Out

### Try the Feedback Form
1. Click "Give Feedback" button
2. Enter test data:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Rating: Select "5 - Excellent"
   - Message: "This is a great feedback system!"
3. Click "Submit Feedback"
4. You should see a success message

### Try the Survey
1. Click "Take Survey" button
2. Answer all 5 questions
3. Click "Submit Survey"
4. You should see a success message

### View Results
1. Click "Results" in the navigation
2. You should see:
   - Your feedback entry
   - Your survey response
   - Statistics and charts

## Project Files You're Working With

```
Main Pages (HTML files):
- index.html        → Home page
- feedback.html     → Feedback form
- survey.html       → Survey form
- result.html       → Results page

Styling:
- styles.css        → All colors and layout

Logic (JavaScript):
- js/index.js       → Home page stats
- js/feedback.js    → Feedback form handler
- js/survey.js      → Survey form handler
- js/result.js      → Results display
```

## Useful Tips

### See Changes in Real-Time
- Live Server automatically refreshes when you edit files
- Just save (Ctrl+S) and the page updates instantly

### Debug Issues
- Press F12 to open Developer Tools
- Click "Console" tab to see errors
- Messages in red are errors, yellow are warnings

### Clear Test Data
- Press F12
- Go to Application tab
- Click Local Storage
- Find your site
- Click and delete items

### Customization Examples

**Change the gradient colors:**
1. Open styles.css
2. Find `#667eea` (first color)
3. Find `#764ba2` (second color)
4. Replace with any hex colors

**Add another feedback field:**
1. Open feedback.html
2. Copy a form-group div
3. Change the id and name
4. Update feedback.js validation

## Common Issues & Quick Fixes

**Issue: Page shows blank**
- Solution: Refresh browser (F5)
- Solution: Check console for errors (F12)

**Issue: Styles don't look right**
- Solution: Make sure styles.css is in root folder
- Solution: Hard refresh (Ctrl+Shift+R on Windows)

**Issue: Form doesn't submit**
- Solution: Check browser console for errors
- Solution: Fill all required fields

**Issue: Can't find Live Server option**
- Solution: Make sure extension is installed
- Solution: Right-click directly on index.html

## Next Steps

### Easy Modifications
1. Change survey questions in survey.html
2. Change feedback form fields in feedback.html
3. Change colors in styles.css
4. Add more statistics on index.html

### Add More Features
1. Export data as CSV
2. Add date filtering
3. Add search functionality
4. Add categories for feedback

### For College Submission
- Your code is ready to submit as-is!
- All files are well-organized and commented
- No dependencies or build tools needed
- Just zip the folder and submit

## File Organization

The project follows best practices:
- HTML files in root
- CSS file in root
- JavaScript files in js/ folder
- Each page has its own JavaScript file
- Comments explain what code does

## Version Control (Optional)

If using Git:
```bash
git init
git add .
git commit -m "Initial feedback & survey website"
```

## Deployment (Optional)

To share online:
1. Use GitHub Pages
2. Use Netlify (free tier)
3. Use Vercel (free tier)
4. Or use any web host

## Support

If you get stuck:
1. Check README.md for detailed info
2. Look at comments in code files
3. Check browser console for errors (F12)
4. Try refreshing the page
5. Clear browser data

---

**You're all set! Start building your feedback system now!**
