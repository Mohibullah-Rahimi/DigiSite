Full job description
Are you a tech guru that thrives when working with a team? We need someone that can execute expert level problem solving using critical thinking methodology. We are looking for someone that can think outside the box. Someone that can improve existing workflows and create new ones. Already an expert in Microsoft 0365 business applications? That’s what we are looking for! Someone with a blackbelt solving complex problems, providing exceptional end user support, and experience handling projects. You'll be a vital part of our team, handling diverse responsibilities and driving ZTERS technology initiatives forward. If you're ready to take on new challenges and make a significant impact, we want to hear from you!

Traits we are looking for to Join ZTERS!

A passion for your craft and dedication to improvement.
Learning is one of your strongest motivators.
Positive attitude when working with people.
Bring high energy and excitement every day.
Creative and challenges conventional thinking.
Dedicated to finding the best and most efficient solutions to problems.
Value’s punctuality and consistency, arriving on time and being dependable.
Your Toolbox

Can meet deadlines for work assigned using project management platform
Strong understanding and experience using Microsoft O365 (Admin Center, Exchange, Power Apps, Entra, and Azure) to provide solutions and automation practices to improve workloads.
Ability to create workflow diagrams to visualize how systems function together.
Analyze and assess application performance metrics to identify potential areas of improvement.
Propose and implement solutions to enhance system efficiency and reliability.
Critically evaluate complex application issues, identify root causes, and implementing robust solutions. Ensure that corrective actions not only resolve the immediate problem but also prevent future occurrences.
Critically evaluate potential risks associated with application changes or upgrades and suggest strategies to minimize disruptions to business operations.
Can create step by step documents to assist end users with application navigation and troubleshooting guidelines.
Strong understanding of security guidelines when implementing any system changes or decision making.
Can solve L2 end-user escalated hardware, network/VPN, and software service tickets from our Level 1 technical support using our ticket system.
Can maintain computer inventory with up-to-date changes.
Qualifications:

Bachelor’s degree in IT, Computer Science, or related field, or equivalent experience.
Experience and strong knowledge of managing applications and endpoints within O365.
Preferred experience with the following applications: ClickUp, ConnectWise, FreePBX, Rainforest, KnowBe4 and ChatGPT.
Able to lift 20-40 pounds.
4-5 years of industry experience
Working Conditions:

Fulltime In-office 7am-4pm
May require travel when needed.
Weekend Rotation with support staff.


<<<<<<< HEAD
# DigiSite

# Table of Concepts

- [Overview](#overview)
    - [Images](#images)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [Challenges](#challenges)
    - [What I learned](#What-i-learned)
    - [Continued Development](#continued-development)
    - [Instructions](#instructions)
- [Author](#author)

# Overview

DigSite presents a dynamic React E-Commerce platform, enabling users to seamlessly explore and refine products sourced from the Fake Store API by category, price, and customer rating. Offering the flexibility to sort items by price and name, users can effortlessly curate their shopping experience. With the capability to add or update products in the cart, DigSite ensures smooth transactions. Moreover, streamlined checkout processes are facilitated through a user-friendly checkout form, fortified with robust form validation mechanisms. The integration of the Context API alongside reducers ensures efficient global state management, enhancing the overall user experience.

# Images

- ![Desktop](/src/images/desktop1.png)
- ![Desktop](/src/images/desktop2.png)
- ![Mobile](/src/images/mobile1.png)
- ![Mobile](/src/images/mobile2.png)
https://super-duper-memory-wrr7g4p465xvhg6jr.github.dev/



# My Process
Defined Project Components: Begin by outlining the necessary components required for the website, such as Navbar, Hero/Home Page, Footer, etc.

File Structure Setup: Created a well-organized file structure with separate folders for components, images, pages, and utilities to maintain clarity and organization.

Installing Dependencies: Install required dependencies like React Router v6, Styled Components, and React Icons to enhance the functionality and design of the website.

Component Implementation:

Start with the Navbar component and ensure its functionality and design align with project requirements.
Follow up with the implementation of the Hero/Home Page to establish the core layout and content structure.
Integrate a Footer component to ensure consistent presence across all pages.
Global State Management Setup:

Identify the need for global state management.
Utilize the Context API paired with the useReducer hook for efficient state management.
Products Context Setup:

Create the Products Context to handle operations related to fetching and manipulating data from the Fake Store API.
Implement a dedicated product reducer to manage product-specific functionalities.
Filter Context Setup:

Establish the Filter Context to facilitate seamless product filtration based on category, price, and customer rating.
Introduce a filter reducer to handle filter-related functionalities efficiently.
Cart Context Setup:

Develop the Cart Context to oversee the display and manipulation of items within the user's cart.
Implement a cart reducer to govern cart-related operations effectively.
Checkout Page State Handling:

Determine the state variables required for the Checkout Page.
Confine the management of these variables within the Checkout Page component.
Email Address Handling:

Recognize the necessity to retain the user's email address for confirmation purposes.
Introduce a function called saveEmail within the Cart Context to capture and persist the email address within the state.
Functionality First, Styling Later:

Focus on implementing core functionalities before delving into CSS styling.
Prioritize ensuring seamless user interactions and data management.
Refine CSS and Design Elements:

Revisit the codebase to fine-tune CSS styles and incorporate design elements such as hover states and button styling.
Pay attention to detail to align with project specifications and enhance user experience.
By following these steps systematically, you can effectively build and refine your React E-Commerce website, ensuring both robust functionality and appealing design.

Built With:

- React
- Styled Components
- React Router v6
- Context API
- Hooks:
    - useState
    - useEffect
    - useContext
    - useReducer

Challenges and Solutions:

1. Background Image with Styled Components
   - Problem: Integrating a background image using styled components.
   - Solution: Import the image and apply it to the desired container in the style.js file.

2. State Management for Hamburger Button
   - Problem: Determining where to manage state for the hamburger button.
   - Solution: Manage state in the Header Component for accessibility across Navbar and Hamburger components via props.

3. Closing Mobile Menu on Link Click
   - Problem: Ensuring the mobile menu closes after clicking a link.
   - Solution: Added an onClick handler to the NavLink to toggle the state.

4. Navigation to Single Product Page
   - Problem: Enabling navigation to a single product page from the shop page.
   - Solution: Imported useParams Hook from React Router Dom to create dynamic routes based on product IDs.

5. Styling Active Page Link
   - Problem: Styling the active page link in React Router.
   - Solution: Utilize NavLink which comes with an active class by default. Nested styling for the active class inside StyledNavLink components.

6. Handling Multiple Checkboxes
   - Problem: Managing state for multiple checkboxes.
   - Solution: Implemented controlled inputs with a shared name attribute for checkboxes. Maintained checked state in an array.

7. Implementing Filters with Multiple Conditions
   - Problem: Implementing filters with multiple conditions.
   - Solution: Utilized checkboxes for categories, created separate arrays for selected values. Implemented nested filter method on the original product array.

8. Correcting GitHub Pages Deployment URL
   - Problem: Incorrect base URL on GitHub Pages deployment.
   - Solution: Utilized HashRouter instead of BrowserRouter to maintain URL structure beyond the base.

Key Learnings:

- Importing images with styled components requires names to start with a capital letter.
- Implementation of the Context API for global state management.
- Utilization of React Router v6 for navigation.
- Transition from useState to useReducer for state management.
- Utilization of HashRouter for maintaining URL structure beyond the base.
- Displaying product rating stars using React Icons with Array.from.

Future Development:

Interested in exploring authentication for user login, enabling only logged-in users to checkout. Also keen on delving into backend development or Firebase for saving user carts and pairing them with logins.

Instructions:

To run the project locally:

1. Clone the repository by clicking "Code" > "SSH" and copying the URL.
2. Open your terminal and execute:
   - git clone [paste URL]
   - cd firstn3rd
   - cd firstn3rd
   - npm install
   - npm start

To build the app in production mode:
- npm build

Author linkedIN: https://www.linkedin.com/in/rahimi2020/


