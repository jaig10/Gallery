# Image Gallery

This repository hosts a Next.js application that taps into the Reddit API to curate and present an immersive gallery experience, showcasing a variety of images sourced from Reddit communities. With seamless integration of `react-photo-album` and `yet-another-react-lightbox`, users can explore captivating visuals in a user-friendly interface.

## Features

### 1. Responsive Grid Layout

The gallery employs a dynamic grid layout that gracefully adjusts to diverse screen sizes and orientations, ensuring an optimal viewing experience across devices ranging from smartphones to desktops. 

### 2. Interactive Lightbox Viewer

Upon selecting an image, users are seamlessly transitioned into a lightbox viewer, which serves as a focal point for engaging with individual images in detail. The lightbox offers an array of interactive features:

- **Zoom Functionality**: Users can zoom in or out to scrutinize intricate details or obtain a broader perspective, facilitating a closer examination of the visual content.
- **Slideshow Mode**: Enabling slideshow mode transforms the viewing experience into a captivating journey, automatically transitioning between images at predefined intervals, offering a hands-free exploration.
- **Navigation Controls**: Intuitive navigation arrows empower users to effortlessly traverse through the image collection, fostering seamless exploration and discovery.
- **Fullscreen Capability**: With the option to toggle fullscreen mode, users can maximize the viewing area, eliminating distractions and fostering an immersive viewing experience that prioritizes the visual narrative.

### 3. Dynamic Content Fetching

Harnessing the power of the Reddit API, the gallery dynamically fetches and updates content, ensuring a fresh and diverse selection of images for users to explore with each visit. This dynamic content fetching mechanism enriches the user experience by presenting a curated assortment of captivating visuals sourced from various Reddit communities, catering to a broad spectrum of interests and preferences.

## Installation and Setup

To deploy the Reddit Image Gallery locally, follow these straightforward steps:

1. **Clone the Repository**: Begin by cloning the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/jaig10/Gallery.git
   ```

2. **Navigate to the Project Directory**: Access the cloned repository directory:
   ```bash
   cd Gallery
   ```

3. **Install Dependencies**: Execute the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Run the Development Server**: Initiate the development server to launch the gallery application:
   ```bash
   npm run dev
   ```

5. **Access the Gallery**: Open your preferred web browser and navigate to `http://localhost:3000` to explore the Reddit Image Gallery.

## Usage

Upon launching the gallery application, users can seamlessly interact with the visual content using the following guidelines:

- **Navigation**: Browse through the image collection by scrolling vertically or horizontally within the responsive grid layout.
- **Image Selection**: Click on any image to activate the lightbox viewer, initiating an immersive viewing experience.
- **Lightbox Controls**: Within the lightbox viewer, utilize the provided controls to zoom, navigate, toggle fullscreen mode, and activate slideshow mode as per your preferences.
- **Dynamic Content**: Experience a diverse array of captivating visuals sourced from Reddit communities, with content dynamically fetched and updated to ensure freshness and relevance.

