// Resume tab (home page)
//
// Same content as resume/Aasif-Ali-Resume.tex. When you change one, change the other,
// then rebuild the PDF from the .tex file and save it as resume/Aasif-Ali-Resume.pdf
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

    about: [
        "Application Developer with " + EXPERIENCE + " of experience in mobile application development " +
        "and 30+ apps published on Google Play. Skilled in Kotlin, Jetpack Compose, Java and Flutter, " +
        "building apps across e-commerce, health, education and finance domains.",
        "Strong background in Clean Architecture, REST APIs, third-party integrations and performance " +
        "optimization to improve app stability and user experience."
    ],

    jobs: [
        {
            role: "Application Developer",
            company: "Henry Harvin Education",
            location: "Noida, India",
            period: "Aug 2024 - Present",
            points: [
                "Built internal HR management and CRM apps using Kotlin, Jetpack Compose and Flutter",
                "Shipped language learning apps with interactive lessons and real-time sync, using Hilt, Room and Coroutines & Flow",
                "Built real-time messaging for the Henry Harvin Chat app with Socket.IO",
                "Cut crash rates by 40% by tracking issues in Firebase Crashlytics and fixing the top causes"
            ]
        },
        {
            role: "Android Developer",
            company: "Duplex Technologies Services Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Aug 2023 - Jul 2024",
            points: [
                "Delivered 10+ apps across travel, astrology, hotel booking, e-commerce and trading domains",
                "Set up Clean Architecture and modular Kotlin projects with Retrofit, Room and WorkManager",
                "Integrated payment gateways (Razorpay, Stripe) and third-party APIs (Google Maps, Firebase)"
            ]
        },
        {
            role: "Android Developer",
            company: "CodeON Infosystem Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Apr 2022 - Jun 2023",
            points: [
                "Built client apps for HR management, e-commerce, health/nutrition and education businesses",
                "Wrote features in Kotlin with MVVM architecture and Jetpack components",
                "Added Firebase Authentication, Firestore and Cloud Messaging to client apps"
            ]
        }
    ],

    skills: [
        {group: "Languages", items: ["Kotlin", "Java", "Dart"]},
        {group: "Frameworks", items: ["Android SDK", "Jetpack Compose", "Flutter"]},
        {group: "Libraries", items: ["Coroutines & Flow", "Retrofit", "Room", "Hilt", "WorkManager", "Socket.IO / WebSockets"]},
        {group: "Tools", items: ["Firebase", "Crashlytics", "REST APIs", "SQL", "Git", "Android Studio", "Play Console publishing"]},
        {group: "Platforms", items: ["Android", "iOS (via Flutter)"]}
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
            tech: "Flutter, Firebase, Dart",
            year: "2024",
            link: "https://play.google.com/store/apps/details?id=com.henryharvin.fluentgermanclub",
            points: [
                "Built a German language learning app with interactive lessons and quizzes",
                "Implemented progress tracking, cloud sync and offline mode support",
                "Set up user sign-in, in-app purchases and real-time data storage with Firebase"
            ]
        },
        {
            name: "PetZoo",
            tech: "Kotlin, MVVM, Google Maps API, Firebase, Razorpay",
            year: "2023",
            link: BASE_URL + "petzoo/",
            points: [
                "Built a location-based Android app that connects users with nearby pets",
                "Used the Google Maps API for real-time nearby pet discovery and REST APIs for dynamic content",
                "Added Razorpay payments and Firebase push notifications to keep users engaged"
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
            location: "Noida, India",
            period: "2020",
            grade: ""
        }
    ],

    email: "aasifali1385@gmail.com",
    linkedin: "https://linkedin.com/in/aasifali1385",
    github: "",
    website: ""
});
