# Feedback & Survey Platform

A simple and interactive feedback and survey collection website built with HTML, CSS, and Vanilla JavaScript. Perfect for collecting user feedback and conducting surveys without any backend setup!

## Features

- **Feedback Form**: Collect user feedback with ratings (1-5) and messages
- **Survey System**: 5 survey questions with multiple choice answers
- **Results Dashboard**: View real-time analytics and statistics
- **Rating Breakdown**: Visual breakdown of feedback ratings
- **Survey Analytics**: Count and percentage of survey responses
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Data Persistence**: All data stored in browser's localStorage
- **Input Validation**: Form validation with helpful error messages

## Project Structure

```
feedback-survey-website/
│
├── index.html              # Home page with features & stats
├── feedback.html           # Feedback form page
├── survey.html             # Survey questions page
├── result.html             # Results & analytics page
│
├── styles.css              # All CSS styles (responsive)
│
├── js/
│   ├── index.js            # Home page statistics
│   ├── feedback.js         # Feedback form handler
│   ├── survey.js           # Survey form handler
│   └── result.js           # Results & analytics display
│
└── README.md               # This file
```

## How to Run in VS Code with Live Server

### Step 1: Install Live Server Extension

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for "Live Server"
4. Find "Live Server" by Ritwick Dey
5. Click "Install"

### Step 2: Open the Project

1. Open VS Code
2. Click File > Open Folder
3. Navigate to and select the project folder
4. Click "Select Folder"

### Step 3: Start Live Server

1. Right-click on `index.html` in the file explorer
2. Select "Open with Live Server"
3. Your browser will automatically open with the website at `http://127.0.0.1:5500`

That's it! The website is now running locally.

## How to Use the Website

### Submitting Feedback

1. Click "Give Feedback" button on home page (or use navigation)
2. Fill in your name
3. Enter your email address
4. Select a rating from 1 to 5
5. Write your detailed feedback (minimum 10 characters)
6. Click "Submit Feedback"
7. You'll see a success message confirming submission

### Taking a Survey

1. Click "Take Survey" button on home page (or use navigation)
2. Answer all 5 survey questions by selecting radio buttons
3. Each question covers:
   - Overall experience rating
   - Recommendation likelihood
   - Website design rating
   - Navigation ease
   - Interest in new features
4. Click "Submit Survey"
5. You'll see a success message confirming submission

### Viewing Results

1. Click "Results" in the navigation menu
2. **Feedback Summary Section**:
   - Total number of feedback entries
   - Average rating (1-5)
   - Visual breakdown of ratings by count
   - All individual feedback entries with names, emails, and messages
3. **Survey Results Section**:
   - Total number of survey responses
   - Answer breakdown for each question
   - Response counts and percentages for each option

## Features Explained

### Feedback Form
- **Name**: Your full name (required)
- **Email**: Valid email address (required)
- **Rating**: 1-5 star rating system (required)
  - 1 = Poor
  - 2 = Fair
  - 3 = Good
  - 4 = Very Good
  - 5 = Excellent
- **Message**: Your detailed feedback (required, minimum 10 characters)

### Survey Questions
1. **Overall Experience**: Excellent / Good / Average / Poor
2. **Recommendation**: Yes, definitely / Maybe / No
3. **Website Design**: Modern & Clean / Good / Okay / Needs Improvement
4. **Navigation**: Very Easy / Easy / Neutral / Difficult
5. **New Features**: Yes / No / Unsure

### Results Dashboard
- **Feedback Stats**: Shows total entries and average rating
- **Rating Breakdown**: Visual bar chart showing distribution
- **Feedback List**: All submitted feedback entries
- **Survey Results**: Breakdown of responses by question and option

## Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Modern styling, flexbox, grid, responsive design
- **JavaScript (ES6)**: Form handling, validation, data management
- **localStorage**: Client-side data storage (no server needed!)

## Data Storage

All data is stored in the browser's localStorage - no server or database required!

**Data Structure**:
- `feedbackArray`: Array of feedback objects
  - id (timestamp)
  - name (string)
  - email (string)
  - rating (1-5)
  - message (string)
  - date (submission date)

- `surveyArray`: Array of survey response objects
  - id (timestamp)
  - question1-5 (user answers)
  - date (submission date)

**Note**: Data persists as long as you don't clear browser data.

## Input Validation

The website includes comprehensive validation:

**Feedback Form**:
- All fields must be filled
- Email format validation
- Message minimum 10 characters
- Clear error messages

**Survey Form**:
- All 5 questions must be answered
- Radio button validation
- Helpful error prompts

## Customization Guide

### Change Colors
1. Open `styles.css`
2. Find the gradient colors (search for `#667eea` and `#764ba2`)
3. Replace with your preferred colors

### Add More Survey Questions
1. Add new question in `survey.html`:
   ```html
   <div class="survey-question">
       <label class="question-label">6. Your new question? *</label>
       <div class="radio-group">
           <div class="radio-option">
               <input type="radio" id="q6_option1" name="question6" value="Option 1">
               <label for="q6_option1">Option 1</label>
           </div>
       </div>
   </div>
   ```
2. Update validation in `survey.js` to check for question6
3. Update result display in `result.js`

### Modify Feedback Fields
1. Edit form fields in `feedback.html`
2. Update validation in `feedback.js`
3. Update result display in `result.js`

## Browser Compatibility

Works on all modern browsers:
- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Opera

## Troubleshooting

### Issue: "Form submission doesn't work"
**Solution**:
- Check browser console for errors (F12)
- Verify all HTML form names match the JavaScript selectors
- Ensure JavaScript files are linked correctly

### Issue: "Data disappears after browser close"
**Solution**: This is normal - localStorage persists data in the same browser session. If you:
- Close the browser completely - data may clear (depends on browser settings)
- Clear browsing data - data will be deleted
- Open in a different browser - data won't be visible (different storage)

### Issue: "Styles look broken on mobile"
**Solution**:
- Check that viewport meta tag is in HTML head
- Try zooming out in browser
- Refresh the page
- Check browser console for CSS errors

### Issue: "JavaScript console shows errors"
**Solution**:
- Press F12 to open developer tools
- Check the Console tab for error messages
- Verify all JS files are in the `js/` folder
- Check that file paths are correct in HTML

## Tips for College Submission

1. **Commenting**: Code is already well-commented for learning
2. **File Organization**: Files are organized in logical folders
3. **Clean Code**: No complex frameworks or dependencies
4. **Responsive Design**: Mobile-friendly and works on all devices
5. **No Backend**: Pure frontend - no server setup required
6. **Easy to Test**: Just open in browser with Live Server

## Beginner-Friendly Features

- Clear folder structure
- Well-commented code throughout
- Simple JavaScript (no complex syntax)
- Basic CSS without frameworks
- Easy to modify and customize
- No build tools or compilation needed

## Future Enhancements (Optional)

- Add data export to CSV
- Add date range filtering
- Add search functionality
- Add user profiles
- Add email notifications
- Add category tags for feedback
- Add question branching in surveys
- Add data visualization charts

## Support & Help

If you encounter issues:

1. **Check File Structure**: Make sure all files are in correct folders
2. **Browser Console**: Press F12 to see error messages
3. **Try Different Browser**: Test in Chrome or Firefox
4. **Restart Live Server**: Stop and restart the extension
5. **Clear Cache**: Press Ctrl+Shift+Delete to clear browser data

## Credits

Built for college students to learn web development with a practical feedback collection system!

---

**Ready to collect feedback? Happy surveying!**
