/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
    hint: str + '...'
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */

// Defining variables
var ads = [];
             
// Pushing items into the arrays                         
ads.push({ 
    "title": 'this is the title, part 1', 
    "desc" : 'this is the description, part 1',
    "color" : "#"+((1<<24)*Math.random()|0).toString(16)
});
ads.push({ 
    "title": 'title part 2', 
    "desc" : 'description part 2',
    "color" : "#"+((1<<24)*Math.random()|0).toString(16)
});
ads.push({ 
    "title": 'title part 3', 
    "desc" : 'description part 3',
    "color" : "#"+((1<<24)*Math.random()|0).toString(16)
});
ads.push({ 
    "title": 'title part 4', 
    "desc" : 'description part 4',
    "color" : "#"+((1<<24)*Math.random()|0).toString(16)
});

ads.push({ 
    "title": 'title part 5', 
    "desc" : 'description part 5' ,
    "color" : "#"+((1<<24)*Math.random()|0).toString(16)
});

//Function to determine random ad index
function rand( max ){
    return Math.floor( Math.random()*max );
    
}

var result = rand(ads.length);
//console.log(result.title);
//console.log(result.desc);

var div = document.getElementById('ad');
div.innerHTML = ads[result].desc;
div.style.color = ads[result].color;

function changeDocumentTitle( title ){
    document.title = title + '...';
}
changeDocumentTitle(ads[result].title);

