Arsal Steel Traders — Steel Trading Website
A modern, responsive business website for Arsal Steel Traders, a steel supplier serving contractors, fabricators, workshops, and industrial customers in Sialkot, Pakistan.

The website helps customers explore available steel products, learn about the business, understand the ordering process, and request quotations through the contact page or WhatsApp.

🌐 Live Website: arsalsteeltrades.vercel.app

📦 GitHub Repository: Steel-Trades-Website

Table of Contents
Overview
Features
Products and Services
Technology Stack
Project Structure
Getting Started
Available Scripts
How the Website Works
Website Pages and Components
Customization
Deployment
Troubleshooting
Future Improvements
Contributing
License
Contact
Overview
Arsal Steel Traders is a business website designed to present steel products and make it easier for customers to contact the supplier.

The website focuses on providing a clear overview of the company's products, explaining its ordering process, answering common customer questions, and encouraging visitors to request a quotation.

It serves as an online business presence where potential customers can discover products and communicate their material requirements.

Project Goals
Establish a professional online presence for Arsal Steel Traders.
Present steel product categories in an organized format.
Make quotation requests straightforward.
Provide direct contact options, including WhatsApp.
Explain the ordering and delivery process.
Help customers identify suitable materials for their projects.
Features
1. Homepage and Hero Section
The homepage introduces Arsal Steel Traders and explains its steel supply services.

It includes:

A prominent headline and business introduction.
Steel-related imagery.
A primary call to action for requesting a quotation.
Navigation to the About Us page.
Quick business information.
2. Steel Product Categories
The website presents major categories of steel products, helping customers identify materials relevant to their projects.

Each category includes a description, common product types, typical applications, and links to request a quotation or inquire through WhatsApp.

3. Why Choose Us
A dedicated section highlights the business's customer-focused approach:

Clear quotations with material, size, quantity, and pricing details.
Guidance on choosing suitable materials.
Delivery or pickup arrangements confirmed with customers.
Direct communication with the supplier.
4. How to Order
The website explains the ordering process in three steps:

Share your requirements: Provide the material type, dimensions, quantity, and other relevant specifications.
Receive a quotation: Discuss pricing and get advice about suitable materials.
Arrange delivery or pickup: Confirm availability and fulfillment arrangements with the supplier.
5. Frequently Asked Questions
The FAQ section answers common questions about:

Requesting a quotation.
Providing material specifications.
Choosing appropriate steel products.
Minimum order quantities.
Delivery and pickup.
Business location and opening hours.
6. Contact and Quotation Requests
Customers can navigate to the contact page to inquire about products and request quotations.

The website also provides direct contact options, including phone, email, and WhatsApp.

7. Responsive User Interface
The project uses modern web technologies and utility-based styling to build a structured interface that can be adapted for desktop, tablet, and mobile screens.

8. Reusable Components
The application organizes its interface into reusable components, helping keep the code modular and making future changes easier.

Products and Services
The website highlights the following steel product categories.

Steel Sheets and Plates
Flat steel products used in fabrication, cutting, bending, welding, panels, tanks, and machine parts.

Common items include:

Mild steel sheets.
Steel plates.
Checker plates.
Galvanized sheets.
Pipes and Tubes
Steel sections used in frames, railings, structures, and other construction or fabrication applications.

Common items include:

Round pipes.
Square tubes.
Rectangular tubes.
Galvanized pipes.
Bars and Rods
Steel products used in construction and general fabrication.

Common items include:

Round bars.
Square bars.
Flat bars.
Reinforcement bars.
Structural Steel Sections
Structural products used for sheds, buildings, support frames, and fabrication projects.

Common items include:

Angles.
Channels.
I-beams.
T-sections.
Product availability, specifications, pricing, and delivery arrangements should be confirmed directly with the supplier.

Technology Stack
The project uses the following technologies and tools.


Technology	Purpose
Next.js 16	React framework and application routing
React 19	Component-based user interface
JavaScript	Application logic
Tailwind CSS 4	Utility-first styling
Base UI React	UI component primitives
shadcn	UI component tooling
Lucide React	Icons
Embla Carousel	Carousel functionality
Class Variance Authority	Managing component style variants
ESLint 9	Code quality and linting
Vercel	Hosting platform for the live website
The framework and library versions are based on the project's package.json. Vercel is the hosting platform associated with the published website.

Project Structure
The repository is organized around the Next.js App Router.


Steel-Trades-Website/
│
├── app/
│   ├── components/
│   │   └── index.js
│   ├── page.js
│   ├── ...
│
├── components/
│   └── ui/
│       └── ...
│
├── lib/
│   └── ...
│
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── cta.jpg
│       └── ...
│
├── .gitignore
├── AGENTS.md
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
Important Directories and Files
app/

Contains the application's pages and homepage composition. Next.js uses this directory for App Router routes and layouts.

app/page.js

Defines the homepage. It combines the hero, quick facts, product supply, business benefits, ordering process, FAQ, and call-to-action sections.

app/components/

Contains components specific to the main website, including sections used to compose the homepage.

components/ui/

Contains reusable interface components and UI building blocks.

lib/

Contains shared utilities and configuration used throughout the application. The homepage imports business configuration from lib/site.

public/images/

Stores static images used by the website, including product and promotional imagery.

package.json

Defines the project dependencies and commands used for development, production builds, and linting.

next.config.mjs

Contains the Next.js configuration, including settings for caching, prefetching, and CSS processing.

components.json

Stores configuration for the UI component tooling.

eslint.config.mjs

Contains ESLint configuration for code quality checks.

Note: This is a high-level project structure. Additional files and nested directories may exist in the repository.
Getting Started
Follow these steps to run the project locally.

Prerequisites
Install the following software:

Node.js compatible with the installed Next.js version.
npm, which is included with Node.js.
Git.
Check your installed versions:


node --version
npm --version
git --version
1. Clone the Repository
Open a terminal and run:


git clone https://github.com/asadlatif316/Steel-Trades-Website.git
Move into the project directory:


cd Steel-Trades-Website
2. Install Dependencies
Install the dependencies defined in the project:


npm install
3. Start the Development Server
Run:


npm run dev
Once the server starts, open:

http://localhost:3000

The development server supports automatic updates as you edit application files.

4. Create a Production Build
To compile the application for production, run:


npm run build
5. Run the Production Build Locally
After a successful build, run:


npm run start
Open http://localhost:3000 to view the production version.

Available Scripts
The following scripts are defined in package.json.


Command	Description
npm run dev	Starts the Next.js development server
npm run build	Builds the application for production
npm run start	Starts the production server
npm run lint	Runs ESLint checks
How the Website Works
The application uses a component-based architecture.

Homepage Rendering
The homepage is defined in app/page.js. It imports reusable website sections and combines them into a single page.

The main sections include:

Hero — introduces the business and provides primary navigation actions.
QuickFacts — displays important business information.
Supply — presents the available product categories.
WhyChooseUs — explains the business's key benefits.
Process — describes the ordering workflow.
FAQ — answers common customer questions.
CallToAction — encourages visitors to request a quotation or contact the business.
Shared Configuration
The homepage imports the site configuration from lib/site.

This configuration is used for business contact information and the WhatsApp link. Centralizing shared values helps keep contact details consistent across the application.

Navigation and Customer Inquiries
The website directs customers toward relevant pages and contact methods.

A typical customer journey is:

Visit the homepage.
Explore steel product categories.
Review the ordering process and FAQs.
Open the contact page or WhatsApp.
Share the material requirements.
Receive a quotation directly from the business.
The website's documented workflow is based on direct customer inquiries. This README does not assume that an online shopping cart, payment gateway, or automated order-management backend exists.

Website Pages and Components
The website includes a homepage and provides navigation to the following destinations.


Page or section	Purpose
Home	Introduces the business and summarizes its products and services
About Us	Provides information about the company
Contact Us	Gives customers a way to get in touch
Quotation request	Directs customers to submit their material requirements
Product sections	Explain the available steel categories
FAQ	Answers frequently asked questions
The homepage sections are composed from reusable React components, while shared UI elements are organized separately.

Customization
Update Business Information
Review the shared configuration in lib/site to identify the current business details, phone number, email address, and WhatsApp configuration.

Update the appropriate values there when changing contact information.

Update Homepage Content
Edit app/page.js to modify the homepage's main headings, descriptions, images, and calls to action.

The page passes content and configuration into reusable components instead of placing the entire interface in one large component.

Update Images
Website images are stored in public/images/.

To replace an image:

Add the replacement image to the appropriate directory.
Update the corresponding image path in the component or page.
Check that the image displays correctly on desktop and mobile devices.
For example:


image="/images/hero.jpg"
Update Styling
The project uses Tailwind CSS 4 and reusable UI components.

Review the relevant component and stylesheet before making visual changes. Keep the layout responsive and maintain consistency across buttons, spacing, typography, and colors.

Add or Modify UI Components
Review components/ui/ for shared interface elements and app/components/ for website-specific sections.

Prefer reusing existing components when adding new sections.

Deployment
The website is published on Vercel:

https://arsalsteeltrades.vercel.app

Deploy with Vercel
Push the latest project changes to GitHub.
Sign in to Vercel.
Import the Steel-Trades-Website repository.
Confirm the detected Next.js framework settings.
Use the standard npm build command: npm run build.
Deploy the application.
Open the deployed URL and verify the pages, images, navigation, and contact links.
For subsequent deployments, connect the GitHub repository to Vercel so that supported repository updates can trigger new deployments automatically.

Deploy from the Command Line
You can also use the Vercel CLI:


npm install -g vercel
vercel
Follow the CLI prompts to configure the project.

For a production deployment, use:


vercel --prod
The deployment account must have permission to publish the project.

Troubleshooting
Dependencies Fail to Install
Try installing the dependencies again:


npm install
If the issue continues, verify your Node.js and npm versions and inspect the error message.

Port 3000 Is Already in Use
Start the development server on another port:


npm run dev -- --port 3001
Then open http://localhost:3001.

Images Are Missing
Verify the filename and extension.
Check that the image exists inside public/images/.
Use the correct path beginning with /images/.
Check capitalization because deployment environments may be case-sensitive.
Production Build Fails
Run:


npm run lint
npm run build
Review the terminal output and fix any reported errors before deploying.

Changes Do Not Appear on the Live Website
Confirm the changes were committed and pushed to the correct GitHub branch.
Check the deployment status in Vercel.
Review the build logs.
Confirm that you are opening the correct deployment URL.
Future Improvements
Potential enhancements for future versions include:

Add a detailed product catalogue with specifications and grades.
Provide dedicated pages for individual product categories.
Improve quotation requests with structured product, quantity, and delivery fields.
Add a searchable product catalogue.
Include additional company information and project photographs.
Add customer testimonials and case studies.
Improve accessibility and performance.
Add analytics to understand website traffic and customer engagement.
Introduce a backend and database if automated inquiry or order management is required.
These are possible improvements rather than claims about existing functionality.

Contributing
Contributions and suggestions are welcome.

To propose a change:

Fork the repository.
Create a feature branch.
Make your changes.
Run the available lint and build checks.
Commit and push your changes.
Open a pull request describing the changes.
Example:


git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
License
Review the repository's licensing terms before redistributing or reusing the project. If you intend to publish the project for reuse, consider adding an appropriate LICENSE file.

Contact
Arsal Steel Traders

Website: arsalsteeltrades.vercel.app
Phone: +92 334 8073177
Email: arsalsteeltraders@gmail.com
Location: Kairwali, PO Dar e Najaf, Lodhary, Sialkot, Pakistan
Business hours: Monday to Saturday, 9:00 AM – 7:00 PM
For steel product inquiries, quotations, or delivery information, contact the business directly.

Made for Arsal Steel Traders.