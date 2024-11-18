const pricingData = {
    "socialMediaManagement": [
      {
        title: "Basic Package",
        monthlyPrice: 8000,
        yearlyPrice: 8000 * 12, // Assuming no discount for yearly plan
        description: "Perfect for basic social media needs.",
        features: [
          "Profile Setup & Optimization (up to 2 platforms)",
          "10 Custom Posts per Month",
          "Basic Analytics & Monthly Report",
          "1 Strategy Consultation (30 minutes)",
        ],
        actionLabel: "Get Started",
      },
      {
        title: "Growth Package",
        monthlyPrice: 15000,
        yearlyPrice: 15000 * 12 * 0.9, // Example 10% yearly discount
        description: "Ideal for growing brands with moderate needs.",
        features: [
          "Profile Optimization (up to 3 platforms)",
          "15-20 Custom Posts per Month",
          "Weekly Analytics Report",
          "2 Strategy Consultations (45 minutes each)",
          "Moderate Community Engagement",
          "1 Paid Ad Campaign Setup",
        ],
        actionLabel: "Get Started",
        popular: true,
      },
      {
        title: "Professional Package",
        monthlyPrice: 30000,
        yearlyPrice: 30000 * 12 * 0.85, // Example 15% yearly discount
        description: "Comprehensive social media management.",
        features: [
          "Profile Management on all Major Platforms",
          "25-30 Posts per Month",
          "Daily Analytics & Reports",
          "Weekly Strategy Sessions (1 hour each)",
          "Full Community Engagement",
          "Up to 2 Ad Campaigns",
          "Influencer Collaboration",
        ],
        actionLabel: "Get Started",
      },
      {
        title: "Enterprise Package",
        description: "Tailored solutions for large enterprises.",
        features: [
          "Complete Social Media Management",
          "Unlimited Posts & Stories",
          "Dedicated Account Manager",
          "Multi-Ad Campaign Management",
          "Advanced Influencer Partnerships",
        ],
        actionLabel: "Contact Sales",
        exclusive: true,
      },
    ],
    "videoProduction": [
      {
        title: "Basic Package",
        monthlyPrice: 15000,
        description: "Simple and effective video solutions.",
        features: [
          "Up to 2-minute videos",
          "Basic editing and sound mixing",
          "1 Revision",
        ],
        actionLabel: "Get Started",
      },
      {
        title: "Standard Package",
        monthlyPrice: 30000,
        description: "High-quality video production.",
        features: [
          "Up to 5-minute videos",
          "Advanced editing and motion graphics",
          "2 Revisions",
        ],
        actionLabel: "Get Started",
        popular: true,
      },
      {
        title: "Professional Package",
        monthlyPrice: 60000,
        description: "Professional-grade videos with advanced features.",
        features: [
          "Up to 10-minute videos",
          "Advanced effects, titles, and color grading",
          "3 Revisions",
        ],
        actionLabel: "Get Started",
      },
      {
        title: "Enterprise Package",
        description: "Fully custom video solutions for enterprises.",
        features: [
          "Custom-length videos",
          "Full-scale effects and 3D elements",
          "Unlimited Revisions",
        ],
        actionLabel: "Contact Sales",
        exclusive: true,
      },
    ],
    "websiteDevelopment": [
    {
      title: "Basic Package",
      monthlyPrice: 20000,
      yearlyPrice: 20000 * 12,
      description: "Simple static websites for personal or small business needs.",
      features: [
        "Static website (up to 5 pages)",
        "Basic SEO optimization",
        "Responsive design",
        "1 Revision",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Standard Package",
      monthlyPrice: 50000,
      yearlyPrice: 50000 * 12 * 0.9, // Example 10% yearly discount
      description: "Dynamic websites for growing businesses.",
      features: [
        "Dynamic website (up to 10 pages)",
        "Basic CMS Integration",
        "SEO Optimization",
        "Responsive design",
        "2 Revisions",
      ],
      actionLabel: "Get Started",
      popular: true,
    },
    {
      title: "Professional Package",
      monthlyPrice: 100000,
      yearlyPrice: 100000 * 12 * 0.85, // Example 15% yearly discount
      description: "Custom-designed websites for advanced needs.",
      features: [
        "Fully custom website (up to 15 pages)",
        "Advanced CMS Integration",
        "Custom animations",
        "SEO Optimization",
        "Responsive design",
        "3 Revisions",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Enterprise Package",
      description: "Enterprise-grade websites tailored for large-scale operations.",
      features: [
        "Unlimited pages with advanced scalability",
        "Custom CMS solutions",
        "E-commerce functionality",
        "SEO & Performance Optimization",
        "Dedicated maintenance support",
      ],
      actionLabel: "Contact Sales",
      exclusive: true,
    },
  ],
  "ApplicationDevelopment": [
    {
      title: "Basic Package",
      monthlyPrice: 40000,
      yearlyPrice: 40000 * 12,
      description: "Entry-level native app development.",
      features: [
        "Basic native app (iOS or Android)",
        "Simple UI/UX Design",
        "Up to 5 Screens",
        "1 Revision",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Standard Package",
      monthlyPrice: 80000,
      yearlyPrice: 80000 * 12 * 0.9, // Example 10% yearly discount
      description: "Cross-platform app solutions for mid-scale businesses.",
      features: [
        "Cross-platform app (iOS and Android)",
        "Moderate UI/UX Design",
        "Up to 10 Screens",
        "API Integration",
        "2 Revisions",
      ],
      actionLabel: "Get Started",
      popular: true,
    },
    {
      title: "Professional Package",
      monthlyPrice: 150000,
      yearlyPrice: 150000 * 12 * 0.85, // Example 15% yearly discount
      description: "Advanced app solutions with custom features.",
      features: [
        "Advanced native or cross-platform app",
        "Custom UI/UX Design",
        "Unlimited Screens",
        "Advanced API Integration",
        "Push Notifications",
        "3 Revisions",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Enterprise Package",
      description: "Enterprise-grade applications with custom solutions.",
      features: [
        "Enterprise-level app with advanced scalability",
        "Custom Features & Integrations",
        "Performance Optimization",
        "Post-launch Maintenance & Support",
      ],
      actionLabel: "Contact Sales",
      exclusive: true,
    },
  ],
  };
  
  export default pricingData;
  