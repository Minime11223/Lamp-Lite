// This file contains the JavaScript code for the Lamp Lite website.
// It may include functionality for interactivity, such as handling user input,
// fetching data, or manipulating the DOM.

document.addEventListener('DOMContentLoaded', () => {
    // Example functionality: Fetch and display political topics
    const topicsContainer = document.getElementById('topics');

    async function fetchTopics() {
        try {
            const response = await fetch('https://api.example.com/political-topics');
            const topics = await response.json();
            displayTopics(topics);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    }

    function displayTopics(topics) {
        topicsContainer.innerHTML = '';
        topics.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.className = 'topic';
            topicElement.innerHTML = `
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
            `;
            topicsContainer.appendChild(topicElement);
        });
    }

    fetchTopics();
});