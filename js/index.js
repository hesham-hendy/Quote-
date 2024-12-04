

document.addEventListener("DOMContentLoaded", function() {  
    var quotes = [  
        { quote: "“Invest in basic research and recruit the best minds.”", author: "* Ahmed H. Zewail" },  
        { quote: "“If you can't say the truth, don't applaud falsehood.”", author: "* Sheikh Mohammed Al-Shaarawy" },  
        { quote: "“You only live once, but if you do it right, once is enough.”", author: "* Mae West" },  
        { quote: "“Be the change that you wish to see in the world.”", author: "* Mahatma Gandhi" },  
        { quote: "“It is better to be hated for what you are than to be loved for what you are not.”", author: "* Andre Gide" }  
    ];  

    var currentIndex = 0;  

    function shuffleQuotes() {  
        for (let i = quotes.length - 1; i > 0; i--) {  
            const j = Math.floor(Math.random() * (i + 1));  
            [quotes[i], quotes[j]] = [quotes[j], quotes[i]];  
        }  
    }  

    function getQuotes() {  
        if (currentIndex >= quotes.length) {  
            currentIndex = 0; 
            shuffleQuotes(); 
        }  
        document.getElementById("quote").innerText = quotes[currentIndex].quote;  
        document.getElementById("author").innerText = quotes[currentIndex].author;  
        currentIndex++;  
    }  
   
    document.getElementById("quoteButton").addEventListener("click", getQuotes);  

    shuffleQuotes();  
});  