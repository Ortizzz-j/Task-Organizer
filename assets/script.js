// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.






$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentTime = dayjs().hour()
    var currentDay = dayjs().format('MMMM D, YYYY h:mm A');
    $('#currentDay').text(currentDay);
  
    /**
     * create an array from 0 to 23
     * for loop inside and get each number
     * call the save inside the loop
     * use the iindex(0-23) to add to a document.getElementById method
     * that adds to the string 'hour-'
     * then find the VALUE of textarea with jquery using .val() 
     * 
     * 
     * example of local storage
     * taskInp:[
     *  {"hour-0":"I need to go to sleep"},
     *  {"hour-4":"Wake up"}
     * ]
     * 
     */
  
  
    var timeBlocks = $('.time-block');
  
    timeBlocks.each(function(){
      var blockId = parseInt(this.id.split('-')[1]);
      console.log(blockId);
      if(blockId < currentTime){
        $(this).addClass('past');
      } else if(blockId === currentTime){
        $(this).addClass('present');
      } else{
        $(this).addClass('future');
      }
    })
    //
    /* TODO: 
      1. Add code to get any user input that was saved in localStorage and set it
      2. Find what the user types in my input.
      3. To use localStorage.setItem to save what the user has written.
        a. Local storage set item needs a KEY and a VALUE
        b. we need to create KEY
          I. KEY needs to be different for each time
        d. we need to get the VALUE
          I. VALUE is the text inside the input
          II. use JS to get the VALUE of input
          
      4. Use localStorage.getItem to display what is in localStorage.
    */
  
      
  
    $('.saveBtn').on('click', function(){
      
      var txtAreaInput = localStorage.getItem(hrId) || [];
  
      if(txtAreaInput){
        $('textarea').text(txtAreaInput);
      }
      var userInput = $('.description').val();
  
      var hrId = $('#hour');
  
      txtAreaInput.push(userInput);
      localStorage.setItem(hrId, JSON.stringify(userInput));
      window.location.reload();
    })
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  });
  
  
  