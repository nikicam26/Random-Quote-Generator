

var quotes = [ //array with quotes

    { quote: 'Our greatest glory is not in never falling, but in rising everytime we fall.',
      source: 'Confucius',
      citation: ' ',
      date: null,
      category: 'inspiration'
    },
    
    { quote: 'Coding is a trade job.',
      source: 'Ryan Carson',
      citation: 'TeamTreehouse Techdegree',
      date: 2017,
      category: 'education'
    },

    { quote: 'You should never give up your inner self.',
      source: 'Clint Eastwood',
      citation: ' ',
      date: null,
      category: 'politics'
    },

    { quote: 'A day without lauhter is a day wasted.',
      source: 'Charlie Chaplin',
      citation: ' about lauhter',
      date: 1928,
      category: 'humor'
    },

    { quote: 'Everything is funny, as long as it\'s happening to somebody else. ',
      source: 'Will Rogers',
      citation: ' ',
      date: null,
      category: 'humor'
    },

    { quote: 'In politics stupidity is not a handicap.',
      source: ' Napoleon Bonaparte ',
      citation: ' about stupidity in politics ',
      date: 1811,
      category: 'politics'
    },

    { quote: 'Winners never quit and quitters never win.',
      source: 'Vince Lombardi',
      citation: ' ',
      date: null,
      category: 'sports'
    },

    { quote: 'It always seems impossible untill it\'s done.',
      source: 'Nelson Mandela',
      citation: ' ',
      date: null,
      category: 'inspiration'
    }

];

var colors = [ // array with colors 

    { color: 'red',
      hex: '#8B0000'
    },
    { color: 'blue', 
      hex: '#483D8B'
    },
    { color: 'silver', 
      hex: '#C0C0C0'
    },
    { color: 'pink', 
      hex: '#C71585'
    },
    { color: 'golden',
      hex: '#DAA520'
    },
    { color: 'green',
      hex: '#9ACD32'
    }

];



function getRandomQuote () {

    var randomIndex = Math.floor(Math.random( ) * quotes.length ); // generate random number and store it in the randomIndex var
    var randQuote = quotes[randomIndex]; // store the element with random index of the qoutes array in the randQuote var
    return randQuote; // return the variable (a quotes array object)

}

function getRandomColor () {

    var randomIndex = Math.floor(Math.random( ) * colors.length ); //// generate random number and store it in the randomIndex var
    var randColor = colors[randomIndex]; // store the element with random index of the colors array in the randColor var
    return randColor; // return the variable ( a colors array object)
}

var duplicates = []; // create an empty array for storing quotes that were already displayed

function printQuote () {

        var randQuote = getRandomQuote(); // generate a random quote object and store it in the randQuote var
        var duplicateQuote = randQuote; // duplicate the the quote object and store it in the duplicateQuote var

        if (duplicates.length !== quotes.length) { /* check if the duplicate array and the
            quotes arrray have the same amount of elements.If not that means that not everyone 
            of the quotes were displayed so we continue */

                
            if ( duplicates.indexOf( duplicateQuote ) === -1) { /* Check if the random quote is already
                 displayed and it's in the duplicates array.If there is not such a element in the 
                 duplicates array we continue */
                if ( randQuote.citation === ' ' || randQuote.date === null ) { /* if we dont have information
                    about the citation or date we display the folowing content */

                    var content =  '<p class="quote"> ' +  randQuote.quote + ' </p> ' + 
                    '<p class="source">' + randQuote.source  +
                    ' <br>  <br> <h2> Category </h2>' + randQuote.category +
                    '</p>'; // this is the variable content which is going to be displayed 
                    console.log(randQuote.quote);
                    duplicates.push(duplicateQuote); //push the quote object in the duplicates array

                } else { // if we know the citation and date we display the following content 

                    var content =  '<p class="quote"> ' +  randQuote.quote + ' </p> ' + 
                    '<p class="source">' + randQuote.source  +
                    '<span class="citation">  ' + randQuote.citation + '</span>' +
                    '<span class="date"> ' + randQuote.date + ' </span>' +
                    ' <br> <br> <h2> Category </h2> ' + randQuote.category +
                    '</p>'; // this is the variable content which is going to be displayed 
                    console.log(randQuote.quote);
                    duplicates.push(duplicateQuote); //push the quote object in the duplicates array

                }

           
            document.getElementById('quote-box').innerHTML = content;  // display the content var 
            var color = getRandomColor(); // generate a random color object and store it in the color var
            document.getElementById("body").style.background = color.hex; //change the color of the body tag 
            document.getElementById("loadQuote").style.background = color.hex; // also change the color of the button so it has the same color with the body
            } else {
                printQuote(); // if the quote has alreay been displayd, we go back to the head of the function and check again if the arrays are with the same amount of elemets
            }
         } else { /* when the duplicates has the same number of elements as the quotes array
             that means every quote was displayed, so we empty the duplicates array  and start 
             displaying from beginning */
                while ( duplicates.length !== 0) {
                    duplicates.pop();
                }
            }

}

setInterval(function() { printQuote(); }, 30000); //calls the printQuote function every 30 sec.




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


