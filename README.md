
# Bight and Delight

**Bight and Delight** is a modern, interactive food ordering web application designed to offer users a seamless experience browsing, filtering, and ordering a wide variety of food items. The platform integrates an intelligent chatbot to assist users in making choices and answering queries in real time.

---

## Features

- Multi-page food ordering website with categorized menu and detailed food items  
- Dynamic filtering by food category and price  
- Order form to place orders directly from the site  
- Intelligent chatbot integration powered by Dialogflow (custom chatbot in progress)  
- Responsive design with animations for engaging user experience  
- Recommendation system suggesting popular food items  
- Separate menu page with poster-style design for better browsing  
- Backend powered by FastAPI and MySQL for efficient data handling and order management  

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Backend: Python (FastAPI)  
- Database: MySQL  
- Chatbot: Dialogflow (initially), with plans for a custom-built chatbot  
  
---

## Project Structure
bite-and-delight
│
├── /frontend
│ ├── index7.html
│ ├── menu.html
│ ├── style7.css
│ ├── menu.css
│ ├── script7.js
│ 
│
├── /backend
│ ├── app.py # FastAPI application
│ ├── models.py # Database models
│ ├── database.py # MySQL connection setup
│ └── chatbot.py # Chatbot integration logic

---

## Installation and Setup

### Frontend
Use the `.html`, `.css`, and `.js` files from the `/frontend` folder.

### Backend
Use the `.py` files from the `/backend` folder. These can be opened in **PyCharm**. The MySQL connection setup is in `database.py`.

### Running the Server

1. Open terminal in PyCharm and run:
   uvicorn main:app --reload
   
2. This will start the local server on:
   http://localhost:8000

3. Make sure XAMPP is running for the MySQL service.
4. To expose your local backend to Dialogflow:
   - Install ngrok
   - In command prompt, navigate to your project directory and run:
   - ngrok http 8000
   - Copy the generated https URL and paste it into the Fulfillment URL in Dialogflow.

⚠️ Note: In this project, Dialogflow is already directly connected due to temporary server downtime. If needed, manual integration can also be done via Dialogflow's Integrations tab.

---

#Usage
Navigate through the menu categories

Use filters to find your favorite dishes

Place an order via the order form

Interact with the chatbot for assistance and recommendations


#Future Enhancements

Build and integrate a custom chatbot to replace Dialogflow

Add user authentication and order history

Implement payment gateway integration

Optimize for mobile devices

Enhance UI/UX with more animations and accessibility features


---

#Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.

---

## License
This project is licensed under the MIT License.

---

Contact
For any queries, contact:
Pragati Gupta
Email: guptapragati0208@gmail.com
GitHub: PragatiGupta0208



