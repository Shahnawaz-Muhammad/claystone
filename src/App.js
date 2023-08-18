import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Footer from "./components/footer";
import ServiceDetails from "./components/serviceDetails";
import Drone from "./assets/icons/drone.svg";
import smartCity from "./assets/icons/smart-city.svg";
import cctv from "./assets/icons/cctv.svg";
import security from "./assets/icons/security.svg";
import vehicle from "./assets/icons/vehicle.svg";
import ecommerce from "./assets/icons/ecommerce.svg";
import emailNotification from "./assets/icons/email-notification.svg";
import smsNotification from "./assets/icons/sms-notification.svg";
import socialMedia from "./assets/icons/social-media.svg";
import apiDevelopment from "./assets/icons/api-development.svg";
import mobileApp from "./assets/icons/mobile-app.svg";
import marketing from "./assets/icons/marketing.svg";
import callCenter from "./assets/icons/call-center.svg";
import cctvPoster from "./assets/images/cctv-poster.svg";
import securityPoster from "./assets/images/security-poster.svg";
import vehiclePoster from "./assets/images/vehicle-poster.svg";
import ecommercePoster from "./assets/images/ecommerce-poster.svg";
import emailPoster from "./assets/images/email-poster.svg";

function App() {
  const data = [
    {
      id: "1",
      icon: mobileApp,
      title: "Mobile Application",
      description: "Mob Apps Development",
      list: [
        { pointList: "Mobile Apps Development." },
        { pointList: "Software Creation." },
        { pointList: "Network Connection." },
        { pointList: "Custom Business Apps." },
        { pointList: "Increased Efficiency." },
        { pointList: "High Scalability." },
        { pointList: "Data Security." },
        { pointList: "Software Integration." },
        { pointList: "Easy Maintenance." },
        { pointList: "Customer Relationship." },
      ],
      url: "#",
    },
    {
      id: "2",
      icon: Drone,
      title: "Web Application",
      description: "Drone Based GIS Surveys & Progress Monitoring",
      list: [
        { pointList: "Mobile Apps Development." },
        { pointList: "Software Creation." },
        { pointList: "Network Connection." },
        { pointList: "Custom Business Apps." },
        { pointList: "Increased Efficiency." },
        { pointList: "High Scalability." },
        { pointList: "Data Security." },
        { pointList: "Software Integration." },
        { pointList: "Easy Maintenance." },
        { pointList: "Customer Relationship." },
      ],
      url: "#",
    },
    {
      id: "3",
      icon: smartCity,
      title: "Desktop Application",
      description: "Smart City System Integrations",
      list: [
        { pointList: "Mobile Apps Development." },
        { pointList: "Software Creation." },
        { pointList: "Network Connection." },
        { pointList: "Custom Business Apps." },
        { pointList: "Increased Efficiency." },
        { pointList: "High Scalability." },
        { pointList: "Data Security." },
        { pointList: "Software Integration." },
        { pointList: "Easy Maintenance." },
        { pointList: "Customer Relationship." },
      ],
      url: "#",
    },
    {
      id: "4",
      icon: cctv,
      poster: cctvPoster,
      title: "CCTV Planning & Implementation",
      list: [
        { pointList: "CCTV prevents crimes." },
        { pointList: "Continuous recording, access." },
        { pointList: "Property & employee safety." },
        { pointList: "Reduces crime rates." },
        { pointList: "Effective against vehicle crime." },
        { pointList: "Plate detection." },
        { pointList: "Smart city surveillance." },
        { pointList: "Observes suspicious activity." },
        { pointList: "Integrated security." },
        { pointList: "24/7 asset protection." },
      ],
      url: "#",
    },
    {
      id: "5",
      icon: security,
      poster: securityPoster,
      title: "Security Services (Guards & Escorts)",
      description:
        "Security services encompass safeguarding assets, ensuring safety through monitoring, and upholding confidentiality, integrity, availability, and accountability, with ARMSTAC SECURITY PVT LTD offering comprehensive military-managed solutions including guards, VVIP security, technology integration, and asset protection.",
      list: [
        { pointList: "Ensure safety." },
        { pointList: "Policy-based monitoring." },
        { pointList: "Guarded building access." },
        { pointList: "Availability & accountability." },
        { pointList: "Authentication." },
        { pointList: "Military-managed security." },
        { pointList: "Guards, VVIP, technology." },
        { pointList: "24/7 protection" },
        { pointList: "Drones, tracking, control." },
        { pointList: "Asset security." },
      ],
      url: "#",
    },
    {
      id: "6",
      icon: vehicle,
      poster: vehiclePoster,
      title: "Vehicle Tracking, Fleet & Eqpt Monitoring",
      description: "Vehicle Tracking, Fleet & Eqpt Monitoring",
      list: [
        { pointList: "Monitor Usage." },
        { pointList: "Details Management." },
        { pointList: "Automated Alerts." },
        { pointList: "Equipment Restoration." },
        { pointList: "Real-Time Monitoring." },
        { pointList: "Route Information." },
        { pointList: "Performance Tracking." },
        { pointList: "Fix Tracking Zones" },
        { pointList: "Data Insights." },
        { pointList: "System Compatibility." },
      ],
      url: "#",
    },
    {
      id: "7",
      icon: ecommerce,
      poster: ecommercePoster,
      title: "E Commerce Integration",
      description: "E Commerce Integration",
      list: [
        { pointList: "Data Transfer." },
        { pointList: "Accounting, Sales." },
        { pointList: "CRM, Marketing Included." },
        { pointList: "Streamlined Operations." },
        { pointList: "Improved Communication." },
        { pointList: "Revenue Enhancement." },
        { pointList: "Buying, Selling Online." },
        { pointList: "Digital Sales Integration" },
        { pointList: "Bank Account Management." },
        { pointList: "Timely Payments." },
      ],
      url: "#",
    },
    {
      id: "8",
      icon: emailNotification,
      poster: emailPoster,
      title: "Email Notification Integration",
      description: "Email Notification Integration",
      list: [
        { pointList: "Information Updates." },
        { pointList: "Subscriber Communication." },
        { pointList: "New Products, Features." },
        { pointList: "Promotions, Maintenance." },
        { pointList: "ERP Integration." },
        { pointList: "High Open Rates." },
        { pointList: "Customer Preparedness." },
        { pointList: "Boosts Server Reputation." },
        { pointList: "Enhanced Deliverability." },
        { pointList: "Customer Retention." },
      ],
      url: "#",
    },
    {
      id: "9",
      icon: smsNotification,
      title: "SMS Notification Integration",
      description: "SMS Notification Integration",
      list: [
        { pointList: "Push & SMS Notifications." },
        { pointList: "Customer Engagement." },
        { pointList: "SMS Alerts." },
        { pointList: "Text Alerts." },
        { pointList: "Urgent, Non-Urgent." },
        { pointList: "Large Group Messages." },
        { pointList: "SMS Bundles." },
        { pointList: "Advertisements, Progress." },
        { pointList: "Telecom Providers." },
        { pointList: "Business Updates." },
      ],
      url: "#",
    },
    {
      id: "10",
      icon: socialMedia,
      title: "Social Media Integration",
      description: "Social Media Integration",
      list: [
        { pointList: "Social Media Integration." },
        { pointList: "Connecting Brands." },
        { pointList: "Marketing Extension." },
        { pointList: "Time-Saving Solution." },
        { pointList: "Diverse Ecosystem." },
        { pointList: "Automation Key." },
        { pointList: "Social Share Buttons." },
        { pointList: "Social Login." },
        { pointList: "Social Photos, Videos." },
        { pointList: "Expand Network." },
      ],
      url: "#",
    },
    {
      id: "11",
      icon: apiDevelopment,
      title: "API Development & Integration",
      description: "API Development & Integration",
      list: [
        { pointList: "API Basics." },
        { pointList: "Information Retrieval." },
        { pointList: "App Communication." },
        { pointList: "API Expertise." },
        { pointList: "Secure, Robust Code." },
        { pointList: "Successful Integrations." },
        { pointList: "Mobile, Cloud APIs." },
        { pointList: "Social Media Integration." },
        { pointList: "Google APIs." },
        { pointList: "Monetize with Us." },
      ],
      url: "#",
    },

    {
      id: "12",
      icon: marketing,
      title: "Social Media Marketing",
      description: "Social Media Marketing",
      list: [
        { pointList: "Easier Communication." },
        { pointList: "Global Village." },
        { pointList: "Social Media Marketing." },
        { pointList: "Platforms & Goals." },
        { pointList: "Engaging Campaigns." },
        { pointList: "Measure Buzz." },
        { pointList: "Successful Examples." },
        { pointList: "Management Tools." },
        { pointList: "Benefits & Impact." },
        { pointList: "Social Media Types." },
      ],
      url: "#",
    },
    {
      id: "13",
      icon: callCenter,
      title: "Unified Call Center",
      description: "Unified Call Center",
      list: [
        { pointList: "Efficient Service Desk." },
        { pointList: "Productive Solution." },
        { pointList: "Incident Awareness." },
        { pointList: "Performance Tracking." },
        { pointList: "24x7 Support." },
        { pointList: "Hierarchical Escalation." },
        { pointList: "Change Management." },
        { pointList: "Service Levels." },
        { pointList: "Customer Experience." },
        { pointList: "Network Monitoring." },
      ],
      url: "#",
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services data={data} />} />
        <Route path="/services/:id" element={<ServiceDetails data={data} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
