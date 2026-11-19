// Everything the page says lives in this file. Edit the text between the quotes.
// answer: "" shows a "Needs an answer" marker. draft: true shows a "Draft wording" marker.
// media: { src, alt, caption }: images (.avif/.png/.jpg) or videos (.mp4) from assets/.
// Videos can also take a poster (a still .jpg shown before the clip loads) and wide: true to sit on top in focus mode.
// media can be a list of clips; give each a short label for its tab in focus mode.

window.RUBRIC = {
  district: "Akron Public Schools",
  districtLogo: "assets/akron-logo.png",
  title: "Formative's response to your assessment platform rubric",
  preparedOn: "November 2026",
  intro: "Every answer below follows your rubric's structure: the same areas, criteria and weights. Where it helps, we've added a screenshot or short clip so you can see the feature, not just read about it.",
  contact: {
    name: "",
    email: "",
    phone: "",
  },

  areas: [
    {
      name: "Cost",
      weight: 40,
      rows: [
        {
          q: "What is the cost to onboard?",
          answer: "**All onboarding support is included in the subscription costs.** Upon partnership you will receive complimentary onboarding support from an **Assessment Services Partner** and **District Customer Success Manager** who will set up integrations, rostering and SSO. They will also schedule professional learning and ensure partnership goals are established and met.\n\nYour [Assessment Services Partner](https://go.newsela.com/rs/628-ZPE-510/images/BAFAssessmentServices.pdf) will work alongside your team to support assessment migration. They will review your district goals, curriculum maps, pacing guides, and assessment blueprints to develop a clear setup and transition strategy. To ensure a successful implementation and partnership, they will also provide deep data analysis, progress benchmarking, and insights.\n\nWe also offer Early Implementation, which provides 90 days of complimentary access so that your teams can begin working, setting up assessments and familiarizing themselves with the platform.",
        },
        {
          q: "What are the annual costs?",
          answer: "Annual costs are in our [pricing guide](https://docs.google.com/presentation/d/1chVFBT4GPa4WCuCKv1nFVyq3nkSNsVEJXOZKtsqp9Nc/edit?usp=sharing), which is also attached to our response.",
        },
        {
          q: "Are there any additional charges for full implementation (onboarding, training, rostering etc)?",
          answer: "Everything required for Formative go-live is included in the price. Rostering, onboarding, integrations, migrations, and other requirements for functionality are baked in.\n\nThe only additional implementation cost is for Professional Learning. Expert facilitators deliver engaging, hands-on learning experiences that help educators apply platform features and instructional strategies in their classrooms. Sessions can be tailored for teachers, instructional leaders, coaches, and administrators, with options ranging from live virtual workshops to in-person half-day or full-day sessions.\n\nProfessional Learning costs:\n• In-person session (full day): $4,200\n• Virtual live session (90 minutes): $750\n\nWe also offer Early Implementation, which provides 90 days of complimentary access so that your teams can begin working, setting up assessments and familiarizing themselves with the platform.",
        },
      ],
    },

    {
      name: "Testing platform",
      weight: 16,
      rows: [
        {
          q: "Visual appeal and intuitiveness of staff facing interface?",
          answer: "Every assessment has the same three tabs, so staff always know where to go: Edit to build, Responses to watch answers arrive live, and Insights to see results by question and standard. Administrators get the same layout plus Admin Tools for reports, the Tracker and team management. The clip shows a teacher moving through all three tabs.",
          media: {
            src: "assets/video/staff-interface-levels.mp4",
            poster: "assets/video/staff-interface-levels.jpg",
            alt: "The Responses grid for a district common assessment, with every school, teacher and class, then the Insights summary showing overall performance and how many students reached each score level, from Extending to Emerging",
            caption: "Moving between responses and insights for one assessment",
          },
        },
        {
          q: "Visual appeal and intuitiveness of student facing interface?",
          answer: "Students see a clean, uncluttered screen with a question navigator, hints when the teacher allows them, and built-in tools such as text-to-speech and a math keypad. It runs in the browser on Chromebooks, iPads and laptops, so there is nothing to install for everyday assessments.",
          media: [
            {
              src: "assets/video/student-reading.mp4",
              poster: "assets/video/student-reading.jpg",
              label: "Paired passages and hot text",
              alt: "A student opens a Grade 8 benchmark, reads two paired passages using the passage tabs, and selects the best sentence in a hot text question",
              caption: "Reading: paired passages and a hot text question",
            },
            {
              src: "assets/video/student-math-science.mp4",
              poster: "assets/video/student-math-science.jpg",
              label: "Calculator, drag and drop, GIF",
              alt: "The student opens the graphing calculator, checks 5 squared plus 12 squared equals 13 squared, graphs a half circle through the point (5, 12), answers a multi-part question, drags steps into order, labels Earth's layers by dragging, and answers a question with an animated GIF",
              caption: "Math and science: graphing calculator, multi-part, resequence, drag and drop, and a GIF in the question",
            },
          ],
        },
        {
          q: "Ease of assessment creation",
          answer: "Assessments can be created from scratch, imported from Google Drive, parsed with Luna (AI), or created at district level and shared with teachers.",
          media: [
            {
              src: "assets/video/luna-create.mp4",
              poster: "assets/video/luna-create.jpg",
              alt: "A teacher asks Luna for grade 8 forces and motion questions, answers Luna’s follow-up, and reviews the drafted questions tagged to Ohio standards",
              caption: "Luna drafting standards-tagged questions from one request (waits sped up)",
              label: "Luna from scratch",
            },
            {
              src: "assets/video/parse-pdf-math.mp4",
              poster: "assets/video/parse-pdf-math.jpg",
              label: "Parse an existing PDF",
              alt: "A teacher creates a new formative, titles it 8th Grade Math and uploads a 14-page grade 8 math PDF exported from another assessment platform; Luna turns it into 13 editable questions. The video then scrolls through the same questions after review: scatterplots, coordinate graphs, tables and equations, with answer keys, hints and grade 8 standards",
              caption: "Creating 8th Grade Math and uploading a 14-page PDF (processing sped up for this video), then the same questions after a teacher review and cleanup",
            },
            {
              src: "assets/video/student-pdf-math.mp4",
              poster: "assets/video/student-pdf-math.jpg",
              label: "The PDF, as students see it",
              alt: "A student opens 8th Grade Math and answers questions built from the PDF: a scatterplot, choosing an equation for a graphed line, a two-way table, a relation in set notation, a graph compared with a table, choosing the nonlinear function from tables and sets, and choosing the graph of a system of equations",
              caption: "What students see: the same math questions, with clean graphs, tables and equations",
            },
            {
              src: "assets/video/item-bank-add.mp4",
              poster: "assets/video/item-bank-add.jpg",
              label: "Add from the item bank",
              alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
              caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
            },
          ],
        },
        {
          q: "Questions can be aligned to current Ohio Learning Standards",
          answer: "Yes, all content can be aligned to Ohio State Learning Standards, as well as Depth of Knowledge. Additionally, Formative will update standards when the state adjusts.",
          media: {
            src: "assets/video/ohio-standards.mp4",
            poster: "assets/video/ohio-standards.jpg",
            alt: "A teacher opens a question's Standards field, adds Ohio's Science (2018-) Grade 8 standards set, searches for force and tags the question with 8.PS.2",
            caption: "Adding Ohio’s grade 8 science standards and tagging a question with 8.PS.2",
          },
        },
        {
          q: "Can we migrate our existing assessments into the platform",
          answer: "Yes. Formative fully supports QTI imports, as long as your current assessment vendor can provide those files. You can also import from Google Forms, or upload a PDF or Word document and Formative turns it into editable questions. If none of those work for you, an assessment specialist will help migrate your current assessments into the platform, so there is less manual work for your team.",
          media: [
            {
              src: "assets/video/parse-pdf-math.mp4",
              poster: "assets/video/parse-pdf-math.jpg",
              label: "Upload a PDF",
              alt: "A teacher creates a new formative, titles it 8th Grade Math and uploads a 14-page grade 8 math PDF exported from another assessment platform; Luna turns it into 13 editable questions. The video then scrolls through the same questions after review: scatterplots, coordinate graphs, tables and equations, with answer keys, hints and grade 8 standards",
              caption: "Creating 8th Grade Math and uploading a 14-page PDF (processing sped up for this video), then the same questions after a teacher review and cleanup",
            },
            {
              src: "assets/video/student-pdf-math.mp4",
              poster: "assets/video/student-pdf-math.jpg",
              label: "As students see it",
              alt: "A student opens 8th Grade Math and answers questions built from the PDF: a scatterplot, choosing an equation for a graphed line, a two-way table, a relation in set notation, a graph compared with a table, choosing the nonlinear function from tables and sets, and choosing the graph of a system of equations",
              caption: "What students see: the same math questions, with clean graphs, tables and equations",
            },
          ],
        },
        {
          q: "Do you have pre-built Ohio state test (OAA/OGT/AIR) practice items for grades 3-12?",
          answer: "There are existing items in the library. Districts can also build a Luna configuration for Ohio's State Test, so teachers generate practice items that follow the test's item types, style and DOK levels, tagged to Ohio standards. Teachers pick the configuration, name a standard, and review each item before it's added.\n\nHere is an example of what we could work towards for you. In addition, we think that there may be some things that would be equally valuable for you such as coordinate planes, bar graphs and histograms, absolute value graphs and fraction models, and state-test mirrored math keyboards.",
          media: [
            {
              src: "assets/video/luna-ost-config.mp4",
              poster: "assets/video/luna-ost-config.jpg",
              label: "Ohio State Test items with Luna",
              alt: "A teacher picks the Ohio State Test Practice: Grade 8 Math configuration in Luna, asks for practice items for Ohio standard 8.EE.7.b, and reviews six items before accepting them: two multiple choice, a select-two, a numeric entry, a solutions table and a two-part question",
              caption: "Picking the district’s Ohio State Test configuration and generating OST-style items for 8.EE.7.b (wait sped up)",
            },
            {
              src: "assets/video/ohio-mirror-side-by-side.mp4",
              poster: "assets/video/ohio-mirror-side-by-side.jpg",
              label: "Mirroring the Ohio State Test",
              wide: true,
              alt: "Side by side: a teacher assigns Ohio State Test Practice: Grade 4 Reading with Mirror Ohio State Test turned on, and the student's practice switches from the standard Formative layout to one that looks like the Ohio State Test, with its question bar, tools and passage tabs",
              caption: "Example: practice that looks like the Ohio State Test, something we could work towards",
            },
          ],
        },
        {
          q: "Are items tagged by standard, Bloom's level, and DOK level?",
          answer: "Yes, every item in our Item Bank is tagged by standard and DOK level. Bloom's Taxonomy levels could be added as well.",
          media: {
            src: "assets/video/item-bank-add.mp4",
            poster: "assets/video/item-bank-add.jpg",
            alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
            caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
          },
        },
        {
          q: "What item types are supported? (MC, TEI, short answer, extended response, drag-and-drop, etc.)",
          answer: "Formative has more than 20 question types for every subject, K-12. Many have built-in variations, so one question type covers what other platforms count as several.\n• Multiple choice, multiple selection and true or false\n• Short answer and free response\n• Numeric, with a math keypad for expressions and equations\n• Fill in the blank: text or numeric blanks, in a sentence or inside a table\n• Dropdown (inline choice)\n• Drag and drop: drag text or images onto a picture or into a sentence\n• Categorize, match table grid and resequence\n• Hot text and hot spot\n• Graphing and number line\n• Drawing, plus audio, video and file responses\n• Multi-part: combine any of these into one item, for example a numeric answer followed by a free response where the student explains their thinking\nYou can also add text, images, video, audio, embeds and paired passages. Objective question types score automatically.",
          media: [
            {
              src: "assets/video/item-types.mp4",
              poster: "assets/video/item-types.jpg",
              label: "All question types",
              alt: "The Add item menu listing content types and question types such as categorize, drag and drop, graphing, hot spot, match table grid and video response",
              caption: "Every content and question type in the add menu",
            },
            {
              src: "assets/video/multi-part.mp4",
              poster: "assets/video/multi-part.jpg",
              label: "Multi-part",
              alt: "A teacher adds a multi-part question: a numeric part asking for the total gym cost after 6 months with the answer 115, then a free response part asking students to explain their thinking",
              caption: "A multi-part question: a numeric answer, then a free response where students explain their thinking",
            },
            {
              src: "assets/video/fitb-table.mp4",
              poster: "assets/video/fitb-table.jpg",
              label: "Fill in the blank table",
              alt: "A teacher inserts a table into a fill in the blank question, fills in hours and miles, and turns two cells into blanks with answers 180 and 240",
              caption: "Fill in the blank inside a table",
            },
            {
              src: "assets/video/drag-drop.mp4",
              poster: "assets/video/drag-drop.jpg",
              label: "Drag and drop",
              alt: "A teacher builds two drag and drop questions. First, drop areas on an image: the teacher uploads a diagram of Earth's layers, places four drop areas and adds the labels. Then drop areas in text: the teacher types two sentences about Earth's layers with a blank in each, adds crust, inner core and mantle as draggable words, and drags crust and inner core into the blanks to set the answers",
              caption: "Drag and drop onto an image, then into blanks in a sentence",
            },
          ],
        },
        {
          q: "Are objective items (MC, TEI) auto-scored in real time?",
          answer: "Yes, questions are scored in real time.",
          media: {
            src: "assets/video/live-side-by-side.mp4",
            poster: "assets/video/live-side-by-side.jpg",
            alt: "Side by side: on the right a student answers five questions and submits; on the left the teacher’s Responses grid marks each answer correct or incorrect the moment it is submitted",
            caption: "Live: the teacher’s Responses page (left) fills in as Tina Orozco answers (right). Her row is outlined in orange.",
            wide: true,
          },
        },
        {
          q: "Can teachers hand-score constructed response items within the platform?",
          answer: "Yes, teachers can hand score open-ended items, as well as rubric aligned items. Teachers can also utilize Luna (AI) to score against a rubric (nothing is shared/sent to students without a teacher sending it).",
          media: {
            src: "assets/video/hand-score-fr.mp4",
            poster: "assets/video/hand-score-fr.jpg",
            alt: "A teacher opens a free response question, scores three students' explanations of inertia out of 4 points and sends each a short comment, and the cards turn green or yellow",
            caption: "Hand scoring free responses and sending feedback",
          },
        },
        {
          q: "Do you support analytic or holistic scoring rubrics for open-ended items?",
          answer: "Yes. Teachers can attach a rubric to any free response question and score each criterion by clicking a level, and the points total automatically. Districts can use analytic rubrics, with a score for each criterion, or holistic rubrics, with one overall score, and save them to reuse across assessments. Luna can also draft a rubric and suggest levels with a short explanation for each, and the teacher reviews and adjusts everything before scores are saved or returned to students.",
          media: {
            src: "assets/video/rubrics.mp4",
            poster: "assets/video/rubrics.jpg",
            alt: "A teacher turns on Use rubric for two free response questions, attaches a saved analytic Claim, Evidence, Reasoning rubric to one and a holistic rubric to the other, and opens each to show the levels",
            caption: "Attaching a saved analytic rubric, then a holistic one",
          },
        },
        {
          q: "Can we set up item banks specific to grade and content areas?",
          answer: "Yes. The Item Bank (a School & District add-on) includes tens of thousands of ready-made items that teachers can filter by subject, grade, standard, Depth of Knowledge and question type. Akron can also publish its own assessments to a private district library that staff can filter by grade and subject, and administrators can lock items so only admins can find them.",
          media: {
            src: "assets/video/item-bank-add.mp4",
            poster: "assets/video/item-bank-add.jpg",
            alt: "A teacher opens the item bank, filters to Math, 11th grade and the Ohio standard F.IF.7.b, selects two items tagged to Ohio standards and adds them to the assessment",
            caption: "Filtering the item bank by Ohio standard F.IF.7.b and adding two items",
          },
        },
      ],
    },

    {
      name: "Test configuration & delivery",
      weight: 16,
      rows: [
        {
          q: "Can district staff author new items? Is there a review/approval workflow?",
          answer: "All users can create their own items, but not all users can add those items to the district item bank. Adding an item to the district item bank is gated by a permission/role.",
          media: {
            src: "assets/video/common-assessment-settings.mp4",
            poster: "assets/video/common-assessment-settings.jpg",
            alt: "From the editor, a district leader opens Common assessment settings, shares the assessment with the district with assign-only access, reviews the delivery and security settings, and saves",
            caption: "Common assessment settings, set from the editor",
          },
        },
        {
          q: "Can tests be shared across buildings, departments, and individual teachers?",
          answer: "Yes, collaboration is simple in Formative. Teachers can share with PLCs, and the district can send an assessment to a grade level, building, or entire district.",
          media: {
            src: "assets/video/share-editor.mp4",
            poster: "assets/video/share-editor.jpg",
            alt: "From the editor, a teacher opens Share, adds a colleague by typing her name, shares with the Eighth Grade Math PLC, and copies the assign link that gives a group of teachers access",
            caption: "Sharing with a colleague, a PLC, and an assign link",
          },
        },
        {
          q: "Can the district lock/protect assessments so teachers cannot alter them?",
          answer: "Yes, any district common assessments can be locked down so that teachers cannot alter any questions. Formative also has Benchmark Mode, where a district can lock the assessment so teachers don't even see the questions.",
          media: {
            src: "assets/video/common-assessment-settings.mp4",
            poster: "assets/video/common-assessment-settings.jpg",
            alt: "From the editor, a district leader tags the assessment as a common assessment and shares it with assign-only access, so teachers can give it but not change it",
            caption: "Teachers can assign a common assessment but not edit it",
          },
        },
        {
          q: "Can we randomize item order and/or answer choices to reduce academic dishonesty?",
          answer: "Yes, both the questions and answer choices can be given in random order.",
          media: {
            src: "assets/video/randomize.mp4",
            poster: "assets/video/randomize.jpg",
            alt: "In the editor a question shows Randomize order for its answer choices, then Assign settings turns on Display questions in random order",
            caption: "Shuffling answer choices and question order",
          },
        },
        {
          q: "Can we set time limits, section breaks, and student pacing controls?",
          answer: "Assessment settings are extremely flexible and can include time limits, open and close windows, feedback release, score release, testing accommodations, teacher paced (teacher controls the pace of the assessment), and student paced.",
          media: {
            src: "assets/video/pacing-sections.mp4",
            poster: "assets/video/pacing-sections.jpg",
            alt: "From the editor of a two-part unit test, the teacher opens Assign settings, picks student-paced, sets a 45 minute time limit, and turns on Restrict return to previous sections",
            caption: "Sections, a 45 minute time limit, and no going back to earlier sections",
          },
        },
        {
          q: "Do you support online AND paper/pencil administration from the same platform?",
          answer: "Yes, Formative has print options to complete an assessment on paper in addition to the online version. There is also an add-on called Bubble Sheet, where students can complete the paper version like a scantron, and upload the results into Formative to access the data.",
          media: {
            src: "assets/video/print-booklet.mp4",
            poster: "assets/video/print-booklet.jpg",
            alt: "From the editor, Print options: a student booklet in two columns with Randomize on, then the printed booklet with the questions shuffled",
            caption: "Printing a shuffled student booklet",
          },
        },
        {
          q: "What accommodation tools are built in? (text-to-speech, extended time, separate settings, zoom, etc.)",
          answer: "Accommodations available are text-to-speech, extended time, translations, answer choice reduction, color contrast, and masking. Additionally, teachers can turn on answer choice explanations, hints, and student notes for extra scaffolds and support.",
          media: [
            {
              src: "assets/video/accommodations-set.mp4",
              poster: "assets/video/accommodations-set.jpg",
              label: "Set defaults",
              alt: "On the class roster the teacher opens a student and turns on text-to-speech, masking, color contrast and Spanish translation",
              caption: "Setting a student's default accommodations on the Classes page",
            },
            {
              src: "assets/video/accommodations-student.mp4",
              poster: "assets/video/accommodations-student.jpg",
              label: "Student view",
              alt: "The student translates the test into Spanish, switches to high contrast, uses the line reader, and places a mask over part of the passage",
              caption: "The student using translation, high contrast, the line reader and masking",
            },
          ],
        },
        {
          q: "Do you support English Learner accommodations including translated test directions?",
          answer: "Yes, an entire assessment, including directions, can be translated into a student’s native language. The Student Translator supports more than 50 languages, and text-to-speech reads the content aloud in the translated language.",
        },
        {
          q: "Can we schedule and pre-assign tests to specific students or groups?",
          answer: "Yes, tests can be assigned to specific groups of students, individual students, or whole class(es). Open/close times can be set as well.",
          media: {
            src: "assets/video/assign-students.mp4",
            poster: "assets/video/assign-students.jpg",
            alt: "From the editor, Assign settings schedules the test for Thursday from 8:00 AM to 3:00 PM and assigns it to four selected students",
            caption: "Scheduling a window and assigning to selected students",
          },
        },
        {
          q: "Is there a secure lockdown browser or testing client available?",
          answer: "Yes, Formative utilizes Respondus Lockdown Browser to ensure a secure testing environment. Teachers can turn on entry and quit passwords, and will be notified if a student tries to exit the assessment or open other windows. In lockdown mode, students cannot exit the assessment, take a screenshot, or open other browsers.",
          media: {
            src: "assets/video/lockdown.mp4",
            poster: "assets/video/lockdown.jpg",
            alt: "Enhanced test security: requiring an entry password and turning on secure exam browser mode, which adds a quit password and auto-pause",
            caption: "Entry password and secure exam browser mode",
          },
        },
        {
          q: "Does your platform have any form of \"cheat detection\" including monitoring time spent on items and rapid correct responses? I.E. technology that would assist with detecting the use of a cell phone to complete an assessment.",
          answer: "Yes. Formative flags several signs of academic dishonesty for teachers to review:\n• Copy and paste alerts mark any answer that contains pasted text, even if the student later retyped it.\n• Overlap detection flags a student who is signed in on a second device or browser at the same time (for example, a phone), showing the device, browser, IP address and timestamps. Sessions can pause automatically until the teacher resumes them, and “Restrict to single device” blocks the second session entirely.\n• Timestamps and completion times on every response make it easy to spot a student who finished far faster than the rest of the class.\n• Teachers watch answers arrive live in the Responses grid.\nCombined with Respondus LockDown Browser, entry passwords and random question order, these tools cover both prevention and detection.",
          media: [
            {
              src: "assets/video/live-password-sbs.mp4",
              poster: "assets/video/live-password-sbs.jpg",
              label: "Fast and slow students",
              alt: "Side by side: a student enters the assignment password and answers all five questions in about 30 seconds, while the teacher's Responses grid shows her finishing at 100% and two classmates still working slowly",
              caption: "Live: Erin (right) enters the password and finishes fast, while Kaitlyn and Rodney work slowly in the teacher’s grid (left)",
              wide: true,
            },
            {
              src: "assets/video/second-device.mp4",
              poster: "assets/video/second-device.jpg",
              label: "Second device blocked",
              alt: "Side by side: Kaitlyn opens the same assignment on a second device, enters the password and is blocked with 'This assignment is open in another window'. She requests control, a shield icon appears on her row in the teacher's grid, and the teacher reviews both sessions and grants control",
              caption: "Restrict to single device: a second device is blocked until the teacher grants control (IP address hidden)",
              wide: true,
            },
          ],
        },
      ],
    },

    {
      name: "Integration",
      weight: 6,
      rows: [
        {
          q: "How does the platform integrate with our current SIS (eschoolPLUS) for rostering? We use Clever",
          answer: "Rostering would be done through Clever and a direct API connection.",
        },
        {
          q: "We use Schoolytics for our data analytic dashboard. Describe the integration process",
          answer: "Schoolytics and Formative are both part of the Newsela companies. Formative has an integration to Schoolytics and would send the data nightly to be viewed in Schoolytics with whatever filtering your district would prefer.\n\nTogether, Formative and Schoolytics connect real-time classroom evidence of student understanding with the broader student picture, including academic, attendance, and behavioral data, so educators can move beyond isolated scores to more informed decisions. Formative helps teachers respond with timely, targeted instruction, while Schoolytics helps teams see patterns across students and data sources, supporting a stronger cycle of identifying needs, taking action, and understanding progress.\n\nHaving both products and partnering with one vendor can more deeply support your Data and Assessment strategy and ensure you are using data to inform instruction across Akron.",
        },
        {
          q: "Are there any known limitations on what data can be imported or exported?",
          answer: "All data can be exported through SFTP.",
        },
      ],
    },

    {
      name: "Reporting and analytics",
      weight: 5,
      rows: [
        {
          q: "Can reports be viewed at student, classroom, building, and district levels for a district shared assessment?",
          answer: "Yes, there are both teacher and administrator permissions and all data is available in real time, so insights can be actionable. Teachers are able to see their own classrooms of data, as well as PLC data together if preferred. Building administrators can see their building's data, and district administrators can see all of the data in a singular view. From there, admin are able to filter to specific views and save that report for the future.",
          media: [
            {
              src: "assets/video/district-responses-levels.mp4",
              poster: "assets/video/district-responses-levels.jpg",
              label: "District assessment",
              alt: "The Responses page for the district's Spring Math Assessment: results by school (Marshall and Wilkerson), then by teacher, then one class and each student",
              caption: "One district common assessment, broken out by school, teacher, class and student",
            },
            {
              src: "assets/video/growth-report-levels.mp4",
              poster: "assets/video/growth-report-levels.jpg",
              label: "Growth",
              alt: "Growth trends across the Fall, Winter and Spring math assessments, switching between District, Site and Teacher views, with performance levels and growth by standard",
              caption: "Fall to Winter to Spring growth for the district, then by site and by teacher",
            },
            {
              src: "assets/video/admin-reports-levels.mp4",
              poster: "assets/video/admin-reports-levels.jpg",
              label: "Team tracker",
              alt: "The Team tracker for the fall, winter and spring assessments: the district score, then Marshall School, Kari Mills, their class and each student, then the same results by standard",
              caption: "A district admin drilling from district to school, teacher, class and student",
            },
          ],
        },
        {
          q: "Is there standard-by-standard reporting tied directly to Ohio Academic Standards?",
          answer: "Yes, for a teacher in the Responses tab, they can filter to a standards view to see how students are performing on each standard that's assessed. In the Insights tab, PLCs can look at their standards data together as well. For an administrator, in the Team Tracker view, they can also set the viewing to standards to see how the entire district, schools, grade levels, PLCs, etc. are performing on state standards.",
          media: [
            {
              src: "assets/video/responses-standards-levels.mp4",
              poster: "assets/video/responses-standards-levels.jpg",
              label: "Assessment by standard",
              alt: "The Spring Math Assessment Responses page switched from questions to standards, showing every school, teacher and student by Ohio grade 8 standard (8.EE.7, 8.EE.8, 8.F.1, 8.F.4, 8.G.7, 8.SP.1)",
              caption: "A district assessment’s results grouped by Ohio grade 8 standard, for every school, teacher and student",
            },
            {
              src: "assets/video/tracker-by-standard.mp4",
              poster: "assets/video/tracker-by-standard.jpg",
              label: "Team tracker by standard",
              alt: "The Team tracker in Standards view across the Fall, Winter and Spring assessments: each school's score by domain, then each teacher, then one teacher's class",
              caption: "The Team tracker by standard across Fall, Winter and Spring, by school, teacher and class",
            },
          ],
        },
        {
          q: "Can teachers see their own class results without seeing other teachers' data?",
          answer: "Yes, teachers can see their own classroom data as soon as students begin taking an assessment. All data is real time. If a district would like teachers to see each other's data in PLCs, that can be allowed, but is at the discretion of the district.",
          media: {
            src: "assets/video/teacher-own-class-levels.mp4",
            poster: "assets/video/teacher-own-class-levels.jpg",
            alt: "A teacher opens the district's Spring Math Assessment and sees only their own class and students",
            caption: "A teacher opening a district assessment sees only their own class",
          },
        },
        {
          q: "Can building admin see both district and classroom teacher created assessment results?",
          answer: "The district sets the permissions and can allow building administrators to see it if they choose to allow it. Otherwise, building administrators will only see their building data.",
          media: {
            src: "assets/video/building-admin-tracker.mp4",
            poster: "assets/video/building-admin-tracker.jpg",
            alt: "A building administrator's Team tracker for the Fall, Winter and Spring assessments shows only the teachers in their school, then one teacher's class and students",
            caption: "A building admin sees the teachers in their own building, down to each class and student",
          },
        },
        {
          q: "Can district admin see building level results for teacher created assessments?",
          answer: "Yes, administrators are able to view all teacher level data without needing to do any additional steps. They can see it by building, PLC, individual teacher, student, grade level, etc.",
          media: {
            src: "assets/video/admin-reports-levels.mp4",
            poster: "assets/video/admin-reports-levels.jpg",
            alt: "The Team tracker for the fall, winter and spring assessments, drilling from the district into a school, a teacher, that teacher’s class and each student",
            caption: "A district admin drilling from district to school, teacher, class and student",
          },
        },
      ],
    },

    {
      name: "Training & support",
      weight: 5,
      rows: [
        {
          q: "How long to rollout? What does rollout look like?",
          answer: "For a district the size of Akron, a typical implementation is about 60-90 days.\n\nFormative implementation is designed to help educators get started with the platform and build practical routines for using assessment data to inform instruction. The rollout begins with planning and account setup, followed by role-appropriate professional learning and support for classroom adoption. Implementation typically includes:\n• Planning: Align on instructional goals, intended use cases, implementation priorities, and the educators or schools involved.\n• Account setup: Configure classes and account settings to support implementation and accurate data.\n• Professional learning: Provide training tailored to the audience, such as administrators, instructional leaders, coaches, or teachers.\n• Classroom launch: Help educators create and assign a practical assessment or lesson and review student responses.\n• Adoption and instructional use: Support educators in using response data, insights, and reports to identify learning needs and inform next steps.",
        },
        {
          q: "Explain initial PD for tech? For end users?",
          answer: "Formative customers receive access to a dedicated Assessment Services & Onboarding Specialist. This specialist focuses on the foundational training and learning required to start using the platform. In collaboration with our professional learning team, they help your district find the most ideal and cost-effective mixture of training materials and sessions to fit your needs.\n\nFormative offers targeted sessions tailored to different experience levels and roles. These modules can be customized or sequenced based on unique needs, such as a particular Formative feature or serving a special population of students. All of our PD sessions are delivered by highly trained former educators.\n\n**Core sessions**\n• Formative Foundations\n• Formative for Instruction/Engaging All Students\n• Establishing Data Routines in Formative\n**Special topics**\n• Differentiating Instruction with Formative\n• Supporting Multilingual Learners with Formative\n• Supporting Student Engagement with Formative\n**For leaders**\n• Maximizing Formative at Your School\n• Overseeing Common Assessments (Train-the-Trainer only)\n\nFor technology, our onboarding specialist can connect your technical experts with ours to establish rostering and migration procedures. This can include API or SFTP synchronization, firewall setup, and technical questions regarding devices and web browsers.",
        },
        {
          q: "What are your training tools/methodology?",
          answer: "In addition to the professional development sessions outlined above, Formative offers asynchronous courses such as the [Formative Certified Educator course](https://help.formative.com/en/articles/4236291-become-a-certified-educator) that serve to acquaint users with the platform’s features. There is also a [searchable database](https://help.formative.com/en/) of over 100 articles on virtually every Formative function. There is also live chat available in-app Monday-Friday from 8am to 8pm ET.",
        },
        {
          q: "Describe your Help Desk support?",
          answer: "The Formative Support Desk is available 8am to 8pm ET, Monday through Friday.\n\nThe [Formative Help Center](https://help.formative.com/en/) is available 24/7 and is a comprehensive, step-by-step resource hub designed to make adopting and using Formative effortless. Whether you’re a teacher building your first interactive assignment, a student logging in, or a district admin managing licenses and standards tracking, it gives you instant guides, pedagogical tips, and direct support.\n\nUpon partnership you will also receive complimentary onboarding and partnership support from an [Assessment Services Partner](https://go.newsela.com/rs/628-ZPE-510/images/BAFAssessmentServices.pdf) and **District Customer Success Manager** who will set up integrations, rostering and SSO. They will also schedule professional learning and ensure partnership goals are established and met, and they are with you throughout your partnership to answer support questions.",
          media: {
            src: "assets/img/help-center.jpg",
            alt: "Formative help center home page with article categories",
            caption: "The Formative help center",
          },
        },
      ],
    },

    {
      name: "SSO, role-based access & data privacy",
      weight: 5,
      rows: [
        {
          q: "Do you have SSO?",
          answer: "Yes. Staff and students can sign in with Google, Microsoft, Clever, ClassLink or Newsela.",
          media: {
            src: "assets/img/sso-login.jpg",
            alt: "Formative login page with Log in with Google, Clever, Microsoft and Newsela buttons",
            caption: "The Formative login page",
          },
        },
        {
          q: "Can security roles be automated?",
          answer: "Yes. Accounts, roles and class rosters sync automatically from Clever, so new staff, new students and schedule changes flow into Formative without manual setup.",
        },
        {
          q: "How many roles do you have?",
          answer: "Teachers, Org Managers and Admins, plus student accounts. Admin roles can be set at the school or district level, so a principal sees their building while district staff see every school.",
        },
        {
          q: "Can tech admins impersonate others?",
          answer: "Administrators can view any teacher’s activities, student responses and results from Admin Tools, including the Teacher Report, which is how technology staff typically troubleshoot. Our support team can help directly with anything beyond that.",
        },
      ],
    },

    {
      name: "Artificial intelligence",
      weight: 5,
      rows: [
        {
          q: "Describe how your application uses/integrates Artificial Intelligence?",
          answer: "Our platform has Luna (AI) for teacher and administration use only. Administration can create Luna configurations to support alignment to district frameworks/state standards/state tests, etc. When a configuration is created, teachers and admin can then use that config to support the creation of assessments within district confinements. Luna has built in configurations for math, science, ELA, and social studies, as well as rigor booster and misconception buster to support creation of assessments. Luna can generate hints and answer choice explanations, as well as support grading, and feedback creation. Luna is also used to parse existing assessments into editable, digital versions. Students have no access to AI.",
          media: {
            src: "assets/video/luna-next-steps-levels.mp4",
            poster: "assets/video/luna-next-steps-levels.jpg",
            alt: "Insights for a district assessment groups students by score level, from Extending to Emerging, then Luna next steps lists the standards students struggled with and offers to generate a practice set or a new formative",
            caption: "Luna suggesting next steps from results",
          },
        },
        {
          q: "What are the limitations and philosophy for Artificial Intelligence?",
          answer: "AI in Formative is designed to enhance assessment workflows and amplify educator expertise. We believe technology in the classroom should never replace or put at risk the powerful teacher-student interactions necessary for meaningful learning. All Newsela products are purpose-built to optimize strong, research-based pedagogical practices that drive learning outcomes.\n\nWe always prioritize student safety and data security: student and teacher data is not retained, and cannot and will not be used to train models as per our DPA. All Newsela products comply with FERPA, COPPA and state student privacy laws.\n\nLike any generative technology, AI is not infallible. Because of these inherent limitations, Formative AI outputs are starting points: AI generates editable suggestions that require educator oversight, it does not make final grading decisions, students do not interact with a conversational chatbot, and adoption is never mandatory. All AI features can be disabled upon request.",
        },
      ],
    },

    {
      name: "Years in business",
      weight: 2,
      rows: [
        {
          q: "How long have you been in business with assessment platforms?",
          answer: "Formative was originally founded in 2013 before acquisition by Newsela in 2023. The product has been assessment-focused for its entire lifetime.",
        },
        {
          q: "Do you have any customers in Ohio? If so who?",
          answer: "Yes. Ohio districts using Formative include:\n• Boardman Local School District\n• Jackson-Milton Local School District\n• Maple Heights City School District\n• Marysville Exempted Village School District\n• Princeton City School District\n• Riverdale Local School District\n• Dublin City Schools",
        },
        {
          q: "Can you share your financial stability?",
          answer: "Newsela is happy to share its financial statements upon signature of a non-disclosure agreement. You may also look up our Dun & Bradstreet report by using our number (047392927).",
        },
      ],
    },
  ],
};
