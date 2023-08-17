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
// import MovingBox from "./components/moving-box";

function App() {
  const data = [
    {
      id: "1",
      icon: Drone,
      title: "Drone Based GIS Surveys & Progress Monitoring",
      description: "Drone Based GIS Surveys & Progress Monitoring",
      url: "#",
    },
    {
      id: "2",
      icon: smartCity,
      title: "Smart City System Integrations",
      description: "Smart City System Integrations",
      url: "#",
    },
    {
      id: "3",
      icon: cctv,
      poster: cctvPoster,
      title: "CCTV Planning & Implementation",
      description:
        "CCTV can help prevent personal and property crimes by monitoring, transmitting and recording images. Security cameras are able to record around-the-clock to ensure that you never miss an important moment. With a modern CCTV system, you can even monitor your business on your smartphone or tablet while on-the-go So its the most essential part to be planned so,For that reason, a CCTV camera is a fundamental tool that keeps your property secure, along with maintaining the well-fare of your company's employees and operations. It promotes the safety of the space, reduces crime rates, as well as deters potential smash-and-grabbers from damaging your property.Indeed, CCTV has shown a growing effectiveness in deterring against vehicle crime, with vehicle crime particularly (including theft of and from vehicles) decreasing approximately 51% in those car parks deploying CCTV.",
      heading1: "",
      heading1Desc:
        "With the support of IP CCTV surveillance we can detect the vehicle number plate to trace the movement with in city through metaphase. Smart city CCTV surveillance will also provide the face search with in the Smart city covered Area and able to observe the suspicious activity with in the Smart city covered area.",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "4",
      icon: security,
      poster: securityPoster,
      title: "Security Services (Guards & Escorts)",
      description: "Security Services (Guards & Escorts)",
      heading1: "What is meant by security services?",
      heading1Desc:
        "Most of the work that a security service does is to make sure things stay safe and uneventful during day-to-day business. The kind of monitoring they do largely depend on the policies set out by management, but security guards are usually responsible for knowing who is in the building.",
      heading2: "What are the goals of security? ",
      heading2Points: {
      heading2Desc:
        "The five security goals are", 
        list: [
          {pointList: "confidentiality"},
          {pointList: "availability"},
          {pointList: "integrity"},
          {pointList: "accountability"},
          {pointList: "assurance."},
        ],}
       ,
      heading3: "Strategic Security Solutions For Ultimate Protection",
      heading3Desc:
        "Our Group Security Company ARMSTAC SECURITY PVT LTD is immensely skilled, trained and managed by military veterans with full scale combat experience and amply equipped to provide Guards and VVIP Security protocols and services for you enterprise at sites, locations and assets you assign 24/7. Its is fully linked to our Call Center and can feed in as sensors to your internal security Control room or nerve center. We integrate Guards, escorts, VVIP protection with Drones (may you wish so), Vehicle Tracking System, E-Tags, Gate Access Control Mechanism and Control Room etcetera so that you never lose track of your assets",
      
        url: "#",
    },
    {
      id: "5",
      icon: vehicle,
      poster: vehiclePoster,
      title: "Vehicle Tracking, Fleet & Eqpt Monitoring",
      description: "Vehicle Tracking, Fleet & Eqpt Monitoring",
      heading1: "Fleet Inventory Tracking ",
      heading1Desc:
        "Fleet inventory means utility trucks, specialty equipment and similar goods owned by any Grantor that are held for sale or that comprise such Grantor's leased and rental equipment fleet. You can track all of the descriptive details that you need to manage your fleet, including the year, make, model, serial number, and all of the information that is critical to your business.",
      heading2: "Preventative Maintenance ",
      heading2Desc:
        "Preventive maintenance (PM) is the regular and routine maintenance of equipment and assets in order to keep them running and prevent any costly unplanned downtime from unexpected equipment failure. A successful maintenance strategy requires planning and scheduling maintenance of equipment before a problem occurs. Automated and color-coded preventive maintenance alerts automatically display each time you start the program.",
      heading3: "Repair Maintenance",
      heading3Desc:
        "The Repair and Maintenance sector restores machinery, equipment, and other products to working order. These establishments also typically provide general or routine maintenance (i.e., servicing) on such products to ensure they work efficiently and to prevent breakdown and unnecessary repairs. Monitoring trends in repair maintenance can help you decide whether to keep or retire a vehicle or piece of equipment. Upload a photo and itemize parts and labor costs. With Fleet Maintenance.",
      url: "#",
    },
    {
      id: "6",
      icon: ecommerce,
      poster: ecommercePoster,
      title: "E Commerce Integration",
      description: "E Commerce Integration",
      heading1Desc:
        "E-Commerce integration is a data transfer between your e-Commerce platform, and the five critical components of Accounting, inventory, sales, CRM, and marketing. It is all part of an overall E-Commerce strategy. Now paying your dues will become way too easy through our E-commerce Service. It integrates the manufacturing, inventory, orders, financials, CRM, and other such functionalities into one big system and thus allows you to operate from one location. It not only improves the communications between the internal systems but also helps you improve your revenue.E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.",

      url: "#",
    },
    {
      id: "7",
      icon: emailNotification,
      poster: emailPoster,
      title: "Email Notification Integration",
      description: "Email Notification Integration",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "8",
      icon: smsNotification,
      title: "SMS Notification Integration",
      description: "SMS Notification Integration",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "9",
      icon: socialMedia,
      title: "Social Media Integration",
      description: "Social Media Integration",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "10",
      icon: apiDevelopment,
      title: "API Development & Integration",
      description: "API Development & Integration",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "11",
      icon: mobileApp,
      title: "Mob Apps Development",
      description: "Mob Apps Development",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "12",
      icon: marketing,
      title: "Social Media Marketing",
      description: "Social Media Marketing",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
      url: "#",
    },
    {
      id: "13",
      icon: callCenter,
      title: "Unified Call Center",
      description: "Unified Call Center",
      heading1: "",
      heading1Desc: "",
      heading2: "",
      heading2Desc: "",
      heading3: "",
      heading3Desc: "",
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
