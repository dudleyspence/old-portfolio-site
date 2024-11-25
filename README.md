# **Old Portfolio**

**Description**  
This project is an earlier version of my personal portfolio, showcasing my skills, projects, and contact information. The portfolio is designed to provide a comprehensive overview of my professional journey and technical expertise, presented through a clean and responsive single-page web interface.

----------

## **Features**

-   **Skills Section**: A simple graphic showing my skillset, separated into four subsections of software developement.
-   **Experience**: A simple experience flip card layout alowing for quick viewing of the consise details with a more verbose description on the flip side.
-   **Projects Showcase**: A curated list of completed projects in an accordian format, each with a description and link to view live or on GitHub.
-   **Contact Form**: A simple form for visitors to get in touch directly from the portfolio utilising the web3forms API.
-   **Responsive Design**: The portfolio is designed to function well on desktop, tablet, and mobile devices.
-   **Light and Dark Mode**: The user has the option to select a light/dark theme for an enhanced user experience in different viewing environments.

----------

## **Technologies Used**

-   **HTML**: Structure of the portfolio.
-   **CSS**: Styling for the layout and aesthetics.
-   **JavaScript**: Interactive elements like navigation and form validation.

----------

## **How to Use**

1.  Clone this repository to your local machine:
    
    `git clone https://github.com/dudleyspence/old-portfolio-site.git` 
    
2.  Open the project folder and launch the `index.html` file in your browser.

4.  Navigate through the sections using the navbar to explore the portfolio.

----------

## **Code Overview**

### **HTML Structure**

-   **`index.html`**: The main file containing the overall structure of the portfolio.
    -   Sections include:
        -   **Skills**
        -   **Experience**
        -   **Projects**
        -   **Contact**
    -   Navbar links for smooth navigation between sections.

### **CSS Styling**

-   **`index.css`**: Defines the layout, colour scheme, imported font, and overall design.
-  All other pages or large complex components have an individual css file to apply separation of concerns and maintain readbility.

### **JavaScript Functionality**

-   **`index.js`**
	+ Dynamic class control for features such as theme toggling
	+ Nav bar open/close functionality
	+ Dynamic png images for dark/light mode
	+ Tooltip functionality
-   **`accordian.js`**
	+ Opening and close dynamic CSS for the accordian. Utilitising logic from Web3Schools.
-   **`thanks.js`**
	+ maintains the chosen theme when redrecting to the thank you page of contact form


----------

## **Future Enhancements**

-   **Modernisation**: Upgraded the portfolio with the modern Next.js. - COMPLETE

----------

## **Contributing**

This project is archived, but if you want to use it as a base or suggest improvements, feel free to fork the repository and submit pull requests.

----------

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
