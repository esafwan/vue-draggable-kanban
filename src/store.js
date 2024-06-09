// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    columns: [
        {
            "id": 1,
            "name": "Active",
            "count": 3,
            "col": [
                {
                    "id": 1,
                    "name": "Who is there?",
                    "index": 1,
                    "assigned": "johny"
                },
                {
                    "id": 2,
                    "name": "No one came.",
                    "index": 2,
                    "assigned": "ajith"
                },
                {
                    "id": 3,
                    "name": "Alright then.",
                    "index": 3,
                    "assigned": "raihan"
                },
                {
                    "id": 4,
                    "name": "Card 4",
                    "index": 3,
                    "assigned": "raihan"
                }
            ]
        },
        {
            "id": 2,
            "name": "Pause", 
            "count": 3,
            "col": [
                {
                    "id": 1,
                    "name": "Job well done.",
                    "index": 1,
                    "assigned": "johny"
                },
                {
                    "id": 2,
                    "name": "Win a trophy.",
                    "index": 2,
                    "assigned": "ajith"
                },
                {
                    "id": 3,
                    "name": "Invest, get rich.",
                    "index": 3,
                    "assigned": "raihan"
                }
            ]
        },
        {
            "id": 3,
            "name": "Inactive", 
            "count": 3,
            "col": [
                {
                    "id": 1,
                    "name": "Do the job",
                    "index": 1,
                    "assigned": "johny"
                },
                {
                    "id": 2,
                    "name": "Check the job",
                    "index": 2,
                    "assigned": "ajith"
                },
                {
                    "id": 3,
                    "name": "All ok?",
                    "index": 3,
                    "assigned": "raihan"
                }
            ]
        },
        {
            "id": 4,
            "name": "Archived", 
            "count": 3,
            "col": [
                {
                    "id": 1,
                    "name": "All fine?",
                    "index": 1,
                    "assigned": "johny"
                },
                {
                    "id": 2,
                    "name": "I am done.",
                    "index": 2,
                    "assigned": "ajith"
                },
                {
                    "id": 3,
                    "name": "Ok, go ahead?",
                    "index": 3,
                    "assigned": "raihan"
                }
            ]
        }
    ]
  },
  mutations: {
    updateColumnCards(state, payload) {
      const column = state.columns.find(c => c.id === payload.columnId);
      if (column) {
        column.col = payload.cards.map((card, index) => ({ ...card, index })); // Update index as well
      }
    }
  },
  actions: {},
  modules: {}
});
