const getCards = () => {
    return candidates.map(candidate => {
        return `<div class="card">
            <img class="card-image" src="images/${candidate.id}.jpg">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}

const addVote = (index, candidate, votesEl) => {
    if (!winner) {
        candidates[index].votes++;
        votesEl.textContent = candidates[index].votes;
        isWinner(candidate, candidates[index].votes);
    }
}

const isWinner = (candidate, votes) => {
    if (votes === 272) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

const setWinnerLoser = (candidate) => {
    if (candidate === "modi") {
        document.querySelector('.btn-modi').textContent = "WINNER";
        document.querySelector('.btn-rahul').textContent = "LOSER";
    } else {
        document.querySelector('.btn-rahul').textContent = "WINNER";
        document.querySelector('.btn-modi').textContent = "LOSER";
    }
}
const candidates = [
    {
        id: "modi",
        name: "Narendra Modi",
        party: "Bharatiya Janata Party",
        votes: 260,
    },
    {
        id: "rahul",
        name: "Rahul Gandhi",
        party: "Indian National Congress",
        votes: 260,
    }
]
let winner = false;
const cards = document.querySelector('.cards');
cards.innerHTML = getCards();
const cardButtons = document.querySelectorAll('.card-btn');
const modiVotesEl = document.querySelector('.votes-number-modi');
const rahulVotesEl = document.querySelector('.votes-number-rahul');
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-modi')) {
            addVote(0, 'modi', modiVotesEl)
        } else {
            addVote(1, 'rahul', rahulVotesEl)
        }
    })
})