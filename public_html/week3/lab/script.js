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

// 
var ads = [];
             
                         
ads.push({ 
    "title": 'this is cool1', 
    "desc" : 'this is cool1 because I can use it' 
});
ads.push({ 
    "title": 'this is cool2', 
    "desc" : 'this is cool2 because I can use it' 
});
ads.push({ 
    "title": 'this is cool1', 
    "desc" : 'this is cool1 because I can use it' 
});
ads.push({ 
    "title": 'this is cool2', 
    "desc" : 'this is cool2 because I can use it' 
});

ads.push({ 
    "title": 'this is cool2', 
    "desc" : 'this is cool2 because I can use it' 
});