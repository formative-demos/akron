// Everything the page says lives in this file. Edit the text between the quotes.
// answer: "" shows a "Needs an answer" marker. draft: true shows a "Draft wording" marker.
// media: { src, alt, caption }: images (.avif/.png/.jpg) or videos (.mp4) from assets/.
// Videos can also take a poster (a still .jpg shown before the clip loads) and wide: true to sit on top in focus mode.
// media can be a list of clips; give each a short label for its tab in focus mode.

window.RUBRIC = {
  district: "Akron Public Schools",
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
          answer: "There is no additional cost to onboard.",
        },
        {
          q: "What are the annual costs?",
          answer: "Annual pricing is based on Akron’s student enrollment and the products included: the Formative School & District license, plus optional add-ons such as the Item Bank, Respondus LockDown Browser and Bubble Sheet. Your Formative account manager will share Akron’s exact annual quote.",
          draft: true,
        },
        {
          q: "Are there any additional charges for full implementation (onboarding, training, rostering etc)?",
          answer: "Professional learning is the only additional cost.",
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
            src: "assets/video/staff-interface.mp4",
            poster: "assets/video/staff-interface.jpg",
            alt: "A teacher opens an assessment, switches to the Responses grid, opens one student’s answers and completion time, then views the Insights summary",
            caption: "A teacher moves between editing, live responses and insights",
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
              src: "assets/video/parse-pdf.mp4",
              poster: "assets/video/parse-pdf.jpg",
              label: "Parse an existing PDF",
              alt: "A teacher drops a five-page AP Precalculus quiz PDF into Formative; Luna converts it into editable questions that keep their graphs, answer keys and standards tags",
              caption: "Turning a five-page AP Precalc PDF into editable questions, graphs included (waits sped up)",
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
          media: {
            src: "assets/video/parse-pdf.mp4",
            poster: "assets/video/parse-pdf.jpg",
            alt: "A teacher drops a five-page AP Precalculus quiz PDF into Formative; Luna converts it into editable questions that keep their graphs, answer keys and standards tags",
            caption: "Turning a five-page AP Precalc PDF into editable questions, graphs included (waits sped up)",
          },
        },
        {
          q: "Do you have pre-built Ohio state test (OAA/OGT/AIR) practice items for grades 3-12?",
          answer: "There are existing items in the library. Districts can also build a Luna configuration for Ohio's State Test, so teachers generate practice items that follow the test's item types, style and DOK levels, tagged to Ohio standards. Teachers pick the configuration, name a standard, and review each item before it's added.",
          media: {
            src: "assets/video/luna-ost-config.mp4",
            poster: "assets/video/luna-ost-config.jpg",
            alt: "A teacher picks the Ohio State Test Practice: Grade 8 Math configuration in Luna, asks for practice items for Ohio standard 8.EE.7.b, and reviews six items before accepting them: two multiple choice, a select-two, a numeric entry, a solutions table and a two-part question",
            caption: "Picking the district’s Ohio State Test configuration and generating OST-style items for 8.EE.7.b (wait sped up)",
          },
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
              src: "assets/video/drag-drop-image.mp4",
              poster: "assets/video/drag-drop-image.jpg",
              label: "Drag and drop: text or image",
              alt: "A teacher starts a drag and drop question, points out the choice between drop areas in text or on an image, uploads a diagram of Earth's layers, places four drop areas, and adds the labels",
              caption: "Drag and drop works with drop areas in text or on an image",
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
          answer: "Yes, teachers can hand score open-ended items, as well as rubric aligned items. Teachers can also utilize Luna, the AI, to score against a rubric (nothing is shared/sent to students without a teacher sending it).",
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
          answer: "Yes. All staff can author their own items, for their own classroom assessments or for district common assessments. District leaders decide what is shared district-wide: common assessments are shared from the district, and teachers can assign them but not edit them.",
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
          answer: "Yes, an entire assessment, including directions, can be translated into a student’s native language. The Student Translator supports more than 30 languages, and text-to-speech reads the content aloud in the translated language.",
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
          answer: "Formative has an integration to Schoolytics and would send the data nightly to be viewed in Schoolytics with whatever filtering the district would prefer.",
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
              src: "assets/video/district-responses.mp4",
              poster: "assets/video/district-responses.jpg",
              label: "District assessment",
              alt: "The Responses page for the district's Spring Math Assessment: results by school (Marshall and Wilkerson), then by teacher, then one class and each student",
              caption: "One district common assessment, broken out by school, teacher, class and student",
            },
            {
              src: "assets/video/growth-report.mp4",
              poster: "assets/video/growth-report.jpg",
              label: "Growth",
              alt: "Growth trends across the Fall, Winter and Spring math assessments, switching between District, Site and Teacher views, with performance levels and growth by standard",
              caption: "Fall to Winter to Spring growth for the district, then by site and by teacher",
            },
            {
              src: "assets/video/admin-reports.mp4",
              poster: "assets/video/admin-reports.jpg",
              label: "Team tracker",
              alt: "The Team tracker for a district-wide assessment: overall score, then Marshall School and Wilkerson School, then a teacher, a class and each student, then the same results by standard",
              caption: "A district admin drilling from district to school, teacher, class and student",
            },
          ],
        },
        {
          q: "Is there standard-by-standard reporting tied directly to Ohio Academic Standards?",
          answer: "Yes, for a teacher in the Responses tab, they can filter to a standards view to see how students are performing on each standard that's assessed. In the Insights tab, PLCs can look at their standards data together as well. For an administrator, in the Team Tracker view, they can also set the viewing to standards to see how the entire district, schools, grade levels, PLCs, etc. are performing on state standards.",
          media: [
            {
              src: "assets/video/responses-standards.mp4",
              poster: "assets/video/responses-standards.jpg",
              label: "Assessment by standard",
              alt: "The Spring Math Assessment Responses page switched from questions to standards, showing every school, teacher and student by Ohio grade 8 standard (8.EE.7, 8.EE.8, 8.F.1, 8.F.4, 8.G.7, 8.SP.1)",
              caption: "A district assessment’s results grouped by Ohio grade 8 standard, for every school, teacher and student",
            },
            {
              src: "assets/video/tracker-standards.mp4",
              poster: "assets/video/tracker-standards.jpg",
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
            src: "assets/video/teacher-own-class.mp4",
            poster: "assets/video/teacher-own-class.jpg",
            alt: "A teacher opens the district's Spring Math Assessment and sees only their own class and students",
            caption: "A teacher opening a district assessment sees only their own class",
          },
        },
        {
          q: "Can building admin see both district and classroom teacher created assessment results?",
          answer: "The district sets the permissions and can allow building administrators to see it if they choose to allow it. Otherwise, building administrators will only see their building data.",
          media: {
            src: "assets/video/building-admin.mp4",
            poster: "assets/video/building-admin.jpg",
            alt: "A building administrator's Team tracker for the Fall, Winter and Spring assessments shows only the teachers in their school, then one teacher's class and students",
            caption: "A building admin sees the teachers in their own building, down to each class and student",
          },
        },
        {
          q: "Can district admin see building level results for teacher created assessments?",
          answer: "Yes, administrators are able to view all teacher level data without needing to do any additional steps. They can see it by building, PLC, individual teacher, student, grade level, etc.",
          media: {
            src: "assets/video/admin-reports.mp4",
            poster: "assets/video/admin-reports.jpg",
            alt: "The Team tracker drilling from the district into a school, teacher, class and students",
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
          answer: "Rollout is led by Akron’s dedicated Customer Success Manager and follows a clear sequence:\n1. Kickoff to confirm goals, timeline and the first common assessments.\n2. Technical setup with Akron IT: Clever rostering, SSO, Schoolytics and Respondus LockDown Browser.\n3. Training for administrators and teachers.\n4. Migration of existing assessments with an assessment specialist.\n5. Regular check-ins through the first year to review usage and data.\nThe exact timeline depends on Akron’s start date, and we will share a week-by-week plan at kickoff.",
          draft: true,
        },
        {
          q: "Explain initial PD for tech? For end users?",
          answer: "Technology staff: a setup session with our implementation team covering Clever rostering, SSO, LMS and LTI connections, the Schoolytics data sync and Respondus LockDown Browser.\nEnd users: Formative Fundamentals training for teachers, plus administrator training on reports, the Tracker and common assessments. Sessions are scheduled from our Professional Learning catalog through a personalized booking link.",
        },
        {
          q: "What are your training tools/methodology?",
          answer: "Training is hands-on: teachers build and assign a real assessment during their session so they leave ready to use it with students. Live sessions from our Professional Learning catalog are backed by on-demand Formative Certified courses, live events and webinars, tips by email, and a help center with step-by-step articles that is available 24/7.",
        },
        {
          q: "Describe your Help Desk support?",
          answer: "Akron will have a dedicated Customer Success Manager in addition to our support team. Staff can reach support by email at support@formative.com or by live chat (weekdays, 8am to 8pm ET), and the help center is available 24/7 with step-by-step articles.",
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
            src: "assets/video/luna-next-steps.mp4",
            poster: "assets/video/luna-next-steps.jpg",
            alt: "Luna next steps listing the standards students struggled with, including Ohio 8.PS.2, and offering to generate a practice set or a new formative",
            caption: "Luna suggesting next steps from results",
          },
        },
        {
          q: "What are the limitations and philosophy for Artificial Intelligence?",
          answer: "Luna is built to support teachers, not replace their judgment. Every question, hint, rubric or piece of feedback Luna drafts is shown to the teacher to review, edit or reject, and nothing reaches a student until a teacher sends it. Students do not use Luna.\nAI can make mistakes, which is why teacher review is built into every step. District leaders can set Luna configurations so generated content follows district frameworks, Ohio standards and state test formats, and Formative can turn AI features off for a district on request. Student data is protected under FERPA and COPPA and is never sold.",
        },
      ],
    },

    {
      name: "Years in business",
      weight: 2,
      rows: [
        {
          q: "How long have you been in business with assessment platforms?",
          answer: "Formative was founded in 2013 and has supported teachers for more than 10 years. Formative joined Newsela in 2023. Today, teachers in more than 90% of U.S. school districts use Formative, and students have submitted more than 6 billion responses.",
        },
        {
          q: "Do you have any customers in Ohio? If so who?",
          answer: "Yes. Teachers across Ohio use Formative, and we would be glad to connect Akron with Ohio district references.",
          draft: true,
        },
        {
          q: "Can you share your financial stability?",
          answer: "Formative is part of Newsela, a leading K-12 instructional content company. Newsela raised a $100 million Series D round in 2021 at a valuation of about $1 billion, backed by investors including Franklin Templeton, TCV, Kleiner Perkins and the Chan Zuckerberg Initiative. Newsela continues to invest in Formative, including adding Schoolytics in 2026.",
          draft: true,
        },
      ],
    },
  ],
};
