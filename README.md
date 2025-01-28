# Country Info Viewer

A web application to explore country information using data from a JSON API. You can:
- View country details (name, population, region, capital, etc.).
- Search for a country by name.
- Filter countries by continent.

---

## Features

1. **Home Page:**
   - Displays a list of all countries with their flags and basic information.
   - Search bar for filtering countries by name.
   - Dropdown to filter countries by continent (e.g., Europe, Asia, Africa, etc.).

2. **Country Details Page:**
   - Shows detailed information about a selected country:
     - Population
     - Region
     - Subregion
     - Capital
     - Border countries
   - Allows navigation to neighboring countries by clicking on the borders.

3. **Responsive Design:**
   - Works seamlessly on desktop and mobile devices.

---

## Installation Guide

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Steps to Install Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/country-info-viewer.git
   cd country-info-viewer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

4. **Build for Production:**
   To create a production build, run:
   ```bash
   npm run build
   ```

---

## How to Use

1. **Search for a Country:**
   - Use the search bar on the home page to find a country by name.

2. **Filter by Continent:**
   - Use the dropdown menu to filter countries by a specific continent.

3. **View Country Details:**
   - Click on a country card to view its detailed information.

4. **Explore Neighboring Countries:**
   - On the country detail page, click on a border country to navigate to its details.

---

## Technologies Used

- **Frontend:** React.js
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Data Source:** REST Countries API (or a local JSON file)

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

---

## License
This project is licensed under the MIT License.
