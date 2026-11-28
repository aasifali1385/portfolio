// Resume tab (home page)
//
// Same content as resume/Aasif-Ali-Resume.tex. When you change one, change the other,
// then compile the .tex file and save the PDF as resume/Aasif-Ali-Resume.pdf
// (the Download Resume button serves that file).
// Anything left empty ("" or []) is hidden. See js/resume.js for every field.

// Counted from your first job (Apr 2022), so it updates by itself: "4.5+ years", then "5+ years" from Apr 2027
const EXPERIENCE = experienceSince(2022, 4);

renderResume({
    name: "Aasif Ali",
    headline: "Application Developer",
    photo: "",
    location: "Noida, India",
    experience: EXPERIENCE,
    cv: "resume/Aasif-Ali-Resume.pdf",

    // Wrap words in **...** to make them bold
    about: [
        "**Application Developer** with **" + EXPERIENCE + "** of experience. I started out building " +
        "**native Android** apps in **Java**, moved to **Kotlin**, and now build cross-platform apps with **Flutter**.",
        "I have launched **30+ native Android apps** and **10+ Flutter apps** on **Google Play**, and " +
        "**5+ Flutter apps** on the **Apple App Store**, across travel, healthcare, e-commerce, EdTech, fintech," +
        "logistics and delivery, astrology, HR and productivity, chat support and CRM, billing, pet care and gaming.",
        "I work with **Clean Architecture**, **MVVM**, **REST APIs** (**Retrofit**, **Dio**, **http**), **Firebase**, " +
        "**payment gateways**, Flutter state management (**GetX**, **Bloc**, **Provider**, **Riverpod**) and " +
        "scalable **real-time features** (**Pusher**, **Socket.IO / WebSockets**, **Firebase listeners**), and " +
        "focus on clean, maintainable code and stable apps through **crash monitoring** and root-cause fixes."
    ],

    jobs: [
        {
            role: "Application Developer",
            company: "Henry Harvin Education",
            location: "Noida, India",
            period: "Aug 2024 - Present",
            points: [
                "Designed and developed internal HR Management System and CRM mobile apps in Flutter using GetX for state management, routing and dependency injection, giving HR and sales teams a single mobile tool for daily operations.",
                "Integrated backend RESTful APIs for employee records, attendance, lead tracking and follow-ups, with structured error handling, loading states and form validation for a reliable user experience.",
                "Built and shipped language learning apps featuring interactive lessons, quizzes and real-time progress sync with Firebase, keeping learner data consistent across devices.",
                "Applied Bloc and GetX state management patterns to separate UI from business logic, making screens predictable, testable and easier to extend with new course content.",
                "Developed real-time messaging for the Henry Harvin Chat app using Socket.IO, handling live message delivery, socket connection lifecycle and reconnection on unstable networks.",
                "Reduced app crash rate by 30% by monitoring Firebase Crashlytics and fixing the top root causes by user impact, improving app stability."
            ]
        },
        {
            role: "Android Developer",
            company: "Duplex Technologies Services Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Aug 2023 - Jul 2024",
            points: [
                "Delivered 10+ client Android apps end to end across travel, astrology, hotel booking, e-commerce and trading domains, from requirement analysis to Google Play Store release.",
                "Set up Clean Architecture with modular Kotlin projects (data, domain and presentation layers), enabling code reuse across client apps and faster delivery of new features.",
                "Implemented the networking layer with Retrofit and Kotlin Coroutines, and local persistence with the Room database for offline support and faster screen loads.",
                "Scheduled reliable background tasks such as data sync and reminders with WorkManager, respecting Android battery and background-execution limits.",
                "Integrated payment gateways (Razorpay, Stripe) for secure in-app checkout, and third-party SDKs including Google Maps API and Firebase for location, analytics and push notifications."
            ]
        },
        {
            role: "Android Developer",
            company: "CodeON Infosystem Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Apr 2022 - Jun 2023",
            points: [
                "Developed client Android apps for HR management, e-commerce, health & nutrition and education businesses, translating client requirements into working features.",
                "Wrote features in Kotlin following the MVVM architecture with Android Jetpack components (ViewModel, LiveData, Navigation) for lifecycle-aware, maintainable code.",
                "Implemented Firebase Authentication for secure user sign-in and Cloud Firestore for real-time cloud data sync.",
                "Added Firebase Cloud Messaging (FCM) push notifications to keep users informed about orders, updates and reminders, improving user engagement.",
                "Consumed REST APIs, built responsive UI layouts and fixed bugs to keep Google Play Store releases stable."
            ]
        }
    ],

    skills: [
        {group: "Languages", items: ["Kotlin", "Java", "Dart", "SQL"]},
        {group: "Platforms", items: ["Android", "Flutter", "iOS (via Flutter)"]},
        {group: "Android", items: ["Android SDK", "Jetpack Compose", "Jetpack (ViewModel, LiveData, Navigation)", "Coroutines & Flow", "Retrofit", "Room", "Hilt", "WorkManager"]},
        {group: "Flutter", items: ["GetX", "Bloc", "Provider", "Riverpod", "Dio", "http"]},
        {group: "Architecture", items: ["Clean Architecture", "MVVM", 'MVC', "Modular projects"]},
        {group: "Real-time", items: ["Pusher", "Socket.IO / WebSockets", "Firebase listeners"]},
        {group: "Firebase", items: ["Authentication", "Cloud Firestore", "Cloud Messaging (FCM)", "Crashlytics", "Analytics"]},
        {group: "Integrations", items: ["REST APIs", "Razorpay", "Stripe", "In-app purchases", "Google Maps API", "Meta messaging APIs"]},
        {group: "Tools & Publishing", items: ["Git", "Android Studio", "Google Play Console", "Apple App Store publishing"]}
    ],

    projects: [
        // Website only (not in the .tex / PDF)
        {
            name: "Indo Berlin German School",
            link: "https://play.google.com/store/apps/details?id=com.indoberlin.germanschool",
            points: [
                "German language learning app",
                "AI-powered calls and chat to practise speaking and writing German"
            ]
        },
        {
            name: "Henry Harvin LMS",
            link: "https://play.google.com/store/apps/details?id=com.henryharvin.learner.henry_harvin_learning",
            points: [
                "Learning management app for Henry Harvin students",
                "25K+ downloads on Google Play"
            ]
        },
        {
            name: "Henry Harvin Chat",
            link: "https://play.google.com/store/apps/details?id=com.henryharvin.hhchat",
            points: [
                "Messaging app for counsellors to send and manage messages to leads",
                "Built on Meta's messaging APIs"
            ]
        },
        {
            name: "Virtual Card Holder",
            link: "https://play.google.com/store/apps/details?id=com.aa.credit.card.wallet",
            points: [
                "Keeps your cards in one place, so you can manage them virtually",
                "10K+ downloads on Google Play"
            ]
        },
        // Also in the .tex / PDF
        {
            name: "Fluent German Club",
            tech: "Flutter, Dart, Firebase",
            year: "2024",
            link: "https://play.google.com/store/apps/details?id=com.henryharvin.fluentgermanclub",
            points: [
                "Built a cross-platform German language learning app in Flutter with interactive lessons and quizzes.",
                "Implemented learner progress tracking with cloud sync via Firebase, so progress carries over across devices.",
                "Added offline mode support so learners can continue lessons without an internet connection.",
                "Set up Firebase Authentication, in-app purchases for premium content and real-time data storage."
            ]
        },
        {
            name: "PetZoo",
            tech: "Kotlin, MVVM, Google Maps API, Firebase, Razorpay",
            year: "2023",
            link: BASE_URL + "petzoo/",
            points: [
                "Built a location-based Android app in Kotlin that connects users with nearby pets, following the MVVM architecture.",
                "Used the Google Maps API for real-time nearby pet discovery with map markers based on user location.",
                "Consumed REST APIs to load dynamic content such as pet listings, details and categories.",
                "Integrated Razorpay payments and Firebase push notifications to drive transactions and user engagement."
            ]
        }
    ],

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            school: "Chandigarh University",
            location: "Punjab, India",
            period: "2022",
            grade: "CGPA: 8.45"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Disha Bharti College",
            location: "Saharanpur, India",
            period: "2020",
            grade: ""
        }
    ],

    email: "aasifali1385@gmail.com",
    linkedin: "https://linkedin.com/in/aasifali1385",
    github: "",
    website: ""
});
