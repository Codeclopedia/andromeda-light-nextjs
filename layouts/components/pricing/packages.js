const packages = {
    socialMediaManagement: [
      {
        name: "Basic Package",
        price: "₹8,000/month",
        description: "Great for small businesses and startups starting their social media journey.",
        services: [
          "Profile Setup & Optimization (up to 2 platforms)",
          "10 Custom Posts per Month (graphics, captions, hashtags)",
          "Basic Analytics & Monthly Report",
          "1 Strategy Consultation (30 minutes)"
        ]
      },
      {
        name: "Growth Package",
        price: "₹15,000/month",
        description: "Ideal for businesses aiming to scale engagement and visibility.",
        services: [
          "Profile Optimization (up to 3 platforms)",
          "15-20 Custom Posts per Month (high-quality visuals, captions)",
          "Weekly Analytics Report & Insights",
          "2 Strategy Consultations per Month (45 minutes each)",
          "Moderate Community Engagement (responding to comments and messages)",
          "1 Paid Ad Campaign Setup & Guidance"
        ]
      },
      {
        name: "Professional Package",
        price: "₹30,000/month",
        description: "Best suited for brands seeking a professional, high-engagement social presence.",
        services: [
          "Profile Management on all Major Platforms",
          "25-30 Posts per Month (premium graphics, captions)",
          "Daily Analytics, Detailed Monthly Report",
          "Weekly Strategy Sessions (1 hour each)",
          "Full Community Engagement (active comment/message responses)",
          "Up to 2 Ad Campaigns with Setup & Management",
          "Influencer Collaboration & Content Planning"
        ]
      },
      {
        name: "Enterprise Package",
        price: "Custom Pricing (starting at ₹50,000/month)",
        description: "Designed for established businesses looking for comprehensive, high-touch social media management.",
        services: [
          "Complete Social Media Management across Platforms",
          "Unlimited Posts & Stories (tailored visuals & copy)",
          "Daily Analytics, In-depth Reporting, and ROI Tracking",
          "Dedicated Account Manager & Strategy Team",
          "Full Community Engagement & Support",
          "Multi-Ad Campaign Management with Optimization",
          "Advanced Influencer Partnerships and Content Strategy"
        ]
      }
    ],
  
    videoProduction: [
      {
        name: "Basic Package",
        price: "₹15,000/project",
        description: "Ideal for small businesses or startups needing essential video content.",
        services: [
          "Video Length: Up to 2 minutes",
          "Editing: Basic cuts, transitions, and color correction",
          "Audio: Background music and basic sound mixing",
          "Deliverables: One final video in HD format",
          "1 Revision"
        ]
      },
      {
        name: "Standard Package",
        price: "₹30,000/project",
        description: "Perfect for businesses looking for engaging and polished video content.",
        services: [
          "Video Length: Up to 5 minutes",
          "Editing: Advanced transitions, color grading, and titles",
          "Audio: Licensed background music, sound mixing",
          "Additional: 1-2 Motion Graphics",
          "Deliverables: HD and social media-ready formats",
          "2 Revisions"
        ]
      },
      {
        name: "Professional Package",
        price: "₹60,000/project",
        description: "Best suited for brands seeking high-quality production for campaigns.",
        services: [
          "Video Length: Up to 10 minutes",
          "Editing: Advanced effects, titles, and professional color grading",
          "Audio: Customized sound design, voiceover integration",
          "Additional: Multiple Motion Graphics and Intro/Outro",
          "Deliverables: 4K and optimized for all platforms",
          "3 Revisions"
        ]
      },
      {
        name: "Enterprise Package",
        price: "Custom Pricing (starting at ₹1,00,000/project)",
        description: "Tailored for large-scale productions with comprehensive video needs.",
        services: [
          "Video Length: Custom (ideal for detailed content or series)",
          "Editing: Full-scale effects, advanced graphics, cinematic color grading",
          "Audio: Custom sound design, voiceovers, music licensing",
          "Additional: Complex Motion Graphics, 3D Elements",
          "Deliverables: Full HD/4K across all required formats",
          "Unlimited Revisions within project scope",
          "Dedicated Project Manager & Team"
        ]
      }
    ],
  
    webAppDevelopment: [
      {
        name: "Basic Package",
        price: "₹20,000 – ₹40,000",
        website: {
          type: "Static website (up to 5 pages)",
          features: ["Basic design", "Contact form", "Responsive layout"],
          techStack: ["HTML", "CSS"],
          deliveryTime: "2 weeks",
          revisions: "1 Revision"
        },
        app: {
          type: "Basic native app (iOS or Android)",
          features: ["Simple interface", "No backend integration"],
          deliveryTime: "3-4 weeks",
          revisions: "1 Revision"
        }
      },
      {
        name: "Standard Package",
        price: "₹50,000 – ₹80,000",
        website: {
          type: "Dynamic website (up to 10 pages)",
          features: ["CMS integration (e.g., WordPress)", "SEO-optimized"],
          techStack: ["HTML", "CSS", "WordPress"],
          deliveryTime: "3-4 weeks",
          revisions: "2 Revisions"
        },
        app: {
          type: "Cross-platform app (iOS and Android)",
          features: ["Simple backend integration", "Push notifications"],
          deliveryTime: "1-2 months",
          revisions: "2 Revisions"
        }
      },
      {
        name: "Professional Package",
        price: "₹1,00,000 – ₹1,50,000",
        website: {
          type: "Fully custom website with advanced design and CMS (up to 15 pages)",
          features: ["eCommerce integration", "API connections"],
          techStack: ["HTML", "CSS", "JavaScript", "PHP/WordPress"],
          deliveryTime: "1-2 months",
          revisions: "3 Revisions"
        },
        app: {
          type: "Advanced app (iOS and Android)",
          features: ["Secure login", "Payment gateway", "Custom UI/UX"],
          deliveryTime: "2-3 months",
          revisions: "3 Revisions"
        }
      },
      {
        name: "Enterprise Package",
        price: "Custom Pricing (starting at ₹3,00,000)",
        website: {
          type: "Enterprise-level web or eCommerce site",
          features: ["Advanced functionality", "Analytics integration", "Multi-language support"],
          techStack: ["Full-stack options (React, Node.js, AWS)"],
          deliveryTime: "3+ months"
        },
        app: {
          type: "High-end, feature-rich app with advanced security and scalability",
          features: ["AI integration", "Real-time updates", "Extensive backend"],
          deliveryTime: "4-6 months"
        }
      }
    ]
  };
  
  export default packages;
  