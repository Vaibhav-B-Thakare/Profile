
const searchInput = document.getElementById('searchInput');
const topicsList = document.getElementById('topicsList');
let allTopics = [];

fetch('topics.json')
    .then(response => response.json())
    .then(data => {
        allTopics = data;
        displayTopics(allTopics);
    });

function displayTopics(topics) {
    topicsList.innerHTML = '';
    topics.forEach(topic => {
        const div = document.createElement('div');
        div.className = 'topic';
        const link = document.createElement('a');
        link.href = topic.url;
        link.textContent = topic.name;
        link.target = "_blank";
        div.appendChild(link);
        topicsList.appendChild(div);
    });
}

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const filteredTopics = allTopics.filter(topic =>
        topic.name.toLowerCase().includes(filter)
    );
    displayTopics(filteredTopics);
});
