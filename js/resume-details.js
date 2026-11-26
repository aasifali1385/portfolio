// Resume tab (home page)
//
// Same content as resume/Aasif-Ali-Resume.tex. When you change one, change the other,
// then rebuild the PDF from the .tex file and save it as resume/Aasif-Ali-Resume.pdf
// (the Download CV button serves that file).
// Anything left empty ("" or []) is hidden. See js/resume.js for every field.

renderResume({
    name: "Aasif Ali",
    headline: "Application Developer",
    photo: "",
    location: "Noida, India",
    experience: "4.5+ years",
    cv: "resume/Aasif-Ali-Resume.pdf",

    about: [
        "Application Developer with 4.5+ years of experience in mobile application development. " +
        "Skilled in Kotlin, Java and Flutter, building apps across e-commerce, health, education and finance domains.",
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
                "Developed internal HR management systems and CRM platforms using Kotlin and Flutter",
                "Built language learning applications with interactive features and real-time synchronization",
                "Optimized app performance, reducing crash rates by 40% through code improvements"
            ]
        },
        {
            role: "Android Developer",
            company: "Duplex Technologies Services Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Aug 2023 - Jul 2024",
            points: [
                "Developed 10+ applications across travel, astrology, hotel booking, e-commerce and trading domains",
                "Implemented Clean Architecture and project modularization in Kotlin-based projects",
                "Integrated payment gateways (Razorpay, Stripe) and third-party APIs (Google Maps, Firebase)"
            ]
        },
        {
            role: "Android Developer",
            company: "CodeON Infosystem Pvt. Ltd.",
            location: "Lucknow, India",
            period: "Apr 2022 - Jun 2023",
            points: [
                "Contributed to projects in HR management, e-commerce, health/nutrition and education domains",
                "Developed features using Kotlin, MVVM architecture and Jetpack components",
                "Integrated Firebase services (Authentication, Firestore, Cloud Messaging)"
            ]
        }
    ],

    skills: [
        {group: "Languages", items: ["Kotlin", "Java", "Dart"]},
        {group: "Frameworks", items: ["Android SDK", "Jetpack Compose", "Flutter", "React Native"]},
        {group: "Libraries", items: ["Coroutines & Flow", "Retrofit", "Room", "Hilt", "WorkManager", "Socket.IO / WebSockets"]},
        {group: "Tools", items: ["Firebase", "Crashlytics", "REST APIs", "SQL", "Git", "Android Studio", "Play Console publishing"]},
        {group: "Platforms", items: ["Android", "iOS (via Flutter)"]}
    ],

    projects: [
        {
            name: "Fluent German Club",
            tech: "Flutter, Firebase, Dart",
            year: "2024",
            link: "https://play.google.com/store/apps/details?id=com.henryharvin.fluentgermanclub",
            points: [
                "Developed a German language learning platform with interactive lessons and quizzes",
                "Implemented progress tracking, cloud sync and offline mode support",
                "Integrated user authentication, in-app purchases and real-time data storage through Firebase"
            ]
        },
        {
            name: "PetZoo",
            tech: "Kotlin, MVVM, Google Maps API, Firebase, Razorpay",
            year: "2023",
            link: BASE_URL + "petzoo/",
            points: [
                "Developed a location-based Android app to connect users with nearby pets",
                "Integrated Google Maps API for real-time nearby pet discovery and REST APIs for dynamic content",
                "Integrated Razorpay payment gateway and Firebase push notifications for user engagement"
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
    phone: "+91 8266817572",
    linkedin: "https://linkedin.com/in/aasifali1385",
    github: "",
    website: ""
});
